import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from './users.model'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async costumers(): Promise<Omit<User, 'password'>[]> {
    return (
      (
        await this.prisma.users.findMany({
          where: {
            role: 'customer',
          },
        })
      )
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ password, ...e }) => e)
    )
  }

  async create(data: Prisma.usersCreateInput): Promise<User> {
    const salt = await bcrypt.genSalt()
    const password = await bcrypt.hash(data.password, salt)
    return this.prisma.users.create({
      data: {
        ...data,
        password,
      },
    })
  }

  async user(data: Prisma.usersFindUniqueOrThrowArgs): Promise<User> {
    return this.prisma.users.findUnique(data)
  }
}
