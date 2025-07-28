//1. Document[HTML] queryselect(찾기),createElement(만들기)

//2.Element[Tag] innerHTML(글씨넣기) style.appendChild(자식 태그로 넣기)

//div  - 글씨[pink] , 배경색[green],폰트크기[30px]
 const div = document.createElement( "div");
 div.innerHTML=" 지금 두번째 시간임 ㅅㄱ";
 div.style.color= "pink";
 div.style.backgroundColor="yellow";
 div.style.fontSize = "30px";
 document.body.appendChild(div);



//button -글씨[blue] ,배경색[ yellow],폰트크기[20px],padding[10px;]
const button = document.createElement("button");
button.innerHTML = "햅삐 ";
button.style.backgroundColor = "yellow";
button.style.fontSize = "20px";
button.style.padding = "10px";
button.style.color="blue";
document.body.appendChild(button);