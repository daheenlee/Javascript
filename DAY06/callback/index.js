//마술상자 안에 마술상자
//x:function

const cook = (recipe) => {
    console.log(`★요리 시작★`);
    recipe();
    console.log(`★요리 끝★`);
};


const ramen =() =>{
    console.log(`물 끓이기`);
    console.log(`스프넣기`);
    console.log(`라면넣기`);
};

const kimchiStew= () => {
    console.log("고기볶음");
    console.log("김치 넣어서 같이볶음")
    console.log("물넣기");
};

cook(ramen);

cook(kimchiStew);



