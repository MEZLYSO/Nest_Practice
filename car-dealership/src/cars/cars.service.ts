import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v7 as uuid } from 'uuid'

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
}
