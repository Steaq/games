// выполняется когда документ полностью
// загрузился

$(document).ready(function () {

	var navbarTogglerIcon = '#nticon';
	var clsicon = '#clsicon';
	$(navbarTogglerIcon).on('click', function () {
		$(navbarTogglerIcon).css('display', 'none');
		$(clsicon).css('display', 'block');
	});

	$(clsicon).on('click', function () {
		$(navbarTogglerIcon).css('display', 'block');
		$(clsicon).css('display', 'none');
	});

	$('#footer_logo').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: '0px'}, 300);
		return false;
	});

});
