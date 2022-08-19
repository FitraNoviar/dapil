import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProvsService } from './provs.service';
import { CreateProvDto } from './dto/create-prov.dto';
import { UpdateProvDto } from './dto/update-prov.dto';
import { ProvDocument } from './schemas/prov.schema';

@Controller('provs')
export class ProvsController {
  constructor(private readonly provsService: ProvsService) {}

  @Post()
  create(@Body() createProvDto: CreateProvDto) {
    return this.provsService.create(createProvDto);
  }

  @Get()
  findAll() {
    return this.provsService.findAll();
  }

  @Get(':nama_dapil')
  findOne(@Param('nama_dapil') nama_dapil: string) {
    return this.provsService.find(nama_dapil);
  }

  

  // @Get(':nomer_urut')
  // findnourut(@Param('nomer_urut') nomer_urut: string): Promise<ProvDocument> {
  //   return this.provsService.findOne(nomer_urut);
  // }

  @Put(':nama_dapil')
  update(@Param('nama_dapil') nama_dapil: string, @Body() updateProvDto: UpdateProvDto) {
    return this.provsService.update(nama_dapil, updateProvDto);
  }

  @Delete(':nama_dapil')
  remove(@Param('nama_dapil') nama_dapil: string) {
    return this.provsService.remove(nama_dapil);
  }
}
