import styles from './App.module.css'
import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Header } from './components/Header/Header'

import './styles/global.css'
import { NewTransactionModal } from './components/NewTransactionModal/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement("#root")

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <div className={styles.container}>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>

        <Dashboard/>


      </div>
    </TransactionsProvider>
  )
}

export default App
