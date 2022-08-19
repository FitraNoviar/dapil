import { PartialType } from '@nestjs/mapped-types';
import { CreateDapilDto } from './create-dapil.dto';

export class UpdateDapilDto extends PartialType(CreateDapilDto) {}
