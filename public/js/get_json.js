var data;

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
                data = json;
                console.log('debag', data);
        },
        function () {
            // エラー発生時
                alert('エラー時に表示されるテキスト');
            }
        );
    });
console.log('debag', data);
