# Node Practices

1. 패키지
  - 완전한 애플리케이션(babel, webll

## 의존성
개발에 필요한 라이브러리, 

  - 개발할 때만 필요 : 개발 의존성
  - 배포까지 : 일반 의존성

4. 패키지 설치
  - 다른 프로젝트에서도 사용 : 전역 설치
  - 내 프로젝트 안에서만 : 지역 설치
  - npm i ejs
    - node_modules 설치됨....
    - 지역설치임...
    - ejs의 dependency -> lock 파일...
  - npm i ejs -g : 전역설치 : 노드가 깔린 곳에 깔림........

  

### git
- myproject
  - src
  - package.json (src가  의존)
  - package-lock.json (package.json이 의존)

- 동료가 npm i 하면 node_modules 설치됨

- yarn 이 나온 배경....
