import { Controller, Get, Param, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/qp')
  getGreetingsForName(@Query('name') name: string) {
    return 'Say hello to ' + name;
  }
}
