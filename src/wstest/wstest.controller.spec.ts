import { Test, TestingModule } from '@nestjs/testing';
import { WstestController } from './wstest.controller';

describe('WstestController', () => {
  let controller: WstestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WstestController],
    }).compile();

    controller = module.get<WstestController>(WstestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
