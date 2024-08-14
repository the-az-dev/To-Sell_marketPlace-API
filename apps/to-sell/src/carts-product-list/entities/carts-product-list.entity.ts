import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "../../carts/entities/cart.entity";
import { Product } from "../../products/entities/product.entity";

@Entity({ name: 'cartsProductList' })
export class CartsProductList {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Cart, (cart) => cart.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'cartId' })
  cartId: number;
  @ManyToOne(() => Product, (product) => product.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'productId' })
  productId: number;
  @Column()
  amount: number;
}
