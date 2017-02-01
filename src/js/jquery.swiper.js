(function($) {
	$.fn.swiper = function(options) {
		var defaults = {
			width: 520,
			height: 280,
			imageNum: 5,
			speed: 2000,
			links: {},
			images: {
				image1: 'img/1.jpg',
				image2: 'img/2.jpg',
				image3: 'img/3.jpg',
				image4: 'img/4.jpg',
				image5: 'img/5.jpg'
			}
		};
		
		var settings = $.extend(defaults, options);
		
		$(this).css({
			"width": settings.width,
			"height": settings.height
		});
		$(".swiper-imgArea").css({
			"width": settings.imageNum * settings.width,
			"height": settings.height
		});
		
		var $swiper_btnSlideL = $("<div class='swiper-btnSlide swiper-btnSlideL'>&lt;</div>"),
				$swiper_btnSlideR = $("<div class='swiper-btnSlide swiper-btnSlideR'>&gt;</div>");
		$(".swiper-showArea").append($swiper_btnSlideL).append($swiper_btnSlideR);
		
		for(var num = 1, len = settings.imageNum; num <= len; num++) {
			var swiperLink = eval('settings.links.link' + num),
					swiperImage = eval('settings.images.image' + num);
			swiperLink==undefined?(swiperLink="javascript:void(0)"):null;
			var $swiper_imgArea_li = $("<li><a href='" + swiperLink + "'><img src='" + swiperImage + "'/></a></li>"),
					$swiper_btn_li = (num == 1 ? $("<li class='swiper-current'>" + num + "</li>") : $("<li>" + num + "</li>"));
			$swiper_imgArea_li.appendTo($(".swiper-imgArea"));
			$swiper_btn_li.appendTo($(".swiper-btn"));
		}

		var flag = "moveL",
			i = 0;

		function showImage() {
			if(i == -(settings.imageNum - 1)) {
				flag = "moveR";
			} else if(i == 0) {
				flag = "moveL";
			}
			if(flag == "moveL") {
				$(".swiper-imgArea").animate({
					left: i * settings.width
				}, "slow");
				$(".swiper-btn li").removeClass("swiper-current").eq(-i).addClass("swiper-current");
				i--;
			} else if(flag == "moveR") {
				$(".swiper-imgArea").animate({
					left: i * settings.width
				}, "slow");
				$(".swiper-btn li").removeClass("swiper-current").eq(-i).addClass("swiper-current");
				i++;
			}
		}
		showImage();
		var timer = setInterval(showImage, settings.speed);
		$(".swiper-imgArea").hover(
			function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(showImage, settings.speed);
			});
		$(".swiper-btn li").hover(function() {
				clearInterval(timer);
				i = -$(this).index();
				$(".swiper-imgArea").animate({
					left: i * settings.width
				}, "fast");
				$(this).addClass("swiper-current").siblings().removeClass("swiper-current");
			},
			function() {
				timer = setInterval(showImage, settings.speed);
			});
		$(".swiper-btnSlide").hover(
			function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(showImage, settings.speed);
			}).click(function() {
			switch(i) {
				case 0:
					$(this).attr("class") == "swiper-btnSlide swiper-btnSlideL" ? i = -(settings.imageNum - 1) : i--;
					break;
				case -(settings.imageNum - 1):
					$(this).attr("class") == "swiper-btnSlide swiper-btnSlideL" ? i++ : i = 0;
					break;
				default:
					$(this).attr("class") == "swiper-btnSlide swiper-btnSlideL" ? i++ : i--;
					break;
			}
			$(".swiper-imgArea").animate({
				left: i * settings.width
			}, "fast");
			$(".swiper-btn li").removeClass("swiper-current").eq(-i).addClass("swiper-current");
		});
		return this;
	}
}(jQuery));