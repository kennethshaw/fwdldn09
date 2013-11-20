$(document).ready(function() {

	$('#featured-work-link').click(function(e) {
	e.preventDefault();
	$('html,body').animate({
	scrollTop: $('#featured-work').offset().top -20}, 1000);
	});

	$('#year-2013-link').click(function(e) {
	e.preventDefault();
	$('html,body').animate({
	scrollTop: $('#year-2013').offset().top -20}, 1000);
	});

	$('#year-2012-link').click(function(e) {
	e.preventDefault();
	$('html,body').animate({
	scrollTop: $('#year-2012').offset().top -20}, 1000);
	});

	$('#year-2011-link').click(function(e) {
	e.preventDefault();
	$('html,body').animate({
	scrollTop: $('#year-2011').offset().top -20}, 1000);
	});


});