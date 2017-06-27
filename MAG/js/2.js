window.onload=function(){
var navUl=document.getElementsByClassName('top-left')[0];
var navLi=navUl.getElementsByTagName('li');
for (var i = 0; i < navLi.length-2; i++) {
    navLi[i].index=i;
    navLi[i].onmouseover=function(){
        for(var j=0; j<navLi.length-2; j++){
            navLi[j].className=''
        }
        this.className='navHover'
    }
};
    // var topInput=document.getElementsByClassName('top-input')[0];
    // topInput.onfocus=function(){
    //     topInput.placeholder=''
    // }
    //     var topButton=document.getElementsByClassName('top-button')[0];
    //     topButton.onclick=function(){
    //         var aSearch=topInput.value
    //         window.open('https://www.baidu.com/s?wd='+aSearch,'blank')
    //     }
              var  aboutBanner=document.getElementsByClassName('about-banner')[0];
              var bannerImg=aboutBanner.getElementsByTagName('img');
             for (var i = 0; i < bannerImg.length; i++) {
                 bannerImg[i].index=i;
                 bannerImg[i].onmouseover=function(){
                    // for (var j = 0; j < bannerImg.length; j++) {
                    //     bannerImg[j].
                    // };
                    var a=bannerImg[1].src
                     bannerImg[1].src = this.src;
                    this.src=a;

                    
                 }
             };
    
}