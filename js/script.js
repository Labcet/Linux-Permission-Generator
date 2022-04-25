var c1 = document.querySelector("#checkbox1");
var c2 = document.querySelector("#checkbox2");
var c3 = document.querySelector("#checkbox3");
var c4 = document.querySelector("#checkbox4");
var c5 = document.querySelector("#checkbox5");
var c6 = document.querySelector("#checkbox6");
var c7 = document.querySelector("#checkbox7");
var c8 = document.querySelector("#checkbox8");
var c9 = document.querySelector("#checkbox9");

var owner = 0;
var group = 0;
var world = 0;

c1.addEventListener("click",function(){

    var permission = document.querySelector("#permission1");
    var final = document.querySelector("#final1");
    var command = document.querySelector("#final-command");

    if(permission.textContent == '-'){
        permission.textContent = 'r';
        owner += 4;
    } else {
        permission.textContent = '-';
        owner -= 4;
    }
    final.textContent = owner;
    command.textContent = owner.toString() + group.toString() + world.toString();
});

c2.addEventListener("click",function(){

    var permission = document.querySelector("#permission2");
    var final = document.querySelector("#final1");
    var command = document.querySelector("#final-command");

    if(permission.textContent == '-'){
        permission.textContent = 'w';
        owner += 2;
    } else {
        permission.textContent = '-';
        owner -= 2;
    }
    final.textContent = owner;
    command.textContent = owner.toString() + group.toString() + world.toString();
});

c3.addEventListener("click",function(){

    var permission = document.querySelector("#permission3");
    var final = document.querySelector("#final1");
    var command = document.querySelector("#final-command");

    if(permission.textContent == '-'){
        permission.textContent = 'x';
        owner += 1;
    } else {
        permission.textContent = '-';
        owner -= 1;
    }
    final.textContent = owner;
    command.textContent = owner.toString() + group.toString() + world.toString();
});

c4.addEventListener("click",function(){

    var permission = document.querySelector("#permission4");
    var final = document.querySelector("#final2");
    var command = document.querySelector("#final-command");

    if(permission.textContent == '-'){
        permission.textContent = 'r';
        group += 4;
    } else {
        permission.textContent = '-';
        group -= 4;
    }
    final.textContent = group;
    command.textContent = owner.toString() + group.toString() + world.toString();
});

c5.addEventListener("click",function(){

    var permission = document.querySelector("#permission5");
    var final = document.querySelector("#final2");
    var command = document.querySelector("#final-command");

    if(permission.textContent == '-'){
        permission.textContent = 'w';
        group += 2;
    } else {
        permission.textContent = '-';
        group -= 2;
    }
    final.textContent = group;
    command.textContent = owner.toString() + group.toString() + world.toString();
});

c6.addEventListener("click",function(){

    var permission = document.querySelector("#permission6");
    var final = document.querySelector("#final2");
    var command = document.querySelector("#final-command");

    if(permission.textContent == '-'){
        permission.textContent = 'x';
        group += 1;
    } else {
        permission.textContent = '-';
        group -= 1;
    }
    final.textContent = group;
    command.textContent = owner.toString() + group.toString() + world.toString();
});

c7.addEventListener("click",function(){

    var permission = document.querySelector("#permission7");
    var final = document.querySelector("#final3");
    var command = document.querySelector("#final-command");

    if(permission.textContent == '-'){
        permission.textContent = 'r';
        world += 4;
    } else {
        permission.textContent = '-';
        world -= 4;
    }
    final.textContent = world;
    command.textContent = owner.toString() + group.toString() + world.toString();
});

c8.addEventListener("click",function(){

    var permission = document.querySelector("#permission8");
    var final = document.querySelector("#final3");
    var command = document.querySelector("#final-command");

    if(permission.textContent == '-'){
        permission.textContent = 'w';
        world += 2;
    } else {
        permission.textContent = '-';
        world -= 2;
    }
    final.textContent = world;
    command.textContent = owner.toString() + group.toString() + world.toString();
});

c9.addEventListener("click",function(){

    var permission = document.querySelector("#permission9");
    var final = document.querySelector("#final3");
    var command = document.querySelector("#final-command");

    if(permission.textContent == '-'){
        permission.textContent = 'x';
        world += 1;
    } else {
        permission.textContent = '-';
        world -= 1;
    }
    final.textContent = world;
    command.textContent = owner.toString() + group.toString() + world.toString();
});