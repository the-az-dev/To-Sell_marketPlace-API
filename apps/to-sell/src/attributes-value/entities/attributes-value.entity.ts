import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Attribute } from "../../attributes/entities/attribute.entity";

@Entity({ name: 'attributesValue' })
export class AttributesValue {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Attribute, (attr) => attr.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'attributeId' })
  attributeId: number;
  @Column({length: 500})
  value: string;
}
