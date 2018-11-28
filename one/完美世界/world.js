var headUl = document.querySelector("#head-ul").children

for (let i = 0; i < headUl.length; i++) {
    headUl[i].onmouseenter = function () {
        for (let q = 0; q < headUl.length; q++) {
            headUl[q].style.backgroundColor = "black";
        }
        this.style.backgroundColor = 737271;
        for (let j = 0; j < headUl.length; j++) {
            headUl[j].lastElementChild.setAttribute("class", "head_ul_ul_1")
        }
        this.lastElementChild.setAttribute("class", "head_ul_ul_2")
    }
    headUl[i].onmouseleave = function () {
        for (let a = 0; a < headUl.length; a++) {
            headUl[a].style.backgroundColor = "black";
            headUl[a].lastElementChild.setAttribute("class", "head_ul_ul_1")
        }
    }
}
for (let y = 0; y < headUl.length; y++) {
    //console.log(headUl)
    for (let u = 0; u < headUl[y].lastElementChild.children.length; u++) {
        // console.log(headUl[y].lastElementChild.children[u])
        headUl[y].lastElementChild.children[u].onmouseenter = function () {
            this.style.textDecoration = "underline";
            this.firstChild.style.color = "white"
        }
        headUl[y].lastElementChild.children[u].onmouseleave = function () {
            this.style.textDecoration = "none";
            this.firstChild.style.color = "rgb(209, 200, 187)";
        }
    }
}
//  head ok
        // var bg_li1 = document.querySelector(".bg_s1")
        // var bg_li2 = document.querySelector(".bg_s2")
        // var bg_li3 = document.querySelector(".bg_s3")
        var bg_list = document.querySelectorAll(".bg_c>li")
        var index_i = 0;
        var newbg_list;
        var bg_oldLi = bg_list[0];
        for (let l = 0; l < bg_list.length; l++) {
            bg_list[l].setAttribute("class", "bg_ds1")
        }    
        //不加上面3行属性 head会出现一起透明的问题
        // var index_json1 = { "opacity": 1 };
        // var index_json2 = { "opacity": 0 };
        var bg_ol = document.querySelector(".bg_ol")
        var bg_ol_li = bg_ol.children
        var clickbg = setInterval(clickbgl, 3000)

for (let b = 0; b < bg_ol_li.length; b++) {
    bg_ol_li[b].onclick = function () {
        for (let g = 0; g < bg_ol_li.length; g++) {
            bg_ol_li[g].setAttribute("class", "bg_li_")
            bg_ol_li[g].setAttribute("index_li", g)
            clearInterval(clickbg)
        }
        index_i = this.getAttribute("index_li")
        this.setAttribute("class", "bg_li_ red")
        index_i--;
        clickbgl();
        clickbg = setInterval(clickbgl, 3000)
    }
}
bg_ol_li[0].setAttribute("class", "bg_li_ red")
function clickbgl(){
    bg_oldLi.style.opacity = 0;
    index_i++;
    if (index_i==bg_list.length) {
        index_i = 0;
    }	
        newbg_list = bg_list[index_i];
        newbg_list.style.opacity = 1;
        bg_oldLi = bg_list[index_i];
    for(var i = 0;i<bg_list.length;i++){
        bg_list[i].style.opacity = 0;
        bg_ol_li[i].setAttribute("class", "bg_li_")
    }
        bg_list[index_i].style.opacity = 1;
        bg_ol_li[index_i].setAttribute("class", "bg_li_ red")
}
//垃圾方法
function bg_timer_() {
    for (let p = 0; p < bg_ol_li.length; p++) {
        bg_ol_li[p].setAttribute("class", "bg_li_")
    }
    index_i++;
    if (index_i == 3) {
        index_i = 0;
    }
    switch (index_i) {
        case 0:
            animate(bg_li1, index_json1)
            animate(bg_li2, index_json2)
            animate(bg_li3, index_json2)
            bg_li1.setAttribute("class", "bg_ds1")
            bg_li2.setAttribute("class", "bg_ds2")
            bg_li3.setAttribute("class", "bg_ds2")
            bg_ol_li[index_i].setAttribute("class", "bg_li_ red")
            break;
        case 1:

            animate(bg_li1, index_json2)
            animate(bg_li2, index_json1)
            animate(bg_li3, index_json2)
            bg_li2.setAttribute("class", "bg_ds1")
            bg_li1.setAttribute("class", "bg_ds2")
            bg_li3.setAttribute("class", "bg_ds2")
            bg_ol_li[index_i].setAttribute("class", "bg_li_ red")
            break;
        case 2:

            animate(bg_li1, index_json2)
            animate(bg_li2, index_json2)
            animate(bg_li3, index_json1)
            bg_li3.setAttribute("class", "bg_ds1")
            bg_li1.setAttribute("class", "bg_ds2")
            bg_li2.setAttribute("class", "bg_ds2")
            bg_ol_li[index_i].setAttribute("class", "bg_li_ red")
            break;
    }
}
// bg ok
var main_top_ul = document.querySelector(".main_top_ul_")
var main_top_ol = document.querySelector(".main_top_ol")   
var main_top_ol_ = main_top_ol.children;
var pic = 0;
var main_top_ul_li =  main_top_ul.children
var main_top_ul_li_imgwidth =  main_top_ul_li[0].offsetWidth;
var img_clone = main_top_ul_li[0].cloneNode(true)
main_top_ul.appendChild(img_clone)
for(let t=0;t<main_top_ol_.length;t++){
     main_top_ol_[t].setAttribute("ol_index",t)
     main_top_ol_[t].onclick = function(){
         clearInterval(main_top_timer)
         for(let r=0;r<main_top_ol_.length;r++){
             main_top_ol_[r].removeAttribute("class","main_top_ol_red")
         }
         this.setAttribute("class","main_top_ol_red")
         pic = this.getAttribute("ol_index")
         animate(main_top_ul,{'left':-pic*main_top_ul_li_imgwidth})
         main_top_timer = setInterval(top_pic,3000)
     }
}
var main_top_timer = setInterval(top_pic,3000)
function top_pic() {         
     if (pic == main_top_ul_li.length-1) {
         pic = 0;
         main_top_ul.style.left = pic + "px";
     }
     pic++;
     if(pic == main_top_ul_li.length-1){
         main_top_ol_[pic-1].removeAttribute("class", "main_top_ol_red")
         main_top_ol_[0].setAttribute("class", "main_top_ol_red")
     }else{
         for (let w = 0; w < main_top_ol_.length; w++) {
         main_top_ol_[w].removeAttribute("class", "main_top_ol_red")
     }
          main_top_ol_[pic].setAttribute("class", "main_top_ol_red")
     }         
     animate(main_top_ul, { 'left': -pic * main_top_ul_li_imgwidth })
 }
//  main top ok
var main_foot_div_ul = document.querySelector(".main_foot_div_ul")
      var main_foot_div_ul_li = main_foot_div_ul.children;
    //   console.log(main_foot_div_ul_li)
      for(let i =0;i<main_foot_div_ul_li.length;i++){
        main_foot_div_ul_li[i].onmouseenter = function(){
            for(let j =0;j<main_foot_div_ul_li.length;j++){
                animate(main_foot_div_ul_li[j],{"width":116})
            }
            animate(this,{"width":225})
        }
        main_foot_div_ul_li[i].onmouseleave = function(){
            for(let q=0;q<main_foot_div_ul_li.length;q++){
                animate(main_foot_div_ul_li[q],{"width":116})
            }
        }
    }
    // main foot ok
    var foot_2_div1_div2 = document.querySelectorAll(".foot_2_div1_div2>ul>li")
    var foot_2_img_2wei = document.querySelectorAll(".foot_2_div1_div2>ul>li>img")
    for (let h = 1; h < foot_2_img_2wei.length; h++) {
        foot_2_img_2wei[h].setAttribute("class", "foot_2_img_2wei")
        for (let z = 1; z < foot_2_div1_div2.length; z++) {
            foot_2_div1_div2[z].onmouseenter = function () {
                for (let i = 1; i < foot_2_img_2wei.length; i++) {
                    foot_2_img_2wei[i].setAttribute("class", "foot_2_img_2wei")
                }
                foot_2_img_2wei[z].setAttribute("class", "foot_2_img_2wei_")
            }
            foot_2_div1_div2[z].onmouseleave = function () {
                for (let m = 1; m < foot_2_img_2wei.length; m++) {
                    foot_2_img_2wei[m].setAttribute("class", "foot_2_img_2wei")
                }
            }

        }
    }
    // foot_2 ok