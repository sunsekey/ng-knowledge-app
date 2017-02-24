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
                getImgScrollWidth:function(){
                    return angular.element($element[0].firstChild)[0].clientWidth;

                }
            }
        },
        link: function (scope, elm, attr, ctrl) {
            scope.DIRECTION_LEFT = SCROLL_DIRE_LEFT;
            scope.DIRECTION_RIGHT = SCROLL_DIRE_RIGHT;
            scope.offSetValue = 0;
            scope.transOffsetStyle = {
                'transition-delay': '50ms',
                'transition-property': 'left',
                'transition-duration': '800ms',
                'left':'0%'
            };

            scope.doScroll = function (direction) {
                //update the imgElem offset
                if (direction === SCROLL_DIRE_RIGHT) {
                    scope.offSetValue = scope.offSetValue + 20;
                } else if (direction === SCROLL_DIRE_LEFT) {
                    scope.offSetValue = scope.offSetValue - 20;
                }
                scope.transOffsetStyle['left'] = (scope.offSetValue) + '%';
                $timeout(function () {
                    var imgElementMapping = scope.scrollObj.imgElementMapping;
                    imgElementMapping.forEach(function (map,index,arr) {
                        var imgElem = map.elem[0];
                        map.scope.offsetToRight = imgElem.offsetLeft + imgElem.offsetWidth;
                    });
                },1000);

            };

        }
    }

}]);
