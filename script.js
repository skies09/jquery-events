$(document).ready(function() {


	$("#stream1_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});


});


$('p').click(function() {
	$('p').css('color', 'red');
});

$('h2').hover(function() {
	$('h2').css('background-color', 'lightblue');
});

$('.bottom_button').mouseover(function() {
	$('body').css('background-color', 'black');
});

$('.bottom_button').mouseout(function() {
	$('body').css('background-color', '#eee');
});

$("#hr_html").hover(function() {
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_html").addClass("h2_font_size");

});

$("#hr_mysql").hover(function() {
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_mysql").addClass("h2_font_size");
});

$("#hr_python").hover(function() {
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_python").addClass("h2_font_size");
});

$("#hr_jquery").hover(function() {
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_jquery").addClass("h2_font_size");
});

$("#hr_django").hover(function() {
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_css").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_django").addClass("h2_font_size");
});

$("#hr_css").hover(function() {
	$("#hr_mysql").removeClass("h2_font_size");
	$("#hr_python").removeClass("h2_font_size");
	$("#hr_jquery").removeClass("h2_font_size");
	$("#hr_django").removeClass("h2_font_size");
	$("#hr_html").removeClass("h2_font_size");
	$("#hr_css").addClass("h2_font_size");
});


$('#html_button').mouseenter(function() {
	$('#html_para').slideToggle(1000);
});

  $("#mysql_button").mouseenter(function(){
        $('#mysql_para').fadeTo(1000, 0.1);
    });
    $("#mysql_button").mouseleave(function(){
        $('#mysql_para').fadeTo(1000, 1);
    });
    

$(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
});