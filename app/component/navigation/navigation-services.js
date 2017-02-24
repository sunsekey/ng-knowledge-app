/**
 * Created by Administrator on 2017/1/12.
 */
knowledgeApp.factory("NodeFactory", function () {
    return {
        getNodeInstance: function (id, pId, name, nodes) {
            return {
                id: id,
                pId: pId,
                name: name,
                nodes: nodes
            }
        }
    };
});
