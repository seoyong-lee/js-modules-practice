# js-modules-practice

자바스크립트 모듈 실습 레포입니다.

## 준비

1. Node.js **v18 이상**이 필요합니다. 터미널에서 `node -v`로 확인하세요.
2. 레포를 내려받고 VS Code로 엽니다.

```bash
git clone https://github.com/seoyong-lee/js-modules-practice.git
cd js-modules-practice
npm install     # 2_npm 실습에 쓰는 date-fns를 설치합니다
npm run hello   # '실습 레포가 준비됐습니다.'가 나오면 준비 끝
code .
```

3. 최상위 `package.json`에 `"type": "module"`이 들어 있어서 `.js` 파일에서 `import` · `export`를 쓸 수 있습니다.
4. 실행은 레포 최상위 폴더에서 `node 1_module/step1_import-export/starter/main.js`처럼 합니다.

## 구성

| 챕터   | 폴더                             | 내용                                                                        |
| ------ | -------------------------------- | --------------------------------------------------------------------------- |
| 챕터 1 | [`1_module`](1_module/README.md) | [실습-1] import와 export · [실습-2] default export · [실습-3] 모듈 분리하기 |
| 챕터 2 | [`2_npm`](2_npm/README.md)       | [실습-4] date-fns로 D-day 출력하기 · 도전 · require를 import로 바꾸기       |

- 각 단계 폴더의 `starter/`에서 시작합니다.
- `solution/`은 레포에 포함하지 않습니다. 수업 실습 풀이는 수업 시간에 슬라이드로 함께 보고 도전 풀이는 수업 뒤에 공유합니다.
