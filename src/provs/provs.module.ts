import { Module } from '@nestjs/common';
import { ProvsService } from './provs.service';
import { ProvsController } from './provs.controller';
import { Prov } from './entities/prov.entity';
import { ProvSchema } from './schemas/prov.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Prov.name, schema: ProvSchema }])],
  controllers: [ProvsController,],
  providers: [ProvsService]
})
export class ProvsModule {}
