class Menu extends Phaser.Scene{
    constructor(){
        super({ key: "Menu" });
        this.button = null;

    }
    
    preload(){
        this.load.image("button","PNG/simple/24.png");
        this.load.image("button1","PNG/simple/20.png");
        this.load.image("BG1","assets/bg_start.png");
        this.load.audio('button', 'music/shooting-sound.mp3');
    }
    create(){
        this.add.image(600,250,'BG1').setScale(0.45);//背景載入
        /*
        **設定按鈕位置
        **".setInteractive"： 設定物件可與滑鼠互動。
        **"pointerup"： 當滑鼠按下時。
        **"執行程式名稱"： 按鈕按下後執行的程式。
        */
        this.infbutton=this.add.image(400,350,"button").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.infor();});
        this.stellainfor = this.add.text(339, 342, "黛菈資訊連結", {
            fontSize: "20px Arial",
            fill: "white"
        });
        /*
        this.timeindexText = this.add.text(1050, 220, "https://lit.link/en/nkstella", {
            fontSize: "20px",
            fill: "white"
        });
        */

        this.timeindexText = this.add.text(1050, 470, "作者:杞酷修", {
            fontSize: "12px Arial",
            fill: "white"
        });

        this.button=this.add.image(400,250,"button").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.startgame();});

        this.gamestart = this.add.text(350, 235, "Start", {//設定要顯示的文字座標，此設立在上面按鈕上面
            fontSize: "32px",
            color: "#ffffff"
        });

        
    }
    startgame(){
        this.sound.play('button');
        this.scene.start("Scene");//選擇下一個要顯示的畫面
    }
    infor(){
        //"https://lit.link/en/nkstella"
        window.open('https://lit.link/en/nkstella', '_blank');
    }
    update(){

    }
}