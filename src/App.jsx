import styles from './App.module.css'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'

import './global.css'

export function App() {

  return (
    <div className={styles.container}>
      <Header/>

      <main>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
