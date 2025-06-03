import styles from "./Form.module.css"
import { countries } from "../data/countries";
import { useState, type ChangeEvent } from "react";
import type { SearchType } from "../types";
import { Alert } from "./Alert/Alert";


type FormProps = {
  fetchWeather: any
}

export const Form = ({fetchWeather}:FormProps) => {
    const [search, setSearch] = useState<SearchType>({
        city:"",
        country:""
    })
    const [alert, setAlert] = useState("")

    const handleChange = (e:ChangeEvent<HTMLInputElement>| ChangeEvent<HTMLSelectElement>) => {
      setSearch({
        ...search,
        [e.target.name] : e.target.value
      })   
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(Object.values(search).includes("")){
        setAlert("Todos los campos son obligatorios")
        return
      }
      fetchWeather()
    } 
  return (
    <form 
    onSubmit={handleSubmit}
    className={styles.form}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad</label>
        <input 
            value={search.city} 
            id="city" 
            name="city" 
            type="text"
            onChange={handleChange}
            placeholder="Ciudad" />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Pais</label>
        <select 
        id="country" 
        name="country"
        value={search.country}
        onChange={handleChange}>
          <option value="">-- Seleccione un Pais ---</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input className={styles.submit} type="submit" value="consultar clima" />
    </form>
  );
};
