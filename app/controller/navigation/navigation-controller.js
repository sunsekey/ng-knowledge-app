/**
 * Created by Administrator on 2017/2/12.
 */
knowledgeApp.controller("NavCtrl", ["RemoteDataService","NodeFactory",function (RemoteDataService,NodeFactory) {
    var self = this;
    RemoteDataService.getRemoteData("data/nodeData.json").then(function (response) {
        self.nodes = response.data[0].nodes;
    },function(errResponse){
        self.nodes = [];
        console.log(errResponse);
    });
    self.addTopNode = function(pId){
        var newNode = NodeFactory.getNodeInstance(-1, pId, "", []);
        self.nodes.push(newNode);
    }
}]);
