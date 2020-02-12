# Movie App

ReactJS fundamental Course of Nomad Coder

💩앱 처음으로 만드는 법 => (터미널에서 cd Documents에 가서) npx create-react-app (앱 이름)  
💩앱 실행하는 명령어 => npm start (package.json에서 scripts 확인!)  
💩github repository에 등록하는 방법  
1.github.com에서 레포지토리 생성  
2.터미널 cd Documents/movie_app에서 git init  
3.git remote add origin (생성한 레포지토리 URL 주소)  
  
React는 html파일에는 텍스트가 안 들어간다. 대신 App.js에서 텍스트를 넣고, index.js에서 html의 어떤 id에 APP의 텍스트를 넣을지 정해줌!  
즉, html 파일은 그냥 형식을 정해주는 역할이고, 안에 내용은 js파일에서 넣어주는 방식. 그래서 빠르다.  

### github page 이용하는 방법
1.npm install gh-pages  
2.package.json 파일에 "homepage": "https://(깃헙 이름).github.io/(레포지토리 이름)/" 추가  
3.package.json 파일의 scripts에 deploy, predeploy 만들기 (build 폴더를 만들게되며, 만들어지면 그 폴더를 기반으로 페이지 생성됨)  
