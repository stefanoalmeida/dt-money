import styles from './Header.module.css'

import logo from '../../assets/logo.svg'

export function Header({onOpenNewTransactionModal}) {

  return (
    <div className={styles.container}>
      <header>
        <img src={logo} alt="Logotipo" />

        <button onClick={onOpenNewTransactionModal}>Nova transação</button>
      </header>
    </div>
  )
}