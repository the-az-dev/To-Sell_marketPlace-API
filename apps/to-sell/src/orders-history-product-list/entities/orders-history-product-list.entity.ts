import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrdersHitory } from "../../orders-hitory/entities/orders-hitory.entity";
import { Product } from "../../products/entities/product.entity";

@Entity('ordersHistoryProductList')
export class OrdersHistoryProductList {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => OrdersHitory, (orderHistory) => orderHistory.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'orderHistoryId' })
  orderHistoryId: number;
  @ManyToOne(() => Product, (product) => product.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'productId' })
  productId: number;
}
