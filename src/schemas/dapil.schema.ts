import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DapilDocument = Dapil & Document;

@Schema()
export class Dapil {
  @Prop()
  PROVINSI: string;

  @Prop()
  DAPIL: string;

  @Prop()
  ALOKASI_KURSI: string;

  @Prop()
  "KABUPATEN/KECAMATAN": string;


}

export const DapilSchema = SchemaFactory.createForClass(Dapil);