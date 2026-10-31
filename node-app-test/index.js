console.log("app running....")

import moduleA from "./moduleA.js" // export default를 써서 변수,함수등을 객체로 내보내기 한 모듈만 이 방식으로 import 가능,물론 객체에 하나만 정의하면 그것을 단독으로 import 가능 

console.log(moduleA.moduleA_var1);
moduleA.moduleA_fun1();


import moduleB_fun2,{ moduleB_var1,moduleB_fun1 } from "./moduleB.js"; //이렇게 import하면 모듈내에서 변수,함수등을 개별적으로 export한 경우 import 가능,

console.log(moduleB_var1);
moduleB_fun1();
moduleB_fun2();