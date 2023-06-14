import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RequestWithAuth } from './types';

@Injectable()
export class ControllerAuthGuard implements CanActivate {
  private readonly logger = new Logger(ControllerAuthGuard.name);
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request: RequestWithAuth = context.switchToHttp().getRequest();
    this.logger.debug(`Cheking for auth token on request body`, request.body);

    try {
      const { accessToken } = request.body;
      const payload = this.jwtService.verify(accessToken);
      request.userID = payload.sub;
      request.pollID = payload.pollID;
      request.name = payload.name;

      return true;
    } catch (err) {
      this.logger.error(`Invalid authorization token`, err);
      throw new ForbiddenException('Invalid authorization token');
    }
  }
}
