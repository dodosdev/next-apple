//<![CDATA[
	$(function(){

		var mySlider=$("#slide_banner").bxSlider({
			mode:"horizontal",   // 가로 수평으로 슬라이드 됩니다.
			speed:100,           // 이동 속도를 설정합니다.
			pager:false,         // 현재 위치 페이징 표시 여부 설정.
			moveSlides:1,        // 슬라이드 이동시 갯수 설정.
			slideWidth:586,       // 슬라이드 마다 너비 설정.
			minSlides:2,         // 최소 노출 개수를 설정.
			maxSlides:1,         // 최대 노출 개수를 설정.
			slideMargin:0,      // 슬라이드간의 간격을 설정.
			auto:true,	         // 자동으로 흐를지 설정합니다.
			autoHover:true,      // 마우스 오버시 정지 시킬지 설정합니다.
			controls:false,       // 이전 다음 버튼 노출 여부 설정합니다.
		});

		$("#prevBtn01").on("click",function(){	
			mySlider.goToPrevSlide();  	
			return false;
		});

		$("#nextBtn02").on("click",function(){	
			mySlider.goToNextSlide();  
			return false; //<a>에 링크를 차단합니다.
		});
        
        $("#nextBtn03").on("click",function(){	
			mySlider.goToNextSlide();  
			return false; //<a>에 링크를 차단합니다.
		});

	});
	//]]>