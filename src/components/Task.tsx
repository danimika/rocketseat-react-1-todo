import { Check } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TbTrash } from 'react-icons/tb'

interface Props {
  id: string
  content: string
  completed: boolean
  onDeleteTask: (taskId: string) => void
  onToggleCompleteTask: (taskId: string) => void
}

export function Task({id, content, completed, onToggleCompleteTask, onDeleteTask}: Props)  {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleToggleCompleteTask() {
    onToggleCompleteTask(id)
  }

  return (
    <div className={styles.task}>
      <div onClick={handleToggleCompleteTask}>
         <span 
          className={completed ? styles.checked : styles.unchecked}

        >
          {completed && <Check size={14} />}
        </span>
        <p 
          className={completed ? styles.completed : '' }
          
        >
          {content}
        </p>
      </div>
     
      <button 
        className={styles.trash}
        onClick={handleDeleteTask}
        title="Deletar task"
      >
        <TbTrash size={24}/>
      </button>
    </div>
  )
}