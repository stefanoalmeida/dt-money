import styles from './NewTransactionModal.module.css'
import closeModal from '../../assets/close.svg'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import Modal from 'react-modal'
import { useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

export function NewTransactionModal({isOpen, onRequestClose}) {

  const {createTransaction} = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction() {
    event.preventDefault()

    await createTransaction({
      title, 
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
        >
          <img src={closeModal} alt="Fechar modal" />
        </button>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input placeholder='Titulo' value={title} onChange={event => setTitle(event.target.value)}/>

            <input type="number" placeholder='Valor' value={amount} onChange={event => setAmount(Number(event.target.value))}/>

            <div className={styles.categoryButton}>
              <button
                type='button'
                className={type === 'deposit' ? 'activeIncome' : ''}
                onClick={() => { setType('deposit') }}
              >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
              </button>

              <button
                type='button'
                className={type === 'withdraw' ? 'activeOutcome' : ''}
                onClick={() => { setType('withdraw') }}
              >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
              </button>
            </div>

            <input placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)}/>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </Modal>
  )
}