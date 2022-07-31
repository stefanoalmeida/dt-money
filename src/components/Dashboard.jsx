import styles from './Dashboard.module.css'
import { Summary } from './Summary'
import { TransactionTable } from './TransactionTable'

export function Dashboard() {
  return (
    <div className={styles.container}>
      <Summary/>
      <TransactionTable/>
    </div>
  )
}