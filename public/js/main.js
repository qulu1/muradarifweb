jQuery(document).ready(function($) {
		// preloader
		$(window).on('load', function() { 
  			$('#status').fadeOut(5000);
 			$('#preloader').delay(1500).fadeOut("slow");
 			$('body').delay(1500).css({
 				height: 'auto',
 				overflow: 'visible'
 			});
		});

		// nice scroll
		$(document).ready(
			function() {
				$("html").niceScroll();
			}
		);

		// navigation color
		$(window).ready(function(event) {
			for (var i = 0; i < $('.color_nav').length; i++) {	
				var obj = $('.color_nav').eq(i).attr('id');
      			$('.scroll').removeClass('color');
				$('li[data-section$='+obj+']').addClass('color');
			};
		});


		// mobile burger
		$(".burger").click(function(event) {
			if(!$(".header_main ul").hasClass('black')){
				$(this).children('img').css('transform', 'rotate(360deg)').attr('src','assets/images/close.png');
				$(".header_main ul").css('background', 'black').slideDown().addClass('black');
			}else{
				$(this).children('img').css('transform', 'rotate(-360deg)').attr('src','assets/images/burger.png');
				$(".header_main ul").slideUp().css('background', 'black').removeClass('black');
			}
		});


		// scale
		$('.gallery_images').hover(function() {
			$(this).children('a').children('img').css('transform','scale(1.11)');
		}, function() {
			$(this).children('a').children('img').css('transform','scale(1)');
		});

		// player

		$(".red_div").click(function(event) {
				$('.player').slideDown();
				var data=$(this).siblings('.img_songs').data();
				var attrAudio = $('audio').attr('src');
				var red = $(".red_div");
				if (!$(this).hasClass('play') ) {
					red.removeClass('play');
					Array.prototype.forEach.call(red,function(e){
						e.children[0].src = 'assets/images/play.png'
					})
					$(this).children('img').attr('src','assets/images/pause.png');
					if(data.img !== attrAudio) {
						$(".singer_player").attr('src', data.img);
					}
						$(this).addClass('play');
					}else{
						$(this).removeClass('play');
						$(this).children('img').attr('src','assets/images/play.png');
				}
				$('button')[0].css('opacity', '0');
				$('button')[0].click();

			});


		// scrollTop
		$('.up').click(function(event) {
			$('body').animate({"scrollTop": "0"}, 350);
		});

		$("a.video_link").click(function() {
                 $.fancybox({
                  'padding'             : 0,
                  'autoScale'   : false,
                  'transitionIn'        : 'none',
                  'transitionOut'       : 'none',
                  'title'               : this.title,
                  'width'               : 1080,
                  'height'              : 560,
                  'href'                : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/') + '&autoplay=1',
                  'type'                : 'swf',    // <--add a comma here
                  'swf'                 : {'allowfullscreen':'true'} // <-- flashvars here
                  });
                 return false;

            }); 
});		
		