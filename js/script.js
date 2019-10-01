$( document ).ready(function() {



    var Page1 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[0];
    var Page2 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[1];
    var Page3 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[2];
    var Page4 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[3];
    var Page5 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[4];
    var Page6 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[5];

    document.getElementsByTagName('body')[0].onscroll = function() {
    	setTimeout(function() {
    		if (Page2.classList.contains('active'))
	    	{
	    		$('a > span').removeClass('fp-sr-only-white');
	    		$('a > span').addClass('fp-sr-only-blue');
	    	}
    	}, 100)	
	};

  var intViewportWidth = window.innerWidth;
    var circles = [
        document.getElementById( 'fp-nav' ).getElementsByTagName('a')[0].getElementsByTagName('span'),
        document.getElementById( 'fp-nav' ).getElementsByTagName('a')[1].getElementsByTagName('span'),
        document.getElementById( 'fp-nav' ).getElementsByTagName('a')[2].getElementsByTagName('span'),
        document.getElementById( 'fp-nav' ).getElementsByTagName('a')[3].getElementsByTagName('span'),
        document.getElementById( 'fp-nav' ).getElementsByTagName('a')[4].getElementsByTagName('span'),
        document.getElementById( 'fp-nav' ).getElementsByTagName('a')[5].getElementsByTagName('span')
    ];

    if (intViewportWidth < 768) {
        $(circles[0]).addClass('fp-sr-only-orange');
        $(circles[1]).addClass('fp-sr-only-orange');
        $(circles[2]).addClass('fp-sr-only-orange');
        $(circles[3]).addClass('fp-sr-only-orange');
        $(circles[4]).addClass('fp-sr-only-orange');
        $(circles[5]).addClass('fp-sr-only-orange');
    }



	setInterval(function() 
	{

		if (intViewportWidth > 720) {
      if(Page1.classList.contains('active'))
        {
          $('a > span').removeClass('fp-sr-only-blue');
            $('a > span').addClass('fp-sr-only-white');
            $('.soc-icons > a').removeClass('blue-color');
        $('.soc-icons > a').addClass('white-color');
        }

        if(Page2.classList.contains('active'))
        {
            $('a > span').removeClass('fp-sr-only-white');
        $('a > span').addClass('fp-sr-only-blue');
        $('.soc-icons > a').removeClass('blue-color');
        $('.soc-icons > a').addClass('white-color');
        }

        if(Page3.classList.contains('active'))
        {
          $('a > span').removeClass('fp-sr-only-white');
        $('a > span').addClass('fp-sr-only-blue');
        $('.soc-icons > a').removeClass('white-color');
        $('.soc-icons > a').addClass('blue-color');
        }

        if(Page3.classList.contains('active') || Page4.classList.contains('active') || Page5.classList.contains('active'))
        {
          $('a > span').removeClass('fp-sr-only-white');
        $('a > span').addClass('fp-sr-only-blue');
        $('.soc-icons > a').removeClass('white-color');
        $('.soc-icons > a').addClass('blue-color');
        }

        if(Page6.classList.contains('active')) {
          $('a > span').addClass('fp-sr-only-white');
        $('a > span').removeClass('fp-sr-only-blue');
        $('.soc-icons > a').removeClass('white-color');
        $('.soc-icons > a').addClass('blue-color');
        }
    }

    }, 250);

    

    var videoBox = document.getElementById('videoBox');
    var calcBox = document.getElementById('calcBox');
    var videoButton = document.getElementById('videoBtn');
    var calcButton = document.getElementById('calcBtn');

    videoButton.addEventListener('click', function(){
   		this.classList.add("d-none");
   		calcBox.classList.add("d-none");
   		videoBox.classList.remove("d-none");
   		calcButton.classList.remove("d-none");
   	});	

   	calcButton.addEventListener('click', function(){
   		this.classList.add("d-none");
   		videoBox.classList.add("d-none");
   		calcBox.classList.remove("d-none");
   		videoButton.classList.remove("d-none");
   	});	

    
    
});

