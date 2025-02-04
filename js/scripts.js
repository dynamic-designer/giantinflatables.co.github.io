var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {
	/* tabs */
	$('.tab-section-wrap .tab-content:first-child').fadeIn();
	$('.tab-block:first-child').addClass('active');
	$('.tab-block').click(function() {
		$('.tab-block').removeClass('active');
		$(this).addClass('active');
		let match1 = $('.tab-block.active').attr('data-tab');
		$('.tab-content').removeClass('active').hide();
		$(`.tab-content[data-content="${match1}"]`).fadeIn();
	});
	/*  associations-slider */
	if ($('.associations-slider').length > 0) {
		$('.associations-slider').slick({
			infinite: true,
			slidesToShow: 3,
			rows: 2,
			autoplay: true,
			autoplaySpeed: 4000,
			// pauseOnHover: false,
    		// speed: 1000,
			prevArrow:"<button class='slick-prev'><img src='images/icons/right-arrow.png'></button>",
			nextArrow:"<button class='slick-next'><img src='images/icons/left-arrow.png'></button>",
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					},
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					},
				}, {
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
	}
	/* footer sliders */
	$('.footer-bottom-row.owl-carousel').owlCarousel({
		dots: false,
		mouseDrag: false,
		nav:true,
		navText: ["<img src='images/icons/left-arrow.png'>", "<img src='images/icons/right-arrow.png'>"],
		autoplay: 2000,
		autoplaySpeed: 1000,
		responsive:{
			0:{
				items:1,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			575:{
				items:2,
				loop:true,
				autoplay: {
					delay: 2000,
				},
			},
			992:{
				items:3,
			},
		}
	});
	/* fullpage */
	$('#fullpage').fullpage({
		
	});
		
} );

/* Script on load
------------------------------------------------------------------------------*/
$( window ).on( 'load',function() {

} );

/* Script on scroll
------------------------------------------------------------------------------*/
$( window ).on( 'scroll',function() {
     
} );

/* Script on resize
------------------------------------------------------------------------------*/
$( window ).on( 'resize',function() {
	
} );

/* Script all functions
------------------------------------------------------------------------------*/
