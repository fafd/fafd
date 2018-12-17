(function() {
	//小图片的轮播
	var all=document.querySelector('.picFouce');
	var box=document.querySelector('.picFouce_lun');
	var spas=document.querySelector('.picFouce_xiaB>ul').children;
	var square=document.querySelector('.picFouce_xiaB');
	var uls=document.querySelector('.picFouce_lun>ul');
	var mask=document.querySelector(".mask");
	var bigger=document.querySelector(".bigger");
	var imgk=bigger.children[0];
	var imgObj=document.querySelector(".picFouce_lun");
	//图片宽度
	var imgWidth=imgObj.offsetWidth;
	//获取包裹小图的a标签
	var smallA=document.querySelectorAll('.picFouce_xiaB a');
	var bigImg=document.querySelector(".bigger>img");

	animate(spas[0],{"opacity":1});
	uls.appendChild(uls.children[0].cloneNode(true));
	var timer1=setInterval(clickHandel,2000);

	//给箭头添加
	box.onmouseenter=function() {
		clearInterval(timer1);
		mask.style.display="block";
		bigger.style.display="block";
		for (var i = 0; i < smallA.length; i++) {
			bigImg.src=smallA[pic].href;
		}

	}
	box.onmouseleave=function() {
		timer1=setInterval(clickHandel,2000);
		mask.style.display="none";
		bigger.style.display="none";
	}
//鼠标移动
	box.onmousemove=function(e) {
		//小图到左上窗口的距离
		// var tt=document.documentElement.scrollTop;
		// console.log(tt);
		var top=all.offsetTop+150;
		var left=all.offsetLeft;

		// 遮罩层自身宽高
		var width=mask.offsetWidth;
		var height=mask.offsetHeight;

		//鼠标移动的位置
		var x=e.clientX-left-width/2;
		var y=e.clientY-top-height/2;


		//控制左边和上边的移动范围
		//if(x<=0){
		//  x=0;
		//}else{
		//	x=x;
		//}
		x=x<=0?0:x;
		y=y<=0?0:y;
		//控制遮罩层右边和下边的移动范围
		var bigHeight=all.offsetHeight-height;
		var bigWidth=all.offsetWidth-width;
		x=x<=bigWidth?x:bigWidth;
		y=y<=bigHeight?y:bigHeight;

		mask.style.left=x+"px";
		mask.style.top=y+"px";

		//大图移动方向和遮罩层相反
		//遮罩层移动距离/大图移动距离=遮罩层可移动的最大距离/大图可移动的最大距离
		
		
		// 大图横向可移动最大距离
		var bigX=imgk.offsetWidth-bigger.offsetWidth;
		// 大图纵向可移动最大距离
		var bigY=imgk.offsetHeight-bigger.offsetHeight;

		//求大图的移动坐标
		var moveX=x*bigX/bigWidth;
		var moveY=y*bigY/bigHeight;

		imgk.style.marginTop=-moveY+"px";
		imgk.style.marginLeft=-moveX+"px";

	}
	//轮播效果
	var pic=0;
	function clickHandel() {
		if (pic==uls.children.length-1) {
			pic=0;
			uls.style.left=-pic*imgWidth+"px";
		}
		pic++;
		move(uls,-pic*imgWidth);

		if (pic==uls.children.length-1) {
			animate(spas[0],{"opacity":1},10);
			animate(spas[spas.length-1],{"opacity":0.4},10);
		}else{
			for (var i = 0; i < spas.length; i++) {
				animate(spas[i],{"opacity":0.4},10);
			}
			animate(spas[pic],{"opacity":1},10);
		}
	}

	//给角标添加事件
	for (var i = 0; i < spas.length; i++) {
		spas[i].setAttribute("index",i);
		spas[i].onmouseenter=function() {
			clearInterval(timer1);
			for (var j = 0; j < spas.length; j++) {
				animate(spas[j],{"opacity":0.4});
			}
			animate(this,{"opacity":1},10);
			pic=this.getAttribute("index");
			uls.style.left = -pic*imgWidth+'px';
		}
		spas[i].onmouseleave=function() {
			timer1=setInterval(clickHandel,2000);
		}
	}

	//动画函数
	function move(element,target){
		clearInterval(element.timer);
		element.timer=setInterval(function() {
			var current=element.offsetLeft;
			var step=10;
			//判断目标位置和当前位置
			step=current>target?-step:step;
			current+=step;
			if (Math.abs(current-target)>Math.abs(step)) {
				element.style.left=current+'px';
			}else{
				clearInterval(element.timer);
				element.style.left=target+'px';
			}
		},1);
	}

	
	//封装动画函数
	function getStyle(element,attr) {
		if (window.getComputedStyle) {
			return getComputedStyle(element,null)[attr];
		}else{
			return element.currentStyle[attr];
		}
	}

	function animate(element,json,time,fn){
		clearInterval(element.timer);
		element.timer=setInterval(function() {
				// var current=element.offsetLeft;
				// var current=parseInt(getStyle(element,attr));
				var flag=true;
				for (var attr in json) {
					if (attr=="opacity") {
						var current=getStyle(element,attr)*100;
						var target=json[attr]*100;
						var step=(target-current)/10;
						step=step>0?Math.ceil(step):Math.floor(step);

						current+=step;
						// element.style.left=current+"px";
						element.style[attr]=current/100;
					}else if(attr=="zIndex"){
						element.style[attr]=json[attr];
					}else if(attr=="display"){
						element.style[attr]=json[attr];
					}else{
						var current=parseInt(getStyle(element,attr));
						var target=json[attr];
						var step=(target-current)/10;
						step=step>0?Math.ceil(step):Math.floor(step);

						current+=step;
						// element.style.left=current+"px";
						element.style[attr]=current+"px";
					}

					if (target!=current){
						flag=false;
					}
				}		
				if (flag) {
					clearInterval(element.timer);
					if(fn){
						fn();
					}
				}
				// console.log(target+"..."+current+"...");
			},time);
	}

	// 下面的tab切换
	var lis=document.querySelectorAll(".more_rightUl>li");
	var content=document.querySelector("#content");
	var morePic=document.querySelector(".more_pic");
	var pinglun=document.querySelector(".pinglun");
	for (var i = 0; i < lis.length; i++) {
		lis[i].setAttribute("index",i);
		lis[i].onclick=function() {
			for (var j = 0; j < lis.length; j++) {
				lis[j].className="more_rightUl_li";
			}
			this.className="active more_rightUl_li";
			var suibian=this.getAttribute("index");
			for (var i = 0; i < content.children.length; i++) {
				content.children[i].style.display="none";
			}
			content.children[suibian].style.display="block";
		}
	}	
})();