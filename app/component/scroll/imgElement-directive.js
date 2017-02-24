/**
 * Created by Administrator on 2017/2/24.
 */
knowledgeApp.directive("imgElement", [function () {
    return {
        restrict:"A",
        template:'<img ng-src={{imgSrc}}/>',
        scope:{imgElementMapping:"=",imgSrc:"@"},
        require:'^imgScroll',
        link:function(scope,elem,attr,ctrl,transclude){
            var imgElem = elem[0];
            scope.offsetToRight = imgElem.offsetLeft + imgElem.offsetWidth;
            console.log(ctrl.getImgScrollWidth());
            var mappingObject = {};
            mappingObject['scope'] = scope;
            mappingObject['elem'] = elem;
            scope.imgElementMapping.push(mappingObject);

            scope.$watch("offsetToRight", function (newVal,oldVal,scope) {
                if(newVal >= ctrl.getImgScrollWidth()) {

                }
            }, true);
            // console.log(ele[0].offsetWidth + ele[0].offsetLeft);
            // ele[0].find(ele[0].parent(),"")

        }

    }
}]);
