import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

import { CommonModule } from '@app/common';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      imports: [CommonModule],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller);
  });
});
