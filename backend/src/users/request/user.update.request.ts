import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator'

export class UserUpdate {
  @ApiProperty({ example: 'Bambang' })
  @IsOptional()
  @IsString()
  name: string

  @ApiProperty({ example: 'bambang@gmail.com' })
  @IsEmail()
  @IsOptional()
  email: string

  @ApiProperty({ example: 'Pekalongan' })
  @IsOptional()
  @IsString()
  city: string

  @ApiProperty({ example: '12345678' })
  @IsOptional()
  password: string

  @ApiProperty({ enum: ['superadmin', 'customer'], example: 'customer' })
  @IsOptional()
  @IsString()
  @IsEnum(['superadmin', 'customer'])
  role: string
}
