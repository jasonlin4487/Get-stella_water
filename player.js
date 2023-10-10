class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, "player");
      this.scene = scene;
      scene.physics.world.enable(this);
      scene.add.existing(this);
      this.setBounce(0);
      this.setCollideWorldBounds(true);
      this.direction = "inside";
      this.fever = "no";
      this.power = "no";
    }

    getDirection() {
      return this.direction;
    }

    setDirection(dir) {
      this.direction = dir;
    }

    getFever() {
      return this.fever;
    }

    setFever(dir) {
      this.fever = dir;
    }

    getPower() {
      return this.power;
    }

    setPower(dir) {
      this.power = dir;
    }
  }