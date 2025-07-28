// 프롬프트로 유저에게 만들고 싶은 태그 묻고 
//태그의 배경색 묻고
//태그의 컨텐츠(안의내용)묻고 난 후에
//html에 유저가 요구한 태그 만들기

//const make = window.prompt ("뭘 만드실래요")
//const background = window.prompt ("배경색 뭐하실래요")
//const ner = window.prompt ("안에 들어갈 내용은 뭐라고 하실래요")


//const tag = document.createElement(make);
//tag.style.backgroundColor =background;
//tag.innerHtml=ner 
//document.body.appendChild(tag);

//유저에게 좋아하는 음식들 입력 받고
//음식들을 각각 버튼 태그로 만들고
//버튼태그 색상은 순서대로 빨주노초파남보


//const food = prompt("좋아하는 음식 무엇?")

//const foodlike = ((x)=> food.split(" ").food.map() );
//const button = document.createElement(foodlike);
//button.style.backgroundColor = ["red","orange","yellow","green"];


const colorList = ["red","orange","yellow","green","blue","indigo","putple"]
const foodlist = prompt("좋아하는 음식 무엇?").split(" ");
foodlist.forEach((x,i)=> {
    const bin = document.createElement("button");
    bin.innerHTML = x;
    bin.style.color = colorList[i%7];
    document.body.appendChild(bin);
})