class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, "player");
      this.scene = scene;
      scene.physics.world.enable(this);
      scene.add.existing(this);
      this.setBounce(0);
      this.setCollideWorldBounds(true);
    }
  }