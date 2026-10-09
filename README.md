# Farmacia S.A. - ERP en la nube

Sistema ERP para farmacia con estructura tipo Odoo, enfocado en gestión financiera y operativa.

## Incluye

- Login con roles y permisos
- Dashboard principal estilo Odoo
- Compras y órdenes de compra
- Ventas y facturas
- Pagos a proveedores
- Nómina
- Caja chica y caja general
- Arqueo de caja
- Aprobaciones y flujo de validación por administrador
- Base para conectarse a Google Sheets o base de datos online

## Roles disponibles

- Administrador: ve todo, autoriza y confirma
- Negocio: registra compras, ventas, ingresos, egresos y arqueo
- Compras: gestiona proveedores y órdenes
- Ventas: facturas y cobros
- Nómina: pagos de personal
- Tesorero: gestión de caja general y pagos
- Cajero: caja chica y arqueos

## Credenciales demo

- admin@farmaciasa.com / admin123
- negocio@farmaciasa.com / negocio123
- compras@farmaciasa.com / compras123
- ventas@farmaciasa.com / ventas123
- nomina@farmaciasa.com / nomina123
- tesorero@farmaciasa.com / tesorero123
- cajero@farmaciasa.com / cajero123

## Ejecutar localmente

```bash
npm install
npm run dev
```

Luego abre:

```text
http://localhost:3000
```

## Nota

Esta es una base MVP funcional para continuar con:
- autenticación real
- conexión con Google Sheets
- formularios completos de compras/ventas
- aprobación por permisos reales
- módulos de inventario y cuentas contables
- despliegue en la nube

## Siguiente paso recomendado

Subir a Vercel o Railway y conectar con Google Sheets o Supabase para dejarla online en producción.
