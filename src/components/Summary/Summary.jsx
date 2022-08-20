import styles from './Summary.module.css'
import incomeLogo from '../../assets/income.svg'
import outcomeLogo from '../../assets/outcome.svg'
import totalLogo from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

export function Summary() {

  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transactions) => {
    if (transactions.type === 'deposit') {
      acc.deposits += transactions.amount
      acc.total += transactions.amount
    } else {
      acc.withdraws -= transactions.amount
      acc.total -= transactions.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  console.log(transactions)

  return (
    <div className={styles.container}>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeLogo} alt="Receitas" />
        </header>

        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeLogo} alt="Saídas" />
        </header>

        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraws)}</strong>
      </div>
      <div className={styles.total}>
        <header>
          <p>Total</p>
          <img src={totalLogo} alt="Receitas" />
        </header>

        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}</strong>
      </div>
    </div>
  )
}