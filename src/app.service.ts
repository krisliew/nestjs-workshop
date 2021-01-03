import { Injectable } from '@nestjs/common';

@Injectable() // Specified as class below can be injected in provider/controller
// add all function etc in, as to ensure controller is cleaner
export class AppService {
  getHello(): string {
    return 'Hello World! your {domain}/test passed!'; // text/html
  }

  getHelloObj(): { name: string } {
    return { name: 'Hello World! Your test pass again! :D' };
  }
}
