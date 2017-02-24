/**
 * Created by Administrator on 2017/2/12.
 */
knowledgeApp.directive("navItem", ["$timeout","NodeFactory", function ($timeout,NodeFactory) {
    return {
        restrict: "AE",
        templateUrl: 'tpls/navigation/nav_item.html',
        // transclude:"element",
        link: function (scope, elm, attr, controller,$transclude) {
            //定义状态
            scope.isEdit = false;
            scope.isExpand = true;

            if (!scope.node.name) {
                scope.isNew = true;
                setEditedNodeFocus();
            }
            else {
                scope.isNew = false;
            }

            //定义行为
            scope.saveOrUpdateNode = function ($event) {
                if ($event.target.value) {
                    scope.isNew = false;
                    scope.isEdit = false;
                }
                else {
                    var delIndex = 0;
                    var nodes = scope.$parent.node.nodes;//同级node
                    nodes.forEach(function (node, index, arr) {
                        if (scope.node.id == node.id) {
                            delIndex = index;
                        }
                    });
                    nodes.splice(delIndex, 1);
                }
            };
            scope.editNode = function () {
                scope.isEdit = true;
                $timeout(function () {
                    setEditedNodeFocus();
                });

            };
            /*
             * 典型的通过改变模型来更新UI
             */
            scope.addSubNode = function () {
                scope.isExpand = true;
                var newNode = NodeFactory.getNodeInstance(-1, scope.node.id, "", []);
                scope.node.nodes.push(newNode);
            }
            /*
             * 通过isExpand的值控制是否展开
             */
            scope.expand = function () {
                if (!scope.isExpand) {
                    scope.isExpand = true;
                }
                else if (scope.isExpand == true) {
                    scope.isExpand = false;
                }
            }

            //局部函数
            function setEditedNodeFocus() {
                var navItem = elm[0].childNodes[0];
                for (var i = 0; i < navItem.childNodes.length; i++) {
                    var editedNode = navItem.childNodes[i];
                    if (editedNode.nodeType == 1 && isExistCls(editedNode, "editedNode")) {
                        editedNode.focus();
                    }
                }
            }
        }
    }
}]);
