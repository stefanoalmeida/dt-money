import styles from './NewTransactionModal.module.css'
import closeModal from '../assets/close.svg'

import incomeImg from '../assets/income.svg'
import outcomeImg from '../assets/outcome.svg'

import Modal from 'react-modal'
import { useState } from 'react'

export function NewTransactionModal({isOpen, onRequestClose}) {

  const [type, setType] = useState('deposit')

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
          <form className={styles.form}>
            <h2>Cadastrar transação</h2>

            <input placeholder='Titulo'/>

            <input type="number" placeholder='Valor'/>

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

            <input placeholder='Categoria'/>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </Modal>
  )
}