angular
  .module('app', ['chart.js'])
  .controller('PlotrController', function ($scope) {
    var ctrl = this;
    ctrl.count = 0;
    ctrl.dataPointsX = [];
    ctrl.dataPointsY = [];
    ctrl.labels = [];

    ctrl.addData = function () {
      xHolder = ctrl.dataX.split(",");
      yHolder = ctrl.dataY.split(",");
      for (var i = 0; i < xHolder.length; i++) {
        ctrl.dataPointsX.push(parseInt(xHolder[i]));
      }
      for (var i = 0; i < yHolder.length; i++) {
        ctrl.dataPointsY.push(parseInt(yHolder[i]));
      }
      ctrl.count += 1;
      ctrl.labels.push(["Set " + ctrl.count.toString()]);
        ctrl.dataX = '';
        ctrl.dataY = '';
    }
    $scope.labels = ctrl.dataPointsX;
    $scope.series = ctrl.labels
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
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
  });