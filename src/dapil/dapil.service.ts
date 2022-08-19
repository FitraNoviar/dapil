import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dapil, DapilDocument } from 'src/schemas/dapil.schema';
import { CreateDapilDto } from './dto/create-dapil.dto';
import { UpdateDapilDto } from './dto/update-dapil.dto';

@Injectable()
export class DapilService {
  constructor(@InjectModel(Dapil.name) private dapilModel: Model<DapilDocument>) {}
  async create(createDapilDto: CreateDapilDto): Promise<Dapil> {
    return new this.dapilModel(createDapilDto).save();
  }

  async findAll() {
    console.log("asdaad")
    return this.dapilModel.find();
  }

  // async findAll(PROVINSI: string, DAPIL: string, ALOKASI_KURSI: string): Promise<any[]> {
  //   const dapilModel = this.dapilModel.filter((dapil) => {
  //     let isMatch = true;
  //     if (PROVINSI && dapil.PROVINSI != PROVINSI) {
  //       isMatch = false;
  //     }
  //     if (DAPIL && dapil.DAPIL != DAPIL) {
  //       isMatch = false;
  //     }
  //     return isMatch;
  //   });
  //   return this.dapilModel.find();
  // }


  async findProv(PROVINSI: string) {
    return this.dapilModel.find({PROVINSI:PROVINSI});
    
  }
  async findProvDapil(PROVINSI: string, DAPIL: string) {
   
    return this.dapilModel.find({PROVINSI:PROVINSI,DAPIL:DAPIL})

  }
  async findDapil(DAPIL: string) {
    return this.dapilModel.find({DAPIL:DAPIL});
    
  }

  async update(PROVINSI: string, updateDapilDto: UpdateDapilDto) {
    return this.dapilModel.updateOne({PROVINSI}, {$set: {...updateDapilDto}});
  }

  async remove(PROVINSI: string) {
    return this.dapilModel.deleteOne({PROVINSI});
  }
}
