import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

import { DbModule } from '@libs/db';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      imports: [DbModule],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller);
  });
});
