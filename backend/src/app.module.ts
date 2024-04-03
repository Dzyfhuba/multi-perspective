import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma/prisma.service'
import { UsersController } from './users/users.controller'
import { UsersService } from './users/users.service'
import { AuthService } from './auth/auth.service'
import { RolesGuard } from './roles/roles.guard'

@Module({
  imports: [AuthModule],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    UsersService,
    PrismaService,
    AuthService,
    { provide: 'ROLE_GUARD', useClass: RolesGuard },
  ],
})
export class AppModule {}
