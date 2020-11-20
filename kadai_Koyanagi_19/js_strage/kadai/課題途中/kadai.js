// ここに命令を書いていく（即時関数、どのJS書く時も記載をする。別ファイルで同じ変数が出た時に被らないように記載）
(()=>{

//変数名に＄をつけると、これはDOM要素という目標になる
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');

    // 初期化init
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    // クリックイベント
    const handleClick = (e) => {
        e.preventDefault();
        console.log('clicked!');

        // クリックされたnavとそのデータを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

// 対象外のナビコンテンツを全て一旦リセットする
let index = 0;
while(index < $nav.length){
    $content[index].style.display = 'none';
    $nav[index].classList.remove('is-active');
    index++;
}

// 対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add('is-active');
    };


// 前navに対して関数を適用
    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click' , (e) => handleClick(e));
        index++;
}

    //1.Save クリックイベント
    $("#save").on("click", function () {
        // val()で値を取得する
        const key = $("#key").val();
        const value = $("#memo").val();
        // html側で入力されたデータを取得して確認
        console.log(key)
        console.log(value)
        // データを保存する
        localStorage.setItem(key, value); //一覧表示に追加
        const html = `
        <li>
          <span>${key}</span>
          <span>${value}</span>
        </li>`
        $("#list").append(html);
        // これをしてあげると中身の文字列が消える
        $("#key").val("");
        $("#memo").val("");
        // この↓消しちゃダメ
      });
      //2.clear クリックイベント
      $("#clear").on('click', function () {
        // 保存されたデータ（localStorage）を消す
        localStorage.clear();
        //id="list"を削除する
        $("#list").empty();
      });
      //3.ページ読み込み：保存データ取得表示
      for (let i = 0; i < localStorage.length; i++) {
        // 保存されたデータのkeyを取得
        const key = localStorage.key(i);
        console.log(key, 'key')
        // getItemのKeyを使って保存されたデータを全部取得
        const value = localStorage.getItem(key);
        console.log(value, 'value')
        const html = `<li><span>${key}</span><span>${value}</span></li>`
        $("#list").append(html);
      }


})();





 
