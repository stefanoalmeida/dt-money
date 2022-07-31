import styles from './TransactionTable.module.css'

export function TransactionTable() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className={styles.income}>R$ 12.000,00</td>
            <td>Venda</td>
            <td>30/07/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className={styles.outcome}>- R$ 2800,00</td>
            <td>Moradia</td>
            <td>26/07/2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}