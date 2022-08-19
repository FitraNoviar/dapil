import { Test, TestingModule } from '@nestjs/testing';
import { DapilService } from './dapil.service';

describe('DapilService', () => {
  let service: DapilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DapilService],
    }).compile();

    service = module.get<DapilService>(DapilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
