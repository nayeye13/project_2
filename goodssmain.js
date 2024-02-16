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

//        function prev() {
//          $('.slide li:last').prependTo('.slide');
//          $('.slide').css('margin-left', -1440);
//          $('.slide').stop().animate({ marginLeft: 0 }, 800);
// }
// function next() {
//          $('.slide').stop().animate({ marginLeft: -1440 }, 800, function () {
//                   $('.slide li:first').appendTo('.slide');
//                   $('.slide').css({ marginLeft: 0 });
//          });
// }



if(window.matchMedia("(min-width:1457px").matches){
   function prev() {
      $('.slide li:last').prependTo('.slide');
      $('.slide').css('margin-left', -1440);
      $('.slide').stop().animate({ marginLeft: 0 }, 800);
}
function next() {
      $('.slide').stop().animate({ marginLeft: -1440 }, 800, function () {
               $('.slide li:first').appendTo('.slide');
               $('.slide').css({ marginLeft: 0 });
      });
}
} else{
   let w=$(window).innerWidth();
   function prev() {
      $('.slide li:last').prependTo('.slide');
      $('.slide').css('margin-left', -w);
      $('.slide').stop().animate({ marginLeft: 0 }, 800);
}
function next() {
      $('.slide').stop().animate({ marginLeft: -w }, 800, function () {
               $('.slide li:first').appendTo('.slide');
               $('.slide').css({ marginLeft: 0 });
      });
}
};


setInterval(next, 3000);

$('.prev').click(function () {

         prev();

});



$('.next').click(function () {

         next();

});




$("#pic1").hover(
	function () { // mouseover
		$(this).attr("src","img/new/MxP1m_105352_7.jpg");
	},
	function () { // mouseout
		$(this).attr("src","img/new/BiuPv_105352_1.jpg");
	}
);

$("#pic2").hover(
	function () { // mouseover
		$(this).attr("src","img/new/NzdWl_105341_7.jpg");
	},
	function () { // mouseout
		$(this).attr("src","img/new/SdeMM_105341_1.jpg");
	}
);

$("#pic3").hover(
	function () { // mouseover
		$(this).attr("src","img/new/fweOs_105342_1.jpg");
	},
	function () { // mouseout
		$(this).attr("src","img/new/jgulW_105343_1.jpg");
	}
);
