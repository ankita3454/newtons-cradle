class bob
 {
    constructor(x,y,radius)
    {
        var options= 
        {
            'isStatic':false,
           'restitution':0.3,
           'friction': 0.5,
           'density': 1.2
        }
		
        this.body=Bodies.circle(x, y, radius/2, options);
		this.radius=radius;
		World.add(world, this.body);

	}
	display()


	{
			
			var bobpos=this.body.position;		
            push()
			translate(bobpos.x, bobpos.y);
			rectMode(CENTER);
			fill("pink");
			ellipse(0,0,this.radius,this.radius);
			pop();
			
	}

}