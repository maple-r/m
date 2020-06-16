$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

function fnSrch(){
	if($("#itemSrh").val() == "" && $("#itemSrhH").val() == ""){
		var val1 = $("input[name='isCondi']:checked").val();
		var val2 = $("#isCash:checked").val();
		$.ajax({
			type: 'GET',
			url : '/m/app/sidebar.html',
			dataType : 'html' ,
			data: {
				isCash:val1,
				isCondi:val2
			},
			success: function (response){
				//console.log($(response).find('#mySidenav').prevObject[0].innerHTML);
				var rt = $(response).find('#mySidenav').prevObject[0].innerHTML;
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

				//fnRefresh();
			}
		});
	}else{
		$("#srchBtn").css("display", "");
		$("#srchDiv").css("display", "");
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
	$("#srchList").empty();

	var dropdownContent = document.getElementById('srchDiv');
	if (document.getElementById('srchDiv').style.display == "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#srchList').children();
	if(imgSpan.length == 0){
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
}

function fnChecked(){
	if(document.getElementsByName("isCash")[0].checked){
		$("#isCashVal").val("Y");
	}else{
		$("#isCashVal").val("N");
	}
}
