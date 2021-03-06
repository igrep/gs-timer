# gs-timer

Google Spreadsheetsに、シンプルなタイマー機能を追加します。  
スプレッドシートへの追加機能なので、よくあるタイムトラッカーとは異なり、
あなたのカスタマイズ次第で、遥かに多様なニーズに応えることができます。

※現在、このアドオンは試験運用中です。

# Usage

1. スクリプトを埋め込んだ、[こちらのスプレッドシート](https://docs.google.com/a/33i.co.jp/spreadsheets/d/1KLaDfnIJL0xuLPiylvZN2kC31oyAJGBTEjz8l6noFBI/edit#gid=0)を、あなたのGoogle Driveにコピーしてください。
    1. 「File」 => 「Make a copy」 の順番にメニュー（日本語の場合「ファイル」 => 「コピーを作成」）をクリックしてください。
        ![Make a copy](./screenshots/make-a-copy.png)
    2. 作成するコピーの名前を入力する画面が表示されます。お好きな名前を入力してください。
        ![Enter a new document name](./screenshots/enter-a-new-document-name.png)
    3. この時点で、すでに時間を記録している別のスプレッドシートがある場合、その内容を、コピーしたシートにコピーしてください。
2. コピーしたスプレッドシートのメニューを「Time Tracking」 => 「Launch Timer」の順にクリックしてください。
    ![Launch Timer](./screenshots/launch-timer.png)
    1. 最初にこのメニューを実行した場合、下記のような、許可を求める画面が表示されます。「Continue」（日本語では「続行」）をクリックしてください。
        ![Authorization Required](./screenshots/authorization-required.png)
    2. 許可を求める画面が更に別のウィンドウに表示されます。「Accept」（日本語では「承認する」）をクリックして、あなたのスプレッドシートにアクセスする許可を与えてください。
        ![This app would like to:](./screenshots/this-app-would-like-to.png)
3. 画面右側にタイマーが表示されます。
    ![Timer](./screenshots/apps-script-application.png)
4. かかった時間を記録したいセルにカーソルを置き、タイマー「Start」ボタンをクリックしてください。
    - **NOTE**: カーソルのあるセルから、2つ右隣のセルまでの内容が、**上書き**されます。
      間違って上書きしてしまった場合は、慌てず騒がず「編集」メニューの「**元に戻す**」をクリックしてください。
    ![Click Start](./screenshots/timer-start.png)
5. 時間を計り終えたら、タイマーの「Stop」ボタンをクリックしてください。
    ![Click Stop](./screenshots/timer-stop.png)
6. 開始時間を記録したセルの右に、タイマーを停止した時刻と、かかった時間が記録されます。
    - **NOTE**: タイマーに表示されていた時間と、セルに記録された時間に、**大幅な差**がある場合があります。これは現在解決方法を検討中です。あしからず。
    ![Timer stopped](./screenshots/timer-stopped.png)
7. 後は、時間を記録したセルの右の列などに、お好みの情報を記録しましょう。
    ![Enter other columns](./screenshots/enter-other-columns.png)
