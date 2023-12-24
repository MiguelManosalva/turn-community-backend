import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shift } from './shift.entity';
import { User } from './user.entity';

@Entity('Casas')
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10, unique: true })
  numeroCasa: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @OneToMany(() => User, (user) => user.casa)
  usuarios: User[];

  @OneToMany(() => Shift, (shift) => shift.casa)
  turnos: Shift[];
}
