# Configuración de Caché para BoccoCitos
# Instrucciones para diferentes tipos de servidores

## 🚀 IMPORTANTE: Configurar Headers de Caché en el Servidor

Este sitio web incluye archivos de configuración para optimizar el caché en diferentes servidores:

### 📁 Archivos de Configuración Incluidos:

1. **`.htaccess`** - Para servidores Apache
2. **`web.config`** - Para servidores IIS/Azure
3. **`nginx-cache.conf`** - Para servidores Nginx
4. **`sw.js`** - Service Worker para caché del lado del cliente

### 🔧 Instrucciones de Instalación:

#### Apache (Hosting compartido, cPanel, etc.):
1. El archivo `.htaccess` ya está configurado
2. Asegúrate de que esté en la raíz del sitio web
3. Verifica que mod_expires y mod_headers estén habilitados

#### IIS/Azure:
1. Sube el archivo `web.config` a la raíz del sitio
2. Las configuraciones se aplicarán automáticamente

#### Nginx:
1. Copia el contenido de `nginx-cache.conf`
2. Agrégalo al bloque `server {}` en tu configuración de Nginx
3. Reinicia Nginx: `sudo systemctl reload nginx`

#### Cloudflare (si usas CDN):
1. Ve a la pestaña "Speed" en tu panel de Cloudflare
2. Activa "Auto Minify" para HTML, CSS, JS
3. Configura "Browser Cache TTL" a "1 year"
4. Activa "Always Online"

### 📊 Tiempos de Caché Configurados:

| Tipo de Archivo | Tiempo de Caché | Razón |
|-----------------|-----------------|-------|
| Imágenes (PNG, JPG) | 1 año | Rara vez cambian |
| CSS y JavaScript | 1 año | Versionado con cambios |
| Fuentes (WOFF2) | 1 año | Estáticas |
| HTML | 1 hora | Contenido dinámico |
| Service Worker | Sin caché | Debe actualizarse |

### ✅ Verificación:

Después de configurar, verifica en:
1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **Developer Tools**: Network tab → verifica headers "Cache-Control"
3. **GTmetrix**: https://gtmetrix.com/

### 🎯 Resultados Esperados:

- ✅ Eliminación del warning "Usar tiempos de vida de caché eficientes"
- ✅ Ahorro de ~5574 KiB en transferencias repetidas
- ✅ Mejora significativa en puntuación de PageSpeed
- ✅ Carga más rápida para visitantes recurrentes

### 🔄 Mantenimiento:

Cuando actualices archivos CSS o JS:
1. Cambia el nombre del archivo (ej: style-v2.css)
2. O agrega un parámetro de versión (?v=2)
3. Esto forzará la descarga de la nueva versión
