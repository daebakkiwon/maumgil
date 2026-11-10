$(function(){
	// 필수 스크립트
	// voice
	$("body").on({
		click : function(e){
			var onoff="on";
			if($(e.target).hasClass("state_voice_on")) onoff="off";
			SetCookie('bg_voice_onoff',onoff);
			if(onoff == 'on'){
				$("#voice_guide_wrap").addClass("off").removeClass("on");
			}else{
				$("#voice_guide_wrap").addClass("on").removeClass("off");
			}
			if(document.getElementById('bg_voice_player')){
				if(onoff == 'off'){
					// 현재 재생 중이면 stop() 처리
					document.getElementById('bg_voice_player').pause();
					document.getElementById('bg_voice_player').currentTime = 0;
				}else{
					// 다시 paly() 처리
					document.getElementById('bg_voice_player').play();
				}
			}
			return false;
		}
	}, "#voice_guide_wrap > a");

//toggle
	$('.side_menu [role=toggle] > a').on('click', function(e){
		var
		$li = $(this).parent()
		,$lis = $(this).closest('ul').children()
		,$active = $(this).parent().parent().children('.active')
		;
		if ($li.hasClass('active')){
			$li.removeClass('active');
		} else {
			$active.removeClass('active');
			$li.addClass('active');
		}
		return false;
	});

//side
	$('#toggle_left, #toggle_right').on('click',function(e){
		if(!$(this).hasClass("on")){
			close_toggle();
			$(this).addClass('on');
			$("#viewport").addClass("on "+$(this).attr("id"));
			return false;
		}else{
			close_toggle();
		}
	});

	$('#close_side').on('click',function(){
		close_toggle();
	});
	function close_toggle(){
		$('#toggle_left, #toggle_right').removeClass('on');
		$("#viewport").removeClass("on toggle_left toggle_right");
		return false;
	}

	if($(".lnb_p .dep2 > li").css("display")=="inline-block"){
		$("body").on({
			mouseenter : function(){
				var	dep1right = $(this).closest(".dep1").offset().left + $(this).closest(".dep1").outerWidth(),
						dep2right = $(this).offset().left + $(this).children("div").outerWidth();
				if(dep2right > dep1right){
					$(this).children('div').css('right','0');
				}
			},
			mouseleave : function(){
				$(this).children('div').removeAttr('style');
			}
		}, ".lnb_p > ul.dep1 > li");
	};


        //해당 위치에서 나타남
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('.button_quick2, .button_quick3, .button_quick4').addClass('on');
		}else{
			$('.button_quick2, .button_quick3, .button_quick4').removeClass('on');
		}
	});


	//상단으로 이동
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('#btn_site_top').addClass('on');
		}else{
			$('#btn_site_top').removeClass('on');
		}
	});

	$('#btn_site_top').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 800);

		return false;
	});

	function mypage_snb(target){
		if(target.scrollLeft()<40){
			target.parent().find(".prev").hide();
		}else{
			target.parent().find(".prev").show();
		}
		if(target.scrollLeft()-40<target.find(".dep1").width()-target.parent().width()){
			target.parent().find(".next").show();
		}else{
			target.parent().find(".next").hide();
		}
	}
	$(".snb > div").scroll(function(){
		mypage_snb($(this));
	});
	mypage_snb($(".snb > div"));
	if($(".snb > div").find(".on").length>0) $(".snb > div").scrollLeft($(".snb > div").find(".on").offset().left-$(".snb > div").width()/2+$(".snb > div").find(".on").width()/2);

	//PC LNB
	var $lnb_pc = $('.lnb_p');

	$lnb_pc.find('.dep1 > li').on('mouseenter', function(){
		var delay_time = 0;
		var dep2_cnt = $(this).find('.dep2 > li').length;

		$(this).find('.dep2 > li').each(function(index){
			delay_time += 0.06;
			dep2_cnt -= 1;
			$(this).find('> a').css({
				'opacity' : '1',
				'transform' : 'translateY(0)',
				'transition-delay' : delay_time + 's',
				'z-index' : dep2_cnt
			});
		});
	});

	$lnb_pc.find('.dep1 > li').on('mouseleave', function(){
		$(this).find('.dep2 > li > a').removeAttr('style');
	});

	//PC 상단 검색폼
	$('.header_form .btn_header_form').on('click', function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$(this).parent().find('.search_p').stop().fadeOut(200);
			$(this).parent().find('.search_p .search_form input[type=text]').blur();
			$('.lnb_p .dep1 > li > div').show();
		}else{
			$(this).parent().addClass('on');
			$(this).parent().find('.search_p').stop().fadeIn(200);
			$(this).parent().find('.search_p .search_form input[type=text]').focus();
			$('.gnb_p .gnb_list').removeClass('on');
			$('.gnb_p .gnb_list > ul').stop().fadeOut(200);
			$('.lnb_p .dep1 > li > div').hide();
		}
	});

	//PC GNB
	$('.gnb_p .gnb_list .btn_gnb_list').on('click', function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$(this).parent().find('>ul').stop().fadeOut(200);
			$('.lnb_p .dep1 > li > div').show();
		}else{
			$(this).parent().addClass('on');
			$(this).parent().find('>ul').stop().fadeIn(200);
			$('.header_form').removeClass('on');
			$('.header_form .search_p').stop().fadeOut(200);
			$('.lnb_p .dep1 > li > div').hide();
		}
	});

	$('#header').on('mouseleave', function(){
		$('.header_form').removeClass('on');
		$('.gnb_p .gnb_list').removeClass('on');
		$('.gnb_p .gnb_list > ul').stop().fadeOut(200);
		$('.header_form .search_p').stop().fadeOut(200);
	});

	//LNB PC Depth2 width half check
	$(window).on('load resize', function(){
		navi_size_check();
	});

	function navi_size_check(){
		//LNB PC depth2
		$('.lnb_p ul.dep1 > li > div').removeAttr('style');
		$('.lnb_p ul.dep1 > li').each(function(){
			var $dep2_width = $(this).children('div').outerWidth();
			var $dep2_width_half = $dep2_width/2;

			$(this).children('div').css({
				'margin-left' : -$dep2_width_half
			});
		});
	}

	//PC 서브 네비게이션 고정
	if($('.snb_wrap').length > 0) {
		var $snb_p_top = $('#sub_view #container .contents_wrap .snb_wrap').position().top;

		$(window).on('load scroll', function(){
			if($(window).scrollTop() > $snb_p_top - $('#header').outerHeight()){
				$('#sub_view #container .contents_wrap').addClass('fixed_on');
			}else{
				$('#sub_view #container .contents_wrap').removeClass('fixed_on');
			}
		});
	}
})