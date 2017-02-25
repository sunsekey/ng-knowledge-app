/**
 * Created by Administrator on 2017/2/1.
 */
knowledgeApp.directive("imgScroll", ["$timeout", function ($timeout) {
    return {
        restrict: "E",
        templateUrl: "tpls/scroll/img_scroll.html",
        scope: {scrollObj: "="},
        controller:function($scope,$element){
            return {
                getImgScrollWidth: function () {
                    return angular.element($element[0].firstChild)[0].clientWidth;

                },
                setImgScrollOffsetStyle: function (transOffsetStyle) {
                    $scope.transOffsetStyle = transOffsetStyle;
                }
            };
        },
        link: function (scope, elm, attr, ctrl) {
            scope.DIRECTION_LEFT = SCROLL_DIRE_LEFT;
            scope.DIRECTION_RIGHT = SCROLL_DIRE_RIGHT;

            scope.activeScroll = function(direction){
                var imgElementMapping = scope.scrollObj.imgElementMapping;
                imgElementMapping.forEach(function (data,index,arr) {
                    var scope = data['scope'];
                    scope.doScroll(direction);
                });
            }
        }
    }

}]);
