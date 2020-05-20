<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="title" content="maplestory simulator"/>
		<meta name="keyword" content="maple,maplestory,simulator,maplestory simulator,메이플,메이플스토리,코디,메이플코디사이트,메이플코디"/>
		<meta name="author" content="엘리시움빛히디"/>
		<meta name="description" content="This web site is maplestory simulator. 이 사이트는 메이플스토리 코디 사이트입니다."/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="theme-color" content="#000000">
		<meta http-equiv="p3p" content='CP="CAO DSP AND SO " policyref="/w3c/p3p.xml"' >
		<link rel="shortcut icon" href="/m/common/img/favicon.ico">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:300,400,700">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
		<link rel="stylesheet" href="/m/common/css/common.css">
		<title>메이플스토리 코디 사이트</title>
		<!--20200206-->
		<script data-ad-client="ca-pub-4722621571965994" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-157877492-1"></script>
		<script type="text/javascript" src="//cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>
		<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js"></script>
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script type="text/javascript" src="/m/common/js/jquery.form.min.js"></script>
		<script type="text/javascript" src="/m/common/js/jquery-ui-1.12.1.min.js"></script>
		<script type="text/javascript" src="/m/common/js/common.js"></script>
		<script type="text/javascript" src="/m/common/js/index.es2015.js"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-157877492-1');
		</script>
	</head>
<body>
	<div class="container" id="main">
		<div class="header">
			<span class="hd-ico" id="opTog" onclick="javascript:sideBarOp();" title="CHARACTER"><i class="fa fa-fw fa-child"></i></span>
			<span class="hd-ico" id="opLabel" onclick="javascript:btSpclLbOp();" title="Special Label History"><i class="fa fa-fw label-img"></i></span>
			<input type="text" id="itemSrhH" name="itemSrhH" class="item-search-head" placeholder="SEARCH" onkeydown="javascript:enterkey();"/>
			<span class="hd-ico" id="opRTog" onclick="javascript:sideBarRtOp();" title="SETTING" style="position: absolute;right: 0px;"><i class="fa fa-fw fa-cog"></i></span>
		</div>
	</div>
	<div id="contents">
    <!--
      ** imgLoad.php start
    -->
    <!-- Draggable DIV -->
    <div id="mydiv">
    	<!-- Include a header DIV with the same name as the draggable DIV, followed by "header" -->
    	<div id="myCharacter">
    		<input type="hidden" id="rtLinkRl" name="rtLinkRl"/>
    		<img src="https://maplestory.io/api/Character/%7B%22itemId%22%3A2000%2C%22version%22%3A%22210.1.1%22%7D%2C%7B%22itemId%22%3A12000%2C%22version%22%3A%22210.1.1%22%7D/stand1/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0" id="leftImg"/>
    		<img src="https://maplestory.io/api/Character/%7B%22itemId%22%3A2000%2C%22version%22%3A%22210.1.1%22%7D%2C%7B%22itemId%22%3A12000%2C%22version%22%3A%22210.1.1%22%7D/stand1/0?showears=false&showLefEars=false&showHighLefEars=undefined&resize=1&name=&flipX=false&bgColor=0,0,0,0" id="rightImg"/>
    	</div>

    </div>

    <script>
    // Make the DIV element draggable:
    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
    	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    	if (document.getElementById(elmnt.id + "header")) {
    		// if present, the header is where you move the DIV from:
    		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    	} else {
    		// otherwise, move the DIV from anywhere inside the DIV:
    		elmnt.onmousedown = dragMouseDown;
    	}

    	function dragMouseDown(e) {
    		e = e || window.event;
    		e.preventDefault();
    		// get the mouse cursor position at startup:
    		pos3 = e.clientX;
    		pos4 = e.clientY;
    		document.onmouseup = closeDragElement;
    		// call a function whenever the cursor moves:
    		document.onmousemove = elementDrag;
    	}

    	function elementDrag(e) {
    		e = e || window.event;
    		e.preventDefault();
    		// calculate the new cursor position:
    		pos1 = pos3 - e.clientX;
    		pos2 = pos4 - e.clientY;
    		pos3 = e.clientX;
    		pos4 = e.clientY;
    		// set the element's new position:
    		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    	}

    	function closeDragElement() {
    		// stop moving when mouse button is released:
    		document.onmouseup = null;
    		document.onmousemove = null;
    	}
    }

    function fnImgLoad(url){
    	$("#leftImg").attr("src", url);
    }

    function fnImgLoadR(url){
    	$("#rightImg").attr("src", url);
    }
    </script>

    <!--
      ** imgLoad.php end
    -->

	</div>
</body>
</html>
