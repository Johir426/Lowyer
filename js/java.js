$(document).ready(function(){
    
  $(".mead h1").slideToggle(2000).delay(10000);  
    
    
$(".second .ek").mouseenter(function(){
 $(".ek i").show(900); 
 $(".ek h1").show(700); 
     $(".silo").hide(500);
});
$(".dui").mouseenter(function(){
 $(".dui i").show(900);  
     $(".dui h1").show(700);
     $(".silo").hide(500); 
});
    $(".tin").mouseenter(function(){
 $(".tin i").show(900);  
     $(".tin h1").show(700);
     $(".silo").hide(500); 
});


   $(".second .ek").mouseleave(function(){
 $(".ek i").hide(900); 
 $(".ek h1").hide(700); 
 $(".silo").show(500); 

}); 
       $(".second .dui").mouseleave(function(){
 $(".dui i").hide(900); 
 $(".dui h1").hide(700); 
$(".silo").show(500); 

}); 

       $(".second .tin").mouseleave(function(){
 $(".tin i").hide(900); 
 $(".tin h1").hide(700); 
  $(".silo").show(500); 
}); 

    

    
 $(".three").hover(function(){
$(".three_right").fadeIn(1000);     
 });
 
 $(".three").mouseleave(function(){
$(".three_right").fadeOut(500);     
 });
    
    
 

$(".container input").focus(function(){
   $(this).css("background-color","#4656A1");
});
    
$(".container input").blur(function(){
   $(this).css("background-color","#283774"); 
}); 
    
    

    
    
});







