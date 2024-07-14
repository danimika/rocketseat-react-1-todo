import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTask.module.css'
import { useState } from 'react'

interface Props {
  onAddTask: (content: string) => void
}

export function NewTask({onAddTask}: Props) {
  const [newTaskText, setNewTaskText] = useState('')

  const isNewTaskEmpty = newTaskText.length ===0

  const handleNewTaskTextChange = (event) => {
    setNewTaskText(event.target.value)
  }

  const handleCreateNewTask = (event) => {
    event.preventDefault()
    onAddTask(newTaskText)
    setNewTaskText('')
  }

  return (
    <form 
      className={styles.inputWrapper} 
      onSubmit={handleCreateNewTask}
    >
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskTextChange}
        value={newTaskText}
        required
        />
      <button type='submit' className={styles.button} disabled={isNewTaskEmpty}>
        Criar 
        <PlusCircle size={16}/>
      </button>
    </form>
  )
}