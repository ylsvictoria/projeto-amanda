import { useState, ChangeEvent, FormEvent } from "react";
import "../styles/signup-style.css";
import logo from "../assets/ava-logo.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

 function handleChange(e: ChangeEvent<HTMLInputElement>) {
   setForm({
     ...form,
     [e.target.name]: e.target.value
   });
 }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("As senhas não conferem");
      return;
    }

    try {
      await api.post("/auth/signup", form);
      alert("Cadastro realizado com sucesso!");
    } catch (err) {
      alert(err.response?.data || "Erro ao cadastrar");
    }
  }

  return (
    <div className="container">
      <div className="card">
        <img src={logo} alt="AVA" className="logo" />
        <h2>Criar conta</h2>

        <form onSubmit={handleSubmit}>
          <input name="firstName" placeholder="Nome" onChange={handleChange} />
          <input name="lastName" placeholder="Sobrenome" onChange={handleChange} />
          <input name="email" type="email" placeholder="E-mail" onChange={handleChange} />
          <input name="password" type="password" placeholder="Senha" onChange={handleChange} />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirmar senha"
            onChange={handleChange}
          />
          <button type="submit">Cadastrar</button>
        </form>

        <p className="footer">
          Já tem conta? <Link to="/">Entrar</Link>
        </p>
      </div>
    </div>
  );
}
