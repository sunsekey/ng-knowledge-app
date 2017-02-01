var knowledgeApp = angular.module('knowledgeApp', ['ui.router']);

knowledgeApp.config(function ($stateProvider, $urlRouterProvider) {

});

knowledgeApp.directive("menuItem", function () {
    return {
        restrict: "AE",
        templateUrl: 'tree_item.html',
        link: function (scope, elm, attr, controller) {
            scope.isEdit = false;
            if (!scope.node.name) {
                scope.isNew = true;
                for(var i = 0; i < elm[0].childNodes.length; i++) {
                    var editedNode = elm[0].childNodes[i];
                    if(editedNode.nodeType == 1 && isExistCls(editedNode,"editedNode")) {
                        console.log(editedNode);
                        editedNode.focus();
                    }
                }
            }
            else {
                scope.isNew = false;
            }
            scope.saveOrUpdateNode = function () {
                scope.isNew = false;
                scope.isEdit = false;
            };
            scope.editNode = function () {
                scope.isEdit = true;
                for(var i = 0; i < elm[0].childNodes.length; i++) {
                    var editedNode = elm[0].childNodes[i];
                    if(editedNode.nodeType == 1 && isExistCls(editedNode,"editedNode")) {
                        console.log(editedNode);
                        editedNode.focus();
                    }
                }
            }

        }
    }
});








