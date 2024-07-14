import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { Task } from "./components/Task"

import styles from './App.module.css'
import "./global.css"

export function App() {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Adicione uma nova tarefa"/>
          <Button />

        </div>
        <div>
          <div className={styles.taskTotals}>
            <p>Tarefas criadas <span>5</span></p>
            <p>Concluídas <span>2 de 5</span></p>
          </div>

          <div className={styles.taskList}>
            <Task isChecked={false}/>
            <Task isChecked={false} />
            <Task isChecked={false}/>
            <Task isChecked={true}/>
            <Task isChecked={true}/>
          </div>

        </div>
      </div>
    </div>
  )
}

