import { Shift } from '../../../infra/database/entity/Shift';
import { CreateShiftDto } from '../dto/create-shift.dto';
import { UpdateShiftDto } from '../dto/update-shift.dto';

export interface IShiftRepository {
  createShift(createShiftDto: CreateShiftDto): Promise<Shift>;
  updateShift(id: number, updateShiftDto: UpdateShiftDto): Promise<Shift>;
  deleteShift(id: number): Promise<void>;
  findOneShift(id: number): Promise<Shift>;
  findAllShifts(): Promise<Shift[]>;
}
