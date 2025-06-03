import styles from "./App.module.css"
import { Form } from "./components/Form"

function App() {
 

  return (
    <>
      <h1 className={styles.title}>Weather Search</h1>
      <div className={styles.container}>
        <Form/>
      </div>
    </>
  )
}

export default App
