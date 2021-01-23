import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcryptjs from 'bcryptjs'

@Entity()
export class UserSchema {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 15 })
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hash = bcryptjs.hashSync(this.password, 10)
        this.password = hash
    }
}
