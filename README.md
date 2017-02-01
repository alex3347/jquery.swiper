# jQuery.swiper.js

## jQuery轮播图插件




**jQuery.swiper.js是一个让网页某div上运行轮播效果的jQuery插件**

具备自定义轮播图数量、轮播速度、图片添加外链等功能



**Demo地址：http://swiper.happyday.site/**





###文档



**1**.第一步引入本插件的js文件,需要和jQuery一起引用。

```html
<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script src="js/jquery.swiper.js"></script>
```

---

**2**.在html的适当位置引入swiper的结构及类名

```html
	<div class="swiper-showArea">
		<ul class="swiper-imgArea"></ul>
		<ul class="swiper-btn"></ul>
	</div>
```



---

**3**.使用时应根据使用情况进行参数初始化，参数的默认值如下。

```javascript

var defaults = {
width: 520,		//轮播图片宽度
height: 280,	//轮播图片高度
imageNum: 5,	//轮播图片数量
speed: 2000,	//轮播图片切换时间间隔（毫秒）
links: {},		//轮播图片的外链地址
images: {		//轮播图片的图片地址，可根据实际文件夹层级深度设置
image1: 'images/1.jpg',
image2: 'images/2.jpg',
image3: 'images/3.jpg',
image4: 'images/4.jpg',
image5: 'images/5.jpg'
}
};


```

自己添加的参数以options对象为容器
```javascript
var options = {
width: 520,
height: 280,
imageNum: 4,
speed: 1800,
links: {
link1: '//www.baidu.com',
link2: '//www.sogou.com',
link3: '//www.baidu.com',
link4: '//www.baidu.com'

},
images: {
image1: 'images/1.jpg',
image2: 'images/2.jpg',
image3: 'images/3.jpg',
image4: 'images/4.jpg'

}
};
```



---

**4**.html结构和options参数设置好了，之后进行引入即可

```javascript
$(".swiper-showArea").swiper(options);

 ```



---

**5**.插件的样式在jquery.swiper.css文件中，可根据需要进行更改



###许可



你可以随意使用本项目，只需要在您的项目中添加这么一行注释：

```html
jquery.swiper.js (//github.com/alex3347/swiper/) - Licensed under the MIT license

```