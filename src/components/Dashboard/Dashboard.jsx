import styles from './Dashboard.module.css'
import { Summary } from '../Summary/Summary'
import { TransactionTable } from '../TransactionTable/TransactionTable'

export function Dashboard() {
  return (
    <div className={styles.container}>
      <Summary/>
      <TransactionTable/>
    </div>
  )
}