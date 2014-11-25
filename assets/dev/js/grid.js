jQuery(document).ready(function($) {
	
	var current;
	var open = false;


	$('.grid-item').click(function(e){
	      e.preventDefault();
	      
	      
	      if (open) {
	      	$(".overlay-content").addClass('hidden');
	      	open = false;
	      }
	      open = true;

	      current = $(this).attr('js-data');
	      $('#' + current).toggleClass('hidden');
	      

	});


	$('.exit-button').click(function(e){
	      e.preventDefault();

	      $('#' + current).addClass('hidden');

    }); 
});
