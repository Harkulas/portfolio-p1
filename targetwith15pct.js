// Logic:
//   target  = floor(LTP × 1.03)
//   ceiling = floor(PreClose × 1.15)   ← NEPSE upper circuit
//   final   = min(target, ceiling)
//
// Usage:  setNepsePrice()     → LTP + 3%, capped at PreClose + 15%
//         setNepsePrice(5)    → LTP + 5%, same cap

function setNepsePrice(pct = 3) {

  // ── helper: read a labeled value from the price display strip ────────
  function readLabel(labelText) {
    for (const el of document.querySelectorAll('.order__form--prodtype')) {
      const label = el.querySelector('.order__form--label');
      if (label?.textContent.trim() !== labelText) continue;
      // value is a text node (LTP) or inside a <b> tag (Pre Close)
      const b = el.querySelector('b');
      const raw = b ? b.textContent : [...el.childNodes]
        .filter(n => n.nodeType === Node.TEXT_NODE)
        .map(n => n.textContent)
        .join('');
      const val = parseFloat(raw.replace(/[^0-9.]/g, ''));
      if (!isNaN(val) && val > 0) return val;
    }
    return null;
  }

  // ── 1. Read LTP and Pre Close ─────────────────────────────────────────
  const ltp      = readLabel('LTP');
  const preClose = readLabel('Pre Close');

  if (!ltp)      { console.error('[NEPSE] LTP not found.');       return; }
  if (!preClose) { console.error('[NEPSE] Pre Close not found.');  return; }

  // ── 2. Compute target and ceiling ────────────────────────────────────
  const target  = Math.floor(ltp * (1 + pct / 100));
  const ceiling = Math.floor(preClose * 1.15);
  const final   = Math.min(target, ceiling);

  const capped  = final < target;

  // ── 3. Fill the Angular price input ──────────────────────────────────
  const input = document.querySelector("input[formcontrolname='price']");
  if (!input) { console.error('[NEPSE] Price input not found.'); return; }

  const setter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype, 'value'
  )?.set;

  setter ? setter.call(input, String(final)) : (input.value = String(final));
  ['input', 'change', 'blur'].forEach(e =>
    input.dispatchEvent(new Event(e, { bubbles: true }))
  );

  console.log(
    `[NEPSE] LTP: ${ltp}  PreClose: ${preClose}` + `\n` +
    `        target: ${target}  ceiling: ${ceiling}  →  final: ${final}` +
    (capped ? `  ⚠️ CAPPED at circuit high` : ``)
  );

  return { ltp, preClose, target, ceiling, final, capped };
}

// ── Auto-update every 5 seconds ──────────────────────────────────────
// const _t = setInterval(() => setNepsePrice(3), 5000);
// clearInterval(_t)  ← to stop
