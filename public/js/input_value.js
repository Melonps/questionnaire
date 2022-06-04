var ans_4;

function onClick() {
    const $inputText = $('input[name="user_talk"]');
    ans_4 = $inputText.val();
    console.log(ans_4);
    $('#output').html(ans_4);
    if(!ans_4) {
        console.log("none");
        return
    }
}