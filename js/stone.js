class Stone
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			friction:1,
			density:1.2,
			restitution : 0.5			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options); 
		World.add(world, this.body);
 this.stone=loadImage("images/stone.png")
	}
	display()
	{
			var pos=this.body.position;		
			push()
			//this.body.position.x = mouseX;
			//this.body.position.y = mouseY;
			translate(pos.x, pos.y);
			imageMode(CENTER)
			image(this.stone,0,0,this.w, this.h);
			pop()
			
	}

}