import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('comments') // referencia da tabela no banco de dados
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column('type') => quando vazio o tipo padrão é string (varchar)
  // CTRL + SPACE mostra os tipos disponiveis.
  @Column()
  comment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Comment;
