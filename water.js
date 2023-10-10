class water extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, "water");
      this.scene = scene;
      scene.physics.world.enable(this);
      scene.add.existing(this);
      this.setBounce(0);
      this.setCollideWorldBounds(true);
      this.direction = "outside";
      this.fever ="show";
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
  }