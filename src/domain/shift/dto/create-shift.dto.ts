export class CreateShiftDto {
  fechaInicio: Date;
  fechaFin: Date;
  casaId: number;
  estado: 'asignado' | 'completado' | 'pendiente';
}
