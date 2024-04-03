import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'

describe('AuthGuard', () => {
  let prismaService: PrismaService
  let jwtService: JwtService
  let authService: AuthService

  beforeEach(async () => {
    prismaService = new PrismaService()
    jwtService = new JwtService()
    authService = new AuthService(prismaService, jwtService)
  })

  it('should be defined', () => {
    expect(new AuthGuard(authService)).toBeDefined()
  })
})
