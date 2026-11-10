/*     1921714 : 셀 설정      */
jQuery(function($){
	var $this = $('.cell_option__1921714__');
	$this.closest('.col > div').addClass('col__1921714__');
})

/*     1915834 : 이미지 리스트 (타일형)      */
item_h();
$(window).on('resize', function(){
	item_h();
});

//컨텐츠 캡션 높이 동일하게
function item_h(){
	var max_item_h = 0;
	$('.img_tile__1915834__ .item .item_inner').removeAttr('style');

	$('.img_tile__1915834__').each(function(){
		$(this).find('.item').each(function(){
			if(max_item_h < $(this).find('.item_inner').height()){
				max_item_h = $(this).find('.item_inner').height();
			}
		});
	});

	$('.img_tile__1915834__ .item .item_inner').height(max_item_h);
}


/*     1920264 : 이미지 슬라이드 + 텍스트 (반응형)      */
jQuery(function($) {
	$('#owl__1920264__').owlCarousel({
		margin: 15,				// 이미지 간격
		loop: true,									// 무한 반복
		center: false,								// 액티브 슬라이드 가운데 정렬
		mouseDrag: true,							// 마우스 드레그 사용
		touchDrag: true,							// 터치 드레그 사용
		stagePadding: 0,							// 스테이지 여백 (좌우 슬라이드 노출)
		nav: false,						// 방향 네비게이션
		dots: false,					// 하단 네비게이션
		dotsEach: false,							// 하단 네비게이션 (페이지별 출력,항목별 출력)
		autoplay: true,								// 자동 재생
		autoplayTimeout: 5000,						// 자동 재생 속도
		smartSpeed: 250,							// 슬라이드 속도
		responsiveRefreshRate: 0,					// 반응형 체크 시간
		startPosition: 0,							// 시작 슬라이드 번호
		autoplayHoverPause: false,					// 마우스 오버시 일시정지
		responsiveClass: false,						// 반응형 class명 사용 (owl-reponsive-0)
		navContainer: '#owl_nav__1920264__',						// 방향 네비게이션 커스터마이징
		dotsContainer: '#owl_dots__1920264__',						// 하단 네비게이션 커스터마이징
		responsive: {								// 반응형
			0: {
				items:1.2,	// 한 화면 출력수 (모바일)
				slideBy:1	// 한번에 슬라이드 되는 수 (모바일)
			},
			768: {
                margin: 34,				// 이미지 간격
				items:3,	// 한 화면 출력수 (태블릿)
				slideBy:3	// 한번에 슬라이드 되는 수 (태블릿)
			},
			1024: {
                margin: 34,				// 이미지 간격
				items:3,		// 한 화면 출력수 (PC)
				slideBy:3		// 한번에 슬라이드 되는 수 (PC)
			}
		}
	})
    
    $(window).on('load resize', function(){
        var dots = $("#owl_dots__1920264__ .owl-dot").length;
        var dots_width = 100 / dots;
        $("#owl_dots__1920264__ .owl-dot").css('width', dots_width + '%');
    });
});

/*     1923725 : 블록 설정      */
jQuery(function($){
	var $this = $('.block_option__1923725__');
	$this.closest('.row').addClass('row__1923725__');
})

