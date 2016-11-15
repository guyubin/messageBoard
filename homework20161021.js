// 2016/10/21
//
// ============
// 作业 16
//
//
// 本次作业没有提示的地方需要自行搜索
// 别忘了用 github 管理作业的进度
// ============
//



// 作业 1
/*
请实现这张图片的界面和功能, 写在一个 HTML 文件中
http://vip.cocode.cc/uploads/avatar/54.png

功能如下
1, 统计还剩的字数, 用 length 求, 不管中英文
2, 超过 140 字的时候就不能输入了
3, 点击 提交 按钮会在下方的消息区的顶部增加一条消息

头像和名字可以指定默认的
*/
var log = function() {
    console.log.apply(console, arguments)
}

log(1)

var insertInputString = function(string) {
    var nowDate = new Date()
    var date = nowDate.getMonth() + 1 + '月' + nowDate.getDate() + '日'

    var t = `
    <div class="gu-output-item">
            <div class="gu-output-img">
                <img src="avatar.jpg" alt="" />
            </div>
            <div class="gu-output-text">
                <div class="gu-output-text-string">
                    okhaha：${string}
                </div>
                <div class="gu-output-text-date">
                    ${date}
                </div>
            </div>
            <hr />
    </div>
    `

    var div = $('.gu-output')
    div.append(t)
}

var bindEventToSubmitButton = function() {
    $('.gu-note-button').on('click', function(){
        // 当 textarea 内有输入时，获取并输出，无输入时，点击无效
        var textarea = $('.gu-input-area')
        var value = textarea.prop('value')
        if (value === '') {
            log('it is a blank string')
        } else {
            insertInputString(value)
            textarea.prop('value', '')
            var spanNum = $('.gu-note-num')
            spanNum.prop('innerHTML', String(140))
        }
    })
}

var RemainInputChars = function() {
    var textarea = $('.gu-input-area')
    textarea.prop('maxlength', 140)

    $('.gu-input-area').on('input', function() {
        log('oninput')
        var value = textarea.prop('value')
        var len = value.length
        var rest = 140 - len
        resetSpan(rest)
    })

    // $('.gu-input-area')[0].oninput = function() {
    //     log('oninput')
    //     var textarea = $('.gu-input-area')
    //     var value = textarea.prop('value')
    //     var len = value.length
    //     var rest = 140 - len
    //     resetSpan(rest)
    // }
}

var resetSpan = function(rest) {
    var spanNum = $('.gu-note-num')
    spanNum.prop('innerHTML', String(rest))
}

var __main = function() {
    log('main')
    // 1 bind the event to the submit button
    bindEventToSubmitButton()
    // 2 统计剩余字数功能
    RemainInputChars()
}

__main()
