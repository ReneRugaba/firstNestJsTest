import { IsNotEmpty, IsNumber, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column({ length: 255 })
  @IsNotEmpty()
  @MinLength(3, {
    message: "la taille minimal est de 3 caracteres!",
  })
  name: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  description: string;

  @Column()
  createdAt: Date;
}
