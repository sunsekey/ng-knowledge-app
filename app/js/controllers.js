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
    $scope.addNode = function(pId){
        var newNode = new Node(-1, pId, '',[]);
        menuService.addNode($scope.allNodes,newNode,pId);
    }
}]);

function Node(id, pId, name, nodes) {
    this.id = id;
    this.pId = pId;
    this.name = name;
    this.nodes = nodes;
};
