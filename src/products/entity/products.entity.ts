import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id_producto: number;
  @Column({ length: 30 })
  nombre: string;
  @Column()
  costo: number;
  @Column()
  precio: number;
  @Column()
  cantidad: number;
}
