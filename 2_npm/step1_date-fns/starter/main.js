// [실습-4] date-fns로 D-day 출력하기
// 먼저 레포 최상위 폴더에서 npm install을 실행하세요. (date-fns가 설치됩니다)
// TODO 1: 'date-fns'에서 format과 differenceInDays를 가져오세요.
// TODO 2: 'date-fns/locale'에서 ko를 가져오세요. (요일을 한국어로 씁니다)

const today = new Date(2026, 9, 29); // 2026년 10월 29일 (월은 0부터 셉니다)
const christmas = new Date(2026, 11, 25);

// TODO 3: today를 '2026년 10월 29일 (목)'처럼 출력하세요.
//         형식 문자열은 'yyyy년 M월 d일 (EEE)', 세 번째 아규먼트는 { locale: ko }

// TODO 4: 크리스마스까지 남은 날을 'D-57'처럼 출력하세요.
//         differenceInDays(나중 날짜, 이전 날짜)

// TODO 5: package.json의 scripts에 아래 한 줄을 추가하고 npm run dday로 실행해 보세요.
//         "dday": "node 2_npm/step1_date-fns/starter/main.js"
