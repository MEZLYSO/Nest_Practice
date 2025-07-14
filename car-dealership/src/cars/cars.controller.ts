import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')

//Validacion a nivel de controlador usando ValidationPipe
//@UsePipes(ValidationPipe)

export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  // Read
  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }

  @Get(':id')
  // Definicion de la version de uuid ---------------------v
  getCarById(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
    return this.carsService.findOneById(id)
  }

  // Create 
  //
  // Uso de DTO (Data Transfer Object)
  //
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto
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
