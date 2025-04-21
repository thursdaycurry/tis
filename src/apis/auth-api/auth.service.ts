import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async login(loginDto) {
    return loginDto;
    // test
    // throw new UnauthorizedException('test error');

    // const { email, password } = loginDto;
    // const user = await this.validateUser(email, password);
    // if (!user) throw new UnauthorizedException('Invalid credentials');

    // const payload = { username: user.id, sub: user.userId };
    // const accessToken = this.jwtService.sign(payload);

    // return { accessToken };
  }
}
