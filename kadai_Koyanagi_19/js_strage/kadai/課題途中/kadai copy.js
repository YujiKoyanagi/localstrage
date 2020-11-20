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





 
