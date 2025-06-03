import styles from "./Form.module.css"
import { countries } from "../data/countries";
import { useState } from "react";
import type { SearchType } from "../types";

export const Form = () => {
    const [search, setSearch] = useState<SearchType>({
        city:"",
        country:""
    })
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">Ciudad</label>
        <input value={search.city} id="city" type="text" placeholder="Ciudad" />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Pais</label>
        <select id="country" value={search.country}>
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
