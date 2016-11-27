/**
 * Created by Administrator on 2016/11/18.
 */

/*绑定事件*/
function addEvent(obj,sEv,fn){
    if(obj.addEventListener){
        obj.addEventListener(sEv,fn,false);
    }else{
        obj.attachEvent('on'+sEv,fn);
    }
}

/*鼠标滚轮函数封装*/
function addWheel(obj,fn){
    function wheel(ev){
        var oEvent = ev || event;
        var bDown;
        bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
        fn&&fn(bDown);
        oEvent.preventDefault&&oEvent.preventDefault();
        return false;
    }
    if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
        obj.addEventListener('DOMMouseScroll',wheel,false);
    }else{
        addEvent(obj,'mousewheel',wheel);
    }
}
//角度转弧度
function d2a(n) {
    return Math.PI/180*n;
}

document.addEventListener('DOMContentLoaded',function () {
    //获取元素
    var aPage = document.querySelectorAll('.page');
    //设置页面高度
    (function () {
        var height = document.documentElement.clientHeight || document.body.clientHeight
        for(var i=0; i<aPage.length; i++){
            aPage[i].style.height = height+'px';
        }
        //设置页面跳转
        // aPage[0].style.transform = 'scale(1)';
        // aPage[0].style.height = height+'px';
        aPage[0].style.display = 'block';
        var oNav = document.querySelector('nav');
        var aA = oNav.querySelectorAll('a');
        for(var i=0; i<aA.length; i++){
            (function (i) {
                aA[i].onclick = function () {
                    for(var j=0; j<aA.length; j++){
                        // aPage[j].style.transform = 'scale(0)';
                        // aPage[0].style.height = 0;
                        aPage[j].style.display = 'none';
                    }
                    // aPage[i].style.transform = 'scale(1)';
                    aPage[i].style.display = 'block';
                    // aPage[0].style.height = height+'px';
                }
            })(i);
        }
    })();

    //设置页面跳转
    (function () {

    })();

    //画技能
    (function () {
        var oHtml5 = document.querySelector('#html5');
        var oH5c = oHtml5.getContext('2d');
        var oCss3 = document.querySelector('#css3');
        var oC3c = oCss3.getContext('2d');
        var oJs = document.querySelector('#js');
        var oJsc = oJs.getContext('2d');
        var oJq = document.querySelector('#jq');
        var oJqc = oJq.getContext('2d');
        var oBs = document.querySelector('#bs');
        var oBsc = oBs.getContext('2d');
        var oPs = document.querySelector('#ps');
        var oPsc = oPs.getContext('2d');
        var canW = 160;
        var canR = 70;
        var deg = -90;
        function strkeSkill(gd,n,color) {
            function strokeCan(deg) {
                gd.clearRect(0,0,oHtml5.width,oHtml5.height);
                gd.beginPath()
                gd.strokeStyle = color;
                gd.lineWidth = 10;
                gd.arc(canW/2,canW/2,canR,d2a(-90),d2a(deg),false);
                gd.stroke();
            }
            gd.timer = setInterval(function () {
                var oCan = document.querySelector('#page3');
                if(oCan.style.display == 'block'){
                    deg+=4;
                    strokeCan(deg);
                    console.log(deg);
                    if(deg>234){
                        clearInterval(gd.timer);
                    }
                }
            },30)
        }
        strkeSkill(oH5c,314,"#F1652A");
        strkeSkill(oC3c,314,"#409AD8");
        strkeSkill(oJsc,180,"#ECB12C");
        strkeSkill(oJqc,198,"#75B143");
        strkeSkill(oBsc,162,"#583F85");
        strkeSkill(oPsc,198,"#031A3A");


    })();
    //右侧按钮
    (function () {
        var oAside = document.querySelector('aside');
        var aLi = oAside.querySelectorAll('li');
        for(var i=0; i<aLi.length; i++){
            aLi[i].dataset.index = i;
            aLi[i].onmouseover = function () {
                this.children[0].style.transition = '2s';
                this.children[0].style.display = 'block';
                this.children[0].style.width = 80+'px';
            }
            aLi[i].onmouseout = function () {
                this.children[0].style.display = 'none';
                this.children[0].style.width = 0;
            }

            aLi[i].onclick = function () {
                for(var j=0; j<aLi.length; j++){
                    aPage[j].style.display = 'none';
                }
                aPage[this.dataset.index].style.display = 'block';
            }
        }
    })();
    //设置鼠标滚轮
    
    
},false)