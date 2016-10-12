(function() {
    function ResourcesCtrl ($scope, Fixtures) {
        $scope.filterClicked = function(event) {
            console.log(event);
            var $chosenFilter = $(event.target);
            var chosenClass = event.target.classList[1];
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
        
        // Placeholder Content //
        $scope.itemTitle = 'Item Title';
        $scope.itemDescr = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
    }

    angular
        .module('myApp')
        .controller('ResourcesController', ResourcesCtrl)
})()