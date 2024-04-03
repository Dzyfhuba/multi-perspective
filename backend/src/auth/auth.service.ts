import { HttpException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Prisma } from '@prisma/client'
import { genSalt, hash } from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from 'src/users/users.model'
import { LoginRequest } from './request/auth.login.request'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: Prisma.usersCreateInput): Promise<User> {
    const count = await this.prisma.users.count({
      where: { email: data.email },
    })
    if (count) throw new HttpException('Your email has been registered', 400)

    const salt = await genSalt()
    const password = await hash(data.password, salt)
    return this.prisma.users.create({
      data: {
        ...data,
        password,
      },
    })
  }

  async login(data: LoginRequest): Promise<object> {
    console.log(data)
    const user = await this.prisma.users.findUnique({
      where: { email: data.email },
    })

    if (!user) throw new HttpException('Unauthorized', 403)

    return {
      // NEXT https://github.com/nestjs/jwt?tab=readme-ov-file#secret--encryption-key-options
      token: await this.jwtService.signAsync({ email: user.email }),
    }
  }

  // async logout(token: string): Promise<boolean> {
  //   const asd = await this.jwtService.
  // }

  async isLoggedIn(token: string): Promise<boolean> {
    const verified = await this.jwtService.verifyAsync(
      this.extractToken(token),
      {
        secret: process.env.APP_KEY,
      },
    )

    return !!verified
  }

  extractToken(token: string): string {
    return token.replace('Bearer ', '')
  }
}
