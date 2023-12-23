export class UpdateShiftDto {
  fechaInicio?: Date;
  fechaFin?: Date;
  casaId?: number;
  estado?: 'asignado' | 'completado' | 'pendiente';
}
