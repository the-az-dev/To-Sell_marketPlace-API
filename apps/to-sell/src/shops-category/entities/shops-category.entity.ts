import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../categories/entities/category.entity";
import { Shop } from "../../shops/entities/shop.entity";

@Entity({name: 'shopsCategory'})
export class ShopsCategory {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Shop, (shop) => shop.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'shopId' })
  shopId: number;
  @ManyToOne(() => Category, (category) => category.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'categoryId' })
  categoryId: number;
}
