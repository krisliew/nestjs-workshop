import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // localhost:3000/test
export class AppController {
  constructor(private readonly appService: AppService) {} // This is dependency injection
  // Injecting appService (a provider) in this controller with type specified "AppService" object
  // This were mentioned in app.module.ts

  @Get('hello') // localhost:3000/hello
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('objHello') // localhost:3000/objHello
  // @Header('Content-Type', 'text/html') // this is to set application/JSOn to text/html
  getHelloObj(): { name: string } {
    return this.appService.getHelloObj();
  }
}
