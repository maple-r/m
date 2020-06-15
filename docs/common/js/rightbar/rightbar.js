function rightListAddItem(id, nm, cate){
	if(cate == "Hair"){
		rightListAddHair(id, nm, cate);
	}else if(cate=="Face"){
		rightListAddFace(id, nm, cate);
	}else if(cate=="Hat"){
		rightListAddHat(id, nm, cate);
	}else if(cate=="Overall"){
		rightListAddOverall(id, nm, cate);
	}else if(cate=="Cape"){
		rightListAddCape(id, nm, cate);
	}else if(cate=="Cash"){
		rightListAddCash(id, nm, cate);
	}else if(cate=="Glove"){
		rightListAddGlove(id, nm, cate);
	}else if(cate=="Shoes"){
		rightListAddShoes(id, nm, cate);
	}else if(cate=="Earrings"){
		rightListAddEarring(id, nm, cate);
	}else if(cate=="Face Accessory"){
		rightListAddFA(id, nm, cate);
	}else if(cate=="Eye Decoration"){
		rightListAddEA(id, nm, cate);
	}else if(cate=="Top"){
		rightListAddTop(id, nm, cate);
	}else if(cate=="Bottom"){
		rightListAddBottom(id, nm, cate);
	}
}


var HairArr = "";
var HairArrRt = "";
function rightListAddHair(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	HairArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';
	HairArrRt = '';

	fnSetSrc();
}

var FaceArr = "";
var FaceArrRt = "";
var faceid = "";
function rightListAddFace(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
  faceid = id;
  var ani = document.getElementById("ani").value;
  if(ani != 'default'){
    FaceArr = ',{"itemId":' + id + ',"animationName":"'+ ani +'","version":"' + version + '","region":"' + region + '"}';
  }else{
    FaceArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';
  }

	FaceArrRt = "";

	fnSetSrc();
}

var OverallArr = "";
function rightListAddOverall(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	OverallArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

var TopArr = "";
function rightListAddTop(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	TopArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

var BottomArr = "";
function rightListAddBottom(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	BottomArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

var HatArr = "";
function rightListAddHat(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	HatArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}


var CapeArr = "";
function rightListAddCape(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	CapeArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

var CashArr = "";
function rightListAddCash(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	CashArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

var GloveArr = "";
function rightListAddGlove(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	GloveArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

var ShoesArr = "";
function rightListAddShoes(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	ShoesArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

var EarringArr = "";
function rightListAddEarring(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	EarringArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

var FaArr = "";
function rightListAddFA(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	FaArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

var EaArr = "";
function rightListAddEA(id, nm, cate){
	toast(nm+" 추가 완료!");
	addList(id, nm, cate);
	EaArr = ',{"itemId":' + id + ',"version":"' + version + '","region":"' + region + '"}';

	fnSetSrc();
}

function addList(id, nm, cate){
	cate = cate.replace(/ /gi, "");
	function appendHair(id, nm, cate){
		$("#itemList").append('<div class="column" id="'+ cate +'"><span id="' + id + '">'+ nm +'<button class="close-btn" onclick="javascript:removeList(\''+cate+'\');"><i class="fa fa-close"></i></button></span><div class="color-pal"><div class="color-pal-square"><button class="lt black" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="lt red" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="lt orange" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="lt yellow" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="lt grin" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="lt blue" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="lt purple" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="lt brown" onClick="javascript:chgColor(this,\''+id+'\');"></button></div><div class="color-pal-square"><button class="rt black" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="rt red" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="rt orange" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="rt yellow" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="rt grin" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="rt blue" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="rt purple" onClick="javascript:chgColor(this,\''+id+'\');"></button><button class="rt brown" onClick="javascript:chgColor(this,\''+id+'\');"></button></div></div><input type="range" min="0" max="100" id="slider" onchange="javascript:changeZoom(this);"/><div class="values"><span id="baseColorValue">50%</span><span id="mixColorValue">50%</span></div></div>');
	}

	function appendFace(id, nm, cate){
		$("#itemList").append('<div class="column" id="'+ cate +'"><span id="' + id + '">'+ nm +'<button class="close-btn" onclick="javascript:removeList(\''+cate+'\');"><i class="fa fa-close"></i></button></span><div class="color-pal"><div class="color-pal-square"><button class="lte black" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="lte blue" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="lte red" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="lte grin" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="lte brown" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="lte emerald" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="lte purple" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="lte amethyst" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button></div><div class="color-pal-square"><button class="rte black" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="rte blue" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="rte red" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="rte grin" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="rte brown" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="rte emerald" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="rte purple" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button><button class="rte amethyst" onClick="javascript:chgEyeColor(this,\''+id+'\');"></button></div></div></div>');
	}

	function appendOther(id, nm, cate){
		$("#itemList").append('<div class="column" id="'+ cate +'"><span id="' + id + '">'+ nm +'<button class="close-btn" onclick="javascript:removeList(\''+cate+'\');"><i class="fa fa-close"></i></button></span><br/><span style="font-size:10px;">' + cate + '</span></div>');
	}


	if(id >= 30000 && id < 60000){ //hair
		if($('#' + cate + '').val() == "undefined"){
			appendHair(id, nm, cate);
			//sessionStorage.setItem("hair", id);
		}else{
			//sessionStorage.removeItem("hair");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendHair(id, nm, cate);
			//sessionStorage.setItem("hair", id);
		}

	}else if(id >= 10000 && id < 30000){ //face
		if($('#' + cate + '').val() == "undefined"){
			appendFace(id, nm, cate);
			//sessionStorage.setItem("face", id);
		}else{
			//sessionStorage.removeItem("face");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendFace(id, nm, cate);
			//sessionStorage.setItem("face", id);
		}
	}else if(id >= 1040000 && id < 1060000){ //top ~ overall
		if($('#Top').val() == "undefined" && $('#Overall').val() == "undefined"){
			appendOther(id, nm, cate);
		}else{
      if(id >= 1050000 && id < 1060000){
        TopArr = '';
        BottomArr = '';
        $("#Bottom").remove();
        $("#Bottom").remove();
      }else{
        OverallArr = '';
      }
			$("#Top").remove();
			$("#Top").remove();
      $("#Overall").remove();
			$("#Overall").remove();
			appendOther(id, nm, cate);
		}
	}else if(id >= 1050000 && id < 1070000){ //overall ~ bottom
    if($('#Bottom').val() == "undefined" && $('#Overall').val() == "undefined"){
      appendOther(id, nm, cate);
    }else{
      if(id >= 1050000 && id < 1060000){
        BottomArr = '';
      }else{
        OverallArr = '';
      }
      $("#Bottom").remove();
      $("#Bottom").remove();
      $("#Overall").remove();
      $("#Overall").remove();
      appendOther(id, nm, cate);
    }
	}else if(id >= 1000000 && id < 1010000){ //hat
		if($('#' + cate + '').val() == "undefined"){
			appendOther(id, nm, cate);
			//sessionStorage.setItem("hat", id);
		}else{
			//sessionStorage.removeItem("hat");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendOther(id, nm, cate);
			//sessionStorage.setItem("hat", id);
		}
	}else if(id >= 1100000 && id < 1110000){ //cape
		if($('#' + cate + '').val() == "undefined"){
			appendOther(id, nm, cate);
			//sessionStorage.setItem("cape", id);
		}else{
			//sessionStorage.removeItem("cape");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendOther(id, nm, cate);
			//sessionStorage.setItem("cape", id);
		}
	}else if(id >= 1701000 && id < 1703000 && cate == "Cash"){ //cash
		if($('#' + cate + '').val() == "undefined"){
			appendOther(id, nm, cate);
			//sessionStorage.setItem("cash", id);
		}else{
			//sessionStorage.removeItem("cash");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendOther(id, nm, cate);
			//sessionStorage.setItem("cash", id);
		}
	}else if(id >= 1080000 && id < 1090000){ //glove
		if($('#' + cate + '').val() == "undefined"){
			appendOther(id, nm, cate);
			//sessionStorage.setItem("glove", id);
		}else{
			//sessionStorage.removeItem("glove");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendOther(id, nm, cate);
			//sessionStorage.setItem("glove", id);
		}
	}else if(id >= 1070000 && id < 1080000 && cate == "Shoes"){ //shoes
		if($('#' + cate + '').val() == "undefined"){
			appendOther(id, nm, cate);
			//sessionStorage.setItem("shoes", id);
		}else{
			//sessionStorage.removeItem("shoes");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendOther(id, nm, cate);
			//sessionStorage.setItem("shoes", id);
		}
	}else if(id >= 1030000 && id < 1040000){ //earrings
		if($('#' + cate + '').val() == "undefined"){
			appendOther(id, nm, cate);
			//sessionStorage.setItem("earrings", id);
		}else{
			//sessionStorage.removeItem("earrings");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendOther(id, nm, cate);
			//sessionStorage.setItem("earrings", id);
		}
	}else if(id >= 1010000 && id < 1020000){ //fa
		if($('#' + cate + '').val() == "undefined"){
			appendOther(id, nm, cate);
			//sessionStorage.setItem("fa", id);
		}else{
			//sessionStorage.removeItem("fa");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendOther(id, nm, cate);
			//sessionStorage.setItem("fa", id);
		}
	}else if(id >= 1020000 && id < 1030000){ //ea
		if($('#' + cate + '').val() == "undefined"){
			appendOther(id, nm, cate);
			//sessionStorage.setItem("ea", id);
		}else{
			//sessionStorage.removeItem("ea");
			$("#" + cate + "").remove();
			$("#" + cate + "").remove();
			appendOther(id, nm, cate);
			//sessionStorage.setItem("ea", id);
		}
	}
}

function removeList(cate){

	$("#"+cate+"").remove();
	$("#"+cate+"").remove();
	if(cate == "Hair"){
		//sessionStorage.removeItem("hair");
		HairArr = '';
		HairArrRt = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
		//}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(FaceArr+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(FaceArrRt+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Face"){
	//	sessionStorage.removeItem("face");
		FaceArr = '';
		FaceArrRt = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

//		if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

//		if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(HairArr+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Overall"){
	//	sessionStorage.removeItem("overall");
		OverallArr = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(HairArr+FaceArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Top"){
		TopArr = '';

			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');

			pos = document.getElementById("pos").value;

		var item = encodeURIComponent(HairArr+FaceArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+OverallArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+OverallArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Bottom"){
		BottomArr = '';

			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');

			pos = document.getElementById("pos").value;

		var item = encodeURIComponent(HairArr+FaceArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+OverallArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+OverallArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Hat"){
		//sessionStorage.removeItem("hat");
		HatArr = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
		//}

		var item = encodeURIComponent(HairArr+FaceArr+OverallArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+OverallArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Cape"){
	//	sessionStorage.removeItem("cape");
		CapeArr = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(HairArr+FaceArr+OverallArr+HatArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+OverallArr+HatArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Cash"){
	//	sessionStorage.removeItem("cash");
		CashArr = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(HairArr+FaceArr+OverallArr+HatArr+CapeArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+OverallArr+HatArr+CapeArr+GloveArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Glove"){
	//	sessionStorage.removeItem("glove");
		GloveArr = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(HairArr+FaceArr+OverallArr+HatArr+CapeArr+CashArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+OverallArr+HatArr+CapeArr+CashArr+ShoesArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Shoes"){
	//	sessionStorage.removeItem("shoes");
		ShoesArr = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(HairArr+FaceArr+OverallArr+HatArr+CapeArr+CashArr+GloveArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+OverallArr+HatArr+CapeArr+CashArr+GloveArr+EarringArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "Earrings"){
	//	sessionStorage.removeItem("earrings");
		EarringArr = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(HairArr+FaceArr+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+FaArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "FaceAccessory"){
	//	sessionStorage.removeItem("fa");
		FaArr = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(HairArr+FaceArr+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+EaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}else if(cate == "EyeDecoration"){
	//	sessionStorage.removeItem("ea");
		EaArr = '';

	//	var skin = encodeURIComponent(sessionStorage.getItem("skin"));
	//	var pos = encodeURIComponent(sessionStorage.getItem("pos"));

	//	if(skin == "null"){
			var value = document.getElementById("skinId").value;
			var b = Number(value)+10000;
			skin = encodeURIComponent('{"itemId":' + value + ',"version":"' + version + '","region":"' + region + '"},{"itemId":' + b + ',"version":"' + version + '","region":"' + region + '"}');
	//	}

	//	if(pos == "null"){
			pos = document.getElementById("pos").value;
	//	}

		var item = encodeURIComponent(HairArr+FaceArr+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var src = 'https://maplestory.io/api/Character/' + skin + item + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';

		fnImgLoad(src);

		if(HairArrRt == ""){
			HairArrRt = HairArr;
		}

		if(FaceArrRt == ""){
			FaceArrRt = FaceArr;
		}

		var itemR = encodeURIComponent(HairArrRt+FaceArrRt+OverallArr+HatArr+CapeArr+CashArr+GloveArr+ShoesArr+EarringArr+FaArr+TopArr+BottomArr); //+TopArr+BottomArr
		var srcR = 'https://maplestory.io/api/Character/' + skin + itemR + '/' + pos + '/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0';
		fnImgLoadR(srcR);
	}
}
