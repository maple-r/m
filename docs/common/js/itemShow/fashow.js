function fnFAShow(){
	$('#FAbtn').toggleClass("active");
	var dropdownContent = document.getElementById('FAbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#FAList').children();
	if(imgSpan.length == 0){
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


}
