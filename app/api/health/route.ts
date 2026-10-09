export async function GET() {
  return Response.json({
    status: "ok",
    app: "Farmacia S.A. ERP",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
}
