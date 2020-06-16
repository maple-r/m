function fnCashShow(){
	$('#Cashbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Cashbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#cashList').children();
	if(imgSpan.length == 0){
		var gender = $("input[name='isCondi']:checked").val();
		var cashYn = $("#isCash:checked").val();
		var groupedCashes= "";
		const itemListPromise = axios.get(src);

		Promise.all([itemListPromise]).then(responses => {
			if(!_.every(responses, res => res.status === 200)) return;
			const itemData = (responses[0].data || []) || []
			if(cashYn == "on"){
				if(gender == "0"){
					groupedCashes = _.map(
						itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.isCash && item.requiredGender == 0)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else if(gender == "1"){
					groupedCashes = _.map(
						itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.isCash && item.requiredGender == 1)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else if(gender == "2"){
					groupedCashes = _.map(
						itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.isCash && item.requiredGender == 2)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else{
					groupedCashes = _.map(
						itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.isCash)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}
			}else{
				if(gender == "0"){
					groupedCashes = _.map(
						itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.requiredGender == 0)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else if(gender == "1"){
					groupedCashes = _.map(
						itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.requiredGender == 1)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else if(gender == "2"){
					groupedCashes = _.map(
						itemData.filter(item => item.id >= 1701000 && item.id < 1703000 && item.requiredGender == 2)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else{
					groupedCashes = _.map(
						itemData.filter(item => item.id >= 1701000 && item.id < 1703000)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}
			}

			for(var i=0; i<groupedCashes.length; i++){
				var iconId = groupedCashes[i].id;
				var iconNm = groupedCashes[i].name;
				var iconCate = groupedCashes[i].typeInfo.subCategory;
				var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
				$("#cashList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddCash("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
			}
		})
	}
}
