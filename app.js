const resultbar = document.querySelector("#resultbar") 


function enterValue(value){

    if(value==0 && resultbar.value==""){
        return
    }else{
    $(resultbar).val($(resultbar).val()+value)
    }
}
function clearValue(){
    $(resultbar).val("")
}
function delValue(){
    var exp=resultbar.value;
    resultbar.value=exp.substring(0,exp.length-1)
}
function equal(){
    $(resultbar).val(eval(resultbar.value))
}
$(document).ready(function(){
    $("#resultbar").keypress(function(e){
       var keyCode = e.which;
      /*
        8 - (backspace)
        32 - (space)
        48-57 - (0-9)Numbers
      */
    
      if (keyCode == 48 && resultbar.value=="" || keyCode==32 || keyCode < 48 || keyCode > 57) { 
            if(!(keyCode == 43 || keyCode == 45 || keyCode==42 || keyCode==47)){
                return false;
            }
                
      }
    });
  });

window.onerror = function(){
    alert("Please enter a valid input");
    resultbar.value="";
    console.clear();
}
resultbar.addEventListener("keyup", function(event){
    if(event.keyCode===13){
        document.getElementById("btn-equal").click()
    }
})