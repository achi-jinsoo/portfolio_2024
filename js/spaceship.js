document.getElementById('version').textContent = 'Phaser v' + Phaser.VERSION;

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  loader: {
    baseURL: "https://labs.phaser.io",
    crossOrigin: "anonymous"
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      debugShowBody: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);

let SPEED = 100;
let ROTATION_SPEED = 1 * Math.PI; // 0.5 turn per sec, 2 sec per turn
let ROTATION_SPEED_DEGREES = Phaser.Math.RadToDeg(ROTATION_SPEED);
let TOLERANCE = 0.02 * ROTATION_SPEED;

let velocityFromRotation = Phaser.Physics.Arcade.ArcadePhysics.prototype.velocityFromRotation;
let ship;

function preload() {
  this.load.image('space', 'assets/skies/space2.png');
  this.load.image('ship', 'assets/sprites/thrust_ship.png');
}

function create() {
  this.add.image(400, 300, 'space');
  
  ship = this.physics.add.image(200, 150, 'ship')
    .setVelocity(SPEED, 0);
}

function update() {
  pointerMove(this.input.activePointer);
  velocityFromRotation(ship.rotation, SPEED, ship.body.velocity);
  ship.body.debugBodyColor = (ship.body.angularVelocity === 0) ? 0xff0000 : 0xffff00;
}

function pointerMove (pointer) {
  // if (!pointer.manager.isOver) return;
  
  // Also see alternative method in
  // <https://codepen.io/samme/pen/gOpPLLx>
  
  let angleToPointer = Phaser.Math.Angle.Between(ship.x, ship.y, pointer.worldX, pointer.worldY);
  let angleDelta = Phaser.Math.Angle.Wrap(angleToPointer - ship.rotation);
    
  if (Phaser.Math.Fuzzy.Equal(angleDelta, 0, TOLERANCE)) {
    ship.rotation = angleToPointer;
    ship.setAngularVelocity(0);
  } else {
    ship.setAngularVelocity(Math.sign(angleDelta) * ROTATION_SPEED_DEGREES);
  }
}
