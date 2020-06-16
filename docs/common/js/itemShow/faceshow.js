function fnFaceShow(){
	$('#Fbtn').toggleClass("active");
	var dropdownContent = document.getElementById('Fbtn').nextElementSibling;

	if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
	} else {
		dropdownContent.style.display = "block";
	}

	var imgSpan = $('#FaceList').children();
	if(imgSpan.length == 0){
		var gender = $("input[name='isCondi']:checked").val();
		var cashYn = $("#isCash:checked").val();
		var groupedFaces= "";
		const itemListPromise = axios.get(src);

		Promise.all([itemListPromise]).then(responses => {
			if(!_.every(responses, res => res.status === 200)) return;
			const itemData = (responses[0].data || []) || []
			if(cashYn == "on"){
				if(gender == "0"){
					groupedFaces = _.map(
						_.groupBy(
						itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.isCash && item.requiredGender == 0),
						item => (item.id % 100) + (item.id - (item.id % 1000))
						), itemGrouping => {
						const firstItem = itemGrouping[0]
						return firstItem
						}
					);
				}else if(gender == "1"){
					groupedFaces = _.map(
						_.groupBy(
						itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.isCash && item.requiredGender == 1),
						item => (item.id % 100) + (item.id - (item.id % 1000))
						), itemGrouping => {
						const firstItem = itemGrouping[0]
						return firstItem
						}
					);
				}else if(gender == "2"){
					groupedFaces = _.map(
						_.groupBy(
						itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.isCash && item.requiredGender == 2),
						item => (item.id % 100) + (item.id - (item.id % 1000))
						), itemGrouping => {
						const firstItem = itemGrouping[0]
						return firstItem
						}
					);
				}else{
					groupedFaces = _.map(
						_.groupBy(
						itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.isCash),
						item => (item.id % 100) + (item.id - (item.id % 1000))
						), itemGrouping => {
						const firstItem = itemGrouping[0]
						return firstItem
						}
					);
				}
			}else{
				if(gender == "0"){
					groupedFaces = _.map(
						_.groupBy(
						itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.requiredGender == 0),
						item => (item.id % 100) + (item.id - (item.id % 1000))
						), itemGrouping => {
						const firstItem = itemGrouping[0]
						return firstItem
						}
					);
				}else if(gender == "1"){
					groupedFaces = _.map(
						_.groupBy(
						itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.requiredGender == 1),
						item => (item.id % 100) + (item.id - (item.id % 1000))
						), itemGrouping => {
						const firstItem = itemGrouping[0]
						return firstItem
						}
					);
				}else if(gender == "2"){
					groupedFaces = _.map(
						_.groupBy(
						itemData.filter(item => item.id >= 10000 && item.id < 30000 && item.requiredGender == 2),
						item => (item.id % 100) + (item.id - (item.id % 1000))
						), itemGrouping => {
						const firstItem = itemGrouping[0]
						return firstItem
						}
					);
				}else{
					groupedFaces = _.map(
						_.groupBy(
						itemData.filter(item => item.id >= 10000 && item.id < 30000 ),
						item => (item.id % 100) + (item.id - (item.id % 1000))
						), itemGrouping => {
						const firstItem = itemGrouping[0]
						return firstItem
						}
					);
				}
			}

			for(var i=0; i<groupedFaces.length; i++){
				var iconId = groupedFaces[i].id;
				var iconNm = groupedFaces[i].name;
				var iconCate = groupedFaces[i].typeInfo.subCategory;
				var iconSrc = "https://maplestory.io/api/" + region + "/" + version + "/item/" + iconId + "/icon";
				$("#FaceList").append("<span data-toggle='tooltip' data-placement='bottom' title='" + iconNm + "'><img src='" + iconSrc + "' id='" + iconId +"' onclick='javascript:rightListAddFace("+ iconId +", \"" + iconNm + "\", \"" + iconCate + "\");'/></span>");
			}
		})
	}
}
