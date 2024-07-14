import { NewTask } from './components/NewTask';
import { Header } from "./components/Header"
import { Task } from "./components/Task"

import styles from './App.module.css'
import "./global.css"
import { useState } from 'react';

interface TaskInfo {
  id: string
  content: string
  completed: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TaskInfo[]>([]);

  const completedTasks = tasks.filter(task => task.completed);

  function addTask(content: string){
    const newTask = {
      id: new Date().toISOString(),
      content,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  function toggleCompleteTask(taskToToggleComplete:string) {

    const tasksNewStatus = tasks.map(task => {
      if (task.id === taskToToggleComplete) {
        task.completed = !task.completed
        
      } 
      return task
    })
    const sortedTasks = [...tasksNewStatus].sort((a, b) => {
      if (a.completed === b.completed) {
        return a.id.localeCompare(b.id)
      }
      return Number(a.completed) - Number(b.completed)
    })
    setTasks(sortedTasks)


  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }


  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <NewTask onAddTask={addTask}/>
        <div>
          <div className={styles.taskTotals}>
            <p>Tarefas criadas <span>{tasks.length}</span></p>
            <p>Concluídas 
              <span>{completedTasks.length} de {tasks.length} </span>
            </p>
          </div>

          <div className={styles.taskList}>
            {
              tasks.map(task => (
                <Task 
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  completed={task.completed}
                  onToggleCompleteTask={toggleCompleteTask}
                  onDeleteTask={deleteTask}
                  />
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

