
jQuery(document).ready(function(){
	window.sr = ScrollReveal({ reset: true });

	//sr.reveal('.backgroundImg', { 
		//reset: true, 
		//duration: 500, 
		//delay: 300, 
		//scale: 1.5, 
		//mobile: true});
	sr.reveal('.aboutSOS', { 
		reset: true, 
		duration: 500,
		delay: 300, 
		scale: 1.5,
		easing: 'ease-in-out', 
		mobile: true});
	sr.reveal('.whoHonorees', { 
		reset: true, 
		duration: 500, 
		delay: 300, 
		easing: 'ease-in-out',
		scale: 0.9, 
		mobile: true});
	sr.reveal('.listHonorees', { 
		reset: true, 
		duration: 500, 
		delay: 300,
		viewFactor: 0.3,
		easing: 'ease-in-out', 
		scale: 1.5, 
		mobile: true});
	sr.reveal('.thursdayNetwork', { 
		reset: true, 
		duration: 500, 
		delay: 300, 
		scale: 1.5, 
		easing: 'ease-in-out',		
		mobile: true});
	sr.reveal('.answerTN', { 
		reset: true, 
		duration: 500, 
		delay: 300, 
		easing: 'ease-in-out',
		scale: 1.5, 
		mobile: true});
	//sr.reveal('.contactUs', { 
	//	reset: true, 
	//	duration: 500, 
	//	delay: 300, 		
	//	scale: 1.5, 
	//	mobile: true} );
})


//afterReveal: function('.contactUs'){jQuery('.typewriter h2').addClass('type')}