import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Shop } from "../../shops/entities/shop.entity";

@Entity({name: 'shopsReview'})
export class ShopsReview {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Shop, (shop) => shop.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'shopId' })
  shopId: number;
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
