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
        // image(this.myImage, this.x1, 0, this.imgScenarioWidth, height);
        // image(this.myImage, this.x2, 0, this.imgScenarioWidth, height);
    }

    move() {
        this.x = this.x - this.speed;
        // this.x1 = this.x1 - this.speed;
        // this.x2 = this.x2 - this.speed;

        // if (this.x1 < -this.imgScenarioWidth)
        // {
        //     this.x1 = this.imgScenarioWidth;
        // }

        // if (this.x2 < -this.imgScenarioWidth)
        // {
        //     this.x2 = this.imgScenarioWidth;
        // }
    }

    stop() {
        this.speed = 0;
    }

    restart() {
        this.speed = this.originalSpeed;
        this.move();
    }
}