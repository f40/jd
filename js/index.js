$(document).ready(function() {
	$(".banner ol li").mouseover(function(event) {
		var $index=$(this).index();

		$(this).addClass('on').siblings().removeClass('on');

		$(".banner ul li").eq($index).fadeIn().siblings().fadeOut();

		$key=$index;
	});


		var $key=0; //这个变量来控制往下播放的关键
	var time=setInterval(autoplay, 3000);


	function autoplay()
	{
		$key++;
		if($key>5)
		{
			$key=0;

		}

		$(".banner ol li").eq($key).addClass('on').siblings().removeClass('on');
		$(".banner ul li").eq($key).fadeIn().siblings().fadeOut();
	}




	$(".banner ul li").hover(function() {
		clearInterval(time)
	}, function() {

		clearInterval(time);
		time=setInterval(autoplay,2000)
		
	});





		/*subnav*/

	$(".nav-sub li").hover(function() {
			$(this).children('.tabllist').show();// 首先等自己兄弟变深色
			$(this).parent('li').siblings().find('.tabllist').hide();
			// 从自身出发，找到爸爸的兄弟的孩子叫jd。
		}, function() {
			$(".tabllist").hide();
		});




/*img lunbo*/
	var $key2=0;

	$(".crright").click(function(){
		$key2++;
		if($key2>3)
		{

			$key2=0;

			$(".banner-bt .item ul").css("left",0);
		}

		
		$(".banner-bt .item ul").stop().animate({left:-$key2*608}, 2000);

	})

	$(".crleft").click(function(){
		$key2--;
		if($key2<0)
		{
			$key2=3;

			$(".banner-bt .item ul").css("left",-3654);
		}

		$(".banner-bt .item ul").stop().animate({left:-$key2*608},2000)
	})


/*list01 img */
	
	$(".list01").find('.item').hover(function() {

		
		
		$(this).find('img').stop().animate({marginLeft:"-17px"}, 500)
	}, function() {
		
		$(this).find('img').stop().animate({marginLeft:0}, 500)
	
	});



});



/*小banner*/
$(document).ready(function() {
	
	$(".bann1 ol span").hover(function() {
		var $key=$(this).index()


		$(".bann1 .slide-item").stop().animate({left:-$key*473},500)
		$(".bann1 span").eq($key).addClass('curr').siblings().removeClass('curr')
		
	});



	$(".bann2 ol span").hover(function() {
		var $key=$(this).index();
		$(".bann2 .slide-item").stop().animate({left:-$key*473},500)
		$(".bann2 ol span").eq($key).addClass('curr').siblings().removeClass('curr')

	});

	$(".bann3 ol span").hover(function() {
		var $key=$(this).index();
		$(".bann3 .slide-item").stop().animate({left:-$key*473},500)
		$(".bann3 ol span").eq($key).addClass('curr').siblings().removeClass('curr')

	});

	/*4F*/
	$(".bann4 ol span").hover(function() {
		var $key=$(this).index();
		$(".bann4 .slide-item").stop().animate({left:-$key*473},500)
		$(".bann4 ol span").eq($key).addClass('curr').siblings().removeClass('curr');
	});

	/*5F*/
	$(".bann5 ol span").hover(function() {
		var $key=$(this).index();
		$(".bann5 .slide-item").stop().animate({left:-$key*473},500)
		$(".bann5 ol span").eq($key).addClass('curr').siblings().removeClass('curr');
	});


	$(".bann6 ol span").hover(function() {
		var $key=$(this).index();
		$(".bann6 .slide-item").stop().animate({left:-$key*473},500)
		$(".bann6 ol span").eq($key).addClass('curr').siblings().removeClass('curr');
	});


	$(".bann7 ol span").hover(function() {
		var $key=$(this).index();
		$(".bann7 .slide-item").stop().animate({left:-$key*473},500)
		$(".bann7 ol span").eq($key).addClass('curr').siblings().removeClass('curr');
	});


	$(".bann8 ol span").hover(function() {
		var $key=$(this).index();
		$(".bann8 .slide-item").stop().animate({left:-$key*473},500)
		$(".bann8 ol span").eq($key).addClass('curr').siblings().removeClass('curr')
	});

});

$(document).ready(function() {
	$(".wm-m1 .cl1 li").hover(function() {
		var $key=$(this).index();
		$(".wm-m1 .line").stop().animate({left:$key*158},800)
		$(this).addClass('curr').siblings().removeClass('curr')
		$(".wm-m1 .wm-m-bd ul").eq($key).show().siblings().hide();
	});

	$(".wm-m2 .cl2 li").hover(function() {
		var $key=$(this).index();
		$(".wm-m2 .line").stop().animate({left:$key*158},800)
		$(this).addClass('curr').siblings().removeClass('curr');
		$(".wm-m2 .wm-m-bd ul").eq($key).show().siblings().hide();
	});

	$(".wm-m3 .cl3 li").hover(function() {
		var $key=$(this).index();
		$(".wm-m3 .line").stop().animate({left:$key*158},800)
		$(".wm-m3 .wm-m-bd ul").eq($key).show().siblings().hide();
		$(this).addClass('curr').siblings().removeClass('curr')
	});

	$(".wm-m4 .cl4 li").hover(function() {
		var $key=$(this).index();
		$(".wm-m4 .line").stop().animate({left:$key*158},800)
		$(this).addClass('curr').siblings().removeClass('curr');
		$(".wm-m4 .wm-m-bd ul").eq($key).show().siblings().hide();
	});

	$(".wm-m5 .cl5 li").hover(function() {
		var $key=$(this).index();
		$(".wm-m5 .line").stop().animate({left:$key*158},800)
		$(this).addClass('curr').siblings().removeClass('curr');
		$(".wm-m5 .wm-m-bd ul").eq($key).show().siblings().hide();
	});

	$(".wm-m6 .cl6 li").hover(function() {
		var $key=$(this).index();
		$(".wm-m6 .line").stop().animate({left:$key*158},800)
		$(this).addClass('curr').siblings().removeClass('curr');
		$(".wm-m6 .wm-m-bd ul").eq($key).show().siblings().hide();
	});


	$(".wm-m7 .cl7 li").hover(function() {
		var $key=$(this).index();
		$(".wm-m7 .line").stop().animate({left:$key*158},800)
		$(this).addClass('curr').siblings().removeClass('curr');
		$(".wm-m7 .wm-m-bd ul").eq($key).show().siblings().hide();
	});


	$(".wm-m8 .cl8 li").hover(function() {
		var $key=$(this).index();
		$(".wm-m8 .line").stop().animate({left:$key*158},800)
		$(this).addClass('curr').siblings().removeClass('curr');
		$(".wm-m8 .wm-m-bd ul").eq($key).show().siblings().hide();
	});


	$(".wm-r8 .cl8-b li").hover(function() {
		var $key=$(this).index();
		$(".wm-r8 .line").stop().animate({left:$key*40},800)
		$(this).addClass('curr').siblings().removeClass('curr');
		$(".wm-r8 .wm-m-bd ul").eq($key).show().siblings().hide();
	});





/*3F pic*/
	$(".fore .item a").hover(function() {
		$(this).siblings('a').stop().fadeTo(300,0.7);
		$(this).parents(".item").siblings().find('a').stop().fadeTo(300,0.7);
		$(this).children('img').stop().animate({marginLeft:"-15px"}, 300)
	}, function() {
		$(".fore .item a").stop().fadeTo(300,1);
		$(this).children('img').stop().animate({marginLeft:0}, 300)
	});

	setInterval(autoplay, 2000);
	function autoplay(){
	
		     	$(".treasure span").hide()
				
				$(".treasure em").show();
				
			
		}



		
});


window.onload=function(){
		/*获取事件源 获取对象*/
		var buzhana=document.getElementById("buzhana");   /*获取事件源*/
		var no=document.getElementById("no");
		/*事件源.事件=function(){}*/
		buzhana.onclick=function(){
			/*关闭背景*/
			document.body.style.background="none"; /* 因为body本来在页面就是唯一的*/
			/*关闭那个盒子*/
			no.style.display="none";
		}
}













