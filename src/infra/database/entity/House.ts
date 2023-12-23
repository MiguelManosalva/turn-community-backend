import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './User';
import { Shift } from './Shift';

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
