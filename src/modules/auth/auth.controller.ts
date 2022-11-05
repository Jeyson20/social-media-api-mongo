import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninAuthDto, SignupAuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  async signin(@Body() signinDto: SigninAuthDto) {
    return await this.authService.signin(signinDto);
  }

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() signupDto: SignupAuthDto) {
    return await this.authService.signup(signupDto);
  }
}
