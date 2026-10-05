// CommonJS 모듈 — 문서나 오래된 강의에서 자주 보는 모양입니다
const TAX_RATE = 0.1;
function formatPrice(n) { return `${n.toLocaleString('ko-KR')}원`; }
function withTax(n) { return Math.round(n * (1 + TAX_RATE)); }

module.exports = { TAX_RATE, formatPrice, withTax };
