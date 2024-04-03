import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Request, Response } from 'express'
import ResponseCustom from 'src/types/response'
import { AuthService } from './auth.service'
import { LoginRequest } from './request/auth.login.request'
import { RegisterRequest } from './request/auth.register.request'
import { UserUpdate } from 'src/users/request/user.update.request'

@Controller('auth')
@ApiTags('authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @ApiOperation({ summary: 'New User Registration' })
  async register(
    @Req() req: Request,
    @Body() body: RegisterRequest,
    @Res() res: Response,
  ): Promise<Response<ResponseCustom>> {
    if (
      req.header('Authorization') &&
      (await this.authService.isLoggedIn(req.header('Authorization')))
    ) {
      throw new HttpException('You are logged in', 403)
    }

    const user = await this.authService.register(body)

    return res.status(201).send({
      item: user,
    })
  }

  @Post('/login')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Login' })
  async login(
    @Req() req: Request<LoginRequest>,
    @Body() _: LoginRequest,
    @Res() res: Response,
  ): Promise<Response<ResponseCustom>> {
    if (
      req.header('Authorization') &&
      (await this.authService.isLoggedIn(req.header('Authorization')))
    ) {
      throw new HttpException('You are logged in', 403)
    }

    const result = await this.authService.login(req.body)
    return res.status(200).send({
      item: result,
    })
  }

  @Get('/check')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Are you logged in now?' })
  async check(
    @Req() req: Request<LoginRequest>,
    @Res() res: Response,
  ): Promise<Response> {
    return res.status(200).send({
      message: (await this.authService.isLoggedIn(req.header('Authorization')))
        ? 'You has been logged in'
        : 'You are not logged in',
    })
  }

  @Get('/user')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Check your account information?' })
  async getUser(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return res.status(200).json({
      item: await this.authService.getUserByToken(req.header('Authorization')),
    })
  }

  @Put('/user')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update your account information?' })
  async updatetUser(
    @Req() req: Request,
    @Body() body: UserUpdate,
    @Res() res: Response,
  ): Promise<Response> {
    return res.status(201).json({
      item: await this.authService.updateUserByToken(
        req.header('Authorization'),
        body,
      ),
    })
  }
}
