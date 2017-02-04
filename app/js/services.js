/**
 * Created by Administrator on 2017/1/12.
 */
knowledgeApp.factory("menuService", function ($http) {
    var doGetNodeData = function (url) {
        return $http({
            method: "GET",
            url: url
        });
    };
    var doAddNode = function (nodes,newNode,pId) {
        nodes.forEach(nodeRecursion);
        function nodeRecursion(node,index,arr){
            if(node.id === pId) {
                node.nodes.push(newNode);
                return;
            }
            if(node.nodes === []){
                return;
            }
            nodeRecursion(node.nodes, newNode, pId);
        }
    };

    return {
        getNodeData: function () {
            return doGetNodeData("data/nodeData.json");
        },
        addNode:function(nodes,newNode,pId){
            return doAddNode(nodes,newNode,pId);
        }
    }
});
