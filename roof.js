class Roof {
    constructor(x, y, width, height) {
        var option={
            isStatic: true,
        }
        this.roof = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.roof);
    }

    display() {
        rectMode(CENTER);
        fill("blue");
        rect(this.roof.position.x, this.roof.position.y, this.width, this.height);
    }
}