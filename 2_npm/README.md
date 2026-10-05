# 챕터 2 — npm과 서드파티 모듈

npm으로 설치한 date-fns를 쓰고 CommonJS 코드를 ES 모듈로 바꿔 봅니다. 먼저 레포 최상위에서 npm install을 실행하세요.

- 수업 시간: 수업 실습 9교시
- 실행: 레포 최상위 폴더에서 `node <폴더>/starter/main.js`

| 구분 | 폴더 | 내용 | 권장 시간 |
|---|---|---|---|
| 수업 실습 | `step1_date-fns` | [실습-4] date-fns로 D-day 출력하기 | 15분 |
| 도전 | `step2_require-to-import` | 도전 · require를 import로 바꾸기 | 12분 |

## [실습-4] date-fns로 D-day 출력하기

**실습 목표:** 서드파티 모듈을 import해서 쓰고 scripts에 커맨드를 등록합니다.

- 폴더: `2_npm/step1_date-fns/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 2_npm/step1_date-fns/starter/main.js`

**예상 결과**

```
오늘: 2026년 10월 29일 (목)
크리스마스까지 D-57
```

> 풀이는 수업 시간에 슬라이드로 함께 봅니다.

## 도전 · require를 import로 바꾸기

**실습 목표:** CommonJS 문법을 ES 모듈 문법으로 바꿉니다.

- 폴더: `2_npm/step2_require-to-import/starter` · TODO 주석을 따라 코드를 완성합니다.
- 실행: `node 2_npm/step2_require-to-import/starter/main.cjs`

**예상 결과**

```
2026-10-29 주문 내역
상품 금액: 12,000원
세금 포함: 13,200원
```

> 풀이는 수업 뒤에 따로 공유합니다.
