import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { House } from './house.entity';

@Entity('Turnos')
export class Shift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  fechaInicio: Date;

  @Column({ type: 'datetime' })
  fechaFin: Date;

  @Column({ type: 'enum', enum: ['asignado', 'completado', 'pendiente'] })
  estado: string;

  @ManyToOne(() => House, (house) => house.turnos)
  casa: House;
}
