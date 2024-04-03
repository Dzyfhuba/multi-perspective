import { ApiProperty } from '@nestjs/swagger'
import { ArrayUnique, IsEmail, IsEnum, IsNotEmpty } from 'class-validator'
import { getEmails } from '../users.model'

export class UserCreate {
  @ApiProperty({ example: 'Bambang' })
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: 'bambang@gmail.com' })
  @IsEmail()
  @ArrayUnique(async () => await getEmails(), {
    message: 'Your email has been registered',
  })
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
