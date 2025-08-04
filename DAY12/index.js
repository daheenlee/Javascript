const btn = document.querySelector(".hi")
btn.addEventListener("mouseenter",(x)=>{
   //x.target ==element
   //{key:element}
   console.log(x.target.className);
});