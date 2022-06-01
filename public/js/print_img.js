const imageArea = document.getElementById('imageArea');
var bt = document.getElementById('btn_change_img');

var data_num = 3;
var path;
var graph_path;
var class_path;

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
                console.log(json[selectnum].graph_img);
                graph_path = json[selectnum].graph_img;
                class_path = json[selectnum].class_img;
        },
        function () {
            // エラー発生時
                alert('エラー時に表示されるテキスト');
            }
        );
    });
    
    console.log('data', graph_path);
    console.log('data', class_path);

    var element_1 = '<img src="' + graph_path + '" alt="" />';
    var element_2 = '<img src="' + class_path + '" alt="" />';
    graph_img.innerHTML = element_1;
    class_img.innerHTML = element_2;
}, false);
    
