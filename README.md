
  <!-- <img src="https://user-images.githubusercontent.com/117638456/253851018-d8aa8a49-3824-46c9-a2fa-05d1a460e52c.png" width="200" height="400"/> -->

<h1> disc-doctor </h1>

- 좋은 자세를 취하도록 도와주어 디스크로 인한 통증을 호전시켜주는 알람 앱

<br/>

<h2> 1. 설계 & 디자인  </h2>
<h4> - HTML, CSS, Javascript, React </h4>

<br/>


<h2> 2. 프로젝트 세팅  </h2> 
<h4> - Vite </h4> 
<br/>




<h2> 3. 배포  </h2>
   
   <li> 
       Firebase hosting, Github Page 사용 <br/>     
  </li> 
     <li> [배포링크] (https://disk-doctor-8c3fc.web.app/) </li>

<br/>


<h2> 4. 기능  </h2> 
<h4> 4-1. 가입, 로그인, 로그아웃  </h4> 
<ul> 
   <ul> 
      <li> Firebase Authentication - 회원가입, 로그인, 로그아웃</li>
   </ul>   
</ul>
   
<br/>

<h4> 4-2. CRUD에 사용되는 데이터베이스  </h4>    
   <ul> 
   <ul> 
      <li> Firestore Database 사용 <br/>
      (Firestore를 사용하기 전에는 mock API, axios를 사용했습니다.) 
      </li>
   </ul>   
</ul>

<br/>




<br/>
      

      
<h2> 5. 스플래시 이미지  </h2> 
<h4> -  첫 진입시에만 볼 수 있게 기능 구현.  웹 페이지가 꺼졌을 때는 데이터를 삭제하고, 웹이 다시 켜졌을 때 볼 수 있도록 sessionstorage 사용 </h4> 

<li> useEffect Hook으로 처음 앱에 진입했을때에만 켜지게 구현</li>
<li>  setTimeOut으로 2초 뒤 스플래시 이미지 렌더링 끄기</li>
<br/>


<h2> 6. 유저 아이디 표시, 회원가입, 로그인  </h2> 
<h4> - Context API로 전역상태로 처리했습니다. </h4> 
<br/>

<h2> 7. 여러 애니메이션  </h2> 
<h4>  - 리액트 라우터 구조(중첩 라우터, 조건부 렌더링)로 설계했습니다. </h4> 
<br/>

<h2> 8. 로고 및 스플래시 이미지  </h2> 
<h4>  이전 회사 동료에게 외주를 맡겨서 제작했습니다. </h4> 
<br/>


<h2> 9. 최적화  </h2> 
<h4>   - Lazy Loading </h4> 
<h4>   - vite로 빌드  </h4> 
<br/>


 <h2> 10. 배포 링크  </h2> 
 <h4>   - https://disk-doctor-8c3fc.web.app </h4> 
   


<br/><br/>

  <h2> 11. 기술적 의사결정  </h2> 

  <h4> 기본적으로 의사결정의 기준은 속도와 빠른 업데이트였습니다. 제가 원하는 것은 빠르게 개발하고 테스트하는 것이었기에 속도에 중요성을 두고 의사결정을 내렸습니다.  </h4> 

<h2>  📝 JavaScript  VS TypeScript </h2> 

 <h4>  JavaScript </h4> 
<ul>
   <li> 장점
   <ul>  
     <li> 간단하고 빠르게 개발 가능</li>
   </ul>  
</li>
</ul>  

<ul>
   <li> 단점
   <ul>  
     <li> 타입관리가 어려워 오류가 발생이 쉽다</li>
     <li> 디버깅에 많은 시간을 투자해야 한다</li>
   </ul>  
</li>
</ul>  

 <h4>  TypeScript </h4> 
<ul>
   <li> 장점
   <ul>  
     <li> 강타입의 언어로 컴파일 단계에서 타입에러를 발견할 수 있다</li>
   </ul>  
</li>
</ul>  

<ul>
   <li> 단점
   <ul>  
     <li> JavaScript에 비해 개발 속도가 느리다</li>     
   </ul>  
</li>
</ul>  

<br/>

 <h2>  📝 React.js  VS Vue.js </h2> 
 
 <h4>  React.js   </h4> 
<ul>
   <li> 특징
   <ul>  
     <li> 리액트는 JSX(JavaScript XML) 형태로 코드를 작성하는데 자바스크립트만을 사용한다.</li>
   </ul>  
</li>
</ul>  


 <h4>  Vue.js </h4> 
<ul>
   <li> 장점
   <ul>  
     <li> 가상 DOM구현이 React보다 빠르며 오버 헤드가 적게 발생한다.</li>
      <li> 템플릿을 사용해 쉽고 빠르게 제작이 가능하며 진입장벽이 낮다.</li>
   </ul>  
</li>
</ul>  


결론적으로 , React.js를 선택했습니다. 왜냐하면 비록 Vue.js 가 진입장벽이 낮고 프로젝트를 빠르게 만들 수 있다는 장점이 있었지만, react 의 커뮤니티가 훨씬 활성화 되어있고 자료도 많았고, 한국 시장에서 react의 점유율이 훨씬 높았기 때문입니다.





<br>
 <!-- 1. node.js
 2. npm create vite 
 3. npm i react-router-dom 
 4. npm install react-icons -->
