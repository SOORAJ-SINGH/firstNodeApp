app.service('searchService', function ($http, $q) {

    this.getdata = function (data1) {
        var deferred = $q.defer();
       // var param = { 'q': 'python', 'title': 'Web developer','paging':"1;20" };
        $http.post('/api/search1', data1)
    //    $http({
    //        url: '/api/search1',
    //        method: "POST",
    //        data: data1
    //        headers: {'Content-Type': 'application/json'}})
    //})
            .success(function (response) {
             deferred.resolve(response);
         }).
        error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    }


});