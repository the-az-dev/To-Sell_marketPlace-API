import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../products/entities/product.entity";
import { User } from "../../user/entities/user.entity";

@Entity({name: 'productsReview'})
export class ProductsReview {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Product, (product) => product.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'productId' })
  productId: number;
  @ManyToOne(() => User, (user) => user.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  userId: number;
  @Column()
  stars: number
  @Column({length: 500})
  description: string;
  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  date: string;
}
