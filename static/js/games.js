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

    // Sonstructs the suggestion engine
    /*var games = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // The url points to a json file that contains an array of country names
        prefetch: 'http://api.gamesportal.com/search.json'
    });*/
    /*
    $('.typeahead').typeahead(null, {
        name: 'games',
        source: games,
    });*/

	var searchGames = new Bloodhound({
	  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  prefetch: 'http://api.gamesportal.com/search.json?t=game',
	  remote: {
	    url: 'http://api.gamesportal.com/search.json?t=game&q=%QUERY',
	    wildcard: '%QUERY'
	  }
	});

	/*$('#remote .typeahead').typeahead(null, {
	  name: 'best-pictures',
	  display: 'value',
	  source: bestPictures
	});*/

	$('#custom-templates .typeahead').typeahead(null, {
	  name: 'searchGames',
	  display: 'name',
	  source: searchGames,
	  templates: {
	    suggestion: Handlebars.compile('<div><strong>{{name}}</strong> – {{description}}</div>')
	  }
	});

});
