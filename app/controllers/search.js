


app.controller('searchController', ['$scope', 'searchService', function ($scope, searchService) {
    $scope.searchDiv = true;
    $scope.searchResultDiv = false;
    $scope.resultMessage = false;
    var data = {};

    var paginationOptions = {
        pageNumber: 1,
        pageSize: 100,
        sort: null,
        filters: "null"
    };
   
    $scope.columns = [
       {
           field: "title", displayName: "title", filter: { term: '' },width:160, cellTooltip: function (row) { return row.entity.title; },
       cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "url", displayName: "url", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.url; },
        cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP"><a href="{{COL_FIELD CUSTOM_FILTERS}}">{{COL_FIELD CUSTOM_FILTERS}}</a></div>'
       },
       {
           field: "category2", displayName: "category2", filter: { term: '' }, width: 140, cellTooltip: function (row) { return row.entity.category2; },
         cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "subcategory2", displayName: "subcategory2", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.subcategory2; },
          cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "skills", displayName: "skills", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.skills; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP" ><table><tr ng-repeat="d in row.entity.skills"><td>{{d}}</td></tr></table></div>'
       },
       {
           field: "job_type", displayName: "job_type", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.job_type; },
            cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "budget", displayName: "budget", filter: { term: '' }, width: 100, cellTooltip: function (row) { return row.entity.budget; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "duration", displayName: "duration", filter: { term: '' }, width: 100, cellTooltip: function (row) { return row.entity.duration; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "workload", displayName: "workload", filter: { term: '' }, width: 100, cellTooltip: function (row) { return row.entity.workload; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "job_status", displayName: "job_status", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.job_status; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "date_created", displayName: "date_created", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.date_created; },
          cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
        },
                   
        {
            field: "client", displayName: "client", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.client; },
          cellTemplate: '<div class="cell-data" style=" white-space: normal  " title="TOOLTIP"><div ng-repeat="(key,value) in row.entity.client">{{key}}:{{value}}</div></div>'
        },
        {
            field: "snippet", displayName: "snippet", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.snippet; },
          cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
        },
    ];
    $scope.LongTermColumns = [
          {
              field: "title", displayName: "title", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.title; },
              cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
          },
          {
              field: "url", displayName: "url", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.url; },
                cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP"><a href="{{COL_FIELD CUSTOM_FILTERS}}">{{COL_FIELD CUSTOM_FILTERS}}</a></div>'
          },
          {
              field: "category2", displayName: "category2", filter: { term: '' }, width: 140, cellTooltip: function (row) { return row.entity.category2; },
                 cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
          },
         {
             field: "skills", displayName: "skills", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.skills; },
                   cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP" ><table><tr ng-repeat="d in row.entity.skills"><td>{{d}}</td></tr></table></div>'
         },
         {
             field: "date_created", displayName: "date_created", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.date_created; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
        },

        {
            field: "client", displayName: "client", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.client; },
            cellTemplate: '<div class="cell-data" style=" white-space: normal  " title="TOOLTIP"><div ng-repeat="(key,value) in row.entity.client">{{key}}:{{value}}</div></div>'
        },
        {
            field: "snippet", displayName: "snippet", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.snippet; },
            cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
        },
    ];
    $scope.fixedPriceColumns = [
        {
            field: "title", displayName: "title", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.title; },
            cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
        },
        {
            field: "url", displayName: "url", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.url; },
            cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP"><a href="{{COL_FIELD CUSTOM_FILTERS}}">{{COL_FIELD CUSTOM_FILTERS}}</a></div>'
        },
        {
            field: "category2", displayName: "category2", filter: { term: '' }, width: 140, cellTooltip: function (row) { return row.entity.category2; },
            cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
        },
       {
           field: "skills", displayName: "skills", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.skills; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP" ><table><tr ng-repeat="d in row.entity.skills"><td>{{d}}</td></tr></table></div>'
       },
        {
            field: "budget", displayName: "budget", filter: { term: '' }, width: 100, cellTooltip: function (row) { return row.entity.budget; },
            cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
        },
       {
           field: "duration", displayName: "duration", filter: { term: '' }, width: 100, cellTooltip: function (row) { return row.entity.duration; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "workload", displayName: "workload", filter: { term: '' }, width: 100, cellTooltip: function (row) { return row.entity.workload; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },
       {
           field: "date_created", displayName: "date_created", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.date_created; },
           cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
       },

      {
          field: "client", displayName: "client", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.client; },
          cellTemplate: '<div class="cell-data" style=" white-space: normal  " title="TOOLTIP"><div ng-repeat="(key,value) in row.entity.client">{{key}}:{{value}}</div></div>'
      },
      {
          field: "snippet", displayName: "snippet", filter: { term: '' }, width: 160, cellTooltip: function (row) { return row.entity.snippet; },
          cellTemplate: '<div class="cell-data" style=" white-space: normal" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
      },
    ];
    
    $scope.gridOptions = {
        data: "mappings",
        paginationPageSizes: [100, 50, 25],
     //   columnDefs: $scope.columns,
        showFooter: true,
      //  totalServerItems: 'totalServerItems',
        //paginationPageSize: 20,

        useExternalPagination: true,
        rowHeight: 120,
        //columnWidth:400,
        showFilter: true,
        enableVerticalScrollbar: 0,
      //  enableHorizontalScrollbar:0
       // enableColumnResizing:true

    };

    $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;

        $scope.gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
            paginationOptions.pageNumber = newPage;
            paginationOptions.pageSize = pageSize;
            $scope.getDetails();
        });
    };
    
    //var hourly = document.getElementById("hourlyFilter");
   // var fixed = document.getElementById("FixedFilter");
   // var allJobsId = document.getElementById("allJobsFilter");
    

    //fixed.onclick = function () {

    //    // $scope.searchResultDiv = false;
    //    var jobsfilterArray = [];
    //    for (var i = 0; i < $scope.allJobs.length; i++) {
    //        if ($scope.allJobs[i].job_type == "Fixed")
    //            jobsfilterArray.push($scope.allJobs[i]);
    //    }

    //    $scope.gridApi.core.refresh();
    //    $scope.mappings = jobsfilterArray;
    //    $scope.gridOptions.totalItems = $scope.mappings.length;
    //    // $scope.searchResultDiv = true;
    //}
    //allJobsId.onclick = function () {

    //    $scope.gridApi.core.refresh();
    //    $scope.mappings = $scope.allJobs;
    //    $scope.gridOptions.totalItems = $scope.totalCount;
    //    // $scope.searchResultDiv = true;
    //}
    
  
    $scope.phpLongTermFilter = function () {
        data["skills"] = "php";
        data["category2"] = "Web & Mobile Development";
        data["duration"] = "ongoing";
        data["workload"] = "full_time";
        data["job_status"] = "open";
        data["job_type"] = "hourly";
        data["days_posted"] = 5;
        data["paging"] = (paginationOptions.pageNumber - 1) + ";" + paginationOptions.pageSize;
        $scope.gridOptions.columnDefs = $scope.LongTermColumns;
        getData(data);
          
    }
  
  $scope.dotNetLongTermFilter = function () {
        data["skills"] = ".net-framework";
        data["category2"] = "Web & Mobile Development";
        data["duration"] = "ongoing";
        data["workload"] = "full_time";
        data["job_status"] = "open";
        data["job_type"] = "hourly";
        data["days_posted"] = 5;
        data["paging"] = (paginationOptions.pageNumber - 1) + ";" + paginationOptions.pageSize;
        $scope.gridOptions.columnDefs = $scope.LongTermColumns;
        getData(data);

    }
  
  $scope.phpFixedPriceFilter = function () {

        data["skills"] = "php";
        data["category2"] = "Web & Mobile Development";
        data["job_status"] = "open";
        data["job_type"] = "fixed";
        data["budget"] = "5000-";
        data["days_posted"] = 5;
        data["paging"] = (paginationOptions.pageNumber - 1) + ";" + paginationOptions.pageSize;
        $scope.gridOptions.columnDefs = $scope.fixedPriceColumns;
        getData(data);

    }
 
  $scope.dotnetFixedPriceFilter = function () {

        data["skills"] = ".net-framework";
        data["category2"] = "Web & Mobile Development";
        data["job_status"] = "open";
        data["job_type"] = "fixed";
        data["budget"] = "5000-";
        data["days_posted"] = 5;
        data["paging"] = (paginationOptions.pageNumber - 1) + ";" + paginationOptions.pageSize;
        $scope.gridOptions.columnDefs = $scope.fixedPriceColumns;
        getData(data);

  }
  $scope.androidLongTermFilter = function () {

      data["skills"] = "android";
      data["category2"] = "Web & Mobile Development";
      data["duration"] = "ongoing";
      data["workload"] = "full_time";
      data["job_status"] = "open";
      data["job_type"] = "hourly";
      data["days_posted"] = 5;
      data["paging"] = (paginationOptions.pageNumber - 1) + ";" + paginationOptions.pageSize;
      $scope.gridOptions.columnDefs = $scope.LongTermColumns;
      getData(data);

  }
  $scope.androidFixedPrice = function () {

      data["skills"] = "android";
      data["category2"] = "Web & Mobile Development";
      data["job_status"] = "open";
      data["job_type"] = "fixed";
      data["budget"] = "5000-";
      data["days_posted"] = 5;
      data["paging"] = (paginationOptions.pageNumber - 1) + ";" + paginationOptions.pageSize;
      $scope.gridOptions.columnDefs = $scope.fixedPriceColumns;
      getData(data);

  }
  $scope.getDetails = function () {
       
      if ($scope.query != undefined) //&& $scope.title != undefined && $scope.skill != undefined)
           data["q"]=$scope.query;
           
        if ($scope.title != undefined)
            data["title"] = $scope.title;
          
       if ( $scope.skill != undefined)
          data["skills"] = $scope.skill;
       
       data["paging"] = (paginationOptions.pageNumber - 1) + ";" + paginationOptions.pageSize;
       $scope.gridOptions.columnDefs = $scope.columns
       getData(data);
      
  }//end of getDetails() function




  var getData = function (values) {
      searchService.getdata(values).then(function (response) {
          $scope.mappings = '';
          $scope.searchResultDiv = false;
          $scope.resultMessage = false;

          console.log(response);
          var obj = JSON.parse(response);

          console.log(obj);
          if (obj.jobs) {
              if (obj.jobs.length > 0) {
                  $scope.allJobs = obj.jobs;
                  //$scope.extra = 10;
                  $scope.gridStyle = 'height:' + $scope.allJobs.length * $scope.gridOptions.rowHeight +  'px;' //+ 'height:' + $scope.gridOptions.columnDefs.length * 200 + 'px';;
                  $scope.mappings = obj.jobs;
                  $scope.searchResultDiv = true;
                  $scope.resultMessage = false;
              }
              else
                  $scope.resultMessage = true;
          }

          if (obj.paging) {
              $scope.totalCount = obj.paging.total;
              $scope.gridOptions.totalItems = obj.paging.total;
          }


      });  // end of searchService


  }

 
       


}]);