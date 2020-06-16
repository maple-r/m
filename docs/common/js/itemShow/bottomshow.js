function fnBottomShow(){
	$('#Bbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Bbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#bottomList').children();
	if(imgSpan.length == 0){
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
}
