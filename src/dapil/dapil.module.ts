import { Module } from '@nestjs/common';
import { DapilService } from './dapil.service';
import { DapilController } from './dapil.controller';
import { Dapil } from './entities/dapil.entity';
import { DapilSchema } from 'src/schemas/dapil.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dapil.name, schema: DapilSchema }])],
  controllers: [DapilController],
  providers: [DapilService]
})
export class DapilModule {}
