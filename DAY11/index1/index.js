

const minus = document. querySelector(".minus")
const num= document. querySelector(".num")
    const plus = document. querySelector(".plus")

    plus.addEventListener("click",()=>{
   num.innerHTML = +num.innerHTML +1
      updateColor();
});

const updateColor =()=> {
    if (+num.innerHTML >= 9) {
        num.style.color = "blue";
    } else {
       num.style.color = "black";
    }
}

num.style.color=nownumber <9 ? "black" : "blue";


minus.addEventListener("click",()=>{
   const nownumber = +num.innerHTML;
   if(nownumber==0 ){
      num.innerHTML= 0;
    } else{
            num.innerHTML = nownumber -1 ;
      }
  
     
});








    
  

  
