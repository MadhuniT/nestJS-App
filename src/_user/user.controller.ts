import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/user')
export class UserController {
  @Get()
  getUser() {
    return 'I am from user';
  }

  @Get('')
  getAllReports() {
    return { user: 'madhuni' };
  }

  @Get(':id')
  getReportsById() {
    return {};
  }

  @Post()
  createReport() {
    return 'created';
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'deleted';
  }
}
