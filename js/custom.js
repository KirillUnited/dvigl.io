$(document).ready(function () {

	$(document).click(function (e) {
		if (!$('.navbar-collapse').is(e.target) && $('.navbar-collapse').has(e.target).length === 0) {
			$(".navbar-collapse").collapse('hide');
		};
	});

	$('body').on('click', '.navbar-collapse a', function () {
		$(".navbar-collapse").collapse('hide');
	});

	$('body').on('click', '.login', function () {
		$('.popups, .popup__sign-in').fadeIn();
		return false;
	});
	$('body').on('click', '.registration a', function () {
		$('.popup__sign-in').hide(),
			$('.popup__sign-up').show();
		return false;
	});
	$('body').on('click', '.close, .btn-cancel', function () {
		$('.popups, .popup').fadeOut();
		return false;
	});
	$(document).click(function (e) {
		if (!$('.popup').is(e.target) && $('.popup').has(e.target).length === 0) {
			$('.popups, .popup').fadeOut();
		};
	});
	// POP_UP_ADD_COMPANY
	$('body').on('click', '.header__middle_login .add, .side-block .add', function () {
		$('.popups, .popup__sign-up_company').fadeIn();
		return false;
	});
	// END POP_UP_ADD_COMPANY

	$('.popup form').submit(function () {
		$(this).find('.error').remove();
		if ($(this).find('input[type="text"]').val() == '') {
			$(this).find('button:not(.btn-cancel)').before('<div class="error">Заполните поля</div>');
			return false;
		};
		if ($(this).find('input[type="email"]').val() == '') {
			$(this).find('button:not(.btn-cancel)').before('<div class="error">Введите email</div>');
			return false;
		};
		if ($(this).find('input[type="password"]').val() == '') {
			$(this).find('bbutton:not(.btn-cancel)').before('<div class="error">Введите пароль</div>');
			return false;
		};
		if ($(this).find('input[type="password"]:eq(1)').val() == '') {
			$(this).find('button:not(.btn-cancel)').before('<div class="error">Введите пароль ещё раз</div>');
			return false;
		};
		// if ($(this).find('input[type="file"]').val() == '') {
		// 	$(this).find('button:not(.btn-cancel)').before('<div class="error">Выберите файл для загрузки</div>');
		// 	return false;
		// };
		$.post(
			$(this).attr('action'),
			$(this).serialize()
		);
		return false;
	});

	// user__block begin
	$('body').on('click', '.user__block_avatar', function () {
		if ($(this).hasClass('user__block_avatar-fix')) {
			$('.user__balance').css({
				right: '0px'
			});
			$('.user__block_avatar').removeClass('user__block_avatar-fix');
			$('.user__id').removeClass('user__id_active');
			$('.user__block_menu').hide();
			$('.user__block_avatar').removeClass('dropdown-arrow');
			return false;
		} else {
			$('.user__balance').css({
				'position': 'relative'
			}).css({
				right: '44px'
			});
			$('.user__block_menu').show();
			$('.user__block_avatar').addClass('user__block_avatar-fix');
			$('.user__id').addClass('user__id_active');
			$('.user__block_avatar').addClass('dropdown-arrow');
			return false;
		}

	});
	$(document).click(function (e) {
		if (!$('.user__block_menu').is(e.target) && $('.user__block_menu').has(e.target).length === 0) {
			$('.user__balance').css({
				right: '0px'
			});
			$('.user__block_avatar').removeClass('user__block_avatar-fix');
			$('.user__id').removeClass('user__id_active');
			$('.user__block_menu').hide();
		};
	});

	// mobile
	$('body').on('click', '.btn-user', function () {
		$('.user__balance').css({
			right: '0px'
		});
		$('.header__middle_user').addClass('show');
		$('.user__block_menu').addClass('show');
		return false;
	});
	$('body').on('click', '.header__middle_user > .close', function () {
		$('.header__middle_user').removeClass('show');
		return false;
	});
	$(window).resize(function () {
		if ($(this).width() > 971) {
			$('.header__middle_user, .user__block_menu').removeClass('show');
			$('.user__balance').css({
				right: '0px'
			});
			$('.user__block_avatar').removeClass('user__block_avatar-fix');
			$('.user__id').removeClass('user__id_active');
			$('.user__block_menu').hide();
			$('.user__block_avatar').removeClass('dropdown-arrow');
		};

	});

	$('body').on('click', '.btn-mobile-search', function () {
		$('.header__middle_search_mobile').show();
		$('.search-mobile-input form input').focus();
		$('.wrapper').children(':not(.header__middle_search_mobile)').hide();
		return false;
	});
	$('body').on('click', '.cancel__text', function () {
		$('.header__middle_search_mobile').hide();
		$('.wrapper').children(':not(.popups, .header__middle_search_mobile)').show();
		return false;
	});

	// user__block end
	$('body').on('click', '.comment .media-heading i', function () {
		$(this).toggleClass('favorite');
	});

	// .block__send-comment
	$('body').on('focus', 'textarea[name="user-comment"]', function () {
		$(this).addClass('write-comment');
		$('.block__send-comment').show();
	});
	$('body').on('click', '.btn-send-comment', function () {
		if ($('textarea[name="user-comment"]').val() !== '') {
			$('textarea[name="user-comment"]').removeClass('write-comment');
			$('.block__send-comment').hide();
		};
	});
	$(document).click(function (e) {
		if (!$('.comment__field .media-body').is(e.target) && $('.comment__field .media-body').has(e.target).length === 0) {
			$('textarea[name="user-comment"]').removeClass('write-comment');
			$('.block__send-comment').hide();
		};
	});

	var userName = $('.user__name').text();
	$('.user__name').attr('title', userName);

	// company-catalog__sort-list toggle dropdown menu
	$('body').on('click', '.company-catalog__sort-by, .company-catalog__sort-item-link', function () {
		$('.company-catalog__sort-list').slideToggle();
		return false;
	});
	$('body').on('click', '.company-catalog__sort-item > .company-catalog__sort-item-link', function () {
		var choice = $(this).text();
		$('.company-catalog__sort-by').text(choice);
		$(this).parent().addClass('company-catalog__sort-item_active');
		$(this).parent().siblings().removeClass('company-catalog__sort-item_active');
		return false;
	});

	// begin filter-left__filter
	$('body').on('change', '.filter-left__list-select', function () {
		$(this).removeClass('filter-left__list-item_default')
			.addClass('filter-left__list-item');
	});
	$('body').on('click', '.filter-left__filter-reset', function () {
		$(this).parent().find('.filter-left__list-select')
			.removeClass('filter-left__list-item')
			.addClass('filter-left__list-item_default');
	});
	// end filter-left__filter

	// begin timetable_right

	$('a.contacts-block-title').toggle(function () {
		$(this).text('Скрыть режим работы')
			.addClass('visible')
			.parent()
			.find('.timetable')
			.slideToggle();
		return false;
	}, function () {
		$(this).text('Режим работы')
			.removeClass('visible')
			.parent()
			.find('.timetable')
			.slideToggle();
		return false;
	});

	// end timetable_right

	// NEW_menu

	$('body').on('click', '.header__middle_menu > li > a', function () {
		if ($(window).width() < 971) {
			$(this).parent()
				.find('.header__menu-block')
				.toggleClass('dropdown')
				.parent().children('a')
				.toggleClass('dropdown-arrow');
			return false;
		};
	});

	$('body').on('click', '.has-child .header__menu-block-link', function () { /*1*/
		if ($(window).width() < 971) {
			$(this).toggleClass("active").siblings(".header__submenu-block").toggle();
			return false;
		};
	});

	$('body').on('click', 'button.navbar-toggle', function () {
		$(this).parent().parent()
			.find('.header__menu')
			.addClass('display-flex');
		return false;
	});
	$('body').on('click', '.header__menu > .close', function () {
		$(this).parent()
			.removeClass('display-flex');
		return false;
	});
	// en NEW_menu
	// FILE_UPLOAD
	var wrapper = $(".form-group_file"),
		btn = wrapper.find(".button"),
		lbl = wrapper.find(".file-name");

	lbl.text('Загрузите свидетельство о госрегистрации');

	$('body').on('click', '.form-group_file .button', function () {
		var inp = $(this).parent().find('input[type=file]');
		inp.click();
	});

	$('body').on('change', '.form-group_file input[type=file]', function () {
		if (this.files.length) {
			var fileName = this.files[0].name;
			var lbl = $(this).parent().find(".file-name");
			lbl.text(fileName);
			return false;
		}
	});

	$(window).resize(function () {
		$(".file_upload input").triggerHandler("change");
	});
	$(window).resize(function () {
		if ($(window).width() < 584) {
			btn.text("Загрузить свидетельство");
		} else {
			btn.text("Загрузить");
		}
	});

	// END FILE_UPLOAD

	/*SIDE-BLOCK*/
	$('body').on('click', '.side-block__dropdown-arrow', function () {
		$(this).parent()
			.find('.side-block__list')
			.slideToggle();
		return false;
	});
	// POP EDIT COMPANY INFO
	$('body').on('click', 'a.main-block__item-edit', function () {
		var id = $(this).attr('href'),
			serviceContent = '.popup__content_sto',
			service = $(id).find(serviceContent);
		$('.popups').fadeIn();
		$(id).fadeIn();
		service.fadeIn();
		return false;
	});
	// END POP EDIT COMPANY INFO

	// POP_UP_EDIT_CATEGORY_COMPANY
	$('body').on('click', '.categories-list > li > .categories-list__link', function () {
		$(this).toggleClass('categories-list__link_open')
			.parent().find('.categories-list-dropdown')
			.slideToggle()
		return false;
	});

	$('body').on('click', '.categories-list-dropdown .categories-list__link', function () {
		var inp = $(this).parent().find("input[type='checkbox']");
		inp.click();
		return false;
	});
	// END_POP_UP_EDIT_CATEGORY_COMPANY

	// POPUPEDITSERVICES
	$('body').on('click', '.filter-reset', function () {
		var inp = $(this).parent().find("input[type='reset']");
		inp.click();
		return false;
	});

	$('body').on('click', '.mark-name', function () {
		$(this).parent()
			.find('input[type=checkbox]').toggle();
		$(this).parent().parent()
			.find('.categories-list-dropdown_marks').toggle()
			.parent()
			.find('.categories-list__item_btn').toggle();
		return false;
	});


	$('body').on('click', '.categories-list__item_btn', function () {
		var distance = 50,
			box = $('.categories-list-dropdown_marks');

		box.animate({
			scrollTop: '+=55'
		});
	});

	// ENDSERVICES
	// ADRESS
	$('body').on('click', '#adress .company-catalog__sort-by, #adress .company-catalog__sort-item-link', function () {
		$('.company-catalog__sort').toggleClass('company-catalog__sort_bottom-radius');
		return false;
	});
	// ADD_LOGO
	$('body').on('click', '.button-add-logo', function () {
		var inp = $(this).parent().find('input[type=file]');
		inp.click();
	});

	$('#file-logo-img').on('change', function () {
		$('#addLogo-form').find('.error').remove();
		var size = 0;
		if (this.files.length) {
			for (var i = 0; i < this.files.length; i++) {
				size += this.files[i].size;
			}
			if (size > 3145728) {
				$(this).before('<div class="error">Превышен размер файла!</div>');
			}
		};

	});

	$('#addLogo-form').submit(function () {
		return send_verification();
	});

	function send_verification() {
		var userFile = document.forms["addLogo-form"]["file"];
		var size = 0;
		var valide = true;
		$('#addLogo-form').find('.error').remove();

		if ($('#addLogo-form').find('input[type="file"]').val() == '') {
			$('#addLogo-form').find('button:not(.btn-cancel)').before('<div class="error">Выберите файл для загрузки</div>');
			return false;
		};

		if (userFile) {
			if (userFile.files.length) {
				for (var i = 0; i < userFile.files.length; i++) {
					size += userFile.files[i].size;
				}
				if (size > 3145728) {
					valide = false;
					$('#addLogo-form').find('button:not(.btn-cancel)').before('<div class="error">Превышен размер файла!</div>');
				}
			};
		};
	};
	$('body').on('change', '#file-logo-img', function () {
		$('#addLogo-form').find('.error').remove();


		var preview = $(this).parent()
			.parent()
			.find('.uploaded-images__item_logo > img');
		var file = this.files;
		var reader = new FileReader();

		reader.onload = function (e) {
			if (file[0].type === 'image/jpeg' || file[0].type === 'image/png' || file[0].type === 'image/gif') {
				if (file[0].size > 3145728) {
					$('#addLogo-form')
						.find('button:not(.btn-cancel)')
						.before('<div class="error">Превышен размер файла!</div>');
					$('#file-logo-img').val('');
				} else {
					$('.uploaded-images__item_logo').removeClass('hidden');
					$(preview).attr('src', e.target.result);
				}
			} else {
				$('#addLogo-form')
					.find('button:not(.btn-cancel)')
					.before('<div class="error">Недопустимый формат!</div>');
				$('#file-logo-img').val('');
			}

		};
		reader.readAsDataURL(file[0]);
		console.log(file[0].size);

	});

	var imgCount = 0;
	// imgs
	$('body').on('change', '#file-img', function () {

		$('#addImg-form').find('.error').remove();



		var size = 0;
		var width = 1200;
		var height = 570;

		var preview = $(this).parent()
			.parent()
			.find('.uploaded-images__item > img');
		var file = this.files;

		function previewFile(file) {
			var reader = new FileReader();
			reader.readAsDataURL(file);

			if (file.type === 'image/jpeg' || file.type === 'image/png') {
				reader.onloadend = function () {
					var imgItem = document.createElement('div');
					imgItem.setAttribute('class', 'uploaded-images__item col-lg-3 col-md-3 col-sm-4 col-xs-6');
					imgItem.innerHTML = '<input type="checkbox" name="checkbox"><a href="" class="remove-item"><img src="img/remove.png" alt=""></a>';

					var img = document.createElement('img');
					img.src = reader.result;
					$(img).load(function () {
						if (img.naturalWidth < 570 || img.naturalHeight < 1200) {
							alert('Размер изображения ' + file.name + '(' + img.naturalHeight + 'x' + img.naturalWidth + 'px' + ')' + ' менее допустимого (1200х570px)');
							$('#file-img').val('');
						} else {
							$('#addImg-form').find('.uploaded-images, .form-group_btn').removeClass('hidden');
							$(imgItem).append(img);
							$(imgItem).appendTo('.uploaded-images > .row');
						}
					});

				}
			} else {
				$('#addImg-form')
					.append('<div class="error">Недопустимый формат!</div>');
				$('#file-img').val('');
			}

		}
		if (this.files.length > 12) {
			$(this).val('');
			$(this).before('<div class="error">Превышено количество файлов!</div>');
		} else {
			for (var i = 0; i < file.length; i++) {
				previewFile(file[i]);
			}
		}

		$('#file-img').val('');
	});



	// ADDIMG
	// выбрать все авто(чекбоксы)

	$('body').on('click', '.check-all', function () {
		var inp = $(this).parent()
			.find("input[type='checkbox']");
		if (inp.prop('checked', false)) {
			inp.click();
			return false;
		}
	});
	$('body').on('click', '.remove-all', function () {
		var inp = $(this).parent()
			.find("input[type='checkbox']");

		inp.each(function () {
			if ($(this).prop('checked') === true) {
				$(this).parent().remove();
			}
		});
		var inp2 = $(this).parent()
			.find("input[type='checkbox']");
		if (inp2.length == 0) {

			$('.uploaded-images').addClass('hidden');
			$('#addImg-form .form-group.form-group_btn').addClass('hidden');

		}

		return false;
	});
	$('body').on('click', '.remove-item', function () {
		$(this).closest('.uploaded-images__item').remove();
		$('#file-img').val('');

		var item = $('.uploaded-images')
			.find(".uploaded-images__item");

		console.log(item.length);

		if (item.length == 0) {

			$('.uploaded-images').addClass('hidden');
			$('#addImg-form .form-group.form-group_btn').addClass('hidden');

		}

		return false;
	});

	$('body').on('click', '.uploaded-images__item_logo > .remove-item', function () {
		$(this).closest('.uploaded-images__item_logo').addClass('hidden')
			.parent().find('input[type=file]').val('');
		return false;
	});

	// notice
	// проверка наличия новых сообщений
	$('.notice-block__content').has('.notice-block__item_new')
		.parent().find('.notice-block__title').addClass('notice-block__title_active');

	// add phone number and fields
	$('body').on('click', '.add-num-phone__btn', function () {
		var block = '<div class="position-phone">\
		<input type="text" class="form-control form-control_type form-control_numphone" placeholder="Введите номер телефона">\
		<input type="text" class="form-control form-control_type" placeholder="Должность (отдел)">\
		<span class="position-phone_remove">\
		</span>\
		</div>'
		$(this).parent().parent().find('.position-phone:last').after(block);
		return false;
	});

	// added adress input place-type
	$('body').on('click', '#adress .company-catalog__sort-item-link', function () {
		var place = $('#adress .company-catalog__sort-by').text();
		var placeInp = $('#adress .adress_place-type');
		placeInp.val(place);
		console.log(placeInp.val());
		return false;
	});

	// new edit worktime
	$('body').on('click', '.btn-params_break > .form-group__btn-param', function () {
		var block = '<div class="hours-block hours-block_add">\
		<input type="text" class="form-control form-control_hours form-control_hours_from" placeholder="ЧЧ:ММ">\
		<input type="text" class="form-control form-control_hours form-control_hours_to" placeholder="ЧЧ:ММ">\
		<span class="position-phone_remove">\
		</span>\
		</div>';
		$(this).closest('.hours-edit').after(block);
		return false;
	});

	// added new workday
	$('body').on('click', '.btn-params_add-days > .form-group__btn-param', function () {
		var div = document.createElement('div');
		div.className = 'form-groups';
		div.innerHTML = '<div class="form-group form-group_days">\
		<table class="checkbox-group">\
		<tbody><tr>\
		<td><label for="mon">Пн</label></td>\
		<td><label for="tue">Вт</label></td>\
		<td><label for="wed">Ср</label></td>\
		<td><label for="thu">Чт</label></td>\
		<td><label for="fri">Пт</label></td>\
		<td><label for="sat">Сб</label></td>\
		<td><label for="sun">Вс</label></td></tr>\
		<tr>\
		<td><input id="mon" type="checkbox" class=""></td>\
		<td><input id="tue" type="checkbox" class=""></td>\
		<td><input id="wed" type="checkbox" class=""></td>\
		<td><input id="thu" type="checkbox" class=""></td>\
		<td><input id="fri" type="checkbox" class=""></td>\
		<td><input id="sat" type="checkbox" class=""></td>\
		<td><input id="sun" type="checkbox" class=""></td>\
		</tr></tbody></table></div>\
		<div class="form-group form-group_hours">\
		<div class="hours-edit">\
		<div class="hours-block">\
		<input type="text" class="form-control form-control_hours form-control_hours_from" placeholder="ЧЧ:ММ">\
		<input type="text" class="form-control form-control_hours form-control_hours_to" placeholder="ЧЧ:ММ">\
		<div class="btn-params btn-params_break">\
		<a href="#" class="form-group__btn-param">Добавить перерыв</a>\
		</div>\
		</div>\
		<div class="btn-params btn-params_24h">\
		<a href="#" class="form-group__btn-param">Круглосуточно</a>\
		<span class="params24h_remove hidden"></span>\
		</div>\
		</div>\
		</div>';

		$(this).parent().parent().find('.form-groups:last').after(div);
		return false;
	});

	// 24h
	$('body').on('click', '.btn-params_24h > a', function () {
		$(this).parent().parent().find('.form-control_hours_from').val('00:00');
		$(this).parent().parent().find('.form-control_hours_to').val('24:00');
		$(this).parent().find('.params24h_remove').removeClass('hidden');
		return false;
	});

	// delete added fields
	$('body').on('click', '.position-phone_remove', function () {
		$(this).parent().remove();
		return false;
	});

	// delete 24h
	$('body').on('click', '.params24h_remove', function () {
		$(this).parent().parent().find('.form-control_hours_from').val('');
		$(this).parent().parent().find('.form-control_hours_to').val('');
		$(this).parent().find('.params24h_remove').addClass('hidden');
		return false;
	});

	/* site navigation */
	$("body").append('<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px; max-height: 400px; overflow: auto">\
	<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a>\
	<style> #pages { padding: 10px 20px 0 50px; font-size: 18px; } #pages a { text-decoration: none; } #pages li { margin: 5px 0; } </style>\
	<ol id="pages">\
	<li><a href="main-page.html">index</a></li>\
	<li><a href="index.html">index2</a></li>\
	<li><a href="index_company.html">index_company</a></li>\
	<li><a href="index_user.html">index_user</a></li>\
	<li><a href="coins.html">coins</a></li>\
	<li><a href="company-catalog.html">company-catalog</a></li>\
	<li><a href="company-catalog_company.html">company-catalog_company</a></li>\
	<li><a href="company-catalog_user.html">company-catalog_user</a></li>\
	<li><a href="company-page.html">company-page</a></li>\
	<li><a href="company-page-not-active.html">company-page-not-active</a></li>\
	<li><a href="news.html">news</a></li>\
	<li><a href="news_company.html">news_company</a></li>\
	<li><a href="news_user.html">news_user</a></li>\
	<li><a href="notice.html">notice</a></li>\
	<li><a href="pay-page.html">pay-page</a></li>\
	<li><a href="pay-page-vip.html">pay-page-vip</a></li>\
	<li><a href="profile.html">profile</a></li>\
	<li><a href="profile-company.html">profile-company</a></li>\
	<li><a href="requisites.html">requisites</a></li>\
	<li><a href="tariff.html">tariff</a></li>\
	</ol>\
	</div>');

});