(function() {
	//导航栏动态效果实现
		var nav_li1=document.querySelectorAll(".middle_nav_uall_01>li");
		var nav_li2=document.querySelectorAll(".middle-nav-uall-02>li");

		for (var i = 0; i < nav_li1.length; i++) {
			nav_li1[i].onmouseenter=function() {
				this.lastElementChild.style.display="block";
				this.style.background="#aaa";
				this.firstElementChild.style.color="#fff";

				for (var j = 0; j < nav_li2.length; j++) {
					nav_li2[j].onmouseenter=function() {
						this.firstElementChild.style.color="#fff";
						this.firstElementChild.style.textDecoration="underline";
					}
					nav_li2[j].onmouseleave=function() {
						this.firstElementChild.style.color="#ccc";
						this.firstElementChild.style.textDecoration="";
					}
				}
			}
			nav_li1[i].onmouseleave=function() {
				this.lastElementChild.style.display="none";
				this.style.background="";
				this.firstElementChild.style.color="";
				}

			}
		
	//渐变轮播图动态效果实现
		var lun_li=document.querySelectorAll(".middle-lun-ul>li");
		var square=document.querySelector("#square");
		var spas=document.getElementById('square').children;
		var middle_lun_ul=document.querySelector(".middle-lun-ul");
		// 获取图片宽度
		var imgObj=document.querySelector("#inner");
		var list=document.querySelectorAll(".middle-lun-ul>li");
		console.log(list);
		var imgWidth=imgObj.offsetWidth;

		// var pic=0;
		// console.log(imgWidth);

		//动态获取下标
		for (var i = 0; i < lun_li.length; i++) {
			var sp=document.createElement("li");
			square.appendChild(sp);
			sp.setAttribute("id","square-li");
		}
		spas[0].setAttribute("id","square-active");

		//添加自动渐变播放
		var index = 0;//index代表图片索引

		var timer = setInterval(clickHandel,2000);

		function clickHandel(){
			index++;
			if (index==list.length) {
				index = 0;
			}
			for (var i = 0; i < list.length; i++) {
				list[i].style.opacity=0;
			}
			for (var j = 0; j < spas.length; j++) {
				spas[j].setAttribute("id","square-li");
			}
			list[index].style.opacity=1;
			spas[index].setAttribute("id","square-active");
		}


		// 给下标添加移动事件
		for (var i = 0; i < spas.length; i++) {
			spas[i].setAttribute("num",i);
			spas[i].onmouseenter=function() {
				clearInterval(timer);
				for (var j = 0; j < spas.length; j++) {
					spas[j].setAttribute("id","square-li");
				}
				this.setAttribute("id","square-active");
				var index=this.getAttribute("num");
				for (var k = 0; k < list.length; k++) {
					list[k].style.opacity=0;

				}
					list[index].style.opacity=1;
			}
		}
	//小轮播图
		var xiaB=document.querySelectorAll(".rightTop_lun_boxUl>li");
		//动态获取的下标的父级ul元素
		var parenli=document.querySelector("#rightTop_lun_signul");
		var lis=document.getElementById('rightTop_lun_signul').children;
		var uls=document.querySelector(".rightTop_lun_boxUl");
		//动态获取下标
		for (var i = 0; i < xiaB.length; i++) {
			var ls=document.createElement("li");
			parenli.appendChild(ls);
			ls.setAttribute("class",'rightTop_lun_signli');
		}
			lis[0].setAttribute("class","rightTop_lun_active");
			uls.appendChild(uls.children[0].cloneNode(true));

		//通过鼠标滑入角标添加事件
		//获取图片宽度
		var imgOb=document.querySelector(".rightTop_lun_box");
		var imgW=imgOb.offsetWidth;
		var pic=0;
		for (var i = 0; i < lis.length; i++) {
			lis[i].setAttribute("index",i);
			lis[i].onmouseenter=function() {
				for (var j = 0; j < lis.length; j++) {
					lis[j].setAttribute("class","rightTop_lun_signli");
				}
				this.setAttribute("class","rightTop_lun_active");

				pic=this.getAttribute("index");
				//animate(uls,-pic*imgWidth);
				uls.style.left = -pic*imgW+'px';

			}
		}
		//添加自动轮播计时器
		var timer=setInterval(Zmove,2000);
		function Zmove() {
			if (pic==uls.children.length-1) {
				pic=0;
				uls.style.left=-pic*imgW+"px";
			}
			 	pic++;
				sport(uls,-pic*imgW);

			if (pic==uls.children.length-1) {
				lis[0].setAttribute('class',"rightTop_lun_active");
				lis[lis.length-1].setAttribute('class','rightTop_lun_signli');
			}else{
				for (var i = 0; i < lis.length; i++) {
					lis[i].setAttribute('class','rightTop_lun_signli');
				}
				lis[pic].setAttribute('class','rightTop_lun_active');
			}
		}
		//元素移入停止轮播
		var stopBox=document.querySelector(".rightTop_lun_box");
		stopBox.onmouseenter=function() {
			clearInterval(timer);
		}
		stopBox.onmouseleave=function() {
			timer=setInterval(Zmove,2000);
		}

		//动画函数
		function sport(element,target){
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
	// 手风琴效果实现
		var qlis=document.querySelectorAll(".rightFoot_ul>li");
		for (var i = 0; i < qlis.length; i++) {
			qlis[i].onmouseenter=function() {
				for (var j = 0; j < qlis.length; j++) {
					animate(qlis[j],{"width":112});
				}
				animate(this,{"width":225});
			}
			qlis[i].onmouseleave=function() {
	            for (var k = 0; k < qlis.length; k++) {
				animate(qlis[k],{"width":112});
	            }
			}
		}

	//封装动画函数
		function getStyle(element,attr) {
			if (window.getComputedStyle) {
				return getComputedStyle(element,null)[attr];
			}else{
				return element.currentStyle[attr];
			}
		}

		function animate(element,json,fn){
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
			},10);
		}

		//a标签下划线效果
		var XiaLi=document.getElementById("box2_left2_ul1").children;
		for (var i = 0; i < XiaLi.length; i++) {
			XiaLi[i].onmouseenter=function() {
				this.style.textDecoration="underline";
			}
			XiaLi[i].onmouseleave=function() {
				this.style.textDecoration="none";
			}
		}

		//最后的a标签变色
		var lastLi=document.querySelectorAll(".foot_top_span");
		for (var i = 0; i < lastLi.length; i++) {
			lastLi[i].onmouseenter=function() {
				this.setAttribute("class","changeColor");
			}
			lastLi[i].onmouseleave=function() {
				this.setAttribute("class","foot_top_span");
			}
		}

		// debugger;
		var lastLis=document.querySelectorAll('.foot_top_ul2 li');
		var sib=lastLis.previousSbiling;
		for (var i = 0; i < lastLis.length; i++) {
			lastLis[i].onmouseenter=function() {
				this.style.textDecoration="underline";
			}
			lastLis[i].onmouseleave=function() {
				this.style.textDecoration="none";
			}
		}


		//二维码显示隐藏
		var fon_aa=document.querySelectorAll(".fon_aa");
		for (var i = 0; i < fon_aa.length; i++) {
			fon_aa[i].onmouseenter=function() {
				this.nextElementSibling.style.display="block";
				this.style.textDecoration="underline";
			}
			fon_aa[i].onmouseleave=function() {
				this.nextElementSibling.style.display="none";
				this.style.textDecoration="none";
			}
		}
})();