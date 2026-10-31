// 변수 선언
export const moduleB_var1= "moduleB_var1_value";

//함수선언
export const moduleB_fun1 = function(){
    console.log("ModuleB_func1() 실행");
};

export const moduleB_fun2 = function(){
    console.log("ModuleB_func2() 실행");
};


//기본 export:모듈당 하나만 작성가능
export default moduleB_fun2
