function fnShoesShow(){
	$('#Sbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Sbtn').nextElementSibling;
	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#shoesList').children();
	if(imgSpan.length == 0){
		var gender = $("input[name='isCondi']:checked").val();
		var cashYn = $("#isCash:checked").val();
		var groupedShoes= "";
		const itemListPromise = axios.get(src);

		Promise.all([itemListPromise]).then(responses => {
			if(!_.every(responses, res => res.status === 200)) return;
			const itemData = (responses[0].data || []) || []
			if(cashYn == "on"){
				if(gender == "0"){
					groupedShoes = _.map(
						itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.isCash && item.requiredGender == 0)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else if(gender == "1"){
					groupedShoes = _.map(
						itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.isCash && item.requiredGender == 1)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else if(gender == "2"){
					groupedShoes = _.map(
						itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.isCash && item.requiredGender == 2)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else{
					groupedShoes = _.map(
						itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.isCash)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}
			}else{
				if(gender == "0"){
					groupedShoes = _.map(
						itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.requiredGender == 0)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else if(gender == "1"){
					groupedShoes = _.map(
						itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.requiredGender == 1)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else if(gender == "2"){
					groupedShoes = _.map(
						itemData.filter(item => item.id >= 1070000 && item.id < 1080000 && item.requiredGender == 2)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}else{
					groupedShoes = _.map(
						itemData.filter(item => item.id >= 1070000 && item.id < 1080000)
						, itemGrouping => {
						const firstItem = itemGrouping
						return firstItem
						}
					);
				}
			}

			for(var i=0; i<groupedShoes.length; i++){
				var iconId = groupedShoes[i].id;
				var iconNm = groupedShoes[i].name;
				var iconCate = groupedShoes[i].typeInfo.subCategory;
				var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
				$("#shoesList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddShoes("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
			}
		})
	}


}
