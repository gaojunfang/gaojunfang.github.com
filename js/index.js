/**
 * Created by Administrator on 2016/11/18.
 */
document.addEventListener('DOMContentLoaded',function () {
    //设置页面高度
    (function () {
        function bg_height() {
            var aPage = document.querySelectorAll('.page');
            for(var i=0; i<aPage.length; i++){
                aPage[i].style.height = document.documentElement.clientHeight + 'px';
            }
        }
        bg_height();
        window.addEventListener('resize',bg_height,false);
    })();
    
},false)