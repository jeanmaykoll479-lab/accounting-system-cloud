import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farmacia S.A. | ERP Cloud",
  description: "Sistema ERP para farmacia con facturas, órdenes, compras, ventas, nómina, caja chica, caja general y aprobaciones.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
