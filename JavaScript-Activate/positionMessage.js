/**
 * Created by as on 2017/4/12.
 */
function positionMessage() {
    if(!document.getElementById) return false;/*document.getElementById 后面没有括号*/
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
  //  movement = setTimeout("moveMessage()", 5000);//setTimeout("moveMessage()", 5000);
 //   clearTimeout(movement);//用于取消movement这一动作
    moveElement("message", 200, 100, 10);
};


/*
* parseInt(string):将string字符串转化成数值类型，eg parseInt("39 steps") -> Output: 39
* */
function moveMessage() {
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    //elem.style.left = "300px";
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if((xpos == 200) && (ypos = 100)){
        return true;
    }
    if(xpos < 200){
        xpos++;
    }
    if(xpos > 200){
        xpos--;
    }
    if(ypos < 100){
        ypos++;
    }
    if(ypos > 100){
        ypos--;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    movement = setTimeout("moveMessage()", 10);
}


//window.onload = positionMessage();
addLoadEvent(positionMessage);
//addLoadEvent(moveElement(message), 200, 100, 10);
//addLoadEvent(moveMessage);