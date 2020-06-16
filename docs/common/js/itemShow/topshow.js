function fnTopShow(){
	$('#Tbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Tbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#topList').children();
	if(imgSpan.length == 0){
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


}
