/**
 * 클래스간의 상속 관계 표현 : extends
 * 부모가 가지고 있는 필드, 메서드를 자식이 상속받아 사용하도록 정의
 */
//Animal(동물) 클래스를 상속받아, Dog, Tigrt, Lion 자식 클래스 생성
//자식 is a 부모 : ○  => 자식 extends 부모 :: 자식클래스 정의

//부모: Animal 클래스 정의
class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => console.log(this.name, this.emoji);
    sleep = () => console.log(`${this.name}(${this.emoji})가(이) 잠을 잔다.`);    
}


//자식: Dog 클래스 정의, 자식 is a 부모 : ○

class Dog extends Animal {
    constructor(name, emoji, color) {
        super(name, emoji); //부모의 생성자 호출, 생성된 name, emoji는 자식에 저장 됨
        this.color = color;
    }
}

let animal = new Animal('animal', '👨');
console.log(animal);


let dog = new Dog('happy', '🐶', 'brown');
console.log(dog);
