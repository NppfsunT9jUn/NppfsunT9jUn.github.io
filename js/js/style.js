var btn = document.getElementById('btn');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');

var eye = document.getElementById('eye');
var pwd = document.getElementById('pwd');

var box = document.querySelector('#box');
var close = document.querySelector('#close');

btn.onclick = function () {
    alert('点秋香');
}

div1.onclick = function () {
    console.log('我被选中了');
}

var flag = 0;
eye.onclick = function () {
    if (flag == 0) {
        pwd.type = 'text';
        eye.innerHTML = '隐藏密码';
        flag = 1;
    } else {
        pwd.type = 'password';
        eye.innerHTML = '显示密码';
        flag = 0;
    }
}

var flag2 = 0;
div2.onclick = function () {
    if (flag2 == 0) {
        this.style.backgroundColor = 'pink';
        flag2 = 1;
    } else {
        this.style.backgroundColor = 'white';
        flag2 = 0;
    }
}

close.onclick = function () {
    box.style.display = 'none';
}