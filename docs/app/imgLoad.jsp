<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<div id="mydiv">
  <div id="myCharacter">
    <input type="hidden" id="rtLinkRl" name="rtLinkRl"/>
    <img src="https://maplestory.io/api/Character/%7B%22itemId%22%3A2000%2C%22version%22%3A%22210.1.1%22%7D%2C%7B%22itemId%22%3A12000%2C%22version%22%3A%22210.1.1%22%7D/stand1/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0" id="leftImg"/>
    <img src="https://maplestory.io/api/Character/%7B%22itemId%22%3A2000%2C%22version%22%3A%22210.1.1%22%7D%2C%7B%22itemId%22%3A12000%2C%22version%22%3A%22210.1.1%22%7D/stand1/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0" id="rightImg"/>
  </div>
</div>

<script>
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function fnImgLoad(url){
  $("#leftImg").attr("src", url);
}

function fnImgLoadR(url){
  $("#rightImg").attr("src", url);
}
</script>
