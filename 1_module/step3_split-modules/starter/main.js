// [실습-3] 모듈 분리하기 — 출석부
// 지금은 모든 코드가 이 파일 하나에 있습니다. 실행 결과는 그대로 두고 파일만 나눠 보세요.
// TODO 1: students와 TOTAL_DAYS를 data/students.js로 옮기고 named export 하세요.
// TODO 2: formatRate를 utils/format.js로 옮기고 named export 하세요.
// TODO 3: getRate는 lib/attendance.js로 옮겨 default export 하고
//         isWarning은 같은 파일에서 named export 하세요.
// TODO 4: main.js에는 import 문과 아래 출력 코드만 남기세요.

const students = [
  { name: '김코드', attended: 18 },
  { name: '이자바', attended: 20 },
  { name: '박노드', attended: 15 },
];
const TOTAL_DAYS = 20;

function formatRate(rate) {
  return `${Math.round(rate * 100)}%`;
}

function getRate(student, totalDays) {
  return student.attended / totalDays;
}

function isWarning(rate) {
  return rate < 0.8;
}

// ---- 출력 코드 (이 아래는 고치지 않습니다)
for (const student of students) {
  const rate = getRate(student, TOTAL_DAYS);
  const note = isWarning(rate) ? ' (출석 관리 필요)' : '';
  console.log(`${student.name} ${formatRate(rate)}${note}`);
}
