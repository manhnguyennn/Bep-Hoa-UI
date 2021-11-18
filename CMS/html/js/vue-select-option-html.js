var VueSelectOptionHtml = {
    option: {},
    data: {
        listColor: [
            { "class": "purple", "title": "Màu tím", "value": 1 }
            , { "class": "blue", "title": "Màu xanh", "value": 2 }
            , { "class": "orange", "title": "Màu cam", "value": 3 }
            , { "class": "red", "title": "Màu đỏ", "value": 4 }
        ],
        listStatus: [
            { "class": "red", "title": "Dừng hoạt động", "value": 0 }
            , { "class": "blue", "title": "Đang hoạt động", "value": 1 }
        ],
    },
    init: function () {
        var me = this;
        me.initDdlColor();
        me.initDdlStatus();
    },
    initDdlColor: function () {
        var me = this;
        console.log(me.data.listColor);

        let htm = '';
        let lstOption = '';
        let chosenOption = me.data.listColor[0];
        $.each(me.data.listColor, function (i, v) {
            lstOption += me.getItemOptionDisc(i, v.class, v.title, v.value);
        });

        let lstWrapt = $(`.vue-select-option-html[data-list="color"]`);
        $.each(lstWrapt, function (i, v) {
            let hiddenid = $(v).data('hiddenid');
            htm = `
                <div class ="selectBox vsoh-wrapt" id="vsoh-color-wrapt-${i}">
                    <label class ="form-label">Màu sắc</label>
                    <div class ="selected vsoh-show">
                        <div class ="icn ${chosenOption.class} vsoh-show-class"></div>
                        <div class ="text vsoh-show-title">${chosenOption.title}</div>
                    </div>
                    <ul class ="list-select-type list-group">
                        ${lstOption}
                    </ul>
                    <input type="hidden" class ="ddlColor" id="ddl-color-class-${i}" value="${chosenOption.class}" />
                    <input type="hidden" class ="ddlColor" id="ddl-color-value-${i}" value="${chosenOption.value}" />
                    <input type="hidden" class ="ddlColor" id="${hiddenid}" value="${chosenOption.value}" />
                </div>
            `;
            $(v).html(htm);
            let w = $('#vsoh-color-wrapt-' + i);
            let showItem = w.find('.vsoh-show');
            // Click to open drop down
            showItem.off('click').click(function () {
                var $this = $(this);
                w.hasClass('active') ? w.removeClass('active') : w.addClass('active');
            });

            // format click
            $.each(w.find('.vsoh-option'), function (index, item) {
                $(item).off('click').click(function () {
                    let val = $(this).data("val");
                    let index = $(this).data("index");
                    let showItemClass = showItem.find('.vsoh-show-class');
                    //console.log('val', val);
                    w.removeClass('active'); // close drop
                    // remove all class color
                    $.each(me.data.listColor, function (i, v) { showItemClass.removeClass(v.class); });
                    // add selected class
                    showItemClass.addClass(me.data.listColor[index].class);
                    // replace selected title
                    showItem.find('.vsoh-show-title').html(me.data.listColor[index].title);
                    // replace selected value
                    $('#ddl-color-class-' + i).val(me.data.listColor[index].class);
                    $('#ddl-color-value-' + i).val(me.data.listColor[index].value);
                    $('#' + hiddenid).val(me.data.listColor[index].value);
                    console.log(`drop color ${i} change to class: ${$('#ddl-color-class-' + i).val()} , value to: ${$('#ddl-color-value-' + i).val()}`);
                });
            });
            //vsoh-wrapt-${i}
        });
    },
    setColor: function (idWrapt, classColor) {
        var me = this;
        let iChosen = -1;
        //console.log('me.data.listColor', me.data.listColor);
        // loop to find index chosen in array
        for (let i = 0; i < me.data.listColor.length; i++) {
            //console.log(`classColor = ${classColor}, me.data.listColor[i].class = ${me.data.listColor[i].class}`);
            if (classColor === me.data.listColor[i].class) iChosen = i;
        }
        //console.log('iChosen', iChosen);
        // trigger click drop
        $('#' + idWrapt).find(`.vsoh-option[data-index="${iChosen}"]`).trigger('click');
    },
    initDdlStatus: function () {
        var me = this;
        console.log(me.data.listStatus);

        let htm = '';
        let lstOption = '';
        let chosenOption = me.data.listStatus[0];
        $.each(me.data.listStatus, function (i, v) {
            lstOption += me.getItemOptionDisc(i, v.class, v.title, v.value);
        });

        let lstWrapt = $(`.vue-select-option-html[data-list="status"]`);
        $.each(lstWrapt, function (i, v) {
            let hiddenid = $(v).data('hiddenid');
            htm = `
                <div class ="selectBox vsoh-wrapt" id="vsoh-status-wrapt-${i}">
                    <label class ="form-label">Màu sắc</label>
                    <div class ="selected vsoh-show">
                        <div class ="icn ${chosenOption.class} vsoh-show-class"></div>
                        <div class ="text vsoh-show-title">${chosenOption.title}</div>
                    </div>
                    <ul class ="list-select-type list-group">
                        ${lstOption}
                    </ul>
                    <input type="hidden" class ="ddlStatus" id="ddl-status-class-${i}" value="${chosenOption.class}" />
                    <input type="hidden" class ="ddlStatus" id="ddl-status-value-${i}" value="${chosenOption.value}" />
                    <input type="hidden" class ="ddlColor" id="${hiddenid}" value="${chosenOption.value}" />
                </div>
            `;
            $(v).html(htm);
            let w = $('#vsoh-status-wrapt-' + i);
            let showItem = w.find('.vsoh-show');
            // Click to open drop down
            showItem.off('click').click(function () {
                var $this = $(this);
                w.hasClass('active') ? w.removeClass('active') : w.addClass('active');
            });

            // format click
            $.each(w.find('.vsoh-option'), function (index, item) {
                $(item).off('click').click(function () {
                    let val = $(this).data("val");
                    let index = $(this).data("index");
                    let showItemClass = showItem.find('.vsoh-show-class');
                    //console.log('val', val);
                    w.removeClass('active'); // close drop
                    // remove all class color
                    $.each(me.data.listStatus, function (i, v) { showItemClass.removeClass(v.class); });
                    // add selected class
                    showItemClass.addClass(me.data.listStatus[index].class);
                    // replace selected title
                    showItem.find('.vsoh-show-title').html(me.data.listStatus[index].title);
                    // replace selected value
                    $('#ddl-status-class-' + i).val(me.data.listStatus[index].class);
                    $('#ddl-status-value-' + i).val(me.data.listStatus[index].value);
                    $('#' + hiddenid).val(me.data.listStatus[index].value);
                    console.log(`drop color ${i} change to class: ${$('#ddl-status-class-' + i).val()} , value to: ${$('#ddl-status-value-' + i).val()}`);
                });
            });
            //vsoh-wrapt-${i}
        });
    },
    setStatus: function (idWrapt, selectedValue) {
        var me = this;
        let iChosen = -1;
        //console.log('me.data.listColor', me.data.listColor);
        // loop to find index chosen in array
        for (let i = 0; i < me.data.listStatus.length; i++) {
            //console.log(`classColor = ${classColor}, me.data.listColor[i].class = ${me.data.listColor[i].class}`);
            if (selectedValue === me.data.listStatus[i].value) iChosen = i;
        }
        //console.log('iChosen', iChosen);
        // trigger click drop
        $('#' + idWrapt).find(`.vsoh-option[data-index="${iChosen}"]`).trigger('click');
    },
    getItemOptionDisc: function (index, cls, tit, val) {
        var me = this;
        let htm = '';
        htm = `
            <li class ="list-group-item vsoh-option" data-val="${val}" data-index="${index}">
                <a href="javascript:;" class ="select-type">
                    <span class ="icn ${cls}"></span>
                    <span class ="txt">${tit}</span>
                </a>
            </li>
            `;
        return htm;
    },
}
