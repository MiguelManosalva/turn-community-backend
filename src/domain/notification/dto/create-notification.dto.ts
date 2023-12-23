export class CreateNotificationDto {
  mensaje: string;
  fechaHora: Date;
  estado: 'enviado' | 'pendiente';
  usuarioId: number;
}
