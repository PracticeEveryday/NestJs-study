# NestJs-study

#### 데코레이터

- 함수나 클래스에 기능을 첨가해주는 것

#### 컨트롤러

- client => http request => controller

#### 의존성 주입

- 파일을 사용하지 않고 생성자에서 바로 초기화 해서 바로 사용한다.
- 의존성 주입 패턴
- AppController 소비자 appService 제품
- 제품을 넣어주는 공급자가 따로 있음 ( Provider )

- NestJs 입장에서는 제품( 인스턴스 appService )에 대한 공급자( AppService Provider ) 를 찾아가 제품을 받아 소비자( Controller )에게 넘겨준다.
- Module에 공급자가 없으면? 소비자가 제품을 사용할 수가 없음.

- 객체지향 프로그램의 목표가 실제 생활과 비슷하게 코드를 짠다!
- 공급자 소비자 제품 등록! 묘사가 가능함 NestJs
- 의존성을 명료하게 남김 확실하게 의존성 관리가 가능함!

- controller에서 provider에서 주입받은 제품을 사용할 수 있다.

#### 캡슐화

- provider는 캡슐화가 되어있기에 기본적으로 다른 모듈 imports 배열에 들어가더라도 사용하지 못한다.
- provider에는 그 모듈에서 만든 자체적인 Service, Gateway만 넣어주는 게 좋다.
- 다른 모듈에서 만든 공급자는 퍼블릭으로 만들어줘서 보내주는 것이 좋다.

#### 미들웨어

- 라우트 핸들러 이전에 호출되는 함수
- nest g middleware logger(이름)

#### filter & pipe

- throw new HttpException ('에러메세지', 'status')
- 만약 이셉션 처리가 하나로 모여서 재사용성을 고려해 필터링을 거쳐 리스폰스로 반환해주는 형식으로 만들수 있음.

- middleware => controller => Service => Exception
