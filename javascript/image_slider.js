$(function(){
    //Defining Variables
    var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 0;
	//cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
    var amt = $slides.length;
	var interval;

    //Start Function
	function startSlider(){
		interval = setInterval(function(){
			$slideContainer.animate({"margin-left":'-='+width},animationSpeed,function(){
				currentSlide++;
				if (currentSlide ===$slides.length-1){
					currentSlide = 0;
					$slideContainer.css('margin-left',0);
				}
			});
		},pause);
	}

    //Stop Function
	function stopSlider(){
		clearInterval(interval);
	}

    //Play Button
    $('#play').click(function(){
        startSlider();
    });

    //Pause Button
    $('#stop').click(function(){
        stopSlider();
    });

    //Previous Button
    $('#previous').click(function(){
        if (currentSlide === 0) {
            currentSlide = amt - 1;
            $slideContainer.css('margin-left',-4320);
        }
        currentSlide -= 1;
        $slideContainer.animate({'margin-left':'+='+720},1000);
    });

    //Next Button
    $('#next').click(function(){
        if (currentSlide==amt-1){
            currentSlide=0;
            $slideContainer.css('margin-left',0);
        }
        $slideContainer.animate({'margin-left':'-='+720},1000);
        currentSlide += 1;
        console.log(currentSlide);
    });
});
