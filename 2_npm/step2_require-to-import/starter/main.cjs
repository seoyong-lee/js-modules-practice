// 도전 · require를 import로 바꾸기 (지금은 CommonJS라서 확장자가 .cjs)
// TODO 1: lib/price.cjs → lib/price.js로 바꾸고 export를 쓰세요.
// TODO 2: main.cjs → main.js로 바꾸고 import를 쓰세요.
// TODO 3: node …/starter/main.js로 실행해 결과가 같은지 보세요.
const { format } = require('date-fns');
const { formatPrice, withTax } = require('./lib/price.cjs');

const day = format(new Date(2026, 9, 29), 'yyyy-MM-dd');
console.log(`${day} 주문 내역`);
console.log(`상품 금액: ${formatPrice(12000)}`);
console.log(`세금 포함: ${formatPrice(withTax(12000))}`);
