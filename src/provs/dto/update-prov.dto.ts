import { PartialType } from '@nestjs/mapped-types';
import { CreateProvDto } from './create-prov.dto';

export class UpdateProvDto extends PartialType(CreateProvDto) {}
