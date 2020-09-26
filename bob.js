class Bob {
    constructor(x, y, radius) {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.bob = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.bob);
    }

    display() {
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.bob.position.x, this.bob.position.y, this.radius);
    }
}