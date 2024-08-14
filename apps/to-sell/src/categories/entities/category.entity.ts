import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cateogries' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({length: 150})
  name: string;
  @Column({ length: 350, nullable: true })
  hint: string;
}
