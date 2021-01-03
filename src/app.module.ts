import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

//Module can be split by feature
@Module({
  imports: [ProductsModule],
  controllers: [AppController], //handle incoming request + output response
  providers: [AppService], // Extra services/classes that can be injected into controller or other providers to provide service. EG: A connection to database.
})
export class AppModule {}
