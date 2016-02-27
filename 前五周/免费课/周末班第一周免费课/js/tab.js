var oTab = document.getElementById("tab");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");
function tabChange(nIndex) {
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = null;
        oDivs[i].className = null;
    }
    oLis[nIndex].className = "select";
    oDivs[nIndex].className = "select";
}

//�Զ�������:
//for (var i = 0; i < oLis.length; i++) {
//    oLis[i].zhuFeng = i;
//    oLis[i].onclick = function () {
//        tabChange(this.zhuFeng);
//    };
//}

//�հ�
//for (var i = 0; i < oLis.length; i++) {
//    oLis[i].onclick = (function (i) {
//        return function () {
//            tabChange(i);
//        };
//    })(i);
//}

for (var i = 0; i < oLis.length; i++) {
    ~function (i) {
        oLis[i].onclick = function () {
            tabChange(i);
        };
    }(i);
}












