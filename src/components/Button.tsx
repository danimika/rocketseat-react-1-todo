import { PlusCircle } from '@phosphor-icons/react'
import styles from './Button.module.css'

export function Button(){
  return (
    <button className={styles.button}>
      Criar 
      <PlusCircle size={16}/>
      </button>
  )
}