class roof
{
	constructor(x,y,width,height)
	{
        var options=
        {
			isStatic:true			
	    }
		
		
        this.body=Bodies.rectangle(x, y, width, height , options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);

	}
	display()
	{
			var rPos=this.body.position;		
			push()
			translate(rPos.x, rPos.y);
			rectMode(CENTER)
			fill("grey")
			rect(0,0,this.width, this.height);
			pop();
			
    }
}
