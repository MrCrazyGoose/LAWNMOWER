hello = document.querySelector("table tbody");
const lmc = "gold";  //luxury mower company or lawn mower color (shade of yellow)


function color(x, y, c) {
	hello.children[y].children[x].style.backgroundColor=c;
}

function lawnmower(x, y) {
	//x, y = bottom right
	color(x, y, "green");
	color(x, y-1, "green");
	color(x, y-2, "green");
	color(x, y-3, "green");
	color(x, y-4, "black");
	color(x, y-5, "black");
	color(x, y-6, "green");
	color(x, y-7, "green");

	color(x-1, y, "silver");
	color(x-1, y-1, "silver");
	color(x-1, y-2, lmc);
	color(x-1, y-3, lmc);
	color(x-1, y-4, lmc);
	color(x-1, y-5, lmc);
	color(x-1, y-6, lmc);
	color(x-1, y-7, "green");

	color(x-2, y, "dimgray");
	color(x-2, y-1, "green");
	color(x-2, y-2, lmc);
	color(x-2, y-3, lmc);
	color(x-2, y-4, lmc);
	color(x-2, y-5, lmc);
	color(x-2, y-6, lmc);
	color(x-2, y-7, lmc);
}

lawnmower(49, 49);
