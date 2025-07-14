import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
    return this.carsService.create(createCarDto)
  }

  //Update
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto)
  }

  //Delete
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id)
  }

}
