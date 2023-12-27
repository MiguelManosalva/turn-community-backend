import { ApiProperty } from '@nestjs/swagger';

export class UpdateNotificationDto {
  @ApiProperty({
    description: 'El mensaje de la notificación',
    example: 'Recordatorio de turno para cerrar el portón.',
    type: String,
  })
  mensaje?: string;

  @ApiProperty({
    description: 'Fecha y hora de envío o programación de la notificación',
    example: '2023-01-01T10:00:00.000Z',
    type: Date,
  })
  fechaHora?: Date;

  @ApiProperty({
    description: 'Estado de la notificación',
    example: 'pendiente',
    enum: ['enviado', 'pendiente'],
  })
  estado?: 'enviado' | 'pendiente';

  @ApiProperty({
    description: 'Identificador del usuario destinatario de la notificación',
    example: 1,
    type: Number,
  })
  usuarioId: number;
}
