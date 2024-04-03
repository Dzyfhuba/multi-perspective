import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator'

export class UserStore {
  @ApiProperty({ example: 'Bambang' })
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: 'bambang@gmail.com' })
  @IsEmail()
  email: string

  @ApiProperty({ example: 'Pekalongan' })
  @IsNotEmpty()
  city: string

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  password: string

  @ApiProperty({ enum: ['superadmin', 'customer'], example: 'customer' })
  @IsNotEmpty()
  @IsEnum(['superadmin', 'customer'])
  role: string
}
