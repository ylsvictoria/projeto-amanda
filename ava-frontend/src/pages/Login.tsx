import { useState, ChangeEvent, FormEvent } from "react";
import "../styles/login-style.css";
import logo from "../assets/ava-logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login simulado com sucesso!");
    }, 1000);
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={logo} alt="AVA" className="auth-logo" />

        <h1 className="auth-title">Entrar</h1>
        <p className="auth-subtitle">
          Continue seus estudos com a AVA
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Fazendo login no AVA..." : "Entrar"}
          </button>
        </form>

        <p className="auth-footer">
          Não tem conta? <Link to="/signup">Criar conta</Link>
        </p>
      </div>
    </div>
  );
}
