import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { House } from './house.entity';

@Entity('Usuarios')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255, unique: true })
  correoElectronico: string;

  @Column({ length: 255 })
  contrasena: string;

  @Column({ type: 'enum', enum: ['vecino', 'administrador'] })
  rol: string;

  @Column({ length: 20 })
  telefonoMovil: string;

  @ManyToOne(() => House, house => house.usuarios)
  casa: House;
}
