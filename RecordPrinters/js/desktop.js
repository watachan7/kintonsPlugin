jQuery.noConflict();

(function($, PLUGIN_ID) {
    "use strict";
    kintone.events.on('app.record.index.show', function(event) {

        // 設定を読み込み
        var config = kintone.plugin.app.getConfig(PLUGIN_ID);

        // ボタンを作成
        var printerButton = document.createElement('button');
        printerButton.id = 'printer_button';
        printerButton.innerHTML = config.message;

        // ヘッダにボタンをセット
        kintone.app.getHeaderMenuSpaceElement().appendChild(printerButton);

        // プリントするレコードの一覧を表示
        printerButton.onclick = function() {
            var contents = document.getElementById('view-list-data-gaia').innerHTML;
            var mywindows = window.open('', 'Print', 'height=600,width=800');
            mywindows.document.write('<html><head><title>Print</title>');
            mywindows.document.write('</head><body >');
            mywindows.document.write(contents);
            mywindows.document.write('</body></html>');
            mywindows.document.close();
            mywindows.focus()
            mywindows.print();
            mywindows.close();
        };
    });
})(jQuery, kintone.$PLUGIN_ID);