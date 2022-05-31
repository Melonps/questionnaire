const imageArea = document.getElementById('imageArea');
var bt = document.getElementById('btn_change_img');

var data_num = 3;
var path;

bt.addEventListener( 'click', function( e ) {

    var selectnum = Math.floor(Math.random() * (data_num ));
    console.log(selectnum);

    $(function() {
        $.ajax({
            type: 'GET',
            url: 'data/img_path.json',
            dataType: 'json',
            async: false,
        })
        .then(
            // 取得成功時
            function (json) {
                console.log(json[selectnum].filename);
                path = json[selectnum].filename;
        },
        function () {
            // エラー発生時
                alert('エラー時に表示されるテキスト');
            }
        );
    });
    
    console.log('data', path);

var element = '<img src="' + path + '" alt="" />';
    target.innerHTML = element;
    }, false );