let arr = [];
function setup() {
	canvas = createCanvas(1660, 600);

	for (let i = 0; i < width; i++) {
		arr.push(Math.floor(random(height)));
	}

	console.log(arr);
}
let a = 0;
function draw() {
	background(130, 0, 200);

	if (a < arr.length) {
		for (let j = 0; j < arr.length - 1 - a; j++) {
			if (arr[j] < arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	} else {
		console.log("finish!!");
		noLoop();
	}
	a++;
	for (let i = 0; i < arr.length; i++) {
		line(i, height, i, arr[i]);
	}
}
