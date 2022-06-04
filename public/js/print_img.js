const imageArea = document.getElementById('imageArea');
var bt = document.getElementById('btn_change_img');

var data_num = 3;
var id;
var graph_path;
var class_path;

bt.addEventListener( 'click', function( e ) {

    var selectnum = Math.floor(Math.random() * (data_num ));
    console.log(selectnum);

    id = data[selectnum].id;
    graph_path = data[selectnum].graph_img;
    class_path = data[selectnum].class_img;

    console.log('data', data);
    console.log('data', data[0]);
    console.log('data', data[0].graph_img);
    console.log('data', graph_path);
    console.log('data', class_path);
    
    var element_1 = '<img src="' + graph_path + '" alt="" />';
    var element_2 = '<img src="' + class_path + '" alt="" />';
    graph_img.innerHTML = element_1;
    class_img.innerHTML = element_2;
}, false);