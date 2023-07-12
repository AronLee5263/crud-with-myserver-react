# disc-doctor

disc doctor - 좋은 자세를 취하도록 도와주어 디스크로 인한 통증을 호전시켜주는 알람 앱

1. 설계 & 디자인 : HTML, CSS, Javascript, React
2. 빌드 : Vite (CRA 대신 사용)
3. 배포 - Firebase Hosting , Github Page
4. 기능 : 가입, 로그인, 로그아웃, CRUD 
   4-1. 가입, 로그인, 로그아웃 - Firebase Authentication사용
   4-2. CRUD에 사용되는 데이터베이스 - Firestore Database 사용
         (Firestore를 사용하기 전에는 mock API, axios를 사용했습니다.) 
5. 스플래시 이미지
 : 첫 진입시에만 볼 수 있게 기능 구현.  웹 페이지가 꺼졌을 때는 데이터를 삭제하고, 웹이 다시 켜졌을 때 볼 수 있도록  sessionstorage 를 사용했습니다.

6. 회원가입, 로그인, 유저 아이디 표시 - Context API로 전역상태로 처리했습니다.
7. 여러 애니메이션 - 리액트 라우터 구조(중첩 라우터, 조건부 렌더링)로 설계했습니다.
8. 로고 및 스플래시 이미지 - 외주
9. 최적화
  - Lazy Loading
- vite로 빌드

10. 배포 링크 - https://disk-doctor-8c3fc.web.app


<br>
 <!-- 1. node.js
 2. npm create vite 
 3. npm i react-router-dom 
 4. npm install react-icons -->
