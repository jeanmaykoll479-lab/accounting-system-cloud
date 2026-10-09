import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farmacia S.A. - ERP Contable",
  description: "Sistema ERP de contabilidad, finanzas y presupuestos para Farmacia S.A. en Córdoba, Nicaragua",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
