import { IsOptional, IsString, IsUUID } from "class-validator";


export class UpdateCarDto {

  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'Type error' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'Type error' })
  @IsOptional()
  readonly model?: string;

}
