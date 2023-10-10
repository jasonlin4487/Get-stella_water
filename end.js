class End extends Phaser.Scene{
    constructor(){
        super({ key: "End" });
        this.button = null;

    }
    
    preload(){
        this.load.image("button","PNG/simple/24.png");
        this.load.image("BG2","assets/bg_end.png");
        this.load.audio('button', 'music/shooting-sound.mp3');
    }
    create(){
        var myscore =  sessionStorage.getItem('myscore');
        var mytime = sessionStorage.getItem('mytime');
        this.add.image(600,250,'BG2').setScale(0.45);//背景載入
        //this.secore1 = require('./scene.js');
        /*
        **設定按鈕位置
        **".setInteractive"： 設定物件可與滑鼠互動。
        **"pointerup"： 當滑鼠按下時。
        **"執行程式名稱"： 按鈕按下後執行的程式。
        */
        this.button=this.add.image(400,250,"button").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.startgame();});

        this.scoreText = this.add.text(330, 185, "Score:", {
            fontSize: "32px",
            fill: "white"
        });
        this.timeText = this.add.text(330, 145, "Time:", {
            fontSize: "32px",
            fill: "white"
        });
        this.scoreText.setText("Score:" + myscore);//分數
        this.timeText.setText("Time:" + Math.floor(mytime / 10));//時間

        this.gamestart = this.add.text(350, 235, "Close", {//設定要顯示的文字座標，此設立在上面按鈕上面
            fontSize: "32px",
            color: "#ffffff"
        });

        
    }
    startgame(){
        this.sound.play('button');
        this.scene.start("Menu");//選擇下一個要顯示的畫面
    }
    update(){

    }
}