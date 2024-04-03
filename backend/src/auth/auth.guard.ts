import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Request } from 'express'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('auth guard')
    const token = context
      .switchToHttp()
      .getRequest<Request>()
      .header('Authorization')

    if (!token) return false

    return await this.authService.isLoggedIn(token)
  }
}
