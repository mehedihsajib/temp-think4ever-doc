/**
 * mPay Network – i18n Engine
 * Lightweight, zero-dependency internationalization module.
 *
 * Usage:
 *   data-i18n="key"               → sets textContent
 *   data-i18n-attr="placeholder"  → sets an attribute (combined with data-i18n)
 *   data-i18n-html="key"          → sets innerHTML (use sparingly)
 *
 * Supported locales: en, es  (add more in assets/locales/)
 */

const I18n = (() => {
  const STORAGE_KEY = 'mpay_locale';
  const FALLBACK = 'en';
  const SUPPORTED = ['en', 'es', 'fr', 'it', 'nl'];

  let _locale = FALLBACK;
  let _strings = {};

  /* ── Helpers ─────────────────────────────────────────── */

  function _detectLocale() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;

    // Match browser language prefix (e.g. "es-MX" → "es")
    const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browserLang) ? browserLang : FALLBACK;
  }

  async function _loadStrings(locale) {
    // Resolve path relative to the script itself so it works regardless of
    // which HTML file loads i18n.js.
    const base =
      document
        .querySelector('script[src*="i18n"]')
        ?.src.replace(/\/assets\/js\/i18n\.js.*$/, '') ?? '';

    const url = `${base}/assets/locales/${locale}.json`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`i18n: failed to load ${url} (${res.status})`);
    return res.json();
  }

  /* ── Resolve a dot-notation key ─────────────────────── */

  function t(key, vars = {}) {
    const parts = key.split('.');
    let val = _strings;
    for (const p of parts) {
      if (val == null) break;
      val = val[p];
    }
    if (typeof val !== 'string') {
      console.warn(`i18n: missing key "${key}" for locale "${_locale}"`);
      return key; // graceful fallback: show key itself
    }
    // Simple {{variable}} interpolation
    return val.replace(/\{\{(\w+)\}\}/g, (_, k) => vars[k] ?? `{{${k}}}`);
  }

  /* ── Apply translations to DOM ───────────────────────── */

  function _applyToDOM(root = document) {
    // Text content & Attributes
    root.querySelectorAll('[data-i18n], [data-i18n-attr]').forEach((el) => {
      const key = el.dataset.i18n;
      const attrSetting = el.dataset.i18nAttr;

      // Case 1: data-i18n="key"
      if (key) {
        const val = t(key);
        if (attrSetting && !attrSetting.includes(':')) {
          el.setAttribute(attrSetting, val);
        } else if (!attrSetting) {
          el.textContent = val;
        }
      }

      // Case 2: data-i18n-attr="attr:key"
      if (attrSetting && attrSetting.includes(':')) {
        const parts = attrSetting.split(',');
        parts.forEach(part => {
          const [attrName, attrKey] = part.split(':').map(s => s.trim());
          if (attrName && attrKey) {
            el.setAttribute(attrName, t(attrKey));
          }
        });
      }
    });

    // innerHTML (for strings that contain safe HTML like <strong>)
    root.querySelectorAll('[data-i18n-html]').forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    // Update <html lang="">
    document.documentElement.lang = _locale;

    // Update language switcher UI
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const active = btn.dataset.langBtn === _locale;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-current', active ? 'true' : 'false');
    });

    // Dispatch event so pages can hook in if needed
    document.dispatchEvent(
      new CustomEvent('i18n:applied', { detail: { locale: _locale } }),
    );
  }

  /* ── Public API ──────────────────────────────────────── */

  async function init(locale) {
    _locale = locale ?? _detectLocale();
    _strings = await _loadStrings(_locale);
    _applyToDOM();
  }

  async function setLocale(locale) {
    if (!SUPPORTED.includes(locale)) {
      console.warn(`i18n: unsupported locale "${locale}"`);
      return;
    }
    localStorage.setItem(STORAGE_KEY, locale);
    _locale = locale;
    _strings = await _loadStrings(locale);
    _applyToDOM();
  }

  function getLocale() {
    return _locale;
  }

  return { init, setLocale, getLocale, t, applyToDOM: _applyToDOM };
})();

/* ── Auto-init on DOMContentLoaded ──────────────────────── */
document.addEventListener('DOMContentLoaded', () => I18n.init());

/* ── Expose globally ─────────────────────────────────────── */
window.I18n = I18n;
