class Plinko
{
    constructor(x, y, r)
    {
        var options = {
            isStatic: true
        };
        this.body = Bodies.circle(x, y, r, options);
        this. r = r;
        World.add(world, this.body);
    }

    display()
    {
        var PlinkoPos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(PlinkoPos.x, PlinkoPos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}