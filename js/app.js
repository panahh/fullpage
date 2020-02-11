$(document).ready(function() {
	$('#fullpage').fullpage({
        //options here 
        menu: '#menu',
        lockAnchors: false,
		autoScrolling:true,
        scrollHorizontally: true,
        sectionsColor : ['#ccc', '#ccf','#cfc','fcc'],
	anchors:['firstPage', 'secondPage','thirdPage','fourthPage'],
	paddingTop: '3em',
	paddingBottom: '10px',
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});
