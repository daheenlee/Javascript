const starbucks = [
     {name :" 아메리카노" ,  price:4500,shot:2,ingredients :['water','caffeine']},
         {name :"  라떼" ,  price:5500,shot:2,ingredients :['water','milk','caffeine']},
              {name :" 돌체라떼" ,  price:6500,shot:3,ingredients :['water','milk','caffeine','condensed milk']},
                   {name :" 바닐라크림" ,  price:5500,shot:2,ingredients :['milk','caffeine','vanilla', 'wather']},
                        {name :" 카페모카" ,  price:4500,shot:2,ingredients :['milk','chocolate','water','caffeine']},];
                    





//1 라뗴 메뉴만 나타내기
//2 가격이 6000 이상 메뉴만 나타내기

//3 저녁타임 이벤트로 각 가격을 20% 할인해서 메뉴 전체 나타내기

const sale = (x) => {
     x.price = x.price*0.8 
       return  x;}

const answer3 = starbucks.map(sale);


//이름에 라뗴가 있으면, 재고 잆음 이름 바꾸고 아니면 그대로 나타내기

 const latee =  (x) => {
     x.name = x.name.includes("라떼") ?  "재고없음" : x.name
    return x;

 };


const answer4 = starbucks.map(latee);


// caffeine -> decaffeine

const caffeine = (x) => {
    x.ingredients = x.ingredients.replaceAll("caffeine","decaffeine")
    return x;
};

const answer5 = starbucks.map(caffeine);