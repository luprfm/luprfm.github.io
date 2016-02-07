$(function(){
    //GPS
    navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;

        console.log(lat,lon);

        // 定数(値の上書きができなくなる)
        const apikey = 'dd09803f2b0f1397cf528361aae11377';

        // openweatermapのお天気情報のURL
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' + apikey;



        $.ajax({
            url:url,
            dataType:'json'
        }).done(function(data){

            showWeather(data);

        }).fail(function(){
            console.log('ajax error!!');
        });

        // htmlに表示する関数
        function showWeather(data){
            console.log(data);

            // 地域名
            var areaName = data.name;
            $('#areaName').text(areaName);

            // 気温
            var areaTemp = data.main.temp; //華氏がとれる
            areaTemp = areaTemp - 273.15
            $('#areaTemp').text(areaTemp + '度');

        }

    });
});
