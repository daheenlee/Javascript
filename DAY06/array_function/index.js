// quiz
//arr 배열을 줬을 떄, 배열안에 있는 요소들을 두배로 해서 돌려준느 함수 만들기
// [1,2,3,4,5,] -> [2,4,6,8,10]


//map :리스트 안에 있는 요소 바꾸기

const threeTiime = (x) => {
    return x *3;

};


const test = [1,2,3,4,5].map(threeTiime);
console.log(test);

