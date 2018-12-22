(function() {
	//旁边悬浮框
		var center=document.querySelectorAll(".center");
		var shopCar=document.querySelector(".shop_carP");
		var shop_1=document.querySelector(".shop_car_span1");
		var shop_3=document.querySelector(".shop_car_span3");


		for (var i = 0; i < center.length; i++) {
			center[i].onmouseenter=function() {
				this.style.background="red";
				animate(this.lastElementChild,{"left":-78,"opacity":1},20)
			}
			center[i].onmouseleave=function() {
				this.style.background="";
				animate(this.lastElementChild,{"left":-128,"opacity":0},20)
			}
		}
		shopCar.onmouseenter=function() {
			this.style.background="red";
			shop_1.style.background="url(./images/store/base.png) -164px -36px no-repeat";
			shop_3.style.background="#000";
		}
		shopCar.onmouseleave=function() {
			this.style.background="";
			shop_1.style.background="";
			shop_3.style.background="";
		}

		//返回顶部
		var return_top=document.querySelector(".return_top");
		return_top.onmouseenter=function() {
			this.style.background="red";
		}
		return_top.onmouseleave=function() {
			this.style.background="";
		}

		var timer3=null;
		return_top.onclick=function(){
			var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
			var i=1;
			timer3=setInterval(function(){
				scrolltop-=i;
				i=i+0.3;
				if (scrolltop<=0) {
					document.documentElement.scrollTop=0;
					document.body.scrollTop=0;
					clearInterval(timer3);
				}
				document.documentElement.scrollTop=scrolltop;
				document.body.scrollTop=scrolltop;
			},1)
		}


	//头部小框框
		var liBian=document.querySelectorAll(".li_bian>a");
		var loginBox=document.querySelector(".top_login_box");
		// console.log(loginBox)
		var em=document.querySelector(".em_0");
		var listNull=document.querySelector(".shop_box");
		for (var i = 0; i < liBian.length; i++) {
			liBian[i].onmouseenter=function() {
				this.style.textDecoration="underline";
				this.style.color="#fff";

			}
			liBian[i].onmouseleave=function() {
				this.style.textDecoration="none";
				this.style.color="";

			}
		}
		loginBox.onmouseenter=function() {
			this.style.color="#fff";
			this.style.background="red";
			this.firstElementChild.style.background="url(./images/store/base.png) -184px -38px no-repeat";
			em.style.color="#fff";
			animate(listNull,{"height":100,"display":"block"},30);
		}
		loginBox.onmouseleave=function() {
			this.style.color="";
			this.style.background="";
			this.firstElementChild.style.background="";
			em.style.color="";
			animate(listNull,{"height":0,"display":"none"},30);
		}

	//导航栏
		
		// 倒数第二个ul列表
		var topNavUl=document.querySelectorAll(".top_nav_ul>li");
		for (var i = 0; i < topNavUl.length; i++) {
			topNavUl[i].onmouseenter=function() {
				this.style.color="red";
			}
			topNavUl[i].onmouseleave=function() {
				this.style.color="";
			}
		}

		//下拉列表
		var blockP=document.querySelector(".top_nav_a3 p");
		var a3Ul=document.querySelector(".top_nav_a3Ul");
		var san=document.querySelector(".san");
		blockP.onmouseenter=function() {
			this.style.background="red";
			this.style.color="#fff";
			san.style.background="url(./images/store/base.png) -39px 0 no-repeat "
			animate(this.nextElementSibling,{"height":240,"display":"block"},20);
		}
		blockP.onmouseleave=function() {
			this.style.background="";
			this.style.color="";
			san.style.background="";
			animate(this.nextElementSibling,{"height":0,"display":"none"},20);
		}
		a3Ul.onmouseenter=function() {
			blockP.style.background="red";
			blockP.style.color="#fff";
			san.style.background="url(./images/store/base.png) -39px 0 no-repeat "
			animate(this,{"height":240,"display":"block"},20);
		}
		a3Ul.onmouseleave=function() {
			blockP.style.background="";
			blockP.style.color="";
			san.style.background="";
			animate(this,{"height":0,"display":"none"},20);
		}

		// debugger;
		var a3Li=document.querySelectorAll(".top_nav_a3Ul>li");
			for (var i = 0; i < a3Li.length; i++) {
				a3Li[i].onmouseenter = function(){
					// this.children[1].style.display = "block"
					this.firstElementChild.style.color="red";
					this.firstElementChild.style.background="#eee";
					animate(this.children[1],{'height':this.children[1].children.length*40,'display':'block'},30);
					// console.log(this.children[1].children.length*40);

				}
				a3Li[i].onmouseleave = function(){
					this.firstElementChild.style.color="";
					this.firstElementChild.style.background="";
					animate(this.children[1],{'height':0,'display':'none'},30);
				}
			}
		// debugger;
		var dd=document.querySelectorAll(".top_nav_a3Ul dl>dd>a");
		for (var i = 0; i < dd.length; i++) {
			dd[i].onmouseenter=function () {
				for (var j = 0; j < dd.length; j++) {
					dd[j].style.background="#eee";
				}
				this.style.background="#fff";
				this.style.color="red";
			}
			dd[i].onmouseleave=function () {
				this.style.background="#eee";
				this.style.color="";
			}
		}

		//搜索框
		var find=document.querySelector(".top_nav_ipt1");
		var spanNo=document.querySelector(".top_nav_ul_spas");

		find.onfocus=function() {
			spanNo.style.display="none";
			this.style.border='1.2px solid red';
		}
		find.onblur=function() {
			if (find.value=="") {
				spanNo.style.display="block";
			}
			this.style.border='';
		}

		//底部高亮显示
		// debugger;
			var dds=document.querySelectorAll(".about_oDiv>dl>dd>a");
			for (var i = 0; i < dds.length; i++) {
				dds[i].onmouseenter=function() {
					this.style.color="red";
				}
				dds[i].onmouseleave=function() {
					this.style.color="";
				}
			}

			var callA=document.querySelector(".call_par>a");
			var call=document.querySelector(".call");
			callA.onmouseenter=function() {
				animate(call,{"display":"block"},100);
			}
			callA.onmouseleave=function() {
				animate(call,{"display":"none"},100);
			}

			var onlineA=document.querySelector(".about_oDiv_right>a");
			onlineA.onmouseenter=function() {
				this.style.background="red";
				this.style.color="#fff";
				this.lastElementChild.style.background="url(./images/store/base.png) -240px 0 no-repeat";
			}
			onlineA.onmouseleave=function() {
				this.style.background="";
				this.style.color="";
				this.lastElementChild.style.background="";

			}


			var fLis=document.querySelectorAll(".foot_ul>li>a");
			for (var i = 0; i < fLis.length; i++) {
				fLis[i].onmouseenter=function() {
					this.style.color="red";
				}
				fLis[i].onmouseleave=function() {
					this.style.color="";
				}
			}

			//轮播函数绑定的动画函数
			function moveA(element,target){
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
})()