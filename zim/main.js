function createSnowflake() {
	const snowflake = document.createElement("div");
	const wid =  parseInt(document.body.offsetWidth);
	snowflake.classList.add("snowflake");
	snowflake.style.left = Math.random() * wid + "px";//do naprawy
	console.log(document.body.offsetWidth);
	snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s";
	snowflake.innerText = "❄️";
	document.body.appendChild(snowflake);
	snowflake.addEventListener("animationend", () => {
		snowflake.remove();
	});
}
setInterval(createSnowflake, 100);