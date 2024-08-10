import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ResponseLogin } from 'src/modules/auth/dto/response-login.dto';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
@ApiBearerAuth()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}


  @Post('user/login')
  @ApiOperation({ summary: '[ User ] Login with gmail' })
  async userLogin(@Body() loginDto: LoginDto): Promise<ResponseLogin> {
    return this.authService.userLogin(loginDto);
  }
}
