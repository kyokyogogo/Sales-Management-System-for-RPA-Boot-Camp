


## 販売管理システム使用方法
### 概要  
RPA学習教材（RPA Boot Camp）用に作成した疑似的な販売管理システムです。  
login.htmlを直叩きすれば使用システム自体は使用可能ですが、  
それだとUiPathで要素認識ができないのでローカルにサーバーを立てて使用します。  
メニュー画面に6つのメニューがありますが、実装してあるのは「受注入力」「受注一覧」のみです。
### 起動までの手順
1. GitHubのRPA Boot Campのリポジトリへアクセス  
    https://github.com/Tkyohei/Sales-Management-System-for-RPA-Boot-Camp  
2. 「Clone or download」 > 「Download ZIP」をクリック
3. Sales-Management-System-for-RPA-Boot-Camp-master.zip を任意の場所に解凍
4. Google Chromeで下記URLへアクセスし、拡張機能「Web Server for Chrome」を追加
    https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=ja  
5. Chromeのブックマークバーの「アプリ」もしくはスタートメニューから「Web Server for Chrome」を起動
6. 「CHOOSE FOLDER」をクリックし、「3.」で解凍したフォルダの2階層目のフォルダ（下記パス参照）を選択  
    %解凍先フォルダ%\Sales-Management-System-for-RPA-Boot-Camp-master\Sales-Management-System-for-RPA-Boot-Camp-master  
7. 下記URLへアクセスし、販売管理システムのログイン画面が表示されることを確認する
    http://127.0.0.1:8887/login.html  
### 起動後の使用方法
* 対応ブラウザ  
  Google Chrome
* ログイン情報
  * ID:robo
  * Password:ptcs
* 受注入力・確認までの手順
  1. ログインIDとパスワードを入力してログインする。
  2. 「受注入力」をクリックし、データを入力後、「確認画面へ」をクリック  
      ※企業コードは「帳票ファイル」フォルダ内の「顧客マスタ」を参照してください。  
  3. 受注内容が問題なければ「保存」をクリックする。
  4. メニュー画面を押し、「受注一覧」をクリックすると入力した注文内容が確認できる。
  ※受注入力では一定の確率で通信エラーが発生したり、読込に時間がかかったりしますが、RPA開発の訓練のために盛り込んだ仕様です。
### データベースについて
  * データベースはブラウザに内蔵されているlocalStorage上に構築しています。
  * ログイン後、右上に表示される「データベース初期化」ボタンを押すと、データベースは初期状態になります。
  * F12でデベロッパーツールを開き、Consoleでalasql("SQL文")を実行すれば、SQLを使うことができます。
### その他
* 不具合があったらすみません。教えてもらえると助かります。
