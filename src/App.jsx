import styles from './App.module.css'
import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'

import './global.css'
import { NewTransactionModal } from './components/NewTransactionModal'

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
    <div className={styles.container}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>

      <Dashboard/>


    </div>
  )
}

export default App
