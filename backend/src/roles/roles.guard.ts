import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { extractToken } from 'src/helpers'
import { Roles } from './roles.decorator'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // console.log('roles guard')
    const roles = this.reflector.get(Roles, context.getHandler())
    // console.log(roles)

    const token = context
      .switchToHttp()
      .getRequest<Request>()
      .header('Authorization')

    if (!token) return false

    const validated = await this.jwtService.verifyAsync(extractToken(token), {
      secret: process.env.APP_KEY,
    })

    const user = await this.usersService.user({
      where: { email: validated.email },
    })

    return roles.includes(user.role)
  }
}
