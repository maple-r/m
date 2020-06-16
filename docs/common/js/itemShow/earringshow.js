function fnEarringsShow(){
	$('#Earbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Earbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#earringsList').children();
	if(imgSpan.length == 0){
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


}
