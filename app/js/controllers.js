knowledgeApp.controller("menuCtr", ["$scope","menuService",function ($scope,menuService) {
    menuService.getNodeData().success(function(data,status){
        $scope.allNodes = data;
        $scope.nodes = data[0].nodes;
    });
    $scope.addNode = function(pId){
        var newNode = new Node(-1, pId, '',[]);
        menuService.addNode($scope.allNodes,newNode,pId);
    }
}]);

