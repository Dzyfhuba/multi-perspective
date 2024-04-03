import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { RolesGuard } from './roles.guard'
import { UsersService } from 'src/users/users.service'
import { PrismaService } from 'src/prisma/prisma.service'

describe('RolesGuard', () => {
  it('should be defined', () => {
    expect(
      new RolesGuard(
        new JwtService(),
        new Reflector(),
        new UsersService(new PrismaService()),
      ),
    ).toBeDefined()
  })
})
