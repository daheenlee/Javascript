













const box = document. querySelector(".box");
const smallbox = document. querySelector(".smallbox");
const span = document. querySelector(".span");
const minus = document. querySelector(".minus");
const num= document. querySelector(".num");
    const plus = document. querySelector(".plus");

       const text2 = document.createElement =("text2");



    plus.addEventListener("click",()=>{
   num.innerHTML = +num.innerHTML +1
  plus.box.style.color = nownumber < 1 ? "white" : "black"
     
});




minus.addEventListener("click",()=>{
   const nownumber = +num.innerHTML;
   if(nownumber==0 ){
      num.innerHTML= 0;
    } else{
            num.innerHTML = nownumber -1 ;
      }
  
      updateColor();
});
 num.innerHTML = nownumber -1 ;







    
  

  
