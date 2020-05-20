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

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

function fnSrch(){
	if($("#itemSrh").val() == "" && $("#itemSrhH").val() == ""){
		var val1 = $("input[name='isCondi']:checked").val();
		var val2 = $("#isCash:checked").val();
		$.ajax({
			type: 'post',
			data: {
				isCash:val1,
				isCondi:val2
			},
			beforeSend: function(){
				fnLoading();
			},
			complete: function(){
				fnLoadingEnd();
			},
			success: function (response){
				var rt = $(response).find('#mySidenav').prevObject[55].childNodes[6].innerHTML;
				$("#mySidenav").html(rt);

				if(val1 == "0"){
					$('input[name="isCondi"]:radio[value="0"]').prop('checked',true);
				}else if(val1 == "1"){
					$('input[name="isCondi"]:radio[value="1"]').prop('checked',true);
				}else if(val1 == "2"){
					$('input[name="isCondi"]:radio[value="2"]').prop('checked',true);
				}else{
					$('input[name="isCondi"]:radio[value=""]').prop('checked',true);
				}

				if(val2 == "on"){
					$("#isCash").prop('checked', true);
				}

				fnRefresh();
			}
		});
	}else{
		$("#srchBtn").css("display", "");
		$("#srchDiv").css("display", "block");
		if($("#itemSrh").val() == ""){
			fnSrchShow($("#itemSrhH").val());
		}else{
			fnSrchShow($("#itemSrh").val());
		}

	}

}

function enterkey() {
	if(event.keyCode == 13) {
		var media = window.matchMedia( '( min-width: 500px )' );

		if(media.matches){
			document.getElementById("mySidenav").style.width = "400px";
			document.getElementById("main").style.marginLeft = "400px";
		}else{
			document.getElementById("mySidenav").style.width = "80%";
			document.getElementById("main").style.marginLeft = "80%";
		}
		fnSrch();
	}
}

function fnSrchShow(srch){
	$('#srchBtn').toggleClass("active");
	var dropdownContent = document.getElementById('srchBtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	$("#srchList").empty();
	//$('#srchBtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedSrch= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedSrch = _.map(
					_.groupBy(
					itemData.filter(item => (item.name || '').indexOf(srch) !== -1 && item.isCash && item.requiredGender == 0),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedSrch = _.map(
					_.groupBy(
					itemData.filter(item => (item.name || '').indexOf(srch) !== -1 && item.isCash && item.requiredGender == 1),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedSrch = _.map(
					_.groupBy(
					itemData.filter(item => (item.name || '').indexOf(srch) !== -1 && item.isCash && item.requiredGender == 2),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else{
				groupedSrch = _.map(
					_.groupBy(
					itemData.filter(item => (item.name || '').indexOf(srch) !== -1 && item.isCash),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedSrch = _.map(
					_.groupBy(
					itemData.filter(item => (item.name || '').indexOf(srch) !== -1 && item.requiredGender == 0),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedSrch = _.map(
					_.groupBy(
					itemData.filter(item => (item.name || '').indexOf(srch) !== -1 && item.requiredGender == 1),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedSrch = _.map(
					_.groupBy(
					itemData.filter(item => (item.name || '').indexOf(srch) !== -1 && item.requiredGender == 2),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else{
				groupedSrch = _.map(
					_.groupBy(
					itemData.filter(item => (item.name || '').indexOf(srch) !== -1),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedSrch.length; i++){
			var iconId = groupedSrch[i].id;
			var iconNm = groupedSrch[i].name;
			var iconCate = groupedSrch[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#srchList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddItem("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
	$("#itemSrh").val("");
	$("#itemSrhH").val("");
}

function fnChecked(){
	if(document.getElementsByName("isCash")[0].checked){
		$("#isCashVal").val("Y");
	}else{
		$("#isCashVal").val("N");
	}
}

var src = "https://maplestory.io/api/" + region + "/" + version + "/item/category/equip";

function fnHairShow(){
	$('#Hbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Hbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Hbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedHair= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedHair = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 30000 && item.id <= 60000 && item.isCash && item.requiredGender == 0),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedHair = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 30000 && item.id <= 60000 && item.isCash && item.requiredGender == 1),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedHair = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 30000 && item.id <= 60000 && item.isCash && item.requiredGender == 2),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else{
				groupedHair = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 30000 && item.id <= 60000 && item.isCash),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedHair = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 30000 && item.id <= 60000 && item.requiredGender == 0),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedHair = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 30000 && item.id <= 60000 && item.requiredGender == 1),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedHair = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 30000 && item.id <= 60000 && item.requiredGender == 2),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else{
				groupedHair = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 30000 && item.id <= 60000),
					item => Math.floor(item.id / 10)
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedHair.length; i++){
			var iconId = groupedHair[i].id;
			var iconNm = groupedHair[i].name;
			var iconCate = groupedHair[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#hairList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddHair("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})

}

function fnFaceShow(){
	$('#Fbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Fbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Fbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedFaces= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedFaces = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.isCash && item.requiredGender == 0),
					item => (item.id % 100) + (item.id - (item.id % 1000))
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedFaces = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.isCash && item.requiredGender == 1),
					item => (item.id % 100) + (item.id - (item.id % 1000))
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedFaces = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.isCash && item.requiredGender == 2),
					item => (item.id % 100) + (item.id - (item.id % 1000))
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else{
				groupedFaces = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.isCash),
					item => (item.id % 100) + (item.id - (item.id % 1000))
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedFaces = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.requiredGender == 0),
					item => (item.id % 100) + (item.id - (item.id % 1000))
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedFaces = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.requiredGender == 1),
					item => (item.id % 100) + (item.id - (item.id % 1000))
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedFaces = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.requiredGender == 2),
					item => (item.id % 100) + (item.id - (item.id % 1000))
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}else{
				groupedFaces = _.map(
					_.groupBy(
					itemData.filter(item => item.id >= 10000 && item.id < 30000 ),
					item => (item.id % 100) + (item.id - (item.id % 1000))
					), itemGrouping => {
					const firstItem = itemGrouping[0]
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedFaces.length; i++){
			var iconId = groupedFaces[i].id;
			var iconNm = groupedFaces[i].name;
			var iconCate = groupedFaces[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#FaceList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddFace("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnOverallShow(){
	$('#Obtn').toggleClass("active");
	var dropdownContent = document.getElementById('Obtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Obtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedOveralls= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedOveralls = _.map(
					itemData.filter(item => item.id >= 1050000 && item.id < 1060000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedOveralls = _.map(
					itemData.filter(item => item.id >= 1050000 && item.id < 1060000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedOveralls = _.map(
					itemData.filter(item => item.id >= 1050000 && item.id < 1060000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedOveralls = _.map(
					itemData.filter(item => item.id >= 1050000 && item.id < 1060000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedOveralls = _.map(
					itemData.filter(item => item.id >= 1050000 && item.id < 1060000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedOveralls = _.map(
					itemData.filter(item => item.id >= 1050000 && item.id < 1060000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedOveralls = _.map(
					itemData.filter(item => item.id >= 1050000 && item.id < 1060000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedOveralls = _.map(
					itemData.filter(item => item.id >= 1050000 && item.id < 1060000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}


		for(var i=0; i<groupedOveralls.length; i++){
			var iconId = groupedOveralls[i].id;
			var iconNm = groupedOveralls[i].name;
			var iconCate = groupedOveralls[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#overAllList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddOverall("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnTopShow(){
	$('#Tbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Tbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Tbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedTops= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedTops = _.map(
					itemData.filter(item => item.id >= 1040000 && item.id < 1050000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedTops = _.map(
					itemData.filter(item => item.id >= 1040000 && item.id < 1050000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedTops = _.map(
					itemData.filter(item => item.id >= 1040000 && item.id < 1050000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedTops = _.map(
					itemData.filter(item => item.id >= 1040000 && item.id < 1050000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedTops = _.map(
					itemData.filter(item => item.id >= 1040000 && item.id < 1050000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedTops = _.map(
					itemData.filter(item => item.id >= 1040000 && item.id < 1050000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedTops = _.map(
					itemData.filter(item => item.id >= 1040000 && item.id < 1050000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedTops = _.map(
					itemData.filter(item => item.id >= 1040000 && item.id < 1050000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedTops.length; i++){
			var iconId = groupedTops[i].id;
			var iconNm = groupedTops[i].name;
			var iconCate = groupedTops[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#topList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddTop("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnBottomShow(){
	$('#Bbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Bbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Bbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedBottoms= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedBottoms = _.map(
					itemData.filter(item => item.id >= 1060000 && item.id < 1070000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedBottoms = _.map(
					itemData.filter(item => item.id >= 1060000 && item.id < 1070000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedBottoms = _.map(
					itemData.filter(item => item.id >= 1060000 && item.id < 1070000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedBottoms = _.map(
					itemData.filter(item => item.id >= 1060000 && item.id < 1070000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedBottoms = _.map(
					itemData.filter(item => item.id >= 1060000 && item.id < 1070000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedBottoms = _.map(
					itemData.filter(item => item.id >= 1060000 && item.id < 1070000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedBottoms = _.map(
					itemData.filter(item => item.id >= 1060000 && item.id < 1070000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedBottoms = _.map(
					itemData.filter(item => item.id >= 1060000 && item.id < 1070000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedBottoms.length; i++){
			var iconId = groupedBottoms[i].id;
			var iconNm = groupedBottoms[i].name;
			var iconCate = groupedBottoms[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#bottomList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddBottom("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}


function fnHatShow(){
	$('#Hatbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Hatbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

//	$('#Hatbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedHats= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedHats = _.map(
					itemData.filter(item => item.id >= 1000000 && item.id < 1010000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedHats = _.map(
					itemData.filter(item => item.id >= 1000000 && item.id < 1010000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedHats = _.map(
					itemData.filter(item => item.id >= 1000000 && item.id < 1010000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedHats = _.map(
					itemData.filter(item => item.id >= 1000000 && item.id < 1010000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedHats = _.map(
					itemData.filter(item => item.id >= 1000000 && item.id < 1010000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedHats = _.map(
					itemData.filter(item => item.id >= 1000000 && item.id < 1010000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedHats = _.map(
					itemData.filter(item => item.id >= 1000000 && item.id < 1010000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedHats = _.map(
					itemData.filter(item => item.id >= 1000000 && item.id < 1010000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedHats.length; i++){
			var iconId = groupedHats[i].id;
			var iconNm = groupedHats[i].name;
			var iconCate = groupedHats[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#hatList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddHat("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnCapeShow(){
	$('#Cbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Cbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Cbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedCapes= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedCapes = _.map(
					itemData.filter(item => item.id >= 1100000 && item.id < 1110000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedCapes = _.map(
					itemData.filter(item => item.id >= 1100000 && item.id < 1110000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedCapes = _.map(
					itemData.filter(item => item.id >= 1100000 && item.id < 1110000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedCapes = _.map(
					itemData.filter(item => item.id >= 1100000 && item.id < 1110000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedCapes = _.map(
					itemData.filter(item => item.id >= 1100000 && item.id < 1110000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedCapes = _.map(
					itemData.filter(item => item.id >= 1100000 && item.id < 1110000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedCapes = _.map(
					itemData.filter(item => item.id >= 1100000 && item.id < 1110000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedCapes = _.map(
					itemData.filter(item => item.id >= 1100000 && item.id < 1110000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedCapes.length; i++){
			var iconId = groupedCapes[i].id;
			var iconNm = groupedCapes[i].name;
			var iconCate = groupedCapes[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#capeList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddCape("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnCashShow(){
	$('#Cashbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Cashbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Cashbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedCashes= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedCashes = _.map(
					itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedCashes = _.map(
					itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedCashes = _.map(
					itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedCashes = _.map(
					itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedCashes = _.map(
					itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedCashes = _.map(
					itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedCashes = _.map(
					itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedCashes = _.map(
					itemData.filter(item => item.id >= 1701000 && item.id < 1703000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedCashes.length; i++){
			var iconId = groupedCashes[i].id;
			var iconNm = groupedCashes[i].name;
			var iconCate = groupedCashes[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#cashList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddCash("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnGloveShow(){
	$('#Gbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Gbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Gbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedGloves= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedGloves = _.map(
					itemData.filter(item => item.id >= 1080000 && item.id < 1090000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedGloves = _.map(
					itemData.filter(item => item.id >= 1080000 && item.id < 1090000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedGloves = _.map(
					itemData.filter(item => item.id >= 1080000 && item.id < 1090000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedGloves = _.map(
					itemData.filter(item => item.id >= 1080000 && item.id < 1090000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedGloves = _.map(
					itemData.filter(item => item.id >= 1080000 && item.id < 1090000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedGloves = _.map(
					itemData.filter(item => item.id >= 1080000 && item.id < 1090000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedGloves = _.map(
					itemData.filter(item => item.id >= 1080000 && item.id < 1090000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedGloves = _.map(
					itemData.filter(item => item.id >= 1080000 && item.id < 1090000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedGloves.length; i++){
			var iconId = groupedGloves[i].id;
			var iconNm = groupedGloves[i].name;
			var iconCate = groupedGloves[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#gloveList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddGlove("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnShoesShow(){
	$('#Sbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Sbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Sbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedShoes= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedShoes = _.map(
					itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedShoes = _.map(
					itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedShoes = _.map(
					itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedShoes = _.map(
					itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedShoes = _.map(
					itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedShoes = _.map(
					itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedShoes = _.map(
					itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedShoes = _.map(
					itemData.filter(item => item.id >= 1070000 && item.id < 1080000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedShoes.length; i++){
			var iconId = groupedShoes[i].id;
			var iconNm = groupedShoes[i].name;
			var iconCate = groupedShoes[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#shoesList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddShoes("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnEarringsShow(){
	$('#Earbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Earbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Earbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedEarrings= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedEarrings = _.map(
					itemData.filter(item => item.id >= 1030000 && item.id < 1040000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedEarrings = _.map(
					itemData.filter(item => item.id >= 1030000 && item.id < 1040000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedEarrings = _.map(
					itemData.filter(item => item.id >= 1030000 && item.id < 1040000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedEarrings = _.map(
					itemData.filter(item => item.id >= 1030000 && item.id < 1040000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedEarrings = _.map(
					itemData.filter(item => item.id >= 1030000 && item.id < 1040000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedEarrings = _.map(
					itemData.filter(item => item.id >= 1030000 && item.id < 1040000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedEarrings = _.map(
					itemData.filter(item => item.id >= 1030000 && item.id < 1040000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedEarrings = _.map(
					itemData.filter(item => item.id >= 1030000 && item.id < 1040000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedEarrings.length; i++){
			var iconId = groupedEarrings[i].id;
			var iconNm = groupedEarrings[i].name;
			var iconCate = groupedEarrings[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#earringsList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddEarring("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnFAShow(){
	$('#FAbtn').toggleClass("active");
	var dropdownContent = document.getElementById('FAbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#FAbtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedFAs= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedFAs = _.map(
					itemData.filter(item => item.id >= 1010000 && item.id < 1020000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedFAs = _.map(
					itemData.filter(item => item.id >= 1010000 && item.id < 1020000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedFAs = _.map(
					itemData.filter(item => item.id >= 1010000 && item.id < 1020000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedFAs = _.map(
					itemData.filter(item => item.id >= 1010000 && item.id < 1020000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedFAs = _.map(
					itemData.filter(item => item.id >= 1010000 && item.id < 1020000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedFAs = _.map(
					itemData.filter(item => item.id >= 1010000 && item.id < 1020000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedFAs = _.map(
					itemData.filter(item => item.id >= 1010000 && item.id < 1020000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedFAs = _.map(
					itemData.filter(item => item.id >= 1010000 && item.id < 1020000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedFAs.length; i++){
			var iconId = groupedFAs[i].id;
			var iconNm = groupedFAs[i].name;
			var iconCate = groupedFAs[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#FAList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddFA("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}

function fnEAShow(){
	$('#Ebtn').toggleClass("active");
	var dropdownContent = document.getElementById('Ebtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	//$('#Ebtn').prop("onclick", null).attr("onclick", null)
	var gender = $("input[name='isCondi']:checked").val();
	var cashYn = $("#isCash:checked").val();
	var groupedEAs= "";
	const itemListPromise = axios.get(src);

	Promise.all([itemListPromise]).then(responses => {
		if(!_.every(responses, res => res.status === 200)) return;
		const itemData = (responses[0].data || []) || []
		if(cashYn == "on"){
			if(gender == "0"){
				groupedEAs = _.map(
					itemData.filter(item => item.id >= 1020000 && item.id < 1030000 && item.isCash && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedEAs = _.map(
					itemData.filter(item => item.id >= 1020000 && item.id < 1030000 && item.isCash && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedEAs = _.map(
					itemData.filter(item => item.id >= 1020000 && item.id < 1030000 && item.isCash && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedEAs = _.map(
					itemData.filter(item => item.id >= 1020000 && item.id < 1030000 && item.isCash)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}else{
			if(gender == "0"){
				groupedEAs = _.map(
					itemData.filter(item => item.id >= 1020000 && item.id < 1030000 && item.requiredGender == 0)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "1"){
				groupedEAs = _.map(
					itemData.filter(item => item.id >= 1020000 && item.id < 1030000 && item.requiredGender == 1)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else if(gender == "2"){
				groupedEAs = _.map(
					itemData.filter(item => item.id >= 1020000 && item.id < 1030000 && item.requiredGender == 2)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}else{
				groupedEAs = _.map(
					itemData.filter(item => item.id >= 1020000 && item.id < 1030000)
					, itemGrouping => {
					const firstItem = itemGrouping
					return firstItem
					}
				);
			}
		}

		for(var i=0; i<groupedEAs.length; i++){
			var iconId = groupedEAs[i].id;
			var iconNm = groupedEAs[i].name;
			var iconCate = groupedEAs[i].typeInfo.subCategory;
			var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
			$("#EAList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddEA("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
		}
	})
}
