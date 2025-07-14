import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v7 as uuid } from 'uuid'
import { UpdateCarDto, CreateCarDto } from './dto';
import { throws } from 'assert';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Audi',
      model: 'Audi 3',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Atos',
    },
  ];

  findAll() {
    return this.cars
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    // Definicion de excepcion por id no encontrado
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto
    }
    this.cars.push(newCar)
    return newCar
  }

  update(id: string, updateCarDto: UpdateCarDto) {

    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);

    this.cars = this.cars.map(car => {

      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id }
        return carDB;
      }

      return car;
    })

    return carDB;

  }

  delete(id: string) {
    const carDB = this.findOneById(id);

    if (!carDB)
      throw new BadRequestException(`Car id is not valid`);

    this.cars = this.cars.filter(car => car.id !== id)
  }


}
