

imageLayer = new Layer({x:0, y:0, width:128, height:128, image:require("./images/Icon.png")})
imageLayer.center()

imageLayer.states = {
	second: {y:100, scale:0.6, rotationZ:100},
	third:  {y:300, scale:1.3},
	fourth:	{y:200, scale:0.9, rotationZ:200}
}

imageLayer.animationOptions = {
	curve: "spring(500,12,0)"
}

imageLayer.on(Events.Click, () -> {
})
