# Evaluación de Prácticas Profesionales · ADE

Plataforma de evaluación de las presentaciones finales de Prácticas Profesionales de la Licenciatura en Administración y Dirección de Empresas, Escuela Internacional de Negocios, Universidad Anáhuac Cancún.

Coordinación: Mtra. Tania Rivera Lozano.

## Contenido

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La plataforma completa en un solo archivo: programa, evaluación con rúbrica, resultados, reportes, cartas, accesos con QR, seguimiento y coordinación. |
| `.nojekyll` | Le indica a GitHub Pages que publique el archivo tal cual. |
| `apps-script/Code.gs` | Código para la Hoja de Google que reúne las evaluaciones de todos (registro general). |
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

## Acceso de coordinación (solo Tania)

Abre `…/#coordinacion` y escribe la **clave de coordinación**. Ese navegador queda como coordinación: administra la plataforma (programa, practicantes, jurado, rúbrica, firmas) y ve Resultados, Reportes, **Reporte general** y Seguimiento. Para salir, en Coordinación pulsa **Salir de coordinación**.

Los evaluadores no ven esas secciones: solo Programa, Evaluar, Rúbrica, Cartas y Accesos, con sus propias calificaciones.

## Cómo llegan las evaluaciones al reporte general (sin configurar nada)

1. Cada evaluador entra con su QR, califica y firma a los alumnos que le tocó ver.
2. En **Evaluar** pulsa **Enviar a Tania**: aparece un código QR con sus evaluaciones firmadas, más botones de WhatsApp, correo y copiar enlace.
3. Tania escanea ese código con la cámara de su celular (o abre el enlace). La página se abre en su navegador de coordinación y las evaluaciones se suman solas al **Reporte general**.

El promedio de cada alumno se calcula con quienes firmaron: funciona igual si evaluaron 1, 2, 3 o todos. Si un evaluador corrige algo, vuelve a enviar y se actualiza.

## Opcional: registro automático en Google

Si prefieres que cada firma llegue sola, sin escanear códigos, conecta una Hoja de Google. Solo quien tenga la clave de Apps Script puede leer las evaluaciones.

### Configuración (una sola vez, 10 minutos)

1. Crea una Hoja de Google nueva, por ejemplo `Evaluaciones Prácticas Profesionales`.
2. En la hoja entra a **Extensiones → Apps Script**.
3. Borra lo que aparece y pega el contenido de `apps-script/Code.gs`.
4. En la línea `const CLAVE_COORDINACION = 'CAMBIA-ESTA-CLAVE';` escribe una clave que solo tú conozcas. Guarda.
5. **Implementar → Nueva implementación →** tipo **Aplicación web**. Ejecutar como: **Yo**. Quién tiene acceso: **Cualquier persona**. Autoriza los permisos.
6. Copia la URL que termina en `/exec`.
7. En `index.html` busca `var CLOUD_URL='';` y pega la URL entre las comillas. Guarda el archivo en GitHub.
8. En tu navegador de coordinación entra a **Reporte general**, escribe la clave de Apps Script y pulsa **Guardar clave**.

Desde ese momento cada evaluación firmada se envía sola al registro general y el reporte se actualiza cada 30 segundos.

Sin la URL configurada la página funciona con el envío por QR o enlace.

## QR para invitados evaluadores

En **Accesos** hay un **QR general para invitados evaluadores**: cualquier invitado lo escanea, escribe su nombre y cargo, elige al alumno y firma. Si varios invitados evalúan al mismo alumno, todos cuentan en el promedio. También siguen los QR por practicante para el representante de cada empresa.

## Quién ve qué

- **Evaluadores e invitados:** evalúan con la rúbrica, escriben su retroalimentación, firman y ven la tabla de evaluaciones del alumno con su promedio. No pueden descargar.
- **Coordinación (Tania, con clave):** administra la plataforma y descarga todo desde **Reporte general**:
  - **Excel del grupo (.xlsx)** con dos hojas: *Resumen* (calificación de cada evaluador, invitados, número de evaluaciones, promedio y nivel por alumno) y *Detalle por evaluador* (puntos por criterio, total, retroalimentación, firma y folio).
  - **Reporte individual** de cada alumno en **Word** o **PDF**: calificación por criterio de cada evaluador, nivel, retroalimentación, firmas y promedio final.
  - **Reporte general** del grupo en Word o PDF, y todos los reportes individuales en un .zip.

El promedio de cada alumno se calcula con quienes firmaron: 1, 2, 3, 4 evaluadores o el invitado, sin importar cuántos participen.
