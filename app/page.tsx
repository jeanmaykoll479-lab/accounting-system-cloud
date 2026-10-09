"use client";

import { useEffect, useMemo, useState } from "react";
import { dashboardMetrics, menuByRole, purchaseOrders, salesOrders, pettyCash, approvals } from "@/lib/mock-data";

const defaultUser = {
  id: 1,
  name: "Administrador",
  email: "admin@farmaciasa.com",
  password: "admin123",
  role: "admin",
};

export default function LoginPage() {
  const [email, setEmail] = useState(defaultUser.email);
  const [password, setPassword] = useState(defaultUser.password);
  const [role, setRole] = useState("admin");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const user = {
      ...defaultUser,
      email,
      password,
      role,
      name: role === "admin" ? "Administrador" : role === "negocio" ? "Negocio" : role === "compras" ? "Compras" : role === "ventas" ? "Ventas" : role === "nomina" ? "Nómina" : role === "tesorero" ? "Tesorero" : "Cajero",
    };

    localStorage.setItem("farmacia_user", JSON.stringify(user));
    window.location.href = "/dashboard";
  };

  return (
    <main className="login-shell">
      <section className="login-hero">
        <div className="badge">Farmacia S.A.</div>
        <h1>Sistema ERP financiero</h1>
        <p>
          Plataforma online para compras, ventas, facturas, nómina, pagos a proveedores,
          caja chica, caja general, arqueo y aprobación por el administrador.
        </p>

        <div className="role-list">
          <div className="role-item">
            <div>
              <strong>Administrador</strong>
              <span>Ve todo, autoriza y confirma</span>
            </div>
            <span>Todo</span>
          </div>
          <div className="role-item">
            <div>
              <strong>Negocio</strong>
              <span>Registra compras, ventas, ingresos y arqueo</span>
            </div>
            <span>Pendiente</span>
          </div>
          <div className="role-item">
            <div>
              <strong>Compras</strong>
              <span>Órdenes y proveedores</span>
            </div>
            <span>Autorización</span>
          </div>
        </div>
      </section>

      <section className="login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <div className="meta">Acceso por usuario y permisos del sistema</div>

          <div className="field">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@farmaciasa.com"
            />
          </div>

          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="field">
            <label htmlFor="role">Rol</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Administrador</option>
              <option value="negocio">Negocio</option>
              <option value="compras">Compras</option>
              <option value="ventas">Ventas</option>
              <option value="nomina">Nómina</option>
              <option value="tesorero">Tesorero</option>
              <option value="cajero">Cajero</option>
            </select>
          </div>

          <button className="primary-btn" type="submit">
            Entrar al sistema
          </button>
        </form>
      </section>
    </main>
  );
}
