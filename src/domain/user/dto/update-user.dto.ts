export class UpdateUserDto {
  nombre?: string;
  correoElectronico?: string;
  contrasena?: string;
  rol?: 'vecino' | 'administrador';
  telefonoMovil?: string;
  casaId?: number;
}
