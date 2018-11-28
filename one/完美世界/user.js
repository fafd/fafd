//表单
var div_2_2_text = document.querySelectorAll(".div_2_2_text")
var div_2_2_text_ = document.querySelectorAll(".div_2_2_text_")
var div_2_2_text_1 = document.querySelectorAll(".div_2_2_text_1")

var text_index = null;
var text_value = null;
for (let q = 0; q < div_2_2_text_.length; q++) {
    div_2_2_text_[q].setAttribute("text_index", q)
}
for (let u = 0; u < div_2_2_text.length; u++) {
    div_2_2_text[u].setAttribute("text_index", u)
    div_2_2_text[u].onfocus = function () {
        text_value = this.value;
        this.value = "";
        text_index = this.getAttribute("text_index")

        div_2_2_text_[text_index].style.display = "none";
        if (text_index > 0) {
            div_2_2_text_1[text_index - 1].style.display = "none";
        }

    }
    div_2_2_text[u].onblur = function () {
        if(div_2_2_text[text_index].value==""){
            div_2_2_text[text_index].value = text_value;
        }
        
        text_index = this.getAttribute("text_index")
        //非空判定
        if (this.value == text_value) {
            div_2_2_text_[text_index].style.display = "block";
            if (text_index == 0) {
                div_2_2_text_[text_index].style.top = 115 + "px";
            } else {
                div_2_2_text_[text_index].style.top = text_index * 70 + 115 + "px";
            }
            //密码判断
        } else if (text_index == 1) {
            if (!(this.value.length > 6 && this.value.length < 16)) {
                div_2_2_text_1[0].style.display = "block";
            }
        } else if (text_index == 2) {
            if (!(div_2_2_text[1].value == div_2_2_text[2].value)) {
                div_2_2_text_1[1].style.display = "block";
                div_2_2_text_1[1].style.top = text_index * 70 + 115 + "px";
            }
            //escape 不推荐使用
        } else if (text_index == 3) {
            if (escape(div_2_2_text[3].value).indexOf("%u") != -1) {
            } else {
                div_2_2_text_1[2].style.display = "block";
                div_2_2_text_1[2].style.top = text_index * 70 + 115 + "px";
            }
        } else if (text_index == 4) {
            if (!(div_2_2_text[4].value.length == 16)) {
                div_2_2_text_1[3].style.display = "block";
                div_2_2_text_1[3].style.top = text_index * 70 + 115 + "px";
            }
            if (isNaN(div_2_2_text[4].value)) {
                div_2_2_text_1[3].style.display = "block";
                div_2_2_text_1[3].style.top = text_index * 70 + 115 + "px";
            }
        }
    }
}