/**
 * Created by Administrator on 2017/2/24.
 */
knowledgeApp.directive("imgElement", [function () {
    return {
        restrict: "A",
        template: '<img ng-src={{imgSrc}}/>',
        scope: {scrollObj: "=", imgSrc: "@",imgId:"@"},
        require: '^imgScroll',
        link: function (scope, elem, attr, ctrl, transclude) {
            var imgElem = elem[0];
            scope.offsetFromRight = imgElem.offsetLeft + imgElem.offsetWidth;
            var mappingObject = {};
            mappingObject['scope'] = scope;
            mappingObject['elem'] = elem;
            scope.scrollObj.imgElementMapping.push(mappingObject);
            scope.offSetValue = 0;//li相对位置值
            var transOffsetStyle = {
                'transition-delay': '20ms',
                'transition-property': 'left',
                'transition-duration': '700ms',
                'left':DEFALUT_OFFSET_VALUE + 'px'
            };
            ctrl.setImgScrollOffsetStyle(transOffsetStyle);
            scope.doScroll = function (direction) {
                //update the imgElem offset
                if (direction === SCROLL_DIRE_RIGHT) {
                    scope.offSetValue = scope.offSetValue + OFFSET_VALUE;
                } else if (direction === SCROLL_DIRE_LEFT) {
                    scope.offSetValue = scope.offSetValue - OFFSET_VALUE;
                }
                transOffsetStyle['left'] = (scope.offSetValue) + 'px';
                scope.offsetFromRight = imgElem.offsetLeft + imgElem.offsetWidth + OFFSET_VALUE;
                ctrl.setImgScrollOffsetStyle(transOffsetStyle);
                if(scope.offsetFromRight >= ctrl.getImgScrollWidth()) {
                    var outsideElement = scope.scrollObj.imgGroup.filter(function (data,index,arr) {
                        return data.id == scope.imgId;
                    })[0];
                    scope.scrollObj.imgGroup.unshift(outsideElement);
                }
            };
            /*scope.$watch("offsetFromRight", function (newVal, oldVal, scope) {
                if (newVal >= ctrl.getImgScrollWidth()) {
                    console.log(arguments);
                }
            }, true);*/

        }

    }
}]);
