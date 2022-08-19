let text_1 = document.querySelector(".text_1");
let text_2 = document.querySelector(".text_2");
let text_3 = document.querySelector(".text_3");
let downbox_verse = document.querySelector(".downbox_verse");
let input_num = document.querySelector(".input_num");
let input_verse = document.querySelector(".input_verse");
let verseAnd = "~";
let verseOr = ", ";

document.body.style.cursor = 'none';
input_num.focus();

function displayText(num) {
    text_1.classList.add('remove');
    text_2.classList.add('remove');
    text_3.classList.add('remove');
    eval("text_" + num + ".classList.remove('remove')")
}



window.addEventListener("keydown", (e) => {
    if(e.key === "Tab") {
        displayText(1);
        e.preventDefault();
        e.returnValue = false;
    }
    if(e.key === "/") {
        displayText(2);
        e.preventDefault();
        e.returnValue = false;
    }
    if(e.key === "*") {
        displayText(3);
        e.preventDefault();
        e.returnValue = false;
    }
    if(e.key === "Backspace") {
        e.preventDefault();
        e.returnValue = false;
        location.reload();
    }
    if(e.key === "-") {
        e.preventDefault();
        e.returnValue = false;
        input_verse.value = input_verse.value + " ~ ";
    }
    if(e.key === "+") {
        e.preventDefault();
        e.returnValue = false;
        input_verse.value = input_verse.value + ", ";
    }
    if(e.key === "Enter") {
        e.preventDefault();
        e.returnValue = false;
        downbox_verse.classList.remove('remove');
        input_verse.focus();
    }
    if(e.key === ".") {
        e.preventDefault();
        e.returnValue = false;
    }
}
);