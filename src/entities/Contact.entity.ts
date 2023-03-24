import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import User from "./User.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @Column({ length: 30, nullable: false })
  name: string;

  @Column({ length: 50, nullable: false, unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;
}

export default Contact;
