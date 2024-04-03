import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { AuthController } from './auth.controller'
import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.APP_KEY,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    PrismaService,
    AuthService,
    { provide: 'AUTH_GUARD', useClass: AuthGuard },
  ],
})
export class AuthModule {}
