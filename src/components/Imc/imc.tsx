"use client";

import { useState } from "react";

export default function Imc() {
  const [formData, setFormData] = useState({ weight: "", height: "" });
  const [imc, setImc] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const heightFormat = Number(formData.height) / 100;
    const totalImc = (
      Number(formData.weight) /
      (heightFormat * heightFormat)
    ).toFixed(2);
    setImc(totalImc);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="peso">Peso</label>
      <input
        onChange={handleChange}
        id="peso"
        type="number"
        name="weight"
        value={formData.weight}
      />

      <label htmlFor="altura">Altura</label>
      <input
        onChange={handleChange}
        id="altura"
        type="number"
        name="height"
        value={formData.height}
      />

      <button type="submit">Calcular</button>
      <p>IMC: {imc && imc}</p>
    </form>
  );
}
