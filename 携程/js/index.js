window.onload = function(){
	var mySwiper = new Swiper('.slider-touch', {
		autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
		autoplayDisableOnInteraction : false,//手指触屏滑动之后，重新开启自动轮播
		initialSlide :0,//初始显示的li的索引
		speed : 500,//滑动的速度
		observer:true,//当li节点被修改的时候自动更新Swiper
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		grabCursor : true,//鼠标抓手形状，触屏看不到
		pagination : '.swiper-pagination',//下面的图标跟随切换
		loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
	});


	
	//倒计时
	//设置结束时间
	var endTime = new Date();
	endTime.setFullYear(2019);
	endTime.setMonth(5);
	endTime.setDate(18);
	endTime.setHours(12);
	endTime.setMinutes(0);
	endTime.setSeconds(0);
	var endTimer = endTime.getTime();//获取结束时间
	//console.log(endTimer);
	var secskill_hour = document.getElementById("secskill-hour");
	var secskill_min = document.getElementById("secskill-min");
	var secskill_sec = document.getElementById("secskill-sec");
	//转换时间
	function changeTime(time,obj1,obj2,obj3){
		var nowTime = new Date();
		var sec = (time - nowTime.getTime())/1000;
		//console.log(sec);
		if (sec > 0)
		{
			var hour = Math.floor(sec/3600);//小时
			sec = sec%3600;//剩下多少秒钟
			var min = Math.floor(sec/60);//分钟
			sec = Math.floor(sec%60);//秒
			obj1.innerHTML = addZero(hour,2);
			obj2.innerHTML = addZero(min,2);
			obj3.innerHTML = addZero(sec,2);
		}else{
			clearInterval(timer);
		}
	}
	var timer = setInterval(function(){
		changeTime(endTimer,secskill_hour,secskill_min,secskill_sec);
	},1000);
	changeTime(endTimer,secskill_hour,secskill_min,secskill_sec);

	//补零功能
	function addZero(time,n){
		var str = '' + time;
		while (str.length < n)
		{
			str = "0" + time;
		}
		 return str;
	}

}