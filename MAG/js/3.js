var tabImg_Ul=document.getElementsByClassName('bn-let')[0];
var tabImg=tabImg_Ul.getElementsByTagName('li');
var tabBar_Ul=document.getElementsByClassName('bn-right')[0];
var tabBar=tabBar_Ul.getElementsByTagName('li');

for (var i = 0; i < tabBar.length; i++) {
    tabBar[i].index=i;

    tabBar[i].onmouseover=function(){
        for(var j=0; j<tabImg.length; j++){
            tabImg[j].style.display='none';
            tabBar[j].style.background='none'
             tabBar[j].style.borderBottom='none'
        }
       tabImg[this.index].style.display='block'
       this.style.background='-webkit-linear-gradient(90deg,#d9d9d9,#fff)';
    }
 tabBar[i].style.borderBottom='1px solid #e2e2e2'
};