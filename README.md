# Farmacia S.A. - ERP Contable Profesional

Sistema ERP empresarial completo para Farmacia S.A. con módulos de contabilidad, finanzas, presupuestos, predicciones, nómina y análisis de flujo de caja.

## Características

### Contabilidad IFRS/GAAP
- Plan de cuentas completo
- Asientos contables con auditoría
- Mayor contable
- Balance general
- Reportes financieros profesionales

### Gestión de Transacciones
- Compras y órdenes de compra
- Facturas y ventas
- Pagos a proveedores
- Cobros de clientes
- Control de proveedores y clientes

### Caja y Finanzas
- Gestión de caja general y caja chica
- Movimientos de entrada y salida
- Arqueo de caja
- Conciliación bancaria
- Transferencias entre cajas

### Presupuestos
- Creación de presupuestos anuales
- Seguimiento de gasto real vs presupuestado
- Análisis de variancia
- Alertas de desviaciones

### Predicciones y Análisis
- Predicciones de ingresos y gastos
- Análisis de flujo de caja
- Proyecciones de cobranzas y pagos
- Machine learning para tendencias

### Nómina
- Gestión de empleados
- Cálculo de nómina
- Aportes y descuentos
- Reportes de nómina

### Aprobaciones
- Flujo de aprobación por rol
- Auditoría de cambios
- Trazabilidad completa
- Historial de aprobaciones

## Tecnología

- **Frontend**: Next.js 14 + React 18
- **Backend**: Next.js API Routes
- **Base de Datos**: PostgreSQL
- **Autenticación**: Auth0
- **Hosting**: Vercel
- **ORM**: Prisma

## Requisitos

- Node.js 18+
- PostgreSQL 12+
- Cuenta Auth0
- Cuenta Vercel (para deployment)

## Instalación Local

1. Clonar el repositorio
```bash
git clone https://github.com/usuario/farmacia-sa-erp.git
cd farmacia-sa-erp
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```bash
cp .env.example .env
```

4. Llenar las variables de entorno:
   - Auth0 credentials
   - Database URL
   - URLs de la aplicación

5. Ejecutar migraciones de base de datos
```bash
npm run db:migrate
```

6. Llenar datos iniciales (opcional)
```bash
npm run db:seed
```

7. Ejecutar en desarrollo
```bash
npm run dev
```

8. Abrir http://localhost:3000

## Roles y Permisos

- **Administrador**: Acceso total, aprobación de todas las operaciones
- **Contador**: Contabilidad, reportes, análisis
- **Gerente**: Dashboard, presupuestos, predicciones
- **Operador**: Compras, ventas, facturación
- **Cajero**: Caja chica, arqueo, movimientos
- **Auditor**: Solo lectura, revisión de auditoría

## Deployment a Vercel

1. Push a GitHub
```bash
git push origin main
```

2. Importar en Vercel
   - Ir a vercel.com/dashboard
   - New Project > Import Git Repository
   - Seleccionar el repositorio

3. Configurar variables de entorno en Vercel
   - AUTH0_SECRET
   - AUTH0_BASE_URL
   - AUTH0_ISSUER_BASE_URL
   - AUTH0_CLIENT_ID
   - AUTH0_CLIENT_SECRET
   - DATABASE_URL

4. Deploy automático

## Estructura de Base de Datos

Ver `prisma/schema.prisma` para el esquema completo que incluye:
- Usuarios y autenticación
- Plan de cuentas
- Asientos contables
- Transacciones operativas
- Caja y movimientos
- Presupuestos
- Predicciones
- Nómina
- Aprobaciones
- Auditoría

## API Endpoints

- `GET /api/health` - Estado de la aplicación
- `GET /api/auth/me` - Usuario actual
- `GET /api/auth/login` - Iniciar sesión
- `GET /api/auth/logout` - Cerrar sesión

## Documentación

Ver `/docs` para documentación API completa (por implementar)

## Soporte

Para problemas o sugerencias, crear un issue en GitHub.

## Licencia

MIT
