import styles from './Summary.module.css'
import incomeLogo from '../assets/income.svg'
import outcomeLogo from '../assets/outcome.svg'
import totalLogo from '../assets/total.svg'

export function Summary() {
  return (
    <div className={styles.container}>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeLogo} alt="Receitas" />
        </header>

        <strong>R$ 12.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeLogo} alt="Saídas" />
        </header>

        <strong>R$ 2.800,00</strong>
      </div>
      <div className={styles.total}>
        <header>
          <p>Total</p>
          <img src={totalLogo} alt="Receitas" />
        </header>

        <strong>R$ 9.200,00</strong>
      </div>
    </div>
  )
}