// ある値に等しくない要素を非表示にする
$('#tab-contents .tab[id != "tab1"]').hide();

//id="tab-menu"のaタグがクリックされたときに、処理を実行してください」の意味
$('#tab-menu a').on('click', function(event) {
  // id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示にしています。
  $("#tab-contents .tab").hide();
  // removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド
  $("#tab-menu .active").removeClass("active");
  //addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
  $(this).addClass("active");
  //attr()は、HTML要素の属性を取得したり設定できるメソッド
  $($(this).attr("href")).show();
  event.preventDefault();
});