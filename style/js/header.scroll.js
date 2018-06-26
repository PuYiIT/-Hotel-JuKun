$(window).scroll(function() {
    if ($(this).scrollTop() > 292){  // 这里的500是当向下滚动多少像素时执行。
        $('header').addClass("sticky");  // 向下滚动时为header添加新的class样式。
		$('header').removeClass("stickyd");  // 向下滚动时为header添加新的class样式。
    }
    else{
        $('header').removeClass("sticky");  // 向上移动移除class样式。
		$('header').addClass("stickyd");  // 向下滚动时为header添加新的class样式。

    }
});  

button1up=new Image(400,250);
button1up.src="images/jd_2.jpg";
button1down=new Image(400,250);
button1down.src="images/jd_1.jpg";
button2up=new Image(400,250);
button2up.src="images/jd_4.jpg";
button2down=new Image(400,250);
button2down.src="images/jd_3.jpg";
button3up=new Image(400,250);
button3up.src="images/jd_6.jpg";
button3down=new Image(400,250);
button3down.src="images/jd_5.jpg";
button4up=new Image(400,250);
button4up.src="images/jd_8.jpg";
button4down=new Image(400,250);
button4down.src="images/jd_7.jpg";
button5up=new Image(400,250);
button5up.src="images/jd_10.jpg";
button5down=new Image(400,250);
button5down.src="images/jd_9.jpg";
button6up=new Image(400,250);
button6up.src="images/jd_12.jpg";
button6down=new Image(400,250);
button6down.src="images/jd_11.jpg";