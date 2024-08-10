import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { UserRole } from 'src/shares/enums/user.enum';

export class CreateUserDto {
  @ApiProperty({
    required: false,
    example: 'user@gmail.com',
  })
  @IsNotEmpty()
  readonly email: string;


  @ApiProperty({
    required: true,
    example: '0334595565',
  })
  @IsNotEmpty()
  readonly phone: string;


  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly role: UserRole[];

  @ApiProperty({
    required: true,
    example: '123456789',
  })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    required: true,
    example: 'john wick',
  })
  @IsNotEmpty()
  readonly name: string;
  


}
