# SEO (Arequipa) – checklist rápido

## 1) Configurar URL del sitio (para canonical + sitemap)

- Define `VITE_SITE_URL` con tu dominio final (sin `/` al final).
  - En local (mac/linux): `VITE_SITE_URL="https://tudominio.pe" npm run build`
  - En Vercel/Netlify: agrégalo como variable de entorno del proyecto y vuelve a desplegar.

Esto genera:
- `public/robots.txt` (con `Sitemap:` cuando la URL está disponible)
- `public/sitemap.xml`

## 1.1) Dominio en Vercel + DNS (importante)

- Agrega ambos dominios en Vercel: `galenesalud.com` y `www.galenesalud.com` y marca uno como **Primary**.
- Si marcas **Primary** `www.galenesalud.com`, usa `VITE_SITE_URL="https://www.galenesalud.com"` y redirige `galenesalud.com` → `www`.
- En tu DNS (Spaceship u otro), lo típico en Vercel es:
  - `A` con host `@` → `76.76.21.21`
  - `CNAME` con host `www` → `cname.vercel-dns.com`
- Si `www` no existe en DNS/Vercel, `www.galenesalud.com` dará error.

## 2) Google Business Profile (lo que más mueve en “psiquiatra arequipa”)

- Reclamar/crear la ficha en Google Maps (mismo nombre, dirección y teléfono que en la web).
- Categoría principal: “Psiquiatra” (y secundarias si aplica).
- Agregar fotos reales del consultorio + fachada + doctor.
- Pedir reseñas (constantes) y responderlas.

## 3) Google Search Console

- Verifica el dominio.
- Envía el `sitemap.xml`.
- Revisa “Indexación” y “Problemas de experiencia en la página”.

## 4) Contenido (para ganar intención local)

- Mantén consistencia NAP (Name/Address/Phone) en todo (web, Maps, Doctoralia, Facebook).
- Crea contenido útil (FAQ/guías) orientado a búsquedas reales:
  - “Psiquiatra en Arequipa para ansiedad”
  - “Insomnio: cuándo ir al psiquiatra”
  - “Diferencia entre psiquiatra y psicólogo”

## 5) Autoridad (E‑E‑A‑T en salud)

- Mostrar credenciales (CMP/RNE), experiencia, enlaces verificables (CMP/Doctoralia).
- Citas locales: directorios médicos, colegios profesionales, menciones (sin spam).
