/**
 * 사원(Employee) 클래스 정의
 * - 사원번호(#), 사원명, 나이를 입력받아 객체 생성
 */

class Employee {
    #empno;

    constructor(empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    //getter/setter
    getEmpno = () => { return this.#empno; }
    getName = () => { return this.name; }
    getAge = () => { return this.age; }

    setEmpno = (empno) => { this.#empno = empno; }
    setName = (name) => { this.name = name; }
    setAge = (age) => { this.age = age; }

    display = () => {
        console.log(this.#empno, this.name, this.age);
        
    }
}

let hong = new Employee();
hong.setEmpno('2345');
hong.setName('홍말순');
hong.setAge(123);
hong.display();
console.log(hong.empno);
console.log(hong.name);
console.log(hong.age);
console.log(hong.getEmpno());
console.log(hong.getName());
console.log(hong.getAge());

let smith = new Employee('4567', '스미스', 47);
smith.display();

let empList = [];
// empList[0] = hong;
// empList[1] = smith;
empList.push(hong);
empList.push(smith);
console.log(empList.pop(hong));
console.log(empList);

let empListObj = {};
empListObj['hong'] = hong;
empListObj['smith'] = smith;
console.log(empListObj);
