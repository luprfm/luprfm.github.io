// DOMを読み込んだら

$(function(){

    //ステージ（canvas)の設定をする
        var stage = new createjs.Stage('canvasEl');


        //円をつくる（中心のx座標,中心のy座標,直径)
        var ball = new createjs.Shape();
        // ボールのグラフィックの色、円を描くよ、（x座標,y座標,直径）
        ball.graphics.beginFill('#0000FF').drawCircle(0,0,40);
        ball.x = 100;
        ball.y = 100;
        ball.alpha = 0; //透明にする、最初は非表示の状態
        // ステージに配置する
        stage.addChild(ball);


        //四角形をつくる drawRect(x座標,y座標,横幅,縦幅)
        var box = new createjs.Shape();
        box.graphics.beginFill('#FF0000').drawRect(0,0,50,50);
        box.x = 100;
        box.y = 200;
        stage.addChild(box);


        //boxをクリックしたら。。。
        box.addEventListener('click',function(){
            createjs.Tween.get(ball).to({alpha:1},1000).wait(1000).to({x:500},1000,createjs.Ease.bounceOut);


        });


        // //アニメーションさせる get(何を) to({どこどこまで},何秒で)
        // createjs.Tween.get(ball).to({x:500},1000);


        //フレームレート(だいたい30〜60くらいが目安)
        createjs.Ticker.setFPS(30);
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

        //アニメーションの設定（Ticker 繰り返し回す）
        createjs.Ticker.addEventListener('tick',function(){
            //ステージの更新
            stage.update();

        });





});
