import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('blog')
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    content: string;
}