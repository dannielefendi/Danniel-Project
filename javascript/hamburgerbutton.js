var menu = document.getElementById("bar");
var item = document.getElementById("item")

item.style.right = '-400px';

menu.onclick = function () {

    if(item.style.right == '-400px') {
        item.style.right = '-50px'
    }
    else {
        item.style.right = '-400px'
    }

}

