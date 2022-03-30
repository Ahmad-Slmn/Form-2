const form1 = document.getElementById("form1");
const input1Form1 = document.querySelector('#form1 input:nth-of-type(1)');
const input2Form1 = document.querySelector('#form1 input:nth-of-type(2)');
const input3Form1 = document.querySelector('#form1 input:nth-of-type(3)');

const form2 = document.getElementById("form2");
const input1Form2 = document.querySelector('#form2 input:nth-of-type(1)');
const input2Form2 = document.querySelector('#form2 input:nth-of-type(2)');
const input3Form2 = document.querySelector('#form2 input:nth-of-type(3)');
const form3 = document.getElementById("form3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const porges = document.getElementById("porges");

next1.onclick = function () {
    if (input1Form1.value == "" || input2Form1.value == "" || input3Form1.value == "") {
        document.querySelector('.alert').classList.add("down")
        return false;

    } else {
        form1.style.left = "-450px";
        form2.style.left = "40px";
        porges.style.width = "240px";
        document.querySelector('.alert').classList.remove("down")
    }


}

next2.onclick = function () {

    if (input1Form2.value == "" || input2Form2.value == "" || input3Form2.value == "") {
        document.querySelector('.alert').classList.add("down")
        return false;

    } else {
        form2.style.left = "-450px";
        form3.style.left = "40px";
        porges.style.width = "360px"
    }

}

back1.onclick = function () {

    form2.style.left = "-450px";
    form1.style.left = "40px";
    porges.style.width = "120px";
    document.querySelector('.alert').classList.remove("down")
}

back2.onclick = function () {

    form2.style.left = "40px";
    form3.style.left = "-450px";
    porges.style.width = "240px";
    document.querySelector('.alert').classList.remove("down")
}
