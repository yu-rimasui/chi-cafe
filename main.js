/*
 * スクロールアニメーション
 */
// 要素を取得
const triggerElement = document.getElementsByClassName("trigger");

// スクロール時のイベントリスナーを設定
window.addEventListener("scroll", function () {
  for (let i = 0; i < triggerElement.length; i++) {
    // 要素が画面内に表示されているかどうかを確認
    const triggerElementRect = triggerElement[i].getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // 要素が画面内に入ってから100px進んだら
    if (triggerElementRect.top <= windowHeight - 100) {
      // .onクラスを追加
      triggerElement[i].classList.add("on");
    }
  }
});
