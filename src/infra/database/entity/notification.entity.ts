import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('Notificaciones')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  mensaje: string;

  @Column({ type: 'datetime' })
  fechaHora: Date;

  @Column({ type: 'enum', enum: ['enviado', 'pendiente'] })
  estado: string;

  @ManyToOne(() => User, (user) => user.id)
  usuario: User;
}
