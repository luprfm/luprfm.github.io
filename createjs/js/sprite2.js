//先読みするリスト 画像や音などの読み込み
var manifest = [
    {src:'img/calcium.png'},
    {src:'img/iron.png'},
    {src:'img/vitaminC.png'}
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
            //スプライトシートの設定
            var vcSprite = new createjs.SpriteSheet(vitaminCsprite);
            //スプライトの設定
            var vitaminC = new createjs.Sprite(vcSprite,'stand');
            stage.addChild(vitaminC);
            vitaminC.x = 150;
            vitaminC.y = 480;
            vitaminC.alpha = 0;

            //アニメーション
            createjs.Tween.get(vitaminC).to({alpha:1},500).wait(1000).call(vitaminCWalk).to({x:500},4000).call(vitaminCStand);

            //ビタミンCが歩く
            function vitaminCWalk(){
                vitaminC.gotoAndPlay('walk');
                //.gotoAndPlay スプライトを走らせる命令
            }

            //ビタミンCが止まる
            function vitaminCStand(){
                vitaminC.gotoAndPlay('stand');
            }





            //スプライトシートの設定
            var ironSprite = new createjs.SpriteSheet(ironsprite);
            //スプライトの設定
            var iron = new createjs.Sprite(ironSprite,'stand');
            stage.addChild(iron);
            iron.x = 150;
            iron.y = 480;
            iron.alpha = 0;




            //アニメーション
            createjs.Tween.get(iron).to({alpha:1},500).wait(1000).call(ironWalk).to({x:500},8000).call(ironStand);




            //ironが歩く
            function ironWalk(){
                iron.gotoAndPlay('walk');
                //.gotoAndPlay スプライトを走らせる命令
            }

            //ironが止まる
            function ironStand(){
                iron.gotoAndPlay('stand');
            }




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
