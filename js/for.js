// for(let i = 0; i < 10; i++){
//     console.log("홍길동")
// }

// for(let i = 0; i < 10; i++){
//     console.log("123412341234")
// }

// for(let i = 1; i <= 100; i += 2){
//     console.log(i)
// }

// 1~100까지 짝수만 누적
// let sum = 0
// for(let i = 2; i <= 100; i += 2){
//     sum += i
// }
// console.log(sum)

// 1~100까지 중 7의 배수를 출력하세요.
// for(let i = 1; i <= 100; i++){
//     if(i % 7 == 0) {
//         console.log(i)
//     }
// }

// 구구단 2단 만들기
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 2 x 9 = 18

// for(let i = 1; i < 10; i++){
//     // console.log(2, "x", i, "=", 2 * i)
//     console.log(`2 x ${i} = ${i * 2}`)
// }

// [과제] 2단 ~ 9단까지 구구단 만들기 (템플릿 리터럴 적용)
for(let i = 2 ; i < 10 ; i++){
    for(let j = 1 ; j < 10 ; j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
}



























