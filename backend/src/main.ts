import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Multi Perspective API Documentation')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api', app, document)

  app.useGlobalPipes(new ValidationPipe())

  app.enableCors({
    origin: function (origin, callback) {
      if (
        (process.env.CORS_ORIGIN.split(',') as string[]).indexOf(origin) !==
          -1 ||
        !origin
      ) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
  })

  await app.listen(3333)
}
bootstrap()
