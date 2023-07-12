import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { _getMongoString } from './configs/mongo.config';

@Module({
  imports: [ProductModule, MongooseModule.forRoot(_getMongoString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
