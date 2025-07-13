import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  // Read
  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id)
  }

  // Create 
  @Post()
  createCar(@Body() body: any) {
    return {
      body
    }
  }

  //Update
  @Patch(':id')
  updateCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any) {
    return body
  }

  //Delete
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'Delete',
      id: id
    }
  }

}
