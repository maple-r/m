function fnHatShow(){
	$('#Hatbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Hatbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#hatList').children();
	if(imgSpan.length == 0){
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

}
