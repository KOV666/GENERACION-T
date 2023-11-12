let stock = 6;

$("#buy-0").click(function(){
    alert("Compra realizada con exito")
    $("#casa-1").fadeOut();
    stock--
    console.log(stock)
})

$("#buy-1").click(function(){
    alert("Compra realizada con exito")
    $("#casa-2").fadeOut();
    stock--
    console.log(stock)
})

$("#buy-2").click(function(){
    alert("Compra realizada con exito")
    $("#casa-3").fadeOut();
    stock--
    console.log(stock)
})

/* $("#buy-3").click(function(){
    alert("Casa 4")
}) */

$("#buy-4").click(function(){
    alert("Compra realizada con exito")
    $("#casa-4").fadeOut();
    stock--
    console.log(stock)
})

$("#buy-5").click(function(){
    alert("Compra realizada con exito")
    $("#casa-5").fadeOut();
    stock--
    console.log(stock)
})

$("#buy-6").click(function(){
    alert("Compra realizada con exito")
    $("#casa-6").fadeOut();
    stock--
    console.log(stock)
})

function noStock(){
    if(stock == 1){
        alert(0)
        document.write("Lo siento, nos quedamos sin stock por el momento")
    }    
}


