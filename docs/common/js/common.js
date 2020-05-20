var version = '333';
var region = 'KMS';

$(document).mouseup(function(e){
	var lwth = document.getElementById("mySidenav").style.width;
	var rwth = document.getElementById("mySidenavR").style.width;
	//var bwth = document.getElementById("myBottomNav").style.width;
	//var btwth = document.getElementById("myPageNav").style.width;
	var swth = document.getElementById("mySpclLbNav").style.width;

	var lleng = $(e.target).parents('div#mySidenav').length
	var rleng = $(e.target).parents('div#mySidenavR').length
	//var bleng = $(e.target).parents('div#myBottomNav').length
	//var btleng = $(e.target).parents('div#myPageNav').length
	var sleng = $(e.target).parents('div#mySpclLbNav').length


	if(!$(e.target).hasClass('fa-child') && (lwth != '' || lwth != '0px') && lleng != 1){
		closeNav();
	}

	if(!$(e.target).hasClass('fa-cog') && (rwth != '' || rwth != '0px') && rleng != 1){
		closeNavR();
	}

	/*if(!$(e.target).hasClass('fa-lock') && (bwth != '' || bwth != '0px') && bleng != 1){
		closeBtNav();
	}

	if(!$(e.target).hasClass('fa-list') && (btwth != '' || btwth != '0px') && btleng != 1){
		closeMyNav();
	}*/

	if(!$(e.target).hasClass('label-img') && (swth != '' || swth != '0px') && sleng != 1){
		closeBtSpclLb();
	}

});

function sideBarOp() {
	var media = window.matchMedia( '( min-width: 500px )' );

	if(media.matches){
		document.getElementById("mySidenav").style.width = "400px";
	}else{
		document.getElementById("mySidenav").style.width = "80%";
	}


	$("#opTog").removeAttr("onclick");
	$("#opTog").attr("onclick","javascript:closeNav();");
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0px";

	$("#opTog").removeAttr("onclick");
	$("#opTog").attr("onclick","javascript:sideBarOp();");
}

function sideBarRtOp() {
	var media = window.matchMedia( '( min-width: 500px )' );

	if(media.matches){
		document.getElementById("mySidenavR").style.width = "400px";
	}else{
		document.getElementById("mySidenavR").style.width = "80%";
	}


	$("#opRTog").removeAttr("onclick");
	$("#opRTog").attr("onclick","closeNavR();");
}

function closeNavR() {
	document.getElementById("mySidenavR").style.width = "0";

	$("#opRTog").removeAttr("onclick");
	$("#opRTog").attr("onclick","sideBarRtOp();");
}


function btSpclLbOp(){
	var media = window.matchMedia( '( min-width: 500px )' );

	if(media.matches){
		document.getElementById("mySpclLbNav").style.height = "85%";
	}else{
		document.getElementById("mySpclLbNav").style.height = "85%";
	}


	$("#opLabel").removeAttr("onclick");
	$("#opLabel").attr("onclick","closeBtSpclLb();");
}

function closeBtSpclLb() {
	document.getElementById("mySpclLbNav").style.height = "0";

	$("#opLabel").removeAttr("onclick");
	$("#opLabel").attr("onclick","btSpclLbOp();");
}

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

function selected(item){
	item.textContent = "∨";
	item.classList.add("select");
}

function unselected(item){
	item.textContent = "";
	item.classList.remove("select");
}

function changeZoom(e){
	const baseColorValue = document.getElementById("baseColorValue");
	const mixColorValue = document.getElementById("mixColorValue");
	var sliderValue = e.value;

	document.getElementById("slider").value = e.value;
	mixColorValue.textContent = (100-sliderValue) + "%";
	baseColorValue.textContent = sliderValue + "%";
	var newopacity = (100-sliderValue)/100;
	document.getElementById("rightImg").style.opacity = newopacity;
}

function  resettingValues(){
	const slider = document.getElementById("slider");
	const baseColorValue = document.getElementById("baseColorValue");
	const mixColorValue = document.getElementById("mixColorValue");
	const rtImg = document.getElementById("rightImg");

	slider.value = '50';
	mixColorValue.textContent = "50%";
	baseColorValue.textContent = "50%";
	rtImg.style.opacity = ".5";
}

function  resettingValuesR(){
	const rtImg = document.getElementById("rightImg");
	rtImg.style.opacity = ".5";
}

function chgColor(e, itemId){
	const ltColor = document.getElementsByClassName("lt");
	const rtColor = document.getElementsByClassName("rt");

	const canvasLt = document.getElementById("leftImg").src;
	const canvasRt = document.getElementById("rightImg").src;

	for(let i=0; i<8; i++){
		if(ltColor[i].classList.contains("select") && ltColor[i] != e && e.classList.contains("lt")){
			unselected(ltColor[i]);
		}
		if(rtColor[i].classList.contains("select") && rtColor[i] != e && e.classList.contains("rt")){
			unselected(rtColor[i]);
		}
	};

	if(e.classList.contains("select")) {
		unselected(e);
	}else{
		selected(e);
		var ColorPicked = e.classList[1];
		var silceId = itemId.slice(0,-1);
		var num = "";
		if(e.classList.contains("rt")){
			if(ColorPicked == "black"){
				num = "0";
			}else if(ColorPicked == "red"){
				num = "1";
			}else if(ColorPicked == "orange"){
				num = "2";
			}else if(ColorPicked == "yellow"){
				num = "3";
			}else if(ColorPicked == "grin"){
				num = "4";
			}else if(ColorPicked == "blue"){
				num = "5";
			}else if(ColorPicked == "purple"){
				num = "6";
			}else if(ColorPicked == "brown"){
				num = "7";
			}


			/*RenderCanvas*/
			if(canvasRt.indexOf(itemId) != -1){
				const str = canvasRt.replace(itemId, silceId+num);
				document.getElementById("rightImg").setAttribute('crossOrigin', 'Anonymous');
				document.getElementById("rightImg").src = str;
				document.getElementById("rtLinkRl").value = str;
				HairArrRt = ',{"itemId":' + silceId+num + ',"version":"' + version + '","region":"' + region + '"}';
			}else{
				if(canvasRt.indexOf(silceId) != -1){
					const s = canvasRt.substr(0, canvasRt.indexOf(silceId)+4) + num + canvasRt.substr(canvasRt.indexOf(silceId)+4+num.length);
					document.getElementById("rightImg").setAttribute('crossOrigin', 'Anonymous');
					document.getElementById("rightImg").src = s;
					document.getElementById("rtLinkRl").value = s;
					HairArrRt = ',{"itemId":' + silceId+num + ',"version":"' + version + '","region":"' + region + '"}';
				}
			}
		}else{
			if(ColorPicked == "black"){
				num = "0";
			}else if(ColorPicked == "red"){
				num = "1";
			}else if(ColorPicked == "orange"){
				num = "2";
			}else if(ColorPicked == "yellow"){
				num = "3";
			}else if(ColorPicked == "grin"){
				num = "4";
			}else if(ColorPicked == "blue"){
				num = "5";
			}else if(ColorPicked == "purple"){
				num = "6";
			}else if(ColorPicked == "brown"){
				num = "7";
			}


			/*RenderCanvas*/
			if(canvasLt.indexOf(itemId) != -1){
				const str = canvasLt.replace(itemId, silceId+num);
				document.getElementById("leftImg").setAttribute('crossOrigin', 'Anonymous');
				document.getElementById("leftImg").src = str;
				HairArr = ',{"itemId":' + silceId+num + ',"version":"' + version + '","region":"' + region + '"}';
			}else{
				if(canvasLt.indexOf(silceId) != -1){
					const s = canvasLt.substr(0, canvasLt.indexOf(silceId)+4) + num + canvasLt.substr(canvasLt.indexOf(silceId)+4+num.length);
					document.getElementById("leftImg").setAttribute('crossOrigin', 'Anonymous');
					document.getElementById("leftImg").src = s;
					HairArr = ',{"itemId":' + silceId+num + ',"version":"' + version + '","region":"' + region + '"}';
				}
			}
		}
		resettingValues();
	}
}

function chgEyeColor(e, itemId){
	const ltColor = document.getElementsByClassName("lte");
	const rtColor = document.getElementsByClassName("rte");

	 /*RenderCanvas*/
	const canvasLt = document.getElementById("leftImg").src;
	const canvasRt = document.getElementById("rightImg").src;

	for(let i=0; i<8; i++){
		if(ltColor[i].classList.contains("select") && ltColor[i] != e && e.classList.contains("lte")){
			unselected(ltColor[i]);
		}
		if(rtColor[i].classList.contains("select") && rtColor[i] != e && e.classList.contains("rte")){
			unselected(rtColor[i]);
		}
	}

	if(e.classList.contains("select")) {
		unselected(e);
	}else{
		selected(e);
		var ColorPicked = e.classList[1];
		var silceIdFr = itemId.slice(0,2);
		var silceIdEd = itemId.slice(3,5);
		var num = "";
		if(e.classList.contains("rte")){
			if(ColorPicked == "black"){
				num = "0";
			}else if(ColorPicked == "blue"){
				num = "1";
			}else if(ColorPicked == "red"){
				num = "2";
			}else if(ColorPicked == "grin"){
				num = "3";
			}else if(ColorPicked == "brown"){
				num = "4";
			}else if(ColorPicked == "emerald"){
				num = "5";
			}else if(ColorPicked == "purple"){
				num = "6";
			}else if(ColorPicked == "amethyst"){
				num = "7";
			}

			 /*RenderCanvas*/
			if(canvasRt.indexOf(itemId) != -1){
				const str = canvasRt.replace(itemId, silceIdFr+num+silceIdEd);
				document.getElementById("rightImg").setAttribute('crossOrigin', 'Anonymous');
				document.getElementById("rightImg").src = str;
				FaceArrRt = ',{"itemId":' + silceIdFr+num+silceIdEd + ',"version":"' + version + '","region":"' + region + '"}';
			}else{
				if(canvasRt.indexOf(silceIdFr) != -1 && canvasRt.indexOf(silceIdEd) != -1){
					const s = canvasRt.substr(0, canvasRt.indexOf("%22itemId%22%3A"+silceIdFr)+17) + num + canvasRt.substr(canvasRt.indexOf("%22itemId%22%3A"+silceIdFr)+17+num.length);
					document.getElementById("rightImg").setAttribute('crossOrigin', 'Anonymous');
					document.getElementById("rightImg").src = s;
					FaceArrRt = ',{"itemId":' + silceIdFr+num+silceIdEd + ',"version":"' + version + '","region":"' + region + '"}';
				}
			}
		}else{
			if(ColorPicked == "black"){
				num = "0";
			}else if(ColorPicked == "blue"){
				num = "1";
			}else if(ColorPicked == "red"){
				num = "2";
			}else if(ColorPicked == "grin"){
				num = "3";
			}else if(ColorPicked == "brown"){
				num = "4";
			}else if(ColorPicked == "emerald"){
				num = "5";
			}else if(ColorPicked == "purple"){
				num = "6";
			}else if(ColorPicked == "amethyst"){
				num = "7";
			}

			/*RenderCanvas*/
			if(canvasLt.indexOf(itemId) != -1){
				const str = canvasLt.replace(itemId, silceIdFr+num+silceIdEd);
				document.getElementById("leftImg").setAttribute('crossOrigin', 'Anonymous');
				document.getElementById("leftImg").src = str;
				FaceArr = ',{"itemId":' + silceIdFr+num+silceIdEd + ',"version":"' + version + '","region":"' + region + '"}';
			}else{
				if(canvasLt.indexOf(silceIdFr) != -1 && canvasLt.indexOf(silceIdEd) != -1){
					const s = canvasLt.substr(0, canvasLt.indexOf("%22itemId%22%3A"+silceIdFr)+17) + num + canvasLt.substr(canvasLt.indexOf("%22itemId%22%3A"+silceIdFr)+17+num.length);
					document.getElementById("leftImg").setAttribute('crossOrigin', 'Anonymous');
					document.getElementById("leftImg").src = s;
					FaceArr = ',{"itemId":' + silceIdFr+num+silceIdEd + ',"version":"' + version + '","region":"' + region + '"}';
				}
			}
		}
		resettingValuesR();
	}
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

function includeHTML(callback) {
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
          includeHTML(callback);
        }
      };
      xhr.open("GET", file, true);
      xhr.send();
      /*exit the function:*/
      return;
    }
  }
  setTimeout(function() {
    callback();
  }, 0);
}
