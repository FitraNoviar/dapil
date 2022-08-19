import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProvDto } from './dto/create-prov.dto';
import { UpdateProvDto } from './dto/update-prov.dto';
import { Prov, ProvDocument } from './schemas/prov.schema';

@Injectable()
export class ProvsService {
  constructor(@InjectModel(Prov.name) private provModel: Model<ProvDocument>) {}

  async create(createProvDto: CreateProvDto): Promise<Prov> {
    return new this.provModel(createProvDto).save();
  }

  async findAll() {
    return this.provModel.find();
  }

  async findOne(nama_dapil: string) {
    return this.provModel.findOne({nama_dapil});
  }

  // async findnourut(nomor_urut: string): Promise<ProvDocument> {
  //   return this.provModel.findOne({nomor_urut});
  // }

  async find(nama_dapil: string) {
    return this.provModel.find({nama_dapil:nama_dapil});
  }

  

  async update(nama_dapil: string, updateProvDto: UpdateProvDto) {
    return this.provModel.updateOne({nama_dapil}, {$set: {...updateProvDto}});
  }

  async remove(nama_dapil: string) {
    return this.provModel.deleteOne({nama_dapil});
  }
}
