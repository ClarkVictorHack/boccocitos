# Script para actualizar headers de múltiples páginas
# Lista de páginas principales a actualizar
$paginas = @(
    "mini-bolones-maduro.html",
    "mini-bolones-verde.html", 
    "mini-muchin.html",
    "muchines-de-yuca.html",
    "pan-de-yuca.html",
    "torrejas.html",
    "checkout.html",
    "politica-privacidad.html",
    "politica-devoluciones.html",
    "terminos-condiciones.html"
)

Write-Host "Iniciando actualización de headers modernos..." -ForegroundColor Green

foreach ($pagina in $paginas) {
    if (Test-Path $pagina) {
        Write-Host "Procesando: $pagina" -ForegroundColor Yellow
        
        # Leer contenido del archivo
        $contenido = Get-Content $pagina -Raw -Encoding UTF8
        
        # Verificar si ya tiene el header moderno
        if ($contenido -match "backdrop-filter: blur\(10px\)") {
            Write-Host "  → Ya tiene header moderno" -ForegroundColor Cyan
            continue
        }
        
        # Hacer backup
        Copy-Item $pagina "$pagina.backup"
        
        Write-Host "  → Backup creado" -ForegroundColor Gray
        Write-Host "  → Header actualizado manualmente requerido" -ForegroundColor Magenta
    } else {
        Write-Host "No encontrado: $pagina" -ForegroundColor Red
    }
}

Write-Host "`nActualización completada. Revise cada archivo manualmente." -ForegroundColor Green
