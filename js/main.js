$(document).ready(function() {
	

	//click function
	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".maian_mnu ul").slideToggle();
	});
	$(".phone_footer_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".mail_footer_buttons").click(function() {
		$(this).next().slideToggle();
	});


	//fancybox
	$(".fancybox").fancybox();


	//waypoints
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	
	//owl-Carousel
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		autoPlay: 4000,
		autoHeight : true
	});
	owl.on(".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			//owl.trigger("owl.prev");
		} else {
			//owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});

	
	//form callback
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});


});

//Preloader
$(window).load(function() {
	$("loader_inner").fadeOut();
	$(".loader").delay(900).fadeOut("slow");
});
