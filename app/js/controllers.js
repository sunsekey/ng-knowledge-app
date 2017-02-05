knowledgeApp.controller("menuCtr", ["$scope","menuService",function ($scope,menuService) {
    menuService.getNodeData().success(function(data,status){
        $scope.allNodes = data;
        $scope.nodes = data[0].nodes;
    });
    $scope.nodeAction = function ($event) {
        var liArr = $event.target.parentNode.getElementsByTagName("ul")[0].childNodes;
        var liCount = 0;
        liArr.forEach(function (li, index, arr) {
                if (li.nodeType == 1) {
                    liCount++;
                    if (!isExistCls(li, "show")) {
                        addClass(li, "show");
                        removeClass(li, "hide");
                    }
                    else {
                        addClass(li, "hide");
                        removeClass(li, "show");
                    }
                }
            }
        );
    }
    $scope.addNode = function($event,pId){
        var newNode = {
            "id":-1,
            "name":"",
            "nodes":[]
        };
        menuService.addNode($scope.allNodes,newNode,pId);
    }
}]);

function addClass(target, clsName) {
    if (isExistCls(target, clsName)) {
        return;
    }
    var clsArr = target.getAttribute("class").split(" ");
    clsArr.push(clsName);
    target.setAttribute("class", clsArr.join(" "));
}
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
function isExistCls(target, clsName) {
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