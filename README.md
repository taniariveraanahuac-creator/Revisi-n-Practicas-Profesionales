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

## Activar la coordinación en tu navegador

En la versión de GitHub la pestaña **Coordinación** y **Seguimiento** están ocultas. Para activarlas en tu computadora abre una vez:

```
https://TU-USUARIO.github.io/evaluacion-practicas-ade/#coordinacion
```

Desde ese momento ese navegador muestra el panel de control y el interruptor **Editar**. No compartas esa liga con el jurado.

## Reporte general con las evaluaciones de todos

La pestaña **Reporte general** (solo coordinación) reúne en un solo lugar las evaluaciones firmadas por todo el jurado y los invitados, desde cualquier celular o computadora, y saca el **promedio por alumno** con quienes ya firmaron (no hace falta que evalúen todos). Desde ahí se descarga un solo reporte en Word, se exporta a Excel o se imprime.

Las evaluaciones se guardan en una Hoja de Google. Solo quien tenga la **clave de coordinación** puede leerlas.

### Configuración (una sola vez, 10 minutos)

1. Crea una Hoja de Google nueva, por ejemplo `Evaluaciones Prácticas Profesionales`.
2. En la hoja entra a **Extensiones → Apps Script**.
3. Borra lo que aparece y pega el contenido de `apps-script/Code.gs`.
4. En la línea `const CLAVE_COORDINACION = 'CAMBIA-ESTA-CLAVE';` escribe una clave que solo tú conozcas. Guarda.
5. **Implementar → Nueva implementación →** tipo **Aplicación web**. Ejecutar como: **Yo**. Quién tiene acceso: **Cualquier persona**. Autoriza los permisos.
6. Copia la URL que termina en `/exec`.
7. En `index.html` busca `var CLOUD_URL='';` y pega la URL entre las comillas. Guarda el archivo en GitHub.
8. Abre la página con `#coordinacion`, entra a **Reporte general**, escribe tu clave y pulsa **Guardar clave**.

Desde ese momento cada evaluación firmada se envía sola al registro general y el reporte se actualiza cada 30 segundos.

Sin la URL configurada la página sigue funcionando como antes: cada evaluador guarda sus calificaciones en su propio navegador.

## QR para invitados evaluadores

En **Accesos** hay un **QR general para invitados evaluadores**: cualquier invitado lo escanea, escribe su nombre y cargo, elige al alumno y firma. Si varios invitados evalúan al mismo alumno, todos cuentan en el promedio. También siguen los QR por practicante para el representante de cada empresa.

## Quién ve qué

- **Evaluadores e invitados:** Programa, Evaluar, Rúbrica, Cartas y Accesos. Solo ven sus propias calificaciones.
- **Coordinación** (navegador activado con `#coordinacion`): además Resultados, Reportes, Reporte general, Seguimiento y Coordinación.

## Requisitos

Navegador actualizado (Chrome, Edge, Safari o Firefox). La página carga tipografías de Google Fonts y la librería JSZip desde cdnjs; los códigos QR se generan dentro de la página sin conexión externa.
