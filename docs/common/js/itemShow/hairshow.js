function fnHairShow(){
	$('#Hbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Hbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#hairList').children();
	if(imgSpan.length == 0){
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

}
