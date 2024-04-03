import { Controller, Get, Res } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { Response } from 'express'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/customers')
  @ApiOperation({ summary: 'Get all users' })
  async customers(@Res() res: Response): Promise<object> {
    return res.send({
      data: await this.usersService.costumers(),
    })
  }
}
