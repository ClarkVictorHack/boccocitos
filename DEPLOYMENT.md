# Guía de despliegue

## 1. Crear repositorio en GitHub

Crea un repositorio nuevo en GitHub, por ejemplo:

```txt
boccocitos-web
```

No hace falta inicializarlo con README porque esta carpeta ya lo incluye.

## 2. Conectar este proyecto al repositorio remoto

Cuando tengas la URL del repositorio, usa:

```bash
git remote add origin https://github.com/TU-USUARIO/boccocitos-web.git
git branch -M main
git push -u origin main
```

## 3. Activar GitHub Pages

En GitHub:

1. Entra al repositorio.
2. Abre `Settings`.
3. Entra a `Pages`.
4. Selecciona `Deploy from a branch`.
5. Elige:
   - Branch: `main`
   - Folder: `/root`
6. Guarda.

GitHub generará una URL temporal similar a:

```txt
https://TU-USUARIO.github.io/boccocitos-web/
```

## 4. Configurar dominio personalizado

Cuando confirmes el dominio exacto:

1. Crea un archivo llamado `CNAME` en la raíz.
2. Escribe dentro solo el dominio, sin `https://`.

Ejemplo:

```txt
www.boccocitos.com
```

3. En el proveedor del dominio, configura DNS para GitHub Pages.

Para dominio raíz:

```txt
A 185.199.108.153
A 185.199.109.153
A 185.199.110.153
A 185.199.111.153
```

Para `www`:

```txt
CNAME TU-USUARIO.github.io
```

## 5. Cambiar imágenes sin romper diseño

Puedes reemplazar imágenes manteniendo el mismo nombre de archivo:

- Hero: `assets/brand/hero-platter.jpg`
- Productos: `assets/products/`
- Historia/proceso: `assets/brand/`

El CSS ya controla proporciones con `aspect-ratio` y `object-fit`, así que las imágenes se ajustan automáticamente.
