class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }
  
    create() {
      // Load the tilemap using the key "dungeon" (make sure this matches what was loaded in Scene1)
      const dungeon = this.make.tilemap({ key: "dungeon" });
  
      // Add the tileset image using the name defined in Tiled and the key loaded in preload
      const tileset = dungeon.addTilesetImage("tiles", "tiles"); 
  
      // Verify the tileset is correctly loaded
      if (!tileset) {
        console.error("Tileset not found! Check the tileset name in Tiled and the Phaser key.");
        return;
      }
  
      // Create map layers (names must match exactly with those in Tiled)
      const groundLayer = dungeon.createLayer("ground", tileset, 0, 0);
      const wallLayer = dungeon.createLayer("walls", tileset, 0, 0);
  
      // Set collision properties if needed
      if (wallLayer) {
        wallLayer.setCollisionByProperty({ collides: true });
      }
  
      // Optional debugging: check if layers are created successfully
      if (!groundLayer) console.error("Ground layer not found! Check layer name in Tiled.");
      if (!wallLayer) console.error("Wall layer not found! Check layer name in Tiled.");
    }
  }
  