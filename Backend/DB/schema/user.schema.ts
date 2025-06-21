import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  first_name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
