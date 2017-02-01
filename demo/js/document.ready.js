$(document).ready(
	function() {
		var options = {
			width: 520,
			height: 280,
			imageNum: 5,
			speed: 2000,
			links: {
				link1: 'https://github.com/alex3347/jquery.swiper',
				link2: 'https://github.com/alex3347/jquery.swiper',
				link3: 'https://github.com/alex3347/jquery.swiper',
				link4: 'https://github.com/alex3347/jquery.swiper',
				link5: 'https://github.com/alex3347/jquery.swiper'

			},
			images: {
				image1: 'img/1.jpg',
				image2: 'img/2.jpg',
				image3: 'img/3.jpg',
				image4: 'img/4.jpg',
				image5: 'img/5.jpg'

			}
		};
		$(".swiper-showArea").swiper(options);
	}
);