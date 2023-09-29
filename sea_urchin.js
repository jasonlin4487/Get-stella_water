class sea_urchin extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, "sea_urchin");
      this.scene = scene;
      scene.physics.world.enable(this);
      scene.add.existing(this);
      this.setBounce(0);
      this.setCollideWorldBounds(true);
      this.direction = "inside";
      this.dirshow = "noshow";
    }
    getDirection() {
      return this.direction;
    }

    setDirection(dir) {
      this.direction = dir;
    }

    getDirshow() {
        return this.dirshow;
    }

    setDirshow(dir) {
        this.dirshow = dir;
    }
  }