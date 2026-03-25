/**
 * 클래스의 필드에 선언되는 변수, 상수에 대한 접근 제한자
 * 변수, 상수 앞에 #을 붙이면 private으로 설정, 클래스 내에서만 접근 가능함. 외부에서는 접근 불가함.
 * #이 붙지 않으면 public
 */

class Person {
    #empno;
    name;
    age;

    constructor(empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    display = () => {
        console.log(this.#empno, this.name, this.age);        
    }
    setEmpNo = (empno) => {
        this.#empno = empno;
    }
    getEmpNo = () => { return this.#empno };
    
}

let hong = new Person('1234', '홍길동', 30);
hong.display();
console.log(hong.empno);
console.log(hong.name);
console.log(hong.age);
hong.display();

//hong.empno = '4567'; //사번 변경 불가 #
hong.setEmpNo('4567'); 
console.log(hong.getEmpNo());
