$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Header', 'Features', 'Info', 'FAQ'],
        showActiveTooltip: false,
        
        // Scrolling
        fitToSection: true,

        //Design
        sectionsColor : ['#4BBFC3', '#7BAABE', '#4BBFC3'],
        responsiveWidth: 767,
        verticalCentered: false,

    	});
});