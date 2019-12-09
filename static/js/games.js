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

});
