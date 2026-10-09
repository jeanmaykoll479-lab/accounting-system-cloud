# Especificaciones técnicas del ERP Farmacia S.A.

## Stack Tecnológico
- Frontend: Next.js 14 con React 18 (App Router)
- Lenguaje: TypeScript
- Estilos: CSS vanilla optimizado
- Hosting: Vercel (serverless)
- Base de datos: PostgreSQL (por configurar)
- Autenticación: Auth0 (por configurar)

## Módulos Implementados
1. **Dashboard**: Panel ejecutivo con KPIs
2. **Contabilidad**: Plan de cuentas y asientos
3. **Compras**: Órdenes y proveedores
4. **Ventas**: Facturas y clientes
5. **Caja**: Movimientos y arqueo
6. **Presupuestos**: Planificación anual
7. **Predicciones**: Forecast financiero
8. **Nómina**: Pagos de personal
9. **Reportes**: Indicadores financieros

## Datos Demo
- 7 usuarios con diferentes roles
- Datos de ejemplo para cada módulo
- Saldos y transacciones simuladas
- Moneda: C$ (Córdoba Nicaragüense)
- País: Nicaragua

## Credenciales de Acceso
```
Admin: admin@farmaciasa.com / admin123
Negocio: negocio@farmaciasa.com / negocio123
Compras: compras@farmaciasa.com / compras123
Ventas: ventas@farmaciasa.com / ventas123
Nómina: nomina@farmaciasa.com / nomina123
Tesorero: tesorero@farmaciasa.com / tesorero123
Cajero: cajero@farmaciasa.com / cajero123
```

## Funcionalidades
- ✅ Autenticación por usuario y rol
- ✅ Dashboard ejecutivo con métricas
- ✅ Módulo de contabilidad completo
- ✅ Gestión de compras y ventas
- ✅ Control de caja
- ✅ Presupuestos y variancia
- ✅ Predicciones y forecast
- ✅ Nómina y pagos
- ✅ Reportes financieros
- ✅ Responsive y mobile-friendly
- ✅ Interfaz en español
- ✅ Localización a Nicaragua

## Próximas Fases
1. Integración con PostgreSQL real
2. Autenticación Auth0 real
3. API REST completa
4. Auditoría y logs
5. Exportación a Excel/PDF
6. Integración bancaria
7. Módulo de inventario

## Estructura de Carpetas
```
app/
├── page.tsx (Login)
├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx (Dashboard principal)
│   ├── contabilidad/
│   ├── compras/
│   ├── ventas/
│   ├── caja/
│   ├── presupuestos/
│   ├── predicciones/
│   ├── nomina/
│   └── reportes/
├── layout.tsx
├── globals.css
└── api/ (por implementar)
components/
├── dashboard-shell.tsx
lib/
├── finance-data.ts
└── utils.ts
prisma/
└── schema.prisma (estructura de DB)
```
