/**
 * 배열의 모든 요소를 순회하면서, 콜백함수의 조건을 적용하여, 새로운 배열 생성 후 반환
 * - 배열객체 map(callback)
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fnumbers = [1.123, 2.345, 3.2345];

//numbers의 모든 요소의 곱하기 100한 결과를 출력하기
let results = numbers.map((number) => number * 100);
console.log(results);


//fnumbers의 모든 요소를 정수로 반환하고 싶음
let results2 = fnumbers.map((fnumber) => fnumber.toFixed(0));
console.log(results2);
let results3 = fnumbers.map(fnumber => Math.floor(fnumber));
console.log(results3);
