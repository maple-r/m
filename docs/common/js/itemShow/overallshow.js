function fnOverallShow(){
	$('#Obtn').toggleClass("active");
	var dropdownContent = document.getElementById('Obtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#overAllList').children();
	if(imgSpan.length == 0){
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

}
