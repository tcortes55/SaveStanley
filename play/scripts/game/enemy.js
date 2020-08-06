class Enemy extends Animation {
    constructor(positionMatrix, img, x, offsetY, characterWidth, characterHeight, spriteWidth, spriteHeight, speed, delay) {
        super(positionMatrix, img, x, offsetY, characterWidth, characterHeight, spriteWidth, spriteHeight);

        this.originalX = x;
        this.originalSpeed = speed;
        this.speed = speed;
        this.delay = delay;
        this.hasCollided = false;

        this.initialY = height - this.characterHeight - this.offsetY;
        this.y = this.initialY;
        this.floor = this.initialY;
        this.jumpSpeed = 0;
        this.gravity = 2;
    }

    setSpeed(newValue) {
        this.speed = newValue;
    }

    move() {
        this.x = this.x - this.speed;

        if (this.x < - this.characterWidth - this.delay) {
            this.x = width;
        }
    }

    stop() {
        if (this.x < -this.characterWidth) {
            this.setSpeed(0);
        }
    }

    restart() {
        this.x = this.originalX;
        this.setSpeed(this.originalSpeed);
        this.animate();
    }

    jump() {
        // jumpTheme.play();
        this.jumpSpeed = -30;
    }

    applyGravity() {
        this.y = this.y + this.jumpSpeed;
        this.jumpSpeed = this.jumpSpeed + this.gravity;

        if (this.y > this.floor)
        {
            this.y = this.floor;
            this.jumpCount = 0;
        }

    }
}