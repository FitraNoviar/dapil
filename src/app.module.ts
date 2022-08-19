import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DapilModule } from './dapil/dapil.module';
import { ProvsModule } from './provs/provs.module';

@Module({
  imports: [DapilModule,ProvsModule,MongooseModule.forRoot('mongodb://localhost:27017/dapil')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
