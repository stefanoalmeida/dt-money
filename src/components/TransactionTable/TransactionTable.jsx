import { useTransactions } from '../../hooks/useTransactions'
import styles from './TransactionTable.module.css'

export function TransactionTable() {

  const {transactions} = useTransactions()
  
  return (

    <div className={styles.content}>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type === 'deposit' ? 'income' : 'outcome'}>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}