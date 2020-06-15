var version = '334';
var region = 'KMS';

$(document).ready(function(){

	document.addEventListener("DOMContentLoaded", function() {
		if(window.sessionStorage) {
			sessionStorage.clear();
		}
		else {
			alert("세션을 사용할 수 없는 브라우저입니다.");
		}
	});
});

let removeToast;

function toast(string) {
	const toast = document.getElementById("toast");

	toast.classList.contains("reveal") ?
		(clearTimeout(removeToast), removeToast = setTimeout(function () {
			document.getElementById("toast").classList.remove("reveal")
		}, 1000)) :
		removeToast = setTimeout(function () {
			document.getElementById("toast").classList.remove("reveal")
		}, 1000)
	toast.classList.add("reveal"),
		toast.innerText = string
}

function fnLoading(){
	var bkHeight = $(document).height(); //뒷 배경의 상하 폭
	var bkWidth = window.document.body.clientWidth; //뒷 배경의 좌우 폭
	var bkCover = "<div id='back'></div>"; //뒷 배경을 감쌀 커버
	var loadingImg = ''; //가운데 띄워 줄 이미지
	loadingImg += "<div id='loadingBar'>";
	loadingImg += " <img src='/app/common/img/loadingbar.gif'/>"; //로딩 바 이미지
	loadingImg += "</div>";
	$('body').append(bkCover).append(loadingImg);
	$('#back').css({ 'width': bkWidth, 'height': bkHeight, 'opacity': '0.3' });
	$('#back').show();
	$('#loadingImg').show();
}

function fnLoadingEnd(){
	$('#back, #loadingBar').hide();
	$('#back, #loadingBar').remove();
}

function includeHTML() {
  var z, i, elmnt, file, xhr;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    //console.log(file);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhr.open("GET", file, true);
      xhr.send();
      /*exit the function:*/
      return;
    }
  }
}

function fnRefresh(){
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
		dropdown[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var dropdownContent = this.nextElementSibling;
			if (dropdownContent.style.display === "block") {
				dropdownContent.style.display = "none";
			} else {
				dropdownContent.style.display = "block";
			}
		});
	}
}
var src = "https://maplestory.io/api/" + region + "/" + version + "/item/category/equip";

var elmnt = document.getElementById("mydiv");
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

/*document.getElementById("defaultOpen").click();

document.addEventListener("DOMContentLoaded", function() {
	if(window.sessionStorage) {
		sessionStorage.clear();
	}");
	}
});*/

function fnSetSrc(){

		var value = document.getElementById("skinId").value;
		var b = Number(value)+10000;
		skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');

		pos = document.getElementById("pos").value;

	var item = encodeURIComponent(HairArr+FaceArr+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
	var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

	fnImgLoad(src);

	if(HairArrRt == ""){
		HairArrRt = HairArr;
	}

	if(FaceArrRt == ""){
		FaceArrRt = FaceArr;
	}

	var itemR = encodeURIComponent(HairArrRt+FaceArrRt+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
	var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
	fnImgLoadR(srcR);
}

function openTab(e, target){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(target).style.display = "block";
	e.currentTarget.className += " active";
}


function fnCngSkin(){
	var value = document.getElementById("skinId").value;
	var pos = document.getElementById("pos").value;

	var b = Number(value)+10000;
	var skin = '{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}';

	//sessionStorage.setItem("skin", skin);
	fnSetSrc();
}

function fnCngAni(){
	var ani = document.getElementById("ani").value;
  if(ani != 'default'){
    FaceArr = ',{"itemId":' + faceid + ',"animationName":"'+ ani +'","version":"' + version + '","region":"' + region + '"}';
  }else{
    FaceArr = ',{"itemId":' + faceid + ',"version":"' + version + '","region":"' + region + '"}';
  }

	FaceArrRt = "";
	fnSetSrc();
}

function fnPosSkin(){
	var newPos = document.getElementById("pos").value;

	fnSetSrc();
}

function imageSaveLocal(){
	const canvasLt = document.getElementById("leftImg").src;
	const canvasRt = document.getElementById("rightImg").src;
	const imgOpcy = window.getComputedStyle(document.getElementById("rightImg")).getPropertyValue('opacity');
	const imageSrc = "";

	mergeImages([
		{ src: canvasLt },
		{ src: canvasRt, opacity: imgOpcy }
	]).then(b64 => {
		var imgData = atob(b64.split(",")[1])
		var len = imgData.length
		var buf = new ArrayBuffer(len) // 비트를 담을 버퍼를 만든다.
		var view = new Uint8Array(buf) // 버퍼를 8bit Unsigned Int로 담는다.
		var blob, i

		for (i = 0; i < len; i++) {
			view[i] = imgData.charCodeAt(i) & 0xff // 비트 마스킹을 통해 msb를 보호한다.
		}
		// Blob 객체를 image/png 타입으로 생성한다. (application/octet-stream도 가능)
		blob = new Blob([view], { type: "application/octet-stream" })

		if(window.navigator.msSaveOrOpenBlob){
			window.navigator.msSaveOrOpenBlob(blob, "new_file.png")
		}else{
			var a = document.createElement("a")
			a.style = "display: none"
			a.href = b64
			a.download = "new_file.png"
			document.body.appendChild(a)
			a.click()

			setTimeout(function() {
				document.body.removeChild(a)
			}, 100)
		}
	});
}

function imageSaveMy(){
	var canvasLt = document.getElementById("leftImg").src;
	var canvasRt = document.getElementById("rightImg").src;
	var imgOpcy = window.getComputedStyle(document.getElementById("rightImg")).getPropertyValue('opacity');
	var id = '';

	if(id == ''){
		alert("로그인이 필요합니다.");
	}else{
		$.ajax({
			type: 'POST',
			url : '/app/imgSave.php',
			data: { canvasLt : canvasLt, canvasRt: canvasRt, imgOpcy: imgOpcy, memID : id},
			beforeSend: function(){
				fnLoading();
			},
			complete: function(){
				fnLoadingEnd();
			},
			success: function(response) {
				if(response){
					if(response == "Y"){
						toast("저장되었습니다.");
						document.getElementById('myFrame').contentDocument.location.reload(true);
					}else {
						alert("오류가 발생했습니다.");
					}
				}
			}
		});
	}
}

function fnSpecial(){
	$('#special').toggleClass("active-s");
	var panel = document.getElementById('special').nextElementSibling;
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
}

function fnMaster(){
	$('#master').toggleClass("active-s");
	var panel = document.getElementById('master').nextElementSibling;
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
}
