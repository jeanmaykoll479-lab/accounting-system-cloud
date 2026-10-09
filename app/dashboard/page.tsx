"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  sub: string;
  email: string;
  name: string;
  picture?: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        } else {
          router.push("/api/auth/login");
        }
      } catch (error) {
        console.error(error);
        router.push("/api/auth/login");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [router]);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="sidebar">
          <h2>Cargando...</h2>
        </div>
        <div className="content">
          <div className="topbar">Cargando...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Farmacia S.A.</h2>
        <nav>
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/dashboard/contabilidad">Contabilidad</a>
            </li>
            <li>
              <a href="/dashboard/compras">Compras</a>
            </li>
            <li>
              <a href="/dashboard/ventas">Ventas</a>
            </li>
            <li>
              <a href="/dashboard/caja">Caja</a>
            </li>
            <li>
              <a href="/dashboard/presupuestos">Presupuestos</a>
            </li>
            <li>
              <a href="/dashboard/predicciones">Predicciones</a>
            </li>
            <li>
              <a href="/dashboard/nomina">Nómina</a>
            </li>
            <li>
              <a href="/dashboard/reportes">Reportes</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <div className="topbar">
          <h1>Dashboard</h1>
          <div className="topbar-right">
            <span>{user.name}</span>
            <a href="/api/auth/logout" className="btn btn-secondary">
              Cerrar sesión
            </a>
          </div>
        </div>

        <div className="main">
          <div className="grid">
            <div className="kpi-card">
              <div className="label">Total Ingresos</div>
              <div className="value">$0.00</div>
              <div className="label">Este mes</div>
            </div>
            <div className="kpi-card">
              <div className="label">Total Egresos</div>
              <div className="value">$0.00</div>
              <div className="label">Este mes</div>
            </div>
            <div className="kpi-card">
              <div className="label">Saldo Caja</div>
              <div className="value">$0.00</div>
              <div className="label">Hoy</div>
            </div>
            <div className="kpi-card">
              <div className="label">Cuentas por Cobrar</div>
              <div className="value">$0.00</div>
              <div className="label">Pendiente</div>
            </div>
          </div>

          <div className="card">
            <h3>Bienvenido al ERP de Farmacia S.A.</h3>
            <p>
              Sistema de contabilidad, finanzas, presupuestos y predicciones
              con soporte completo para la gestión empresarial.
            </p>
            <p style={{ marginTop: "15px" }}>
              <strong>Selecciona un módulo del menú lateral para comenzar.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
