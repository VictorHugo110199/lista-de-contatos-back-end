import { Exclude } from "class-transformer";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import Contact from "./Contact.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 30, nullable: false })
  name: string;

  @Column({ length: 50, nullable: false, unique: true })
  email: string;

  @Column({ select: false })
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  number: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Contact, (Contact) => Contact.id)
  Contact: Contact[];
}

export default User;
