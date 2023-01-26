import { Tasks } from '../App';
import styles from './List.module.css';

interface ListProps {
    tasks: Tasks[];
}



export function List({ tasks }: ListProps) {

    console.log(tasks);
    
    return (
        <ul className={styles.tasks}>
            <div className={styles.header}>
                <div className={styles.created}>
                    <p>Tarefas criadas <span>{tasks.length}</span></p>
                </div>

                <div className={styles.done}>
                    <p>Concluídas <span>0</span></p>
                </div>
            </div>
            <div className={styles.list}>
                {
                    tasks.length <= 0 ?(
                        <div className={styles.EmptyList}>
                            <span>ICON</span>
                            <p className={styles.warning}>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    ):(
                        tasks.map((item) =>{
                            return (
                                <li key={item.id} className={styles.line}>
                                    <p>{item.name}</p>
                                </li>
                            );
                        })
                    )
                }
            </div>
        </ul>
    )
}