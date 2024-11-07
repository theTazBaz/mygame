class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload() {
      // Load assets
      this.load.image("tiles", "assets/images/tiles.png"); // Update path as needed
      this.load.spritesheet("dino", "assets/spritesheets/dino.png", {
        frameWidth: 32,
        frameHeight: 32,
      });
      this.load.tilemapTiledJSON("dungeon", "assets/dungeon.tmj"); // Update path as needed
    }

    create() {
      // Debug message
      this.add.text(20, 20, "Loading complete, starting game...");
      this.scene.start("playGame");
    }
  }