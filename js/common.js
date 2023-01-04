// JavaScript Document

/*--------------sticky--start------------*/

$(document).ready(function(){
    $('.sticky').stickMe(); 
  })
  
/*--------------sticky--end------------*/  

/*--------------mobile-menu--start------------*/

jQuery(document).ready(function(){
	jQuery("#menu-button").bind('touchstart mousedown', function(event){
	   event.preventDefault();
	   if (jQuery("#menu-button").hasClass("menu-opened"))
	   {
    jQuery("#menu-button").removeClass("menu-opened");
	   }
	   else{
	    jQuery("#menu-button").addClass("menu-opened");
	   }
	});
});  

/*--------------mobile-menu--end------------*/
