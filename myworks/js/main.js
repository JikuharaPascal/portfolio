const TAGMENU = "menu";
const TAGHUMBCLOSE = "humb-close";
const TAGHUMBOPEN = "humb-open";
// const TAGHEADER = "header";
// const TAGMODAL = "modal";
// const TAGSUBMIT = "submit";
// const TAGMODALCLOSE = "modal-close";
// const TAGMODALSUBMIT = "modal-submit";

// const URLComplete = "complete.html";

// // console.log("コンソール出力");
// // console.log("コンソール出力2");
// // console.log("コンソール出力3");

// // 変数の宣言
// let num = 30;
// // 変数の出力
// console.log(num);

// // 変数の上書き
// num = 50;
// // 変数の再出力
// console.log(num);

// // 定数の宣言
// const MESSAGE = "定数メッセージ";
// // 定数の出力
// console.log(MESSAGE);
// // 定数の上書き
// // MESSAGE = "定数メッセージの上書き";
// // 定数の出力
// console.log(MESSAGE);

// // データ型の確認
// console.log(typeof 10);
// console.log(typeof "こんにちは");
// console.log(typeof true);

// // 関数の定義
// function Greet(name) {
//     console.log(name + "さん、こんにちは");
// };

// // 関数の呼び出し
// Greet("山田");
// Greet("鈴木");

// console.log(document.getElementById(TAGMENU));

// // document.getElementById(TAGMENU).textContent = "MENUの書き換え";

// // クリックイベントで呼ばれる関数の定義
// function MenuClick() {
//     document.getElementById(TAGMENU).textContent = "クリックされました";
// };

// // クリックイベント
// document.getElementById(TAGMENU).onclick = MenuClick;

// // マウスオーバーイベントで呼ばれる関数の定義
// function MenuMouseOver() {
//     document.getElementById(TAGMENU).textContent = "マウスオーバーされました";
// };

// // マウスオーバーイベント
// document.getElementById(TAGMENU).onmouseover = MenuMouseOver;

// // スタイルの操作をおこなう関数の定義
// function HeaderMouseOver() {
//     document.getElementById(TAGHEADER).style.color = "red";
// };

// // スタイルの呼び出し
// document.getElementById(TAGHEADER).onmouseover = HeaderMouseOver;

// // classの追加・削除をおこなう関数の定義
// function HeaderOnClick() {
//     document.getElementById(TAGHEADER).classList.toggle("clicked");
// };

// // classの追加・削除を行う関数の呼び出し
// document.getElementById(TAGHEADER).onclick = HeaderOnClick;

// // モーダルを表示する関数の定義
// function ModalOpen() {
//     document.getElementById(TAGMODAL).style.display = "block";
// };

// // 送信ボタンをクリックした時にModalOpenの関数を呼び出す
// document.getElementById(TAGSUBMIT).onclick = ModalOpen;

// // モーダルを非表示にする関数の定義
// function ModalClose() {
//     document.getElementById(TAGMODAL).style.display = "none";
// };

// // モーダル上で戻るボタンをクリックしたときにModalClose関数を呼び出す
// document.getElementById(TAGMODALCLOSE).onclick = ModalClose;

// // ページを遷移させる関数の定義
// function ModalSubmit() {
//     location = URLComplete;
// };

// // モーダル上で送信ボタンをクリックした時にModalSubmit関数を呼び出す
// document.getElementById(TAGMODALSUBMIT).onclick = ModalSubmit;



/*
// メニューを表示する関数の定義
function MenuOpen() {
    document.getElementById(TAGMENU).style.display = "block";
    document.getElementById(TAGHUMBCLOSE).style.display = "block";
};

// 開くアイコンをクリックしたときにmenuOpen関数を呼び出す
document.getElementById(TAGHUMBOPEN).onclick = MenuOpen;

// メニューを非表示にする関数の定義
function MenuClose() {
    document.getElementById(TAGMENU).style.display = "none";
};

// 閉じるアイコンをクリックしたときにmenuClose関数を呼び出す
document.getElementById(TAGHUMBCLOSE).onclick = MenuClose;
*/

const swiper = new Swiper('.swiper',
    {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }
);

