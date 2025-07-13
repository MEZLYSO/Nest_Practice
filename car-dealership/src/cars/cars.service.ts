import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Audi',
      model: 'Audi 3',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Toyota',
      model: 'Atos',
    },
  ];

  findAll() {
    return this.cars
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    // Definicion de excepcion por id no encontrado
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
}
