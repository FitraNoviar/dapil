import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { stringify } from 'querystring';
import { ProvDocument } from 'src/provs/schemas/prov.schema';
import { Dapil } from 'src/schemas/dapil.schema';
import { DapilService } from './dapil.service';
import { CreateDapilDto } from './dto/create-dapil.dto';
import { UpdateDapilDto } from './dto/update-dapil.dto';

@Controller('dapil')
export class DapilController {
  constructor(private readonly dapilService: DapilService) {}

  @Post()
  create(@Body() createDapilDto: CreateDapilDto) {
    return this.dapilService.create(createDapilDto);
  }

  @Get('/list')
  findAll() {
    return this.dapilService.findAll();
  }

  // @Get()
  // findAll(
  //   @Query('PROVINSI') PROVINSI: string,
  //   @Query('DAPIL') DAPIL: string,
  //   @Query('ALOKASI_KURSI') ALOKASI_KURSI: string
  //   ){return this.dapilService.findAll(PROVINSI, DAPIL, ALOKASI_KURSI);}

  @Get('/provinsi/:PROVINSI')
  findOne(@Param('PROVINSI') PROVINSI: string) {
    return this.dapilService.findProv(PROVINSI);
  }
  @Get('/provinsi/:PROVINSI/:DAPIL')
  findProvDapil(@Param('PROVINSI') PROVINSI: string, @Param('DAPIL') DAPIL: string) {
    return this.dapilService.findProvDapil(PROVINSI,DAPIL);
  }

  @Get('/dapil/:DAPIL')
  findDapil(@Param('DAPIL') DAPIL: string) {
    return this.dapilService.findDapil(DAPIL);
  }


  @Put('/provinsi/:PROVINSI')
  update(@Param('PROVINSI') PROVINSI: string, @Body() updateDapilDto: UpdateDapilDto) {
    return this.dapilService.update(PROVINSI, updateDapilDto);
  }

  @Delete('/provinsi/:PROVINSI')
  remove(@Param('PROVINSI') PROVINSI: string) {
    return this.dapilService.remove(PROVINSI);
  }
}
