# Sales-Management-System-for-RPA-Boot-Camp
### 概要  
RPA学習教材（RPA Boot Camp）用に作成した疑似的な販売管理システムです。  
  
### 使用方法  
1. login.htmlを直叩きしてください。  
2. ID:robo Password:ptcs でログインしてください。 
3. 「受注入力」と「受注一覧」のみ実装されています。
4. 受注入力を行うと、受注一覧に結果が反映されます。 ※ロード時間が長くなったり、通信エラーになったりするクソシステムです（RPA訓練のため）。
5. 受注入力の際に、企業コードが必要となります。下記が使用できる企業コードです。
    * R151820 : 令和クリエイティブソリューションズ株式会社
    * H801010 : 株式会社ホタテ
    * P888888 : 株式会社パラソル
    * H123456 : 株式会社UBW
    * S333333 : SAZAE株式会社
    * S202020 : KATSUO株式会社
    * H000000 : WAKAME株式会社

### 対応ブラウザ
Google Chorome  
※ 他は検証していません。

### データベースについて
* データベースはブラウザに内蔵されているlocalStorage上に構築しています。
* ログイン後、右上に表示される「データベース初期化」ボタンを押すと、データベースは初期状態になります。
* F12でデベロッパーツールを開き、Consoleでalasql("SQL文")を実行すれば、SQLを使うことができます。

### その他
* 不具合があったらすみません。教えてもらえると助かります。
