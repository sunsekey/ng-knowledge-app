var knowledgeApp = angular.module('knowledgeApp', ['ui.router']);

knowledgeApp.config(function ($stateProvider, $urlRouterProvider) {

});

knowledgeApp.directive("menuItem", function () {
    return {
        restrict: "AE",
        templateUrl: 'tree_item.html',
        link: function (scope, elm, attr, controller) {
            scope.isEdit = false;
            scope.isExpand = false;
            if (!scope.node.name) {
                scope.isNew = true;
                for(var i = 0; i < elm[0].childNodes.length; i++) {
                    var editedNode = elm[0].childNodes[i];
                    if(editedNode.nodeType == 1 && isExistCls(editedNode,"editedNode")) {
                        editedNode.focus();
                    }
                }
            }
            else {
                scope.isNew = false;
            }
            scope.saveOrUpdateNode = function ($event) {
                if($event.target.value) {
                    scope.isNew = false;
                    scope.isEdit = false;
                }
                else{
                    var delIndex = 0;
                    var nodes = scope.$parent.node.nodes;//同级node
                    nodes.forEach(function (node,index,arr) {
                        if(scope.node.id == node.id) {
                            delIndex = index;
                        }
                    });
                    nodes.splice(delIndex,1);
                }
            };
            scope.editNode = function () {
                scope.isEdit = true;
                for(var i = 0; i < elm[0].childNodes.length; i++) {
                    var editedNode = elm[0].childNodes[i];
                    if(editedNode.nodeType == 1 && isExistCls(editedNode,"editedNode")) {
                        editedNode.focus();
                    }
                }
            };
            scope.addSubNode = function () {
                scope.isExpand = true;
                var newNode = new Node(-1, scope.node.id, '',[]);
                scope.node.nodes.push(newNode);
            }
            scope.nodeAction = function(){
                if(!scope.isExpand) {
                    scope.isExpand = true;
                }
                else if(scope.isExpand == true) {
                    scope.isExpand = false;
                }
            }

        }
    }
});
function Node(id, pId, name, nodes) {
    this.id = id;
    this.pId = pId;
    this.name = name;
    this.nodes = nodes;
};







