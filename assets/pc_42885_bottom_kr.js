/*     1922074 : 블록 설정(모바일 출력 설정)      */
jQuery(function($){
	var $this = $('.block_option__1922074__');
	$this.closest('.row').addClass('row__1922074__');
})

/*     1922084 : 이미지 슬라이드 (메인용)      */
jQuery(function($) {
	var
		def = $.Deferred()
		$owl = $('#owl__1922084__')
	;

	changeSrc($owl,def);

	$(window).on('resize',function(){
		changeSrc($owl,def);
	});

	def.promise().done(function(){
		loadCarousel($owl);
	});

	function changeSrc($owl,def){
		if(Modernizr.mq('only all and (min-width:1024px)')==true){
			$owl.find('.main_img').each(function(){
				$(this).attr('src',$(this).attr('data-src'));
			});
		}else{
			$owl.find('.main_img').each(function(){
				$(this).attr('src',$(this).attr('data-src-m'));
			});
		}
		def.resolve(true);
	}

	function loadCarousel($owl){
		$owl.owlCarousel({
			margin: 0,								// 이미지 간격
			loop: true,								// 무한 반복
			center: false,							// 액티브 슬라이드 가운데 정렬
			mouseDrag: true,						// 마우스 드레그 사용
			touchDrag: true,						// 터치 드레그 사용
			stagePadding: 0,						// 스테이지 여백 (좌우 슬라이드 노출)
			nav: false,					// 방향 네비게이션
			dots: false,				// 하단 네비게이션
			dotsEach: false,						// 하단 네비게이션 (페이지별 출력,항목별 출력)
			autoplay: true,							// 자동 재생
			autoplayTimeout: 7200,					// 자동 재생 속도
			smartSpeed: 720,						// 슬라이드 속도
			responsiveRefreshRate: 0,				// 반응형 체크 시간
			startPosition: 0,						// 시작 슬라이드 번호
			URLhashListener: false,					// #URL 로 액티브 슬라이드 동작
			autoplayHoverPause: false,				// 마우스 오버시 일시정지
			responsiveClass: false,					// 반응형 class명 사용 (owl-reponsive-0)
			navContainer: false,					// 방향 네비게이션 커스터마이징
			dotsContainer: false,					// 하단 네비게이션 커스터마이징
			items:1,								// 한 화면 출력수
			slideBy:1,								// 한번에 슬라이드 되는 수
			animateOut: ''	// 슬라이드(''), 페이드(fadeOut)
		});
	}
});




/*     1922094 : 블록 설정(모바일 출력 설정)      */
jQuery(function($){
	var $this = $('.block_option__1922094__');
	$this.closest('.row').addClass('row__1922094__');
})

/*     1922104 : 이미지 슬라이드 (메인용)      */
jQuery(function($) {
	var
		def = $.Deferred(),
		$owl = $('#owl__1922104__'),
		$nav= $('#owl_num__1922104__'),
		$thumb = $('#owl_thumb__1922104__'),
		duration = 300
	;

	changeSrc($owl,def);

	$(window).on('resize',function(){
		changeSrc($owl,def);
	});

	def.promise().done(function(){
		loadCarousel($owl);
	});

	function changeSrc($owl,def){
		if(Modernizr.mq('only all and (min-width:768px)')==true){
			$owl.find('.main_img').each(function(){
				$(this).attr('src',$(this).attr('data-src'));
			});
		}else{
			$owl.find('.main_img').each(function(){
				$(this).attr('src',$(this).attr('data-src-m'));
			});
		}
		def.resolve(true);
	}

	function loadCarousel($owl){
		$owl.owlCarousel({
			margin: 0,								// 이미지 간격
			loop: true,								// 무한 반복
			center: false,							// 액티브 슬라이드 가운데 정렬
			mouseDrag: true,						// 마우스 드레그 사용
			touchDrag: true,						// 터치 드레그 사용
			stagePadding: 0,						// 스테이지 여백 (좌우 슬라이드 노출)
			nav: false,					// 방향 네비게이션
			dots: false,				// 하단 네비게이션
			dotsEach: false,						// 하단 네비게이션 (페이지별 출력,항목별 출력)
			autoplay:  true,							// 자동 재생
			autoplayTimeout: 7200,					// 자동 재생 속도
			smartSpeed: duration,						// 슬라이드 속도
			responsiveRefreshRate: 0,				// 반응형 체크 시간
			startPosition: 0,						// 시작 슬라이드 번호
			autoplayHoverPause: false,				// 마우스 오버시 일시정지
			responsiveClass: false,					// 반응형 class명 사용 (owl-reponsive-0)
			navContainer: false,					// 방향 네비게이션 커스터마이징
			dotsContainer: '#owl_thumb__1922104__',					// 하단 네비게이션 커스터마이징
			items:1,								// 한 화면 출력수
			slideBy:1,								// 한번에 슬라이드 되는 수
			animateOut: ''	// 슬라이드(''), 페이드(fadeOut)
		})
		.on('changed.owl.carousel', function(e){
			var
				cloned_count = $owl.find('.cloned').length,
				this_index = e.item.index - cloned_count / 2
			;

			if(3 >= this_index + 1){
				if(this_index + 1 < 10){
					$nav.find('.current_num').text('0' + parseInt(this_index + 1));
				}else{
					$nav.find('.current_num').text(this_index + 1);
				}
			}else if(3 < this_index + 1){
				$nav.find('.current_num').text('01');
			}
			if(this_index == -1){
				$nav.find('.current_num').text(3);
			}
		});
	}

	$thumb.find('.item').each(function(){
		$(this).on('click',function(e){
			e.preventDefault();
			var this_index = $(this).index();
			$owl.trigger('to.owl.carousel', [this_index, duration, true]);
		})
	});
});

/*     1918334 : 블록 설정      */
jQuery(function($){
	var $this = $('.block_option__1918334__');
	$this.closest('.row').addClass('row__1918334__');
})

/*     1918314 : 블록 설정      */
jQuery(function($){
	var $this = $('.block_option__1918314__');
	$this.closest('.row').addClass('row__1918314__');
})

