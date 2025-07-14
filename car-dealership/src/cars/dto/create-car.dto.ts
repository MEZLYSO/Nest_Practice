import { IsString, MinLength } from "class-validator";


// DTO de car
export class CreateCarDto {

  //Validacion de los tiposde asi como las propiedades
  @IsString({ message: 'Type error' })
  readonly brand: string;

  // Podemos definir mas decoradores para validar data
  @IsString({ message: 'Type error' })
  @MinLength(3)
  readonly model: string;

}
