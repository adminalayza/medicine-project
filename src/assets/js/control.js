


$(document).ready(function(){
	
	
	var windowW = $(window).innerWidth();
	var windowH = $(window).innerHeight();
	 
	
	function check(){
		//windowW = $(window).innerWidth();
		//windowH = $(window).innerHeight();
		
		innerContent = $('#inner-content').innerHeight();
		subfooter = $('#sub-footer').innerHeight();
		footer= $('#footer').innerHeight();
		totalHightAll= subfooter+footer+innerContent;
		
		containerrightW = (windowW-213);
		
	
		$('.container-right').css("width",containerrightW +"px"); 
		$('.container-right').css("height",totalHightAll +"px"); 
		$('.container-left').css("height",totalHightAll+"px"); 
		
		
		
	}; 
	
	if (windowW >= 960) {  
		check (); 
	}
	
	

});


$(window).resize(function(){
	
	
	var windowW = $(window).innerWidth();
	var windowH = $(window).innerHeight();
	 
	
	function check(){
		//windowW = $(window).innerWidth();
		//windowH = $(window).innerHeight();
		
		innerContent = $('#inner-content').innerHeight();
		subfooter = $('#sub-footer').innerHeight();
		footer= $('#footer').innerHeight();
		totalHightAll= subfooter+footer+innerContent;
		
		containerrightW = (windowW-213);
		
		$('.container-right').css("width",containerrightW +"px"); 
		$('.container-right').css("height",totalHightAll +"px"); 
		$('.container-left').css("height",totalHightAll+"px"); 
		
		
		
	}; 
	
	if (windowW >= 960) {  check (); }
	
	

});




/*
$(window).resize(function(){
	
	function check(){
		windowW = $(window).innerWidth();
		windowH = $(window).innerHeight();
		
		innerContent = $('#inner-content').innerHeight();
		subfooter = $('#sub-footer').innerHeight();
		footer= $('#footer').innerHeight();
		totalHightAll= subfooter+footer+innerContent;
		
		containerrightW = (windowW-213);
		
		

		$('.container-right').css("width",containerrightW +"px"); 
		$('.container-right').css("height",totalHightAll +"px"); 
		$('.container-left').css("height",totalHightAll+"px"); 
		
	}; 
	
	check();

});
top-nav-res

*/

//  Slow and slide funcion

$(function(){ $("#menu-index a").on('click',function(){ var this_id = $(this).attr('href'); $('html, body').animate({ scrollTop: $(this_id).offset().top-60 }, 1000); return false; }); });

$(function(){ $("#top-nav-res a").on('click',function(){ var this_id = $(this).attr('href'); $('html, body').animate({ scrollTop: $(this_id).offset().top-60 }, 1000); return false; }); });

$(function(){ $(".res-btn a").on('click',function(){ var this_id = $(this).attr('href'); $('html, body').animate({ scrollTop: $(this_id).offset().top-60 }, 1000); return false; }); });


$(function(){ $(".container-left a").on('click',function(){ var this_id = $(this).attr('href'); $('html, body').animate({ scrollTop: $(this_id).offset().top-60 }, 1000); return false; }); });



