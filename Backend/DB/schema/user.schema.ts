import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserTable {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first_name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
