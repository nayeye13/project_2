$(document).ready(function(){
         $('#b').click(function(){
           $('#myNav').css('width','100%');
         });
   
         $('.closebtn').click(function(){
           $('#myNav').css('width','0');
         });
   
         $
      
       });


       $(function () {
        $('button:nth-of-type(1)').click(function () {
           $("#box1").fadeIn().css("display","flex");
           $("#box2").hide();
           $("#box3").hide();
        });


        $('button:nth-of-type(2)').click(function () {
           $("#box2").fadeIn().css("display","flex");
           $("#box3").hide();
           $("#box1").hide();
        });


        $('button:nth-of-type(3)').click(function () {
           $("#box3").fadeIn().css("display","flex");
           $("#box1").hide();
           $("#box2").hide();
        });

     });

     $(document).ready(function(){
        $('#b').click(function(){
          $('#myNav').css('width','100%');
        });
  
        $('.closebtn').click(function(){
          $('#myNav').css('width','0');
        });
  
        $
     
      });