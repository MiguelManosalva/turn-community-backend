import { House } from './../../../infra/database/entity/house.entity';
import { User } from './../../../infra/database/entity/user.entity';

export interface IShiftDto {
  casa: House;
  encargados?: User[];
  fechaInicio: Date;
  fechaFin: Date;
  estado: string;
}
