import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shift } from './Shift';
import { User } from './User';

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
