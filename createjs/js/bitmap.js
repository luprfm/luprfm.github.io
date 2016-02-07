//先読みするリスト 画像や音などの読み込み
var manifest = [
    {src:'img/tomato.png'},
    {src:'img/pumpkin.png'},
    {src:'img/hourensou.png'}
];




// DOMを読み込んだら

$(function(){

    //ステージ（canvas)の設定をする
        var stage = new createjs.Stage('canvasEl');


        //loadQueue（ロードキュー）ローディングの設定
        var loadQueue = new createjs.LoadQueue();
        loadQueue.loadManifest(manifest); //読み込み開始


        loadQueue.addEventListener('complete',function(){
            console.log('読み込み完了!!!(^^)');
            showVege();
        });



        function showVege(){
            var tomato = new createjs.Bitmap(manifest[0].src);
            tomato.x = 100;
            tomato.y = 100;
            stage.addChild(tomato);

            var pumpkin = new createjs.Bitmap(manifest[1].src);
            pumpkin.x = 250;
            pumpkin.y = 100;
            stage.addChild(pumpkin);

            var hourensou = new createjs.Bitmap(manifest[2].src);
            hourensou.x = 600;
            hourensou.y = 100;
            stage.addChild(hourensou);

            stage.update();

        };



        //フレームレート(だいたい30〜60くらいが目安)
        createjs.Ticker.setFPS(30);
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

        //アニメーションの設定（Ticker 繰り返し回す）
        createjs.Ticker.addEventListener('tick',function(){
            //ステージの更新
            stage.update();

        });





});
