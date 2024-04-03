import { HttpException, Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { excludeProperty } from 'src/helpers'
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

  async all(): Promise<User[]> {
    return this.prisma.users.findMany()
  }

  async user(data: Prisma.usersFindUniqueOrThrowArgs): Promise<User> {
    return this.prisma.users.findUnique(data)
  }

  async show(id: number): Promise<User> {
    const user = await this.prisma.users.findUnique({ where: { id: id } })

    if (!user) throw new NotFoundException()

    return this.prisma.users.findUnique({ where: { id: id } })
  }

  async store(data: Prisma.usersCreateInput): Promise<User> {
    const count = await this.prisma.users.count({
      where: { email: data.email },
    })
    if (count) throw new HttpException('Your email has been registered', 400)

    const salt = await bcrypt.genSalt()
    const password = await bcrypt.hash(data.password, salt)
    return this.prisma.users.create({
      data: {
        ...data,
        password,
      },
    })
  }

  async update(
    where: Prisma.usersWhereUniqueInput,
    data: Prisma.usersUpdateInput,
  ): Promise<User> {
    if (data.email) {
      const count = await this.prisma.users.count({
        where: { email: data.email as string, AND: { NOT: { id: where.id } } },
      })
      if (count) throw new HttpException('Your email has been registered', 400)
    }

    if (data.password) {
      const salt = await bcrypt.genSalt()
      const password = await bcrypt.hash(data.password as string, salt)
      data.password = password
    }

    return this.prisma.users.update({ data, where })
  }

  async delete(where: Prisma.usersWhereUniqueInput): Promise<User> {
    // const count = await this.prisma.users.count({ where })

    // console.log(count)
    // if (!count) throw new HttpException('Your email has been registered', 400)

    return this.prisma.users
      .delete({ where })
      .then((value) => excludeProperty(value, 'password'))
      .catch((res) => {
        console.log(res)
        return res
      })
  }
}
