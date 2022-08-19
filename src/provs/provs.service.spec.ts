import { Test, TestingModule } from '@nestjs/testing';
import { ProvsService } from './provs.service';

describe('ProvsService', () => {
  let service: ProvsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvsService],
    }).compile();

    service = module.get<ProvsService>(ProvsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
