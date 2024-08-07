import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    required: true,
    example: 'admin@gmail.com',
  })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    required: true,
    example: '123',
  })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    required: false,
    example: '123',
  })
  readonly phone: string;
}
