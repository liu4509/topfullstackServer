import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { DbModule } from '@libs/db';

describe('CoursesController', () => {
  let controller: CoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
      imports: [DbModule],
    }).compile();

    controller = module.get<CoursesController>(CoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
