import { Check } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TbTrash } from 'react-icons/tb'

interface Props {
  isChecked: boolean
}

export function Task({isChecked}: Props)  {

  return (
    <div className={styles.task}>
      <span className={isChecked ? styles.checked : styles.unchecked}>
        {isChecked && <Check size={14} />}
      </span>
      <p className={isChecked ? styles.completed : '' }>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <div className={styles.trash}>
        <TbTrash size={24}/>
      </div>
    </div>
  )
}