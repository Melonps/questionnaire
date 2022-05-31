function onClick() {
                    const $inputText = $('input[name="user_talk"]');
                    const text = $inputText.val();
                    console.log(text);
                    $('#output').html(text);
                    if(!text) {
                        console.log("none");
                        return
                    }
                }