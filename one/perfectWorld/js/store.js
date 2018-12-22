(function() {
	
	// 轮播图
		var box=document.querySelector(".top_lun");
		var squareUl=document.querySelector(".square_ul");
		// console.log(spas);
		var uls=document.querySelector(".top_lun_ul");
		// var aa=uls.children;
		// console.log(aa);
		var imgObj=document.querySelector(".top_lun_box");
		var imgWidth=imgObj.offsetWidth;
		// console.log(imgWidth);
		var focus=document.querySelector(".focus");
		var left=document.querySelector(".left");
		var right=document.querySelector(".right");


		//动态添加li
		for (var i = 0; i < uls.children.length; i++) {
			var lia=document.createElement("li");
			squareUl.appendChild(lia);
			lia.setAttribute("class","square_lis");
		}
			var spas=squareUl.children;
			spas[0].setAttribute("class","square_lia");
			uls.appendChild(uls.children[0].cloneNode(true));

		//定义计时器
		var timer=setInterval(clickHandel,2000);
		

		box.onmouseenter=function() {
			focus.style.display='block';
			clearInterval(timer);
		}	
		box.onmouseleave=function() {
			focus.style.display='none';
			timer=setInterval(clickHandel,2000);

		}	
		// 定义一个变量存储下标
		var pic = 0;
		right.onclick=clickHandel;
			function clickHandel() {
			if (pic==uls.children.length-1) {
				pic=0;
				uls.style.left=-pic*imgWidth+"px";
			}
			pic++;
			moveA(uls,-pic*imgWidth);
			if(pic==uls.children.length-1) {
				spas[0].setAttribute("class","square_lia");
				spas[spas.length-1].setAttribute("class","square_lis");
			}else{
				for (var i = 0; i < spas.length; i++){
					spas[i].setAttribute("class","square_lis");
				}
				spas[pic].setAttribute("class","square_lia");
			}
			}

		left.onclick=function(){
			if (pic==0) {
				pic=uls.children.length-1;
				uls.style.left=-pic*imgWidth+"px";
			}
			pic--;
			for (var i = 0; i < spas.length; i++) {
				spas[i].setAttribute("class","square_lis");
			}
			spas[pic].setAttribute("class","square_lia");
			moveA(uls,-pic*imgWidth);
		}

		//绑定角标事件
		for (var i = 0; i < spas.length; i++) {
			spas[i].setAttribute("index",i);
			spas[i].onmouseenter=function() {
				for (var j = 0; j < spas.length; j++) {
					spas[j].className='square_lis';
				}
				this.className="square_lia";
				pic=this.getAttribute("index");
				// animate(uls,-pic*imgWidth);
				uls.style.left=-pic*imgWidth+"px";

			}
		}

	//添加公告栏移动事件
		var gMove=document.querySelectorAll(".top_mess_center>a");
		for (var i = 0; i < gMove.length; i++) {
			gMove[i].onmouseenter=function() {
				animate(this,{"marginTop":-10},20);
			}
			gMove[i].onmouseleave=function() {
				animate(this,{"marginTop":0},20);
			}
		}

	//电竞专区动态实现
		var dMove=document.querySelectorAll(".elec_content>div");
		var aMove=document.querySelector(".elec_content>a");
		var add=document.querySelectorAll("add");
		for (var i = 0; i < dMove.length; i++) {
			dMove[i].onmouseenter=function() {
				animate(this,{"top":-10},20);
				animate(this.lastElementChild,{"display":"block","height":90},20);
			}
			dMove[i].onmouseleave=function() {
				animate(this,{"top":0},20);
				animate(this.lastElementChild,{"display":"none","height":0},20);
			}
		}
		aMove.onmouseenter=function() {
			animate(this,{"marginTop":-10},20);
		}
		aMove.onmouseleave=function() {
			animate(this,{"marginTop":0},20);
		}
	//底部小轮播
		var xiaB=document.querySelectorAll(".bd_ul>li");
		var parenli=document.querySelector(".hd_ul");
		var liss=document.querySelector('.hd_ul').children;
		var ulss=document.querySelector(".bd_ul");
		//动态获取下标
		for (var i = 0; i < xiaB.length; i++) {
			var ls=document.createElement("li");
			parenli.appendChild(ls);
			ls.setAttribute("class",'li_no');
		}
			liss[0].setAttribute("class","li_active");
			ulss.appendChild(ulss.children[0].cloneNode(true));

		//通过鼠标滑入角标添加事件
		//获取图片宽度
		var imgOb=document.querySelector(".bd_lun");
		var imgW=imgOb.offsetWidth;
		var picc=0;
		for (var i = 0; i < liss.length; i++) {
			liss[i].setAttribute("index",i);
			liss[i].onmouseenter=function() {
				for (var j = 0; j < liss.length; j++) {
					liss[j].setAttribute("class","li_no");
				}
				this.setAttribute("class","li_active");

				picc=this.getAttribute("index");
				//moveA(ulss,-picc*imgWidth);
				ulss.style.left = -picc*imgW+'px';

			}
		}
		//添加自动轮播计时器
		var timer2=setInterval(Lmove,3000);
		function Lmove() {
			if (picc==ulss.children.length-1) {
				picc=0;
				ulss.style.left=-picc*imgW+"px";
			}
			 	picc++;
				moveA(ulss,-picc*imgW);

			if (picc==ulss.children.length-1) {
				liss[0].setAttribute('class',"li_active");
				liss[liss.length-1].setAttribute('class','li_no');
			}else{
				for (var j = 0; j < liss.length; j++) {
					liss[j].setAttribute('class','li_no');
				}
				liss[picc].setAttribute('class','li_active');
			}
		}
		//元素移入停止轮播
		var stopBox=document.querySelector(".bd_lun");
		stopBox.onmouseenter=function(){
			clearInterval(timer2);
		}
		stopBox.onmouseleave=function() {
			timer2=setInterval(Lmove,3000);
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
})();