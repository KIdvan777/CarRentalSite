import $ from 'jquery';

class AnimateScroll {
	constructor(name, direction, speed){
		this.windowHeight = $(window).height();
		this.windowScrollTop =  $(window).scrollTop();
		this.windowScrollPosBottom = this.windowHeight + this.windowScrollTop;
		this.name = name;
		this.onWindowScroll();	
	}

	onWindowScroll(){
		this.windowHeight = $(window).height();
		this.windowScrollTop =  $(window).scrollTop();
		this.windowScrollPosBottom = this.windowHeight + this.windowScrollTop;
		$(window).scroll(this.animateScroll());	
	}

	animateScroll(name,direction, speed){

		var that = this;
		
		 this.name.each(function () {
		 	this.objectOffset = $(this).offset();	 	
			this.objectOffsetTop = this.objectOffset.top;

			if(!$(this).hasClass("hidden")){

						if(direction == "right"){

							$(this).css({
								"opacity" : 0,
								"right"   : "700px",
								"position"	: "relative"
							});

						}else{
								$(this).css({
								"opacity" : 0,
								"right"   : "-700px",
								 "position"	: "relative"
							});
							
						}

						$(this).addClass("hidden");
					}

					if(!$(this).hasClass("animation-complete")){

						if(that.windowScrollPosBottom > this.objectOffsetTop){
								$(this).animate({ "opacity": 1, "right": 0, "position": "fixed"},
									speed).addClass("animation-complete");

							}
					}
			
		 });

	}
	
}

export default AnimateScroll;