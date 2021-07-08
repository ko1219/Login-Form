const form = document.querySelector("form"),
  eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault(); //Formからの送信を防ぐ
  if (eInput.value == "") {
    //もしEmailの入力欄が空だったら
    eField.classList.add("shake", "error");
  } else {
    checkEmail(); // checkEmail function の呼び出し
  }
  if (pInput.value == "") {
    //もしPasswordの入力欄が空だったら
    pField.classList.add("shake", "error");
  }

  setTimeout(() => {
    //0.５秒経った後shakeクラスを取り除く
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  // 入力のバリデーションを記述します
  eInput.onkeyup = () => {
    checkEmail(); // checkEmail function の呼び出し
  };

  function checkEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //email のバリーデーション
    if (!eInput.value.match(pattern)) {
      //もしパターン通りに記述できなかったら,,
      eField.classList.add("error");
      let errorTxt = eField.querySelector(".error-txt");
      // emailが空のときは"Email can't be blank"が表示されるが、
      // そうでない時は"Enter a valid email address"が表示される
      eInput.value != "" ? (errorTxt.innerHTML = "Enter a valid email address") : (errorTxt.innerHTML = "Email can't be blank");
    } else {
      eField.classList.remove("error");
    }
  }

  pInput.onkeyup = () => {
    //password のバリーデーション半角英数字8~16文字の正規表現
    let passPattern = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,15}$/i;
    if (!pInput.value.match(passPattern)) {
      //もしパターン通りに記述できなかったら,,
      pField.classList.add("error");
      let passErrorTxt = pField.querySelector(".error-txt");
      // emailが空のときは"Email can't be blank"が表示されるが、
      // そうでない時は"Enter a valid email address"が表示される
      eInput.value != "" ? (passErrorTxt.innerHTML = "Enter a valid password") : (errorTxt.innerHTML = "Password can't be blank");
    } else {
      pField.classList.remove("error");
    }
  };
};

//全ての入力が正しかったときの処理
//正しかった場合指定したurlに遷移する
if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
  window.location.href = "#";
}
