/**
 * 학생(Student) 클래스 정의
 * 필드 : #이름, #나이, #주소, 이모지
 * 메소드 : setter/getter, display
 */

let dataList = [
    { name: '홍길동', age: 20, address: '서울시', emoji: '🧑'},
    { name: '김철수', age: 21, address: '부산시', emoji: '🧑'},
    { name: '박영희', age: 22, address: '서울시', emoji: '👩'},
    { name: '박정민', age: 23, address: '인천시', emoji: '🧑'},
    { name: '홍길순', age: 24, address: '서울시', emoji: '👩'},
];

class Student {
    #name;
    #age;
    #address;

    constructor(name, age, address, emoji) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.emoji = emoji;
    }

    // getter
    getName = () => this.#name;
    getAge = () => this.#age;
    getAddress = () => this.#address;
    getEmoji = () => this.emoji;

    // setter
    setName = (name) => this.#name = name;
    setAge = (age) => this.#age = age;
    setAddress = (address) => this.#address = address;
    setEmoji = (emoji) => this.emoji = emoji;

    // display
    display = () => {
        console.log(
            `이름: ${this.#name}, 나이: ${this.#age}, 주소: ${this.#address}, 이모지: ${this.emoji}`
        );
    }
}

/** 2. 학생(Student) 객체 생성 */
let hong = new Student('홍길동', 20, '서울시', '👨');
hong.display();

/** 3. Datalist 배열 객체를 이용하여 학생(Student) 객체 생성 후 학생 리스트(배열)에 저장 */

const studentList = [];
for(let i=0; i<dataList.length; i++) {
    //datalist[i] = {} i번째 데이터 리스트는 객체다
    let obj = dataList[i]; //{ name: '홍길동', age: 20, address: '서울시', emoji: '🧑'}
    let student = new Student(obj.name, obj.age, obj.address, obj.emoji);
    studentList.push(student);
}

console.log(studentList);

/** 4. studentList 배열의 객체 출력  */
for(let i=0; i<studentList.length; i++) {
    let student = studentList[i];
    console.log(student.getName()+'\t',
                student.getAge()+'\t',
                student.getAddress()+'\t',
                student.getEmoji() );
}

// let dataList = [
//     { name: '홍길동', age: 20, address: '서울시', emoji: '🧑'},
//     { name: '김철수', age: 21, address: '부산시', emoji: '🧑'},
//     { name: '박영희', age: 22, address: '서울시', emoji: '👩'},
//     { name: '박정민', age: 23, address: '인천시', emoji: '🧑'},
//     { name: '홍길순', age: 24, address: '서울시', emoji: '👩'},
// ];

// Student 객체 배열 생성
// let studentList = [];

// for (let i = 0; i < dataList.length; i++) {
//     let student = new Student(
//         dataList[i].name,
//         dataList[i].age,
//         dataList[i].address,
//         dataList[i].emoji
//     );
//     studentList.push(student);
// }

// console.log(studentList);

// 전체 출력
// for (let i = 0; i < studentList.length; i++) {
//     studentList[i].display();
// }