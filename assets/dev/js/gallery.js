jQuery(document).ready(function($) {
	
	$('.thumbnail-row .thumbnail').click(function(e){
	      e.preventDefault();

	      //SET NEW PHOTO
	      var photo_fullsize =  $(this).attr('src');
	      $('#active-image img').attr('src', photo_fullsize);

	      //UPDATE ACTIVE THUMBNAIL
	      $('.thumbnail-row').find('.active-thumb').removeClass('active-thumb');
	      $(this).addClass('active-thumb');

	});

});
