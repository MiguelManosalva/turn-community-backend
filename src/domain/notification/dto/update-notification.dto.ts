export class UpdateNotificationDto {
  mensaje?: string;
  fechaHora?: Date;
  estado?: 'enviado' | 'pendiente';
  usuarioId?: number;
}
