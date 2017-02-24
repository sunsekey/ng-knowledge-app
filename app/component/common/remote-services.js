/**
 * Created by Administrator on 2017/1/12.
 */
knowledgeApp.factory("RemoteDataService", ["$http", function ($http) {
    return {
        getRemoteData: function (url) {
            return $http({
                method: "GET",
                url: url
            });
        }
    }
}]);
