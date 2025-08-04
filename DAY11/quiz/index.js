














const box = document. querySelector(".box");
const smallbox = document. querySelector(".smallbox");
const span = document. querySelector(".text");
const minus = document. querySelector(".minus");
const num= document. querySelector(".num");
    const plus = document. querySelector(".plus");

       const texttwo = document.querySelector(".texttwo");
         const textthree = document.querySelector(".textthree");
           const textfour = document.querySelector(".textfour");
           const num2 = document.querySelector(".num2");
const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");


const unitPrice = +(texttwo.innerHTML.replace(',', ''));
const unitPricetwo = +(textfour.innerHTML.replace(',', ''));



function updatePrice() {
    const quantity = +num.innerHTML;
    const totalPrice = quantity * unitPrice;
    texttwo.innerHTML = totalPrice.toLocaleString() + "원"; 
}



    plus.addEventListener("click",()=>{
   num.innerHTML = +num.innerHTML +1
      const nownumber = +num.innerHTML; 
  plus.style.color = nownumber < 1 ? "white" : "black"
       updatePrice();
});



minus.addEventListener("click",()=>{
   const nownumber = +num.innerHTML;
   if(nownumber==0 ){
      num.innerHTML= 0;
    } else{
            num.innerHTML = nownumber -1 ;
      }
     updatePrice();

});
updatePrice();

function updatePricetwo() {
    const quantity = +num2.innerHTML;
    const totalPrice = quantity * unitPricetwo;
    textfour.innerHTML = totalPrice.toLocaleString() + "원"; 
}


    plus2.addEventListener("click",()=>{
   num2.innerHTML = +num2.innerHTML +1
      const nownumber = +num2.innerHTML; 
  plus2.style.color = nownumber < 1 ? "white" : "black"
       updatePricetwo();
});



minus2.addEventListener("click",()=>{
   const nownumber = +num2.innerHTML;
   if(nownumber==0 ){
      num2.innerHTML= 0;
    } else{
            num2.innerHTML = nownumber -1 ;
      }
     updatePricetwo();

});


updatePricetwo();

    
  

  
