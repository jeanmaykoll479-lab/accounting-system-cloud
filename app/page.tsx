"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/api/auth/login");
  }, [router]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Farmacia S.A.</h1>
        <p style={{ textAlign: "center" }}>
          Sistema ERP de Contabilidad y Finanzas
        </p>
        <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
          Redirigiendo a inicio de sesión...
        </p>
      </div>
    </div>
  );
}
