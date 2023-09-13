const TAGMODAL = "modal";
const TAGSUBMIT = "submit";
const TAGMODALCLOSE = "modal-close";
const TAGMODALSUBMIT = "modal-submit";
const URLComplete = "contact.html";

// モーダルを表示する関数の定義
function ModalOpen() {
    document.getElementById(TAGMODAL).style.display = "block";
};
// 送信ボタンをクリックした時にModalOpenの関数を呼び出す
document.getElementById(TAGSUBMIT).onclick = ModalOpen;

// モーダルを非表示にする関数の定義
function ModalClose() {
    document.getElementById(TAGMODAL).style.display = "none";
};

// モーダル上で戻るボタンをクリックしたときにModalClose関数を呼び出す
document.getElementById(TAGMODALCLOSE).onclick = ModalClose;

// ページを遷移させる関数の定義
function ModalSubmit() {
    location = URLComplete;
};

// モーダル上で送信ボタンをクリックした時にModalSubmit関数を呼び出す
document.getElementById(TAGMODALSUBMIT).onclick = ModalSubmit;
