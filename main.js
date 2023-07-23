// 開始時の動作

// ボタンタブの処理機構

function viewtab1() {
  document.getElementById("chat").style.display="none";
  document.getElementById("help").style.display="none";
  document.getElementById("form").style.display="none";
  document.getElementById("account").style.display="none";
  document.getElementById("setting").style.display="none";
  document.getElementById("welcome").style.display="none";
  // 写す対象を以下のコードに入力
  document.getElementById("chat").style.display="block";
}

function viewtab2() {
  document.getElementById("chat").style.display="none";
  document.getElementById("help").style.display="none";
  document.getElementById("form").style.display="none";
  document.getElementById("account").style.display="none";
  document.getElementById("setting").style.display="none";
  document.getElementById("welcome").style.display="none";
  // 写す対象を以下のコードに入力
  document.getElementById("help").style.display="block";
}

function viewtab3() {
  document.getElementById("chat").style.display="none";
  document.getElementById("help").style.display="none";
  document.getElementById("form").style.display="none";
  document.getElementById("account").style.display="none";
  document.getElementById("setting").style.display="none";
  document.getElementById("welcome").style.display="none";
  // 写す対象を以下のコードに入力
  document.getElementById("form").style.display="block";
}

function viewtab4() {
  document.getElementById("chat").style.display="none";
  document.getElementById("help").style.display="none";
  document.getElementById("form").style.display="none";
  document.getElementById("account").style.display="none";
  document.getElementById("setting").style.display="none";
  document.getElementById("welcome").style.display="none";
  // 写す対象を以下のコードに入力
  document.getElementById("account").style.display="block";
}

function viewtab5() {
  document.getElementById("chat").style.display="none";
  document.getElementById("help").style.display="none";
  document.getElementById("form").style.display="none";
  document.getElementById("account").style.display="none";
  document.getElementById("setting").style.display="none";
  document.getElementById("welcome").style.display="none";
  // 写す対象を以下のコードに入力
  document.getElementById("setting").style.display="block";
}



function send() {
  var textcheck = document.getElementById('sendtext').value; 
  // 親要素
  var list = document.getElementById('aichat');
  
  // 追加する要素を作成
  var li = document.createElement("li");
  var message = textcheck;
  var formattedMessage = message.replace(/\n/g, "<br>");
  

  // <li>要素の中に追加するHTMLコードを指定
  // '<div class="user"><div class="DivMessage"><img src="user.png"><div class="message">' + formattedMessage + '</div></div></div>'
  var htmlContent = '<div class="user"><div class="DivMessage"><img src="user.png"><div class="message">' + formattedMessage + '</div></div></div>';

  var mes = document.getElementById('mes');
  // <li>要素にHTMLコードを追加
  li.innerHTML = htmlContent;
  
  // リストに作成した<li>要素を追加
  var list = document.getElementById("aichat"); // リストのIDを指定
  list.appendChild(li);

  // S スクロール
  var element = document.documentElement;
  var bottom = element.scrollHeight - element.clientHeight;
  window.scroll(0, bottom);
  // E スクロール
  var clear = document.getElementById('sendtext');
  clear .innerText = "";
  



  // AI send system
  function AIsend() {
    setTimeout(() => {
      var li = document.createElement("li");
      // var message = ">> " + textcheck + '<br><span style="color:red;">Error: This AI cannot respond because the server is not started. <br> Please try again when the server is up.</span>';
      var message = ">> " + textcheck + '<br><span style="color:red;">エラー: このAIはサーバーが起動されていないため返答ができません <br> サーバーが起動しているときに再度お試しください(エラーコード404)</span>';
      var formattedMessage = message.replace(/\n/g, "<br>");
      var htmlContent = '<div class="ai"><div class="DivMessage"><img src="AI.png"><div class="message">' + formattedMessage + '</div></div></div>';
      li.innerHTML = htmlContent;
      var list = document.getElementById("aichat"); // リストのIDを指定
      list.appendChild(li);
      // S スクロール
      var element = document.documentElement;
      var bottom = element.scrollHeight - element.clientHeight;
      window.scroll(0, bottom);
      // E スクロール
      var clear = document.getElementById('sendtext');
      clear .innerText = "";
    }, 1200);
  }

  AIsend();
}
