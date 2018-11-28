window.onload = function(){
        
    var top_right_a = document.querySelectorAll(".top_right>dl>dd>a")
    var top_right_p = document.querySelectorAll(".top_right_p")
    var top_right_font = document.querySelector(".top_right_font")
    var top_right_li = document.querySelector(".top_right_li")

for(let q=0;q<top_right_a.length;q++){
    if(q!=2){            
        top_right_a[q].onmouseenter = function(){
        if(q==3){
            top_right_p[q-1].style.display = "block"
            if(top_right_p[q-1]){
                animate(top_right_p[q-1],{"left":-78,"opacity":1})
            }                
        }                             
        if(top_right_p[q]){
            top_right_p[q].style.display = "block"
            animate(top_right_p[q],{"left":-78,"opacity":1})
            }
        }
    }
}
for(let f=0;f<top_right_a.length;f++){
    if(f!=2){            
        top_right_a[f].onmouseleave = function(){
        if(f==3){
            // top_right_p[f-1].style.display = "none"
            if(top_right_p[f-1]){
                animate(top_right_p[f-1],{"left":-128,"opacity":0})
            }                
        }                            
        if(top_right_p[f]){
            // top_right_p[f].style.display = "none"
            animate(top_right_p[f],{"left":-128,"opacity":0})
            }
        }
    }
}
top_right_a[2].onmouseenter = function(){     
    top_right_a[2].style.backgroundColor="red" ;
    top_right_font.style.backgroundColor="black" ;
    top_right_li.style.background = "url(PerfectShop/base.png) no-repeat -182.5px -37px";
}
top_right_a[2].onmouseleave = function(){     
    top_right_a[2].style.backgroundColor="" ;
    top_right_font.style.backgroundColor="red" ;
    top_right_li.style.background = "url(PerfectShop/base.png) no-repeat -182.5px -55px";
}
// top1 js 
var top_1_div_div_ul = document.querySelector(".top_1_div_div_ul")
var top_1_div_div_ul_li = document.querySelectorAll(".top_1_div_div_ul>li")
var top_1_div_div    = document.querySelector(".top_1_div_div")
var top_1_div_div_ul_dl = document.querySelectorAll(".top_1_div_div_ul_dl")
var top_1_div_div_ul_dl_dd = document.querySelectorAll(".top_1_div_div_ul_dl>dd")
top_1_div_div.onmouseenter = function(){
 top_1_div_div_ul.style.display = "block";
}
top_1_div_div.onmouseleave = function(){
 top_1_div_div_ul.style.display = "none";
}
var top_1_index = 0;
for(let i=0;i<top_1_div_div_ul_li.length;i++){
    top_1_div_div_ul_li[i].setAttribute("top_1_index",i)
}
for(let w=0;w<top_1_div_div_ul_dl.length;w++){
    top_1_div_div_ul_dl[w].setAttribute("top_1_index",w)          
}
for(let r=0;r<top_1_div_div_ul_li.length;r++){
    top_1_div_div_ul_li[r].onmouseenter = function(){
        this.style.backgroundColor = "#eee";
        top_1_index=this.getAttribute("top_1_index");
        top_1_div_div_ul_dl[top_1_index].style.display = "block";
        top_1_index_len = top_1_div_div_ul_dl[top_1_index].children.length 
        console.log(top_1_index_len)
       // if(this.children[1])
        var len = this.children[1].children.length;
   animate(top_1_div_div_ul_dl[top_1_index],{"height":40*top_1_index_len}); 
//    animate(top_1_div_div_ul_dl[top_1_index],{"height":40*len});
   
        for(let v = 0;v<top_1_div_div_ul_dl_dd.length;v++){
            top_1_div_div_ul_dl_dd[v].onmouseenter = function(){
                this.style.backgroundColor = "#ffffff";
            }
            top_1_div_div_ul_dl_dd[v].onmouseleave = function(){
                this.style.backgroundColor = "#ccc";
            }
        }

    }
    top_1_div_div_ul_li[r].onmouseleave = function(){
        for(let g=0;g<top_1_div_div_ul_li.length;g++){
            top_1_div_div_ul_li[g].style.backgroundColor = "#fff"
        }
        top_1_index=this.getAttribute("top_1_index");
        top_1_div_div_ul_dl[top_1_index].style.display = "none";
   animate(top_1_div_div_ul_dl[top_1_index],{"height":0});
    }
}
//  大轮播 head
var head_bg_ul1_imgObj = document.querySelectorAll(".head_bg_ul1>li>a>img")
var head_bg_ul1_imgObjWidth = head_bg_ul1_imgObj[0].offsetWidth;
var head_bg_ul1 = document.querySelector(".head_bg_ul1")
var head_bg_ul2_li = document.querySelectorAll(".head_bg_ul2>li")
// head_bg_ul1.appendChild(head_bg_ul1_imgObj[0].cloneNode(true))
var head_index = 0;
for(let u=0;u<head_bg_ul1_imgObj.length;u++){
    head_bg_ul1_imgObj[u].setAttribute("head_index",u);
}
head_bg_ul2_li[0].setAttribute("class","head_bg_ul2_li")
for(let v=0;v<head_bg_ul2_li.length;v++){
    head_bg_ul2_li[v].setAttribute("head_index",v)
    head_bg_ul2_li[v].onclick=function(){
        clearInterval(timer_bg)
        for(let k=0;k<head_bg_ul2_li.length;k++){
            head_bg_ul2_li[k].removeAttribute("class","head_bg_ul2_li")
        }
        this.setAttribute("class","head_bg_ul2_li")
        head_index=this.getAttribute("head_index")
        animate(head_bg_ul1,{"left":-head_index*head_bg_ul1_imgObjWidth})
        timer_bg = setInterval(head_bg_r,3000)
    }
}
var head_span1 = document.querySelector(".head_span1")
var head_span2 = document.querySelector(".head_span2")
head_span1.onclick = head_bg_l;
var timer_bg;
timer_bg = setInterval(head_bg_r,3000)
function head_bg_l(){
    clearInterval(timer_bg)
    for(let f=0;f<head_bg_ul2_li.length;f++){
        head_bg_ul2_li[f].removeAttribute("class","head_bg_ul2_li")
    }
    if(head_index==0){
        head_index=2;
        animate(head_bg_ul1,{"left":-head_index*head_bg_ul1_imgObjWidth})                    
        head_bg_ul2_li[head_index].setAttribute("class","head_bg_ul2_li")
    }else{
         head_index--;
        head_bg_ul2_li[head_index].setAttribute("class","head_bg_ul2_li")
        animate(head_bg_ul1,{"left":-head_index*head_bg_ul1_imgObjWidth})
    }
        timer_bg = setInterval(head_bg_r,3000)           
}
head_span2.onclick = head_bg_r;
function head_bg_r(){
    clearInterval(timer_bg)
    for(let e=0;e<head_bg_ul2_li.length;e++){
        head_bg_ul2_li[e].removeAttribute("class","head_bg_ul2_li")
    } 
    if(head_index==2){
        head_index=0;
        animate(head_bg_ul1,{"left":-head_index*head_bg_ul1_imgObjWidth})                    
        head_bg_ul2_li[head_index].setAttribute("class","head_bg_ul2_li")
    }else{
         head_index++;
        head_bg_ul2_li[head_index].setAttribute("class","head_bg_ul2_li")
        animate(head_bg_ul1,{"left":-head_index*head_bg_ul1_imgObjWidth})
    }
    timer_bg = setInterval(head_bg_r,3000)
    
} 
// 回到顶部
var top_p = document.querySelector(".top_p")
// var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
//第一种 不可用
    
        window.onscroll = function(){
                  if(document.body.scrollTop>0){
                    top_p.style.display = "block"
                  }else{
                    top_p.style.display = "none"
                  }
                  leader_top = document.body.scrollTop;
                }
                var leader_top = 0,target_top = 0,timer_top = null;
                // leader 起始位置  target  目标位置
                top_p.onclick = function() {

                    target_top = 0;  //  点击完毕之后 奔向0 去的  不写也可以
                    timer_top = setInterval(function() {
                        leader_top = leader_top + (target_top - leader_top ) / 10;
                        window.scrollTo(0,leader_top);  // 去往页面中的某个位置
                        if(leader_top == target_top)
                        {
                            clearInterval(timer_top);
                        }
                    },20);
    
                }
    }
                
//鼠标购物车 tab切换
var body_2_top_p3 = document.querySelector(".body_2_top_p3")
        var genduo = document.querySelector(".genduo")
        body_2_top_p3.onmouseenter = function(){
            genduo.style.background = "url(PerfectShop/base.png) no-repeat -111px 0";
        }
        body_2_top_p3.onmouseleave = function(){
            genduo.style.background = "url(PerfectShop/base.png) no-repeat -90px 0";
        }
        // body 轮播
        var body_2_ = document.querySelector(".body_2_")
        var body_2_1 = document.querySelector(".body_2_1")
        var body_2_1Width = body_2_1.offsetWidth;

        var body_2_top_p3_ul_li = document.querySelectorAll(".body_2_top_p3_ul>li")
        var body_2_index=0;
        body_2_top_p3_ul_li[0].setAttribute("class","body_2_top_p3_ul_li_red");
        for(let g=0;g<body_2_top_p3_ul_li.length;g++){
        body_2_top_p3_ul_li[g].onclick=function(){
            body_2_top_p3_ul_li[g].setAttribute("body_2_index",g)
            for(let h=0;h<body_2_top_p3_ul_li.length;h++){
                body_2_top_p3_ul_li[h].removeAttribute("class","body_2_top_p3_ul_li_red")
            }
            this.setAttribute("class","body_2_top_p3_ul_li_red");
            body_2_index = this.getAttribute("body_2_index");
            animate(body_2_,{"left":-body_2_index*body_2_1Width});
        }
    }
    //鼠标购物车
    var body_2_1_sp_div = document.querySelectorAll(".body_2_1_sp_div")
    var body_2_1_sp = document.querySelectorAll(".body_2_1_sp")
    for(let m=0;m<body_2_1_sp.length;m++){
        
        body_2_1_sp[m].onmouseenter = function(){
            for(let c=0;c<body_2_1_sp_div.length;c++){
                animate(body_2_1_sp_div[m],{"height":90})
            }      
        }
        body_2_1_sp[m].onmouseleave = function(){
            for(let c=0;c<body_2_1_sp_div.length;c++){
                animate(body_2_1_sp_div[m],{"height":0})
            }
        }
    }
    // 下部分 最后轮播上面/
    var foot_2_right_span = document.querySelector(".foot_2_right_span")
        var foot_2_right_a = document.querySelector(".foot_2_right_a")
        foot_2_right_a.onmouseenter = function(){
            foot_2_right_span.style.background= "url(PerfectShop/base.png) no-repeat -240px 0";
        }
        foot_2_right_a.onmouseleave = function(){
            foot_2_right_span.style.background= "url(PerfectShop/base.png) no-repeat -188px 0";

        }
        //最后的轮播
        var foot_3_index;
            var foot_3_1_ul_li = document.querySelectorAll(".foot_3_1_ul>li")
            foot_3_1_ul_li[0].setAttribute("class","foot_3_1_ul_li")
            for(let y =0;y<foot_3_1_ul_li.length;y++){
                foot_3_1_ul_li[y].setAttribute("foot_3_index",y)
                foot_3_1_ul_li[y].onclick = function(){
                    for(let x=0;x<foot_3_1_ul_li.length;x++){
                        foot_3_1_ul_li[x].removeAttribute("class","foot_3_1_ul_li")
                    }
                    this.setAttribute("class","foot_3_1_ul_li")
                    foot_3_index=this.getAttribute("foot_3_index")
                    if(foot_3_index==1){
                    animate(foot_3_2_1_ul,{"left":-foot_3_index*foot_3_2_1_ul_li_Width*10-55})
                    }else {
                    animate(foot_3_2_1_ul,{"left":5})                        
                    }
                }
            }
            var foot_3_2_1_ul = document.querySelector(".foot_3_2_1_ul")
            var foot_3_2_1_ul_li = document.querySelectorAll(".foot_3_2_1_ul>li")          
            var foot_3_2_1_ul_li_Width = foot_3_2_1_ul_li[0].offsetWidth;
            console.log(foot_3_2_1_ul_li_Width)
            