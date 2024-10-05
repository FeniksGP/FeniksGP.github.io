let body = document.getElementById("body");
let canvas = document.getElementById("dot");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');

let dots = [];
let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'brown', 'aqua', 'Magenta', 'AliceBlue', 'Chocolate']
for(let i = 0; i < 50; i++)
{
	dots.push({
		x: Math.floor(Math.random() * canvas.width),
		y: Math.floor(Math.random() * canvas.height),
		size: Math.floor(Math.random() * 5 + 5),
		color: colors[Math.floor(Math.random() * 10)]
	});
}
const draw = () => {
	dots.forEach(dot => {
		ctx.fillStyle = dot.color;
		ctx.beginPath();
		ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
		ctx.fill();
	})
}
draw();
body.addEventListener('mousemove', (event) => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
	let mouse = {
		x: event.pageX - body.getBoundingClientRect().left,
		y: event.pageY - body.getBoundingClientRect().top
	}
	dots.forEach(dot => {
		let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
		if(distance < 300)
		{
			ctx.strokeStyle = dot.color;
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(dot.x, dot.y);
			ctx.lineTo(mouse.x, mouse.y);
			ctx.stroke();
			console.log(dot.x);
		}
	})
});
body.addEventListener('mouseout', (event) => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
});