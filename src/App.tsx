import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { List } from './components/List'

import './global.css'
import { API } from './lib/axios'


export interface Tasks {
  id: number;
  name: string;
  status: 'Concluida' | 'Em aberto';
}

function App() {

  const [tasks, setTasks] = useState<Tasks[]>([]);

  const [newTask, setNewtask] = useState('');
  async function bringTasks() {

    const response = await API.get('/task');

    setTasks(response.data);
  }

  function handleCreateNewTask(event: FormEvent) {

    event.preventDefault();


  }

  function handleNewNameChangeForTask(event: ChangeEvent<HTMLInputElement>){

    event.target.setCustomValidity('')

    setNewtask(event.target.value);
  }

  console.log(tasks)

  useEffect(() => {
    bringTasks();
  }, [])
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.conteinerCreate} onSubmit={handleCreateNewTask}>
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'
            value={newTask}
            onChange={handleNewNameChangeForTask}
          />
          <button type='submit'>Criar</button>
        </form>

        <List tasks={tasks} />
      </div>
    </div>
  )
}

export default App
