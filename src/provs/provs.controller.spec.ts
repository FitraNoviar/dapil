import { Test, TestingModule } from '@nestjs/testing';
import { ProvsController } from './provs.controller';
import { ProvsService } from './provs.service';

describe('ProvsController', () => {
  let controller: ProvsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvsController],
      providers: [ProvsService],
    }).compile();

    controller = module.get<ProvsController>(ProvsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
