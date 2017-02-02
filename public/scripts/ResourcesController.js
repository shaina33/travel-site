(function() {
    function ResourcesCtrl ($scope, Fixtures) {
        $scope.filterClicked = function(event) {
            console.log(event);
            var $chosenFilter = $(event.currentTarget);
            var chosenClass = event.currentTarget.classList[1];
            // change active filter
            $('.filter').removeClass('active');
            $chosenFilter.addClass('active');
            // filter items
            if (chosenClass == 'all') {
                $('#dataHolder').children('div.item').show();
            } else {
                $('#dataHolder').children('div:not(.'+chosenClass+')').hide();
                $('#dataHolder').children('div.'+chosenClass).show();
            }
        }
        
        $scope.resources = Fixtures.resources;
        
    }

    angular
        .module('myApp')
        .controller('ResourcesController', ResourcesCtrl)
})()