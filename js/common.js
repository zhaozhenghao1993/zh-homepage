$(document).ready(function(){
    NProgress.configure({ showSpinner: false });
    NProgress.start();
});
$(window).load(function(){
    NProgress.done();
});


$(function() {
    $("#wechat").click(function(){
        //页面层
        layer.open({
            type: 1,
            title: '公众号二维码',
            skin: 'layui-layer-demo', //加上边框
            area: ['400px', '450px'], //宽高
            content: '<img style="width: 400px;height: 400px" src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQEx8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyQlpjbVEwVnJkYmkxMDAwMHcwN3gAAgRd-RhbAwQAAAAA">'
        });
    });

    //返回顶部
    $(window).on('scroll',function(){
        var st = $(document).scrollTop();
        if( st>0 ){
            if( $('#main-container').length != 0  ){
                var w = $(window).width(),mw = $('#main-container').width();
                if( (w-mw)/2 > 70 )
                    $('#go-top').css({'left':(w-mw)/2+mw+20});
                else{
                    $('#go-top').css({'left':'auto'});
                }
            }
            $('#go-top').fadeIn(function(){
                $(this).removeClass('dn');
            });
        }else{
            $('#go-top').fadeOut(function(){
                $(this).addClass('dn');
            });
        }
    });
    $('#go-top .go').on('click',function(){
        $('html,body').animate({'scrollTop':0},500);
    });

    $('#go-top .uc-2vm').hover(function(){
        $('#go-top .uc-2vm-pop').removeClass('dn');
    },function(){
        $('#go-top .uc-2vm-pop').addClass('dn');
    });
});