// 1. 어떠한  x를 넣으면 제곱을 돌려주는 함수 만든 후
//함수를 활용해서 콘솔로 결과 나타내기


//2. 어떠한 food를 넣으면 `~~food는  맛있따` 라고 함수 만든 후
//함수를 활용해서 콘솔로 결과 나타내기


//3. 어떠한  x를 넣으면 홀수 또는 짝수를 돌려주는 함수를 만든 후
//함수를 활용해서 콘솔로 결과 나타내기



// 어떠한 x를 넣으면 배열로 [x*1,x*2,x*3]을 돌려주는 함수를 만든 후 
// 함수를 활용해서 콘솔로 결과 나타내기



//1

function number(x){
    return x*x ;
}

const test = number(10);
window.console.log(test); 


//2

function like(food){
return `${food}는 맛있다`;
}

const test1 = like(`불닭볶음면`);
window.console.log(test1); 


//3 

function isOddorEven(x){
    return x%2? "홀수" : "짝수";
}
const test2 = isOddorEven(12);
window.console.log(isOddorEven); 

//4

function threeList(x){
    return[x*1,x*2,x*3];}

const test3 = threeList(10);
    window.console.log(threeList); 

