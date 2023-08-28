
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // $(function(){
  //   $('.btn-trigger').on('click', function() {
  //     $(this).toggleClass('active');
  //     return false;
  //   });
  // });

  var swiper = new Swiper(".js-mv-swiper", {
    pagination: {
      el: ".js-works-pagination"
    },
    clickable: true,
    loop: true,
    loopAdditionalSlides: 1,
    // autoplay: {
    //   delay: 3000
    // }
  });


  var swiper = new Swiper(".swiper-campaign", {
    slidesPerView: 1.2, // スライド数
    spaceBetween: 24,
    freeMode: true, // 前後のスライドで止まらずにスライド
    grabCursor: true, // カーソルを置いたときに指のカーソルを表示
    // centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction:false,
      },
    navigation: {
      nextEl: ".swiper-campaign .swiper-button-next",
      prevEl: ".swiper-campaign .swiper-button-prev",
    },
    breakpoints: {
      768:{
        slidesPerView: 3.5,
        spaceBetween: 40,
      }
    },
  });

//フッター手前で止まるボタン
$(function() {
  // 変数にクラスを入れる
  var btn = $('.to-top');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
  
  //フッターの手前でボタンを止める
  $(window).on('load scroll', function(){
    var height = $(document).height(), //ドキュメントの高さ 
        position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
        footer = $('footer').height(); //フッターの高さ
    if ( height - position  < footer ){ 
      btn.addClass('absolute');
    } else { 
      btn.removeClass('absolute');
    }
  });

  //スクロールしてトップへ戻る
//   btn.on('click',function () {
//     $('body,html').animate({
//       scrollTop: 0
//     });
//   });
// });

});

});
