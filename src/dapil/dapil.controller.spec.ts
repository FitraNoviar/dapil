import { Test, TestingModule } from '@nestjs/testing';
import { DapilController } from './dapil.controller';
import { DapilService } from './dapil.service';

describe('DapilController', () => {
  let controller: DapilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DapilController],
      providers: [DapilService],
    }).compile();

    controller = module.get<DapilController>(DapilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
