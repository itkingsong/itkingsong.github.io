function insertAtCursor(e, t) {
    if (document.selection)
        e.focus(),
        sel = document.selection.createRange(),
        sel.text = t,
        sel.select();
    else if (e.selectionStart || "0" == e.selectionStart) {
        var o = e.selectionStart
          , n = e.selectionEnd
          , i = e.scrollTop;
        e.value = e.value.substring(0, o) + t + e.value.substring(n, e.value.length),
        i > 0 && (e.scrollTop = i),
        e.focus(),
        e.selectionStart = o + t.length,
        e.selectionEnd = o + t.length
    } else
        e.value += t,
        e.focus()
}
console.log("Codes uses GPL Licence");
let rmf = {};
function popupMenu() {
    window.oncontextmenu = function(e) {
        if (e.ctrlKey)
            return !0;
        console.log(e.keyCode),
        $(".rightMenu-group.hide").hide();
        var t = window.document.body;
        t = e.target;
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(window.getSelection().toString()) && $("#menu-too").show();
        document.querySelector("#nav-music").contains(t) ? ($("#common").hide(),
        anzhiyu_musicPlaying ? ($("#menu-music").show(),
        $("#menu-music-pause").show(),
        $("#menu-music-play").hide()) : ($("#menu-music").show(),
        $("#menu-music-pause").hide(),
        $("#menu-music-play").show())) : (document.getSelection().toString() && $("#menu-text").show(),
        (document.getElementById("post") || document.getElementById("page")) && $("#menu-post").show()),
        "A" == t.tagName && ($("#menu-to").show(),
        rmf.open = function() {
            location.href = t.href
        }
        ,
        rmf.openWithNewTab = function() {
            window.open(t.href)
        }
        ,
        rmf.copyLink = function() {
            let e = t.href
              , o = document.createElement("textarea");
            o.value = e,
            document.body.appendChild(o),
            o.select(),
            document.execCommand("Copy"),
            document.body.removeChild(o)
        }
        ),
        "IMG" == t.tagName ? ($("#menu-img").show(),
        rmf.openWithNewTab = function() {
            window.open(t.src)
        }
        ,
        rmf.click = function() {
            t.click()
        }
        ,
        rmf.copyLink = function() {
            let e = t.src
              , o = document.createElement("textarea");
            o.value = e,
            document.body.appendChild(o),
            o.select(),
            document.execCommand("Copy"),
            document.body.removeChild(o)
        }
        ) : "TEXTAREA" != t.tagName && "INPUT" != t.tagName || ($("#menu-paste").show(),
        rmf.paste = function() {
            navigator.permissions.query({
                name: "clipboard-read"
            }).then((e => {
                "granted" == e.state || "prompt" == e.state ? navigator.clipboard.readText().then((e => {
                    console.log(e),
                    insertAtCursor(t, e)
                }
                )) : alert("�������ȡ�����壡")
            }
            ))
        }
        );
        let o = e.clientX + 10
          , n = e.clientY
          , i = $("#rightMenu").width()
          , c = $("#rightMenu").height();
        return o + i > window.innerWidth && (o -= i + 10),
        n + c > window.innerHeight && (n -= n + c - window.innerHeight),
        rmf.showRightMenu(!0, n, o),
        !1
    }
    ,
    window.addEventListener("click", (function() {
        $("#common").show(),
        rmf.showRightMenu(!1)
    }
    ))
}
rmf.showRightMenu = function(e, t=0, o=0) {
    let n = $("#rightMenu");
    n.css("top", t + "px").css("left", o + "px"),
    e ? n.show() : n.hide()
}
,
rmf.switchDarkMode = function() {
    "light" === ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(),
    saveToLocal.set("theme", "dark", 2),
    void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(),
    saveToLocal.set("theme", "light", 2),
    void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),
    "function" == typeof utterancesTheme && utterancesTheme(),
    "object" == typeof FB && window.loadFBComment(),
    window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(( () => window.disqusReset()), 200)
}
,
rmf.copyWordsLink = function() {
    let e = window.location.href
      , t = document.createElement("textarea");
    t.value = e,
    document.body.appendChild(t),
    t.select(),
    document.execCommand("Copy"),
    document.body.removeChild(t),
    Swal.fire("���Ƴɹ���")
}
,
rmf.switchReadMode = function() {
    const e = document.documentElement.classList;
    e.contains("hide-aside") ? saveToLocal.set("aside-status", "show", 2) : saveToLocal.set("aside-status", "hide", 2),
    e.toggle("hide-aside")
}
,
rmf.copySelect = function() {
    document.execCommand("Copy", !1, null)
}
,
rmf.scrollToTop = function() {
    btf.scrollToDest(0, 500)
}
,
rmf.translate = function() {
    document.getElementById("translateLink").click()
}
,
// 全屏
rmf.fullScreen = function () {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
}
,
document.onkeydown = function(e) {
    17 != (e = e || window.event).keyCode || console.log("��֪����̫����")
}
,
navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) || popupMenu();
const box = document.documentElement;
function addLongtabListener(e, t) {
    let o = 0;
    e.ontouchstart = () => {
        o = 0,
        o = setTimeout(( () => {
            t(),
            o = 0
        }
        ), 380)
    }
    ,
    e.ontouchmove = () => {
        clearTimeout(o),
        o = 0
    }
    ,
    e.ontouchend = () => {
        o && clearTimeout(o)
    }
}
addLongtabListener(box, popupMenu);
