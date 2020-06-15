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
