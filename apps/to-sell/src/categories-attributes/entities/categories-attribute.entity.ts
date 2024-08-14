import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Attribute } from "../../attributes/entities/attribute.entity";
import { Category } from "../../categories/entities/category.entity";

@Entity({ name: 'categoriesAttribute' })
export class CategoriesAttribute {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Attribute, (attr) => attr.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'attributeId' })
  attributeId: number;
  @ManyToOne(() => Category, (category) => category.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'categoryId' })
  categoryId: number;
}
