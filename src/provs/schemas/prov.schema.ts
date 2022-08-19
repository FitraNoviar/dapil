import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProvDocument = Prov & Document;

@Schema()
export class Prov {
  @Prop()
  nama_dapil: string;

  @Prop()
  nomor_urut: string;

  @Prop()
  nama_partai: string;
  
  @Prop()
  perolehan_kursi: string;
}

export const ProvSchema = SchemaFactory.createForClass(Prov);