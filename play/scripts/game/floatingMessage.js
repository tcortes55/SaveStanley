class FloatingMessage {
    constructor(textMessage, speed, x, y, boxWidth, boxHeight) {
        this.textMessage = textMessage;
        this.originalSpeed = speed;
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.boxWidth = boxWidth;
        this.boxHeight = boxHeight;
    }

    display() {
        fill(255,255,255,200);
        noStroke();
        rect(this.x, this.y, this.boxWidth, this.boxHeight);

        P5Style.clockCountStyle();
        text(this.textMessage, this.x + 10, this.y + 10, this.boxWidth, this.boxHeight);
    }

    move() {
        this.x = this.x - this.speed;
    }

    stop() {
        this.speed = 0;
    }

    restart() {
        this.speed = this.originalSpeed;
        this.move();
    }
}