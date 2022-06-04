var data_ans = [];
var each_ans = [];
var q = location.search.substring(1);
var a = q.split("=")[1];
console.log(a);

function sendform() {
    const ans_1 = document.getElementById("q_1").value;
    const ans_2 = document.getElementById("q_2").value;
    const ans_3 = document.getElementById("q_3").value;

    document.getElementById("span1").textContent = ans_1; 
    each_ans.push(id,ans_1, ans_2, ans_3, ans_4);
    console.log(ans_4);
    data_ans.push(each_ans);
    debag(data_ans);
    debag(each_ans);
    debag(ans_4);
    each_ans = [];
    const str2 = JSON.stringify(data_ans, null, 5);
    console.log(str2)
}