//1 숫자 배열 제곱 값 구하기**
//before :[1,2,3,4,]
 //after:[1,4,9,16]


const quiz11= [1,2,3,4];
const numm = (x) => {
    return x**2;
};
const quiz1 = quiz11.map(numm);
console.log = quiz11.map( quiz1);


//2  이름 배열 대문자로 전환하기
const name = ['hong','kim','lee'];
const nmed = (x) => {
    return  map.toUpperCase();
};

const quiz2 = name(nmed);
window.console.log( quiz2);


//3 점수 배열에 60점 미만 기준으로 합격/불합격 여부 표시하기

const score = +[85,42,77];
const test = (x) => {
    return x > 60  ? "합격입니다 " : "불합격입니다";
};

const quiz3 = score.map(test);
console.log(quiz3);


//4 상품 할인 가격 20% 배열 만들기

const  sale = [10000,20000,15000];
const saleing = (x) => {
    return  x*0.8;
}
const begore4 = [10000,20000,15000];
const after4 = sale.map(saleing);


//5 학생 객체 배열에서 이름만 추출하기 **
//before :[{name:' 홍길동' , age :16}, {name:' 김철수' , age :16}]
//afret [ 홍길동,김철수 ]

const before5 = [{name:' 홍길동' , age :16}, {name:' 김철수' , age :16}];
const afer5 = before5.map(fn5);

