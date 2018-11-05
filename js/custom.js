$(function() {


	$("#js-services-a").on("click", function(e) {

	/*===== скрол первого блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-services").offset().top;

	$("html, body").animate({

		scrollTop: plansOffset
	}, 200);
	
	
	});
     /*===== появление меню навигации =====*/
   
  var headH = $("#js-header").height(),
  	   navH = $("#js-nav").height();


  $(document).on("scroll", function() {

  	var documentScroll = $(this).scrollTop();

  	if(documentScroll > headH) {

  		$("#js-nav").addClass("fixed");

  		$("#js-header").css("paddingBottom", navH);

  	} else{

  		$("#js-nav").removeClass("fixed");

  		$("#js-header").removeAttr("style");

  	}
  	
 
  });


  $("#js-about-a").on("click", function(e) {

	/*===== скрол второго блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-about").offset().top;

	$("html, body").animate({

		scrollTop: plansOffset
	}, 200);
	
	
});


$("#js-works-a").on("click", function(e) {

	/*===== скрол третьего блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-works").offset().top;

	$("html, body").animate({

		scrollTop: plansOffset
	}, 200);
	
	
});


$("#js-blog-a").on("click", function(e) {

	/*===== скрол четвёртого блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-blog").offset().top;

	$("html, body").animate({

		scrollTop: plansOffset
	}, 200);
	
	
});


$("#js-clients-a").on("click", function(e) {

	/*===== скрол пятого блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-clients").offset().top;

	$("html, body").animate({

		scrollTop: plansOffset
	}, 200);
	
	
});


$("#js-contacts-a").on("click", function(e) {

	/*===== скрол шестого блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-contacts").offset().top;

	$("html, body").animate({

		scrollTop: plansOffset
	}, 200);
	
	
});

/*===== появления модального окна====*/

	$("#js-start").on("click", function(e) {
		// body...
		e.preventDefault();

		$("#js-modal, #js-overlay").fadeIn(300);
		$("body").addClass("open-modal");
	
});
	$("#js-modal-close").on("click", function(e) {

		e.preventDefault();
		
		$("#js-modal, #js-overlay").fadeOut(200);
		$("body").removeClass("open-modal");


});

	         /*=====faq=====*/

	$(".faq-title").on("click", function(e) {

		e.preventDefault();

		var $this = $(this);

		if( !$this.hasClass(".active")){

		$(".faq-content").slideUp();

		$(".faq-title").removeClass(".active");

		}

		

		$this.next().slideToggle();

		$this.toggleClass(".active");
		

	});
/*=======   меню для моб устройств ======*/

	$(".menu-adaptiv-a").on("click", function(e) {

		e.preventDefault();

		$(".nav-element-moby").slideToggle(0);
	});

	/*====== скрол меню для первого блока моб версии====*/

	$("#js-services-a-moby").on("click", function(e) {

	e.preventDefault();

	var plansOffset = $(".services").offset().top;

	$("html, body").animate({

		scrollTop: plansOffset
	}, 200);});

   /*====== появление меню ====*/
	var headH = $("#js-header").height(),
  	   	navH = $("#js-nav-moby").height();



  $(document).on("scroll", function() {

  	var documentScroll = $(this).scrollTop();

  	if(documentScroll > headH) {

  		/*$("#js-nav-moby").addClass("fixed");*/

  		$("#js-header").css("paddingTop", navH);

  	} else{

  		$("#js-nav-moby").removeClass("fixed");

  		$("#js-header").removeAttr("style");

  	}
  	
 
  });

  $("#js-testimonials").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true
	});

});
