/**
 * Registro general de evaluaciones · Prácticas Profesionales ADE
 * Universidad Anáhuac Cancún · Coordinación: Mtra. Tania Rivera Lozano
 *
 * Guarda en una Hoja de Google cada evaluación firmada por el jurado y los
 * invitados, para que la coordinación vea todas y obtenga el promedio por alumno.
 *
 * 1. Cambia CLAVE_COORDINACION por una clave que solo tú conozcas.
 * 2. Implementar → Nueva implementación → Aplicación web
 *    Ejecutar como: Yo · Quién tiene acceso: Cualquier persona.
 * 3. Copia la URL que termina en /exec.
 */
const CLAVE_COORDINACION = 'CAMBIA-ESTA-CLAVE';
const HOJA = 'Evaluaciones';
const COLS = ['id','w','evaluador','sid','practicante','total','lv','note','gn','gc','ge','signedAt','folio','updatedAt'];

function hoja_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(HOJA);
  if (!sh) {
    sh = ss.insertSheet(HOJA);
    sh.appendRow(COLS);
    sh.setFrozenRows(1);
    sh.getRange('A:Z').setNumberFormat('@'); // todo como texto: evita que Sheets cambie fechas y folios
  }
  return sh;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

// Lectura: solo con la clave de coordinación
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action !== 'list') return json_({ ok: true, msg: 'Registro de evaluaciones activo' });
  if (p.key !== CLAVE_COORDINACION) return json_({ ok: false, error: 'Clave de coordinación incorrecta' });
  const v = hoja_().getDataRange().getValues();
  const h = v.shift();
  const data = v.filter(r => r[0]).map(r => {
    const o = {};
    h.forEach((k, i) => o[k] = r[i] instanceof Date ? r[i].toISOString() : r[i]);
    try { o.lv = JSON.parse(o.lv || '{}'); } catch (x) { o.lv = {}; }
    o.total = Number(o.total);
    return o;
  });
  return json_({ ok: true, data: data });
}

// Escritura: cada evaluador envía su evaluación al firmar o al retirar su firma
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const b = JSON.parse(e.postData.contents);
    const r = b.rec || {};
    const sh = hoja_();
    const v = sh.getDataRange().getValues();
    if (b.action === 'sign') {
      const row = COLS.map(k => k === 'lv' ? JSON.stringify(r.lv || {}) : k === 'updatedAt' ? new Date().toISOString() : String(r[k] == null ? '' : r[k]));
      const i = v.findIndex((x, j) => j > 0 && x[0] === r.id);
      if (i > 0) sh.getRange(i + 1, 1, 1, COLS.length).setValues([row]);
      else sh.appendRow(row);
    } else if (b.action === 'unsign') {
      for (let j = v.length - 1; j > 0; j--) if (v[j][0] === r.id) sh.deleteRow(j + 1);
    } else if (b.action === 'reopen') {
      if (b.key !== CLAVE_COORDINACION) return json_({ ok: false, error: 'Clave de coordinación incorrecta' });
      for (let j = v.length - 1; j > 0; j--) if (v[j][1] === r.w && v[j][3] === r.sid) sh.deleteRow(j + 1);
    }
    return json_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}
