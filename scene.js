class Scene extends Phaser.Scene
{
    constructor(){
        super({ key: "Scene" });
        this.player=null;
        this.platforms=null;
        this.coin=null;
        this.waterG=null;
        this.sea_urchinG=null;
        this.particles=null;
        this.emitter=null;
        this.palyerV=null;//player座標
        this.fevertime=null;
        this.fevertimeindex=null;
        this.fevertimecount=null;
        this.fevertimepic=null;
        this.fevertimepic1=null;
        this.fevertimetext=null;
        this.clorG=null;
    }
    
    preload(){        
        this.load.audio('pick', 'music/water_droplet_1.mp3');
        this.load.audio('lose', 'music/bubble-pop.mp3');
        this.load.audio('run', 'music/run.mp3');
        
        this.load.image("platform",'assets/3t2.png');
        this.load.image("water",'assets/water_droplets2.png');
        this.load.image("sea_urchin","assets/sea_urchin3.png");
        this.load.image("lose",'assets/lose.png');
        this.load.image("enemy","assets/c.png");
        this.load.image("coin","assets/coin.png");
        this.load.image("BG","assets/background.jpg");
        this.load.image("feverpic","assets/background1.png");
        this.load.image("feverword","assets/Favertime.png");

        //this.load.spritesheet('player','assets/rabbit3 - doux.png',{frameWidth:72 ,frameHeight:72 });//圖片切割
        this.load.spritesheet('player','assets/player.png',{frameWidth:40 ,frameHeight:70 });//圖片切割
    }

    create()
    {
        /*常數宣告 */
        const watersize = 2;//水的尺寸
        const sea_urchinsize = 1.5;//海膽的尺寸
        const fevertime_min = 10;
        const fevertime_max = 50;

        this.fevertime = 0;
        this.fevertimeindex = 0;
        this.fevertimecount = Phaser.Math.Between(fevertime_min, fevertime_max);
        /*創建文字*/
        this.gameoverindex = 0;//結束畫面停留時間
        this.timeindex = 0;//時間
        this.timeindexText = this.add.text(10, 10, "Time:", {
            fontSize: 25,
            fill: "white"
        });
        this.score = 0;//分數
        this.scoreText = this.add.text(10, 50, "Score:", {
            fontSize: 25,
            fill: "white"
        });

        this.controlText = this.add.text(10, 300, "←左 右→", {//操控方式
            fontSize: 30,
            fill: "white"
        });
        
        this.test = this.add.text(10, 150, "tt", {
            fontSize: 20,
            fill: "white"
        });

        // 在create方法中創建Timer
        var timer = this.time.addEvent({
            delay: 100, // 延遲0.1秒
            callback: this.callbackFunction, // 觸發時要執行的函數
            callbackScope: this, // 函數的作用域，這裡是場景本身
            repeat: -1 // 重複次數 (-1 表示無限重複)
        });

        //timer.pause = true;//時間暫停
        //timer.pause = false;//時間開始

        /*圖片載入*/
        this.add.image(600,250,'BG').setScale(0.45).setDepth(0);//背景載入

        this.player=new Player(this,500,460).setDepth(1);//player載入
        
        /*粒子圖片*/
        this.particles=this.add.particles('water').setScale(watersize);//設定圖片
        this.emitter=this.particles.createEmitter();//設定發射器
        this.emitter.setPosition(0,700);

        this.clorG=["Red","Orange","Yellow","Green","Blue","Indigo","Violet","Red","Orange"];

        this.sea_urchin1=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchin2=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchin3=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchin4=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchin5=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchin6=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchin7=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchin8=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchin9=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchin0=new sea_urchin(this,50,500).setScale(sea_urchinsize).setDepth(1);//sea_urchin載入
        this.sea_urchinG=[this.sea_urchin1,
                          this.sea_urchin2,
                          this.sea_urchin3,
                          this.sea_urchin4,
                          this.sea_urchin5,
                          this.sea_urchin6,
                          this.sea_urchin7,
                          this.sea_urchin8,
                          this.sea_urchin9,
                          this.sea_urchin0];
        
        this.water1=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.water2=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.water3=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.water4=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.water5=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.water6=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.water7=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.water8=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.water9=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.water0=new water(this,100,500).setScale(watersize).setDepth(1);//water載入

        this.feverwater1=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.feverwater2=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.feverwater3=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.feverwater4=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.feverwater5=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.feverwater6=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.feverwater7=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.feverwater8=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.feverwater9=new water(this,100,500).setScale(watersize).setDepth(1);//water載入
        this.feverwater0=new water(this,100,500).setScale(watersize).setDepth(1);//water載入

        this.waterG=[this.water0,
                     this.water1,
                     this.water2,
                     this.water3,
                     this.water4,
                     this.water5,
                     this.water6,
                     this.water7,
                     this.water8,
                     this.water9,
                     this.feverwater0,
                     this.feverwater1,
                     this.feverwater2,
                     this.feverwater3,
                     this.feverwater4,
                     this.feverwater5,
                     this.feverwater6,
                     this.feverwater7,
                     this.feverwater8,
                     this.feverwater9];
        /*clear fever黛菈水*/
        for (var i = 10; i <= 19; i++)
        {
            this.waterG[i].setFever("noshow");
        }

        this.cursors = this.input.keyboard.createCursorKeys();
        /*player 左右動畫圖片載入*/
        this.anims.create({
            key:'left',
            //frames:this.anims.generateFrameNumbers('player',{start:14,end:16}),
            frames:this.anims.generateFrameNumbers('player',{start:4,end:6}),
            frameRate:10,
            repeat:1
        });

        this.anims.create({
            key:'right',
            //frames:this.anims.generateFrameNumbers('player',{start:5,end: 7}),
            frames:this.anims.generateFrameNumbers('player',{start:0,end: 2}),
            frameRate: 10 ,
            repeat:1
        });
        /*地板加入物理群組*/
        this.platforms=this.physics.add.staticGroup();
        this.platforms.create(215,0,'platform').setScale(1,500).setSize(1,500);//左邊牆setscale:設定圖形尺吋，setsize:設定碰撞為一個矩形
        this.platforms.create(1097,0,'platform').setScale(1,500).setSize(1,500);//右邊牆setscale:設定圖形尺吋，setsize:設定碰撞為一個矩形
        this.platforms.create(0,500,'platform').setScale(1200,5).setSize(1500,5);//地板setscale:設定圖形尺吋，setsize:設定碰撞為一個矩形
        this.physics.add.collider(this.player, this.platforms);//角色跟地板物理碰撞
        //this.physics.add.collider(this.water, this.platforms);//water跟地板物理碰撞
        
        
        /*愛心加入物理群組*//*
        this.heart=this.physics.add.staticGroup();
        this.heart.create(270,170,'heart').setScale(0.15);
        */
        /*海膽接觸地板消失事件*/
        this.physics.add.overlap(
            this.sea_urchinG, 
            this.platforms,
            this.sea_urchinG_clear,//呼叫地板跟海膽重疊function
            null,
            this
        );

        /*碰到海膽事件*/
        this.physics.add.overlap(         
            this.sea_urchinG,
            this.player,
            this.player_touch_sea_urchinG,//呼叫之翼跟海膽重疊function
            null,
            this
        );

        /*水接觸地板消失事件*/
        this.physics.add.overlap(
            this.waterG, 
            this.platforms,
            this.water_clear,//呼叫地板跟黛菈水重疊function
            null,
            this
        );

        /*接到黛菈水事件*/
        this.physics.add.overlap(         
            this.waterG,
            this.player,
            this.player_touch_heart,//呼叫之翼跟黛菈水重疊function
            null,
            this
        );
    }

    update()
    {
        this.timeindexText.setText("Time:" + Math.floor(this.timeindex / 10));//時間
        this.scoreText.setText("Score:" + this.score);//分數

        /*依分數增加海膽*/
        if(this.score >= 240){this.sea_urchinG[9].setDirshow("show");}
        else if(this.score >= 190){this.sea_urchinG[8].setDirshow("show");}
        else if(this.score >= 140){this.sea_urchinG[7].setDirshow("show");}
        else if(this.score >= 90){this.sea_urchinG[6].setDirshow("show");}
        else if(this.score >= 70){this.sea_urchinG[5].setDirshow("show");}
        else if(this.score >= 50){this.sea_urchinG[4].setDirshow("show");}
        else if(this.score >= 40){this.sea_urchinG[3].setDirshow("show");}
        else if(this.score >= 30){this.sea_urchinG[2].setDirshow("show");}
        else if(this.score >= 20){this.sea_urchinG[1].setDirshow("show");}
        else if(this.score >= 10){this.sea_urchinG[0].setDirshow("show");}

        /*按鍵*/
        if(this.cursors.left.isDown)
        {
            this.player.setVelocityX(-200);
            this.player.anims.play("left",true);
        }
        else if(this.cursors.right.isDown)
        {
            this.player.setVelocityX(200);
            this.player.anims.play("right",true);
        }
        else
        {
            this.player.setVelocityX(0);
        }
/*
        if(this.cursors.space.isDown)
        {
            this.player.setVelocityY(-200);
        }  
 */
    }
    /*吃到黛菈水函式*/
    player_touch_heart(waterG,player)
    {
        waterG.disableBody(true, true);
        waterG.setDirection("outside");
        this.sound.play('pick');
        this.score ++;

        if(this.player.getFever() === "no")
        {
            this.fevertime++;
        
            if(this.fevertime === this.fevertimecount)
            {
                this.fevertimepic= this.add.image(300,100,'feverpic').setScale(0.2).setDepth(0).setAlpha(0.9);
                this.fevertimepic1= this.add.image(900,100,'feverpic').setScale(0.2).setDepth(0).setAlpha(0.9);
                const fevertextX=490;
                const fervertextY=210;
                /*fevertime*/
                this.FText = this.add.text(fevertextX, fervertextY, "F", {fontSize: 40,fill: "white"}).setDepth(1);//fever time
                this.e1Text = this.add.text(fevertextX+20, fervertextY, "e", {fontSize: 40,fill: "white"}).setDepth(1);
                this.vText = this.add.text(fevertextX+40, fervertextY, "v", {fontSize: 40,fill: "white"}).setDepth(1);
                this.e2Text = this.add.text(fevertextX+60, fervertextY, "e", {fontSize: 40,fill: "white"}).setDepth(1);
                this.rText = this.add.text(fevertextX+80, fervertextY, "r", {fontSize: 40,fill: "white"}).setDepth(1);
                this.tText = this.add.text(fevertextX+110, fervertextY, "t", {fontSize: 40,fill: "white"}).setDepth(1);
                this.iText = this.add.text(fevertextX+130, fervertextY, "i", {fontSize: 40,fill: "white"}).setDepth(1);
                this.mText = this.add.text(fevertextX+150, fervertextY, "m", {fontSize: 40,fill: "white"}).setDepth(1);
                this.e3Text = this.add.text(fevertextX+170, fervertextY, "e", {fontSize: 40,fill: "white"}).setDepth(1);

                this.fevertimetext=[this.FText,this.e1Text,this.vText,this.e2Text,this.rText,this.tText,this.iText,this.mText,this.e3Text];

                player.setFever("yes");
            }
        }
    }

    /*黛菈水落地消失*/
    water_clear(waterG,platform)
    {
        waterG.disableBody(true, true);
        waterG.setDirection("outside");
    }

    /*碰到海膽*/
    player_touch_sea_urchinG(sea_urchinG,player)
    {     
        this.sound.play('lose');
        sea_urchinG.disableBody(true, true);
        sea_urchinG.setDirection("outside");
        sessionStorage.setItem('myscore', this.score);//分數變數共享
        sessionStorage.setItem('mytime', this.timeindex);//時間變數共享
        ////this.player.setVelocityY(-150);
        this.player.setGravity(0, -1000);
        player.setDirection("gameover");

        //this.scene.start("End");//選擇下一個要顯示的畫面
    }
    
    /*海膽掉地上*/
    sea_urchinG_clear(sea_urchinG,platform)
    {
        sea_urchinG.disableBody(true, true);
        sea_urchinG.setDirection("outside");
    }

    /*timer function*/
    callbackFunction()
    {
        // 在這裡執行你想要做的事情，例如：
        if(this.player.getDirection() === "gameover")
        {
            /*clear海膽*/
            for(let sea_urchin of this.sea_urchinG)
            {
                sea_urchin.disableBody(true, true);
            }

            /*clear黛菈水*/
            for(let water of this.waterG)
            {
                water.disableBody(true, true);
            }
            this.gameoverindex ++;
            if(this.gameoverindex >= 5)
            {
                this.player.disableBody(true, true);
                this.palyerV = Math.floor(this.player.getCenter().x);
                this.emitter.setPosition((this.palyerV / 2),150);//發射器位置
                this.emitter.setSpeed(150);//發射器速度
            }
            if(this.gameoverindex >=30)
            {
                this.scene.start("End");//選擇下一個要顯示的畫面
            }
        }
        else
        {
            this.timeindex ++;
            /*再生海膽*/
            for(let sea_urchin of this.sea_urchinG)
            {
                var randomIntX = Phaser.Math.Between(216, 1000); // 隨機整數，用於海膽生成的x軸位置
                var randomIntY = Phaser.Math.Between(0, 0); // 隨機整數，用於海膽生成的y軸位置
                var randomIntGX = Phaser.Math.Between(-5, 5); // 隨機整數，用於海膽的x軸重力
                var randomIntGY = Phaser.Math.Between(1, 500); // 隨機整數，用於海膽的y軸重力
                if(sea_urchin.getDirshow() === "show"){
                    if(sea_urchin.getDirection() === "outside"){
                        sea_urchin.enableBody(true, randomIntX, randomIntY, true, true);
                        sea_urchin.setGravity(randomIntGX, randomIntGY);
                        sea_urchin.setDirection("inside");
                        //this.sound.play('pick');
                    }
                }
            }

            /*再生黛菈水*/
            for(let water of this.waterG)
            {
                var randomIntX = Phaser.Math.Between(216, 1000); // 隨機整數，用於水生成的x軸位置
                var randomIntY = Phaser.Math.Between(0, 0); // 隨機整數，用於水生成的y軸位置
                var randomIntGX = Phaser.Math.Between(-5, 5); // 隨機整數，用於水的x軸重力
                var randomIntGY = Phaser.Math.Between(1, 500); // 隨機整數，用於水的y軸重力
                if(water.getFever() === "show"){
                    if(water.getDirection() === "outside"){
                        water.enableBody(true, randomIntX, randomIntY, true, true);
                        water.setGravity(randomIntGX, randomIntGY);
                        water.setDirection("inside");
                        //this.sound.play('pick');
                    }
                }
            }
        }

        if(this.player.getFever() === "yes")//fever time
        {
            var temp=this.clorG[8];
            this.fevertimeindex ++;

            for(var i = 0; i <= 8; i++)
            {
                this.fevertimetext[i].setFill(this.clorG[i]);
            }
            for(var i = 8; i >= 0; i--)
            {
                if(i>=1){this.clorG[i] = this.clorG[i-1];}
                else{this.clorG[i]=temp;}
            }

            if(this.fevertimeindex >= 50)
            {
                this.fevertimepic.destroy();
                this.fevertimepic1.destroy();

                this.FText.destroy();
                this.e1Text.destroy();
                this.vText.destroy();
                this.e2Text.destroy();
                this.rText.destroy();
                this.tText.destroy();
                this.iText.destroy();
                this.mText.destroy();
                this.e3Text.destroy();

                this.fevertimecount = Phaser.Math.Between(10, 50);
                this.fevertime = 0;
                this.player.setFever("no");
                this.fevertimeindex = 0;
                /*clear fever黛菈水*/
                for (var i = 10; i <= 19; i++)
                {
                    this.waterG[i].setFever("noshow");
                }
            }
            else
            {
                for(let sea_urchin of this.sea_urchinG)
                {
                    sea_urchin.disableBody(true, true);
                    sea_urchin.setDirection("outside");
                }
                for (var i = 10; i <= 19; i++)
                {
                    this.waterG[i].setFever("show");
                }

            }
        }
        
        /*
        if(this.waterG[0].getDirection() === "outside"){
            this.waterG[0].enableBody(true, 300, 0, true, true);
            this.waterG[0].setDirection("inside");
        }
        */
    }
}