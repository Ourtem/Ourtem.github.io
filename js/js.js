
  $(document).on("readystatechange", function () {
    if (document.readyState == "complete") {
                new WOW().init();
    }
})

    $('.navlink').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');
      $('.notice').removeClass('active');
    });
    

    $(document).ready(function(){
      getitemwidth()
      $(window).resize(function(wil2) {
        getitemwidth()
      });
  });


    $('.items div img').on('mouseover',function(){
      let img=$(this);
      setTimeout(function(){
        img.next('a').css('pointer-events','auto');
      },500);
    })

    $('.psaiSwitch').on('click',function(){
      $('.web').slideUp(300,function(){
        $('.psai').fadeIn(300);
      });
    })
    $('.webSwitch').on('click',function(){
      $('.psai').fadeOut(300,function(){
        $('.web').slideDown(300);
      });
    })

    $(".notice").on("mouseover",function(e){
      $('.noticeText').stop();
      $('.noticeText').fadeIn(300);
  })
  $(".notice").on("mouseout",function(e){
      $('.noticeText').stop();
      $('.noticeText').fadeOut(300);
  })
    
  function scr(id){
    $([document.documentElement, document.body]).animate({
      scrollTop: $(id).offset().top
    }, 1000);
  }

  function getitemwidth(){
    let wil2;
    wil2=$('.items').eq(1).css('width');
    $('.items').eq(-1).css('max-width',wil2);
    $('.items').eq(-2).css('max-width',wil2);
  }