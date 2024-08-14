import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "../../shops/entities/shop.entity";

@Entity({name: 'products'})
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({length: 500})
  name: string;
  @Column({type: 'mediumtext'})
  description: string;
  @Column({type: 'decimal'})
  price: number;
  @Column({type: 'decimal'})
  quantity: number;
  @ManyToOne(() => Shop, (shop) => shop.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'shopId' })
  shopId: number;
  @Column({type: 'boolean', default: false})
  isAvailable: boolean;
  @Column()
  amount: number;
}
