import styles from "./App.module.css"
import { Form } from "./components/Form"
import useWeather from "./hooks/useWeather"

function App() {
  const {fetchWeather} = useWeather()
  return (
    <>
      <h1 className={styles.title}>Weather Search</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather}/>
      </div>
    </>
  )
}

export default App
