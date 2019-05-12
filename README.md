# RPA Boot Camp
## 目次
 * RPA Boot Campについて
 * 課題内容
   * 自動化対象業務
   * 課題1
   * 課題2（追加課題）
   * 課題3（追加課題）
 * 課題を実施するための準備（販売管理システム使用方法）
   * 概要
   * 起動するまでの手順
   * 起動後の使用方法
  
## RPA Boot Campについて
* 現場で新規ロボを開発するにあたり、最低限必要な開発スキル・ドキュメント作成を学べるように意図した実践課題です。  
* 必要なファイルは全て下記からダウンロードできます。  
  https://github.com/Tkyohei/Sales-Management-System-for-RPA-Boot-Camp
* UiPathで取り組むことを想定して作成しましたが、他のRPAツールを使用してもかまいません。  
* 一緒に取り組む人がいたら、お互いにお互いのロボ・ドキュメントをフィードバックをしてみてください。
* 課題2・課題3は追加課題です。余力があれば取り組んでみてください。
* 追加課題はExcel VBAでの実装を想定していますが、RPAツールで実装してもかまいません。  
  ※RPAの現場でExcel VBAに触れる機会が多いので、事前に慣れておくと役立ちます。
* 課題をやるうえで疑似的な販売管理システムを使用します。詳しくは「課題を実施するための準備（販売管理システム使用方法）」を参照してください。
* 質問があれば、お気軽に kyohei.tomita@persol.co.jp までメールしてください。完成品を送って頂ければフィードバックします。

## 課題内容
### 自動化対象業務
課題を設定するにあたり、下記の業務を想定します。
* 業務名：受注登録
* 業務内容：
  1. 顧客が注文システムで発注すると、注文内容がメールで配信される。
  2. メールをみて注文内容を注文管理表へ転記する。
  3. 注文管理表E列「企業名」をもとに顧客マスタから対象企業の企業コードを探し、F列「企業コード」へ転記する。  
     その際、注文管理表M列「納品日」、顧客マスタD列「契約終了日」を比較し、「納品日」の方が遅い場合は企業コードは転記せず、行全体をハイライトする。
  4. 注文管理表へ転記した注文情報を販売管理システムに登録する。　※契約が終了している顧客は登録しない。
  5. 登録後に表示される受注管理番号を注文管理表へ転記する。

### 課題1
* 「自動化対象業務」に記載した「ⅳ.」と「ⅴ.」を自動化するロボを開発してください。  
* 必要なファイルは「課題使用ファイル > 課題1使用ファイル」に格納されています。  
* 開発にあたっては最低条件として下記の仕様を入れてください。  
    * 注文管理表B列「ステータス」に下記のように処理状況を記録する。
        * 済：ロボの処理が完了している。
        * エラー：受注入力の途中でエラーが発生した。
    * 1件のデータの処理中にエラーが発生しても、処理を止めずに次の行を処理する。
    * エラーが発生した場合は、エラー内容をC列「エラー内容」に記録する。
    * 課題フォルダ内にある「設定.xlsx」を使い、URL・ユーザーID・パスワードを後から変更しやすいようにする。
 * 余力があれば、ユーザーや保守担当者のためにロボの簡易的な仕様書を作成してください。
   フォーマットは自由ですが、「課題使用ファイル」にフォーマットのサンプルを格納してあります（記入例は近日追加予定です...）。
 
### 課題2（追加課題）
* 「自動化対象業務」に記載した「ⅲ.」を自動化するExcel VBAを開発してください（UiPathでもOK）。  
* 必要なファイルは「課題使用ファイル > 課題2使用ファイル」に格納されています。  
* 開発にあたっては最低条件として下記の仕様を入れてください。 
    * マクロを実行するボタンを配置したシートを作成する。
    * 上記シート上で注文管理表と顧客マスタのファイルパスを指定する欄を作り、後からファイルパスを変更できるようにする。
    * マクロは課題管理表のファイルに作成しても、新しくファイルを作成してもどちらでもかまいません。

### 課題3（追加課題）
* 「自動化対象業務」に記載した「ⅱ.」を自動化するExcel VBAを開発してください（UiPathでもOK）。  
* 必要なファイルは「課題使用ファイル > 課題3使用ファイル」に格納されています。
  ※「注文内容が書かれたメール：は「課題使用ファイル > 課題2使用ファイル > 注文メール」に格納してあります。  
    msgファイルをOutlookの任意のフォルダに格納してください。
* 開発にあたっては最低条件として下記の仕様を入れてください。 
    * 課題2で作成した「マクロを実行するボタンのあるシート」に同じく実行ボタンを配置する。
    * 上記シート上で注文メールが格納されるOutlook上のフォルダ名を指定する欄を作り、後からフォルダを変更できるようにする。

## 課題を実施するための準備（販売管理システム使用方法）
### 概要  
* RPA Boot Campでは疑似的な販売管理システムを使用します。  
* 販売管理システム自体はHTMLファイルを直叩きして使用する予定でしたが、それだとUiPathで要素認識ができないので、ローカルにサーバーを立てて使用します。
* Chromeの「Web server for Chrome」という拡張機能をでローカルサーバーを立てます（詳細は「起動するまでの手順」参照）。
* メニュー画面に6つのメニューがありますが、実装してあるのは「受注入力」「受注一覧」のみです。
* RPAトレーニング用に、受注入力画面にイタズラを仕込んでいますので、エラー処理でうまく対応してください。
* データベースはブラウザ内に構築しています。

### 対応ブラウザ
Google Chrome

### 起動するまでの手順
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
※他のWEBサーバーを立てても問題ありませんが、「Web Server for Chrome」が調べた限り一番お手軽です。  

### 受注入力・確認までの手順
1. ログインIDとパスワードを入力してログインする。
    * ID:robo  
    * Password:ptcs  
2. 「受注入力」をクリックし、データを入力後、「確認画面へ」をクリック  
    ※企業コードは「課題使用ファイル > 課題1使用ファイル」フォルダ内の「顧客マスタ」を参照してください。  
3. 受注内容が問題なければ「保存」をクリックする。
4. メニュー画面を押し、「受注一覧」をクリックすると入力した注文内容が確認できる。
※受注入力では一定の確率で通信エラーが発生したり、読込に時間がかかったりしますが、RPA開発の訓練のために盛り込んだ仕様です。

### データベースについて
  * データベースはブラウザに内蔵されているlocalStorage上に構築しています。
  * ログイン後、右上に表示される「データベース初期化」ボタンを押すと、データベースは初期状態になります。
  * F12でデベロッパーツールを開き、Consoleでalasql("SQL文")を実行すれば、SQLを使うことができます。

### その他
* 不具合があったらすみません。教えてもらえると助かります。
