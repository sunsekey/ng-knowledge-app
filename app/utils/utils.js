/**
 * Created by Administrator on 2017/2/1.
 */
//增加class
function addClass(target, clsName) {
    if (isExistCls(target, clsName)) {
        return;
    }
    var clsArr = target.getAttribute("class").split(" ");
    clsArr.push(clsName);
    target.setAttribute("class", clsArr.join(" "));
}
//移除class
function removeClass(target, clsName) {
    if (!isExistCls(target, clsName)) {
        return;
    }
    var clsArr = target.getAttribute("class").split(" ");
    clsArr = clsArr.filter(function (cls) {
        return (cls !== clsName);
    });
    target.setAttribute("class", clsArr.join(" "));
}
//判断是否存在class
function isExistCls(target, clsName) {
    if(target.nodeType != 1) {
        return false;
    }
    if(!target.getAttribute("class")) {
        return false;
    }
    var clsArr = target.getAttribute("class").split(" ");
    var res = false;
    clsArr.forEach(function (cls, index, arr) {
        if (cls === clsName) {
            res = true;
            return false;
        }
    });
    return res;
}

