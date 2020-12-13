class Ground 
{
    constructor(x,y,width,height) 
    {
      var options = {
          isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    display()
    {
      var GroundPos =this.body.position;

      push();
      fill("brown");
      rectMode(CENTER);
      rect(GroundPos.x, GroundPos.y, this.width, this.height);
      pop();
    }
  }
