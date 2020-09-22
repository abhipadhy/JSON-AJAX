document.querySelector("button").addEventListener('click',function(){
   $("h3").hide();
   $(".tb").show();
   var select1 = document.querySelector("#list");
   var name  = select1.options[select1.selectedIndex].value;

   $.getJSON("objects.json",function(obj){

    $.each(obj,function(key,value){
        if(value.name === name)
        {
            document.querySelector(".name").textContent = value.name;
            document.querySelector(".id").textContent= value.id ;
            document.querySelector(".price").textContent= value.price ;
            document.querySelector(".stock").textContent= value.stock ;
            document.querySelector(".type").textContent= value.type ;
        }
    });


   });
});