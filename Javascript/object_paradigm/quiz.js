const  BR ={ 
    
    icecreams:[
        {name:`엄마는외계인`, price:1500},
         {name:`바람과함께사라지다`, price:2000},
          {name:`아몬드봉봉`, price:2500},],
   

          sales:0,
          sellicecream:function(x){
            this.sales = this.sales +this.icecreams[x].price;  },};

            BR.sellicecream(0);
                BR.sellicecream(2);
                    BR.sellicecream(2);

                    window.console.log(BR.sales);
