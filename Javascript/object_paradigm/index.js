const car = {
    name:"페라리",
    price:10000000,
    color:"빨간색",
    changecolor:function(x)
{ this.color=x;},

priceup: function(x)
{this.price + x; },

changeName: function(x)
{ this.name = x; }

};
//priceup()
//changeName()



car.changecolor("파란색");
car.priceup(20000);
car.changeName("케이파이브");

window.console.log(car);