import { Controller, Get, Res, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthGuard } from 'src/auth/auth.guard'
import { Roles } from 'src/roles/roles.decorator'
import { UsersService } from './users.service'
import { RolesGuard } from 'src/roles/roles.guard'

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(['superadmin'])
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get All users (superadmin only)' })
  async all(@Res() res: Response): Promise<Response> {
    return res.status(200).send({
      data: await this.usersService.all(),
    })
  }

  @Get('/customers')
  @ApiOperation({ summary: 'Get all customers' })
  async customers(@Res() res: Response): Promise<object> {
    return res.send({
      data: await this.usersService.costumers(),
    })
  }
}
