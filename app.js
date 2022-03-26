// 5章

// $(document).ready(function () {
//   $('body').html('<h1> Hello jQuery!!</h1>');
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color' : '#0000FF',
//       'width' : '200px',
//       'height' : '100px'
//     }) .slideUp('slow');
//   });
// });

// 上記 解説
// javascriptでは、引数の中に関数を入れることができます。
// slideDown()の引数にfunctionを書き加えることで、スライドダウンした後にfunctionを実行することができるようになります。
// ですのでslideDownの中のfunctionに、cssで色と大きさを変え、slideUp()をすることで要件を満たすことができます。

// 因みに、アニメーションの速度を変える場合はslideDown()の第一引数に数字を入力することで実現できます。（単位はミリ秒なので、1秒の場合は'1000'になります。）

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// ６章

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color' : '#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color' : '#ff0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});