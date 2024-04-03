import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class LoginRequest {
  @ApiProperty({ example: 'bambang@gmail.com', type: 'email', name: 'email' })
  @IsEmail()
  email: string

  @ApiProperty({ example: '12345678', type: 'password' })
  @IsNotEmpty()
  password: string
}
