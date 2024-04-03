import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthGuard } from 'src/auth/auth.guard'
import { Roles } from 'src/roles/roles.decorator'
import { UsersService } from './users.service'
import { RolesGuard } from 'src/roles/roles.guard'
import { UserStore } from './request/user.store.request'
import { UserUpdate } from './request/user.update.request'

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
  async customers(@Res() res: Response): Promise<Response> {
    return res.send({
      data: await this.usersService.costumers(),
    })
  }

  @Get('/:id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(['superadmin'])
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get User By Id' })
  async show(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    return res.status(200).json({
      item: await this.usersService.show(parseInt(id)),
    })
  }

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(['superadmin'])
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Store User' })
  async store(
    @Body() body: UserStore,
    @Res() res: Response,
  ): Promise<Response> {
    return res.status(201).json({
      item: await this.usersService.store(body),
      message: 'new user created',
    })
  }

  @Put('/:id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(['superadmin'])
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update User By Id' })
  async update(
    @Param('id') id: string,
    @Body() body: UserUpdate,
    @Res() res: Response,
  ) {
    return res.status(201).json({
      item: await this.usersService.update({ id: parseInt(id) }, body),
      message: 'User updated',
    })
  }

  @Delete('/:id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(['superadmin'])
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete User By Id' })
  async destroy(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<Response> {
    this.usersService.delete({ id: parseInt(id) })

    return res.status(200).json({
      message: 'User deleted',
    })
  }
}
