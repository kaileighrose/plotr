angular
  .module('app', ['chart.js'])
  .controller('PlotrController', function ($scope) {
    var ctrl = this;
    ctrl.count = 0;
    ctrl.dataPointsX = [];
    ctrl.dataPointsY = [];
    ctrl.labels = [];

    ctrl.addData = function () {
      ctrl.dataPointsX.push(ctrl.dataX);
      ctrl.dataPointsY.push(ctrl.dataY);
      ctrl.count += 1;
      ctrl.labels.push(ctrl.count);
        ctrl.dataX = '';
        ctrl.dataY = '';
    }
     $scope.labels = ctrl.dataPointsX;
    $scope.series = ['Series A'];
    $scope.data = ctrl.dataPointsY;
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          }
        ]
      }
    };
  });