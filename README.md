# Evaluación de Prácticas Profesionales · ADE

Plataforma de evaluación de las presentaciones finales de Prácticas Profesionales de la Licenciatura en Administración y Dirección de Empresas, Escuela Internacional de Negocios, Universidad Anáhuac Cancún.

Coordinación: Mtra. Tania Rivera Lozano.

## Contenido

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La plataforma completa en un solo archivo: programa, evaluación con rúbrica, resultados, reportes, cartas, accesos con QR, seguimiento y coordinación. |
| `.nojekyll` | Le indica a GitHub Pages que publique el archivo tal cual. |
| `README.md` | Estas instrucciones. |

## Publicar en GitHub Pages

1. Crea un repositorio nuevo, por ejemplo `evaluacion-practicas-ade`.
2. Sube `index.html`, `.nojekyll` y `README.md` a la raíz del repositorio.
3. En el repositorio entra a **Settings → Pages**.
4. En **Source** elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
5. En uno o dos minutos la página queda en `https://TU-USUARIO.github.io/evaluacion-practicas-ade/`.

## Ligas personales y códigos QR

Las ligas y los QR se generan solos con la dirección donde esté publicada la página:

- Jurado: `…/evaluacion-practicas-ade/#eval-maryfer`, `#eval-jose`, `#eval-carlos`, `#eval-xareni`, `#eval-tania`
- Invitado de empresa por practicante: `…/#eval-invitado-adriana`, `#eval-invitado-zeltzin`, etc.

Descárgalos desde la pestaña **Accesos** con **Descargar todos los QR (.zip)**.

## Activar la coordinación en tu navegador

En la versión de GitHub la pestaña **Coordinación** y **Seguimiento** están ocultas. Para activarlas en tu computadora abre una vez:

```
https://TU-USUARIO.github.io/evaluacion-practicas-ade/#coordinacion
```

Desde ese momento ese navegador muestra el panel de control y el interruptor **Editar**. No compartas esa liga con el jurado.

## Importante: dónde se guardan las evaluaciones

GitHub Pages solo publica archivos; no tiene base de datos. En esta versión:

- Cada evaluador guarda sus calificaciones y firmas **en su propio navegador**.
- Los resultados y reportes muestran lo que hay en el navegador donde se abren.
- Para reunir todo, usa el registro compartido de la versión en Claude, o captura las evaluaciones en un solo equipo cambiando de evaluador con un toque.

La versión publicada en Claude sí comparte en tiempo real las firmas de todo el jurado:
https://claude.ai/artifact/EoJQ5TLRA1Wc6mbjykGwNn

Para que la versión de GitHub también comparta las evaluaciones se puede conectar a Google Apps Script con una hoja de cálculo, igual que la plataforma del Proyecto Integrador de ADM1401.

## Requisitos

Navegador actualizado (Chrome, Edge, Safari o Firefox). La página carga tipografías de Google Fonts y la librería JSZip desde cdnjs; los códigos QR se generan dentro de la página sin conexión externa.
