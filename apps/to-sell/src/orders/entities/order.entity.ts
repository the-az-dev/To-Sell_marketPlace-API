import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { OrdersStatus } from "../../orders-status/entities/orders-status.entity";

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  userId: number;
  @Column()
  totalPrice: number;
  @ManyToOne(() => OrdersStatus, (ordersStatus) => ordersStatus.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'ordersStatusId' })
  ordersStatusId: number;
  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  date: string;
}
