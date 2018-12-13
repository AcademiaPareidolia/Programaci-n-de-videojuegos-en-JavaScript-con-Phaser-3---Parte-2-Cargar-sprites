var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    backgroundColor: 'black',
    parent: 'Juego_nave',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [{
        preload: preload,
        create: create,
        update: update
    }]
};

var game = new Phaser.Game(config);

var nave;
var derecha;
var izquierda;

const vidaNave = 4;
const municionInicial = 4;
const velocidadNave = 800;

function preload() {
    this.load.image('nave','assets/sprites/nave.png');
}

function create() {
    nave = this.physics.add.sprite(game.config.width / 2, game.config.height - 100, 'nave');
    nave.vida = vidaNave;
    nave.municion = municionInicial;

    derecha = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    izquierda = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

}

function update() {
    nave.body.setVelocityX(0);
    if (izquierda.isDown) {
        nave.body.setVelocityX(-velocidadNave);
    }
    else if (derecha.isDown) {
        nave.body.setVelocityX(velocidadNave);
    }
}