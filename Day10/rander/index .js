//신문법
      
      
 const item=` <div class ="item">
            <img src = "child-7972995_1280.jpg" alt="" />
            <div class = "info">
<span class = "brand"> 무신사 스탠다드</span>
<span class = "name"> 플렉스 포스</span>
<span class = "price"> 93,420원</span>
            </div>
        </div> `;


const itemTag =(item) => `
        <div class ="item">
            <img src = "${item.src}" alt="" />
            <div class = "info">
<span class = "brand"> ${item.brand}</span>
<span class = "name">${item.name}</span>
<span class = "price">${item.price}</span>
            </div>
        </div>`;



        const box = document.querySelector(".box");
        clothes.forEach((x)=> {
        box.insertAdjacentHTML("beforeend",itemTag(x)); 
    
    });