class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload()
    {
      this.load.image("background", "C:\wamp64\www\mygame2\assets");
    }
create()
{
    this.add.text(20,20,"Loading game...");
    this.scene.start("playGame");
}
}
