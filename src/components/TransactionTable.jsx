import { useEffect, useState } from 'react'
import { api } from '../services/api'
import styles from './TransactionTable.module.css'

export function TransactionTable() {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    api.get('transactions')
      .then(response  => setTransactions(response.data.transactions))
  }, [])
  
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
              <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
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