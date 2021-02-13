//Nathan Hobbs
//SMAD 404: Advanced Interaction Design
//James Madison University
//<script src="https://cdn.jsdelivr.net/npm/p5@1.2.0/lib/p5.js"></script>

//Global variables
let auctionData; //for table
x = 50;
y = 100;

//Load Table before drawing anything
function preload() {
		auctionData = loadTable('auction-orders.csv', 'csv', 'header');
}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('undeliveredOrdersSketch');
	background(252, 235, 202);
	textFont('Avant Garde');
}

function draw() {
	//Draw only once
	noLoop();
	//title with separator line
	fill(0);
	textSize(24); 
	text("Customer Orders", 100, 40);
	line(70, 50, 320, 50);
	//headers
	textStyle(BOLD);
	text("Customer", 50, 70);
	text("Order Date", 250, 70);
	text("Delivery Status", 450, 70);
	text("Priority", 650, 70);
	text("Travel Progress", 840, 70);
	textStyle(NORMAL);
	
	
	//Get row count
	let auctionRows = auctionData.getRowCount();
	
	//Individually get the columns so they can be separately iterated through later
	let customerNames = auctionData.getColumn('customerName');
	let orderDate = auctionData.getColumn('dueDate');
	let delivered = auctionData.getColumn('delivered');
	
	//iterate over the nubmer of rows to display the data
	for (var i = 0; i < auctionRows; i++) {
		
		//If the item has not been delivered, print
		if (delivered[i] == "n") {
			text(customerNames[i], x, y);
		  text(orderDate[i], x + 200, y);
			//Red x symbol
			stroke(255, 0, 0);
			strokeWeight(6);
			line(x + 475,y - 10, x + 485, y);
			line(x + 475, y, x + 485, y - 10);
			//Increment height as you move through the rows
			y+=30;
		}
		
		//reset fill to black text and remove stroke after creating X's
		strokeWeight(0);
		fill(0);
	}	
	
	//Increasing number of "!" for earlier dates, less "!" 
	//for more recent orders
	textSize(28);
	text("!!!!", 650, 100);
	text("!!!", 650, 130);
	text("!!!", 650, 160);
	text("!!!", 650, 190);
	text("!!", 650, 220);
	text("!!", 650, 250);
	text("!!!", 650, 280);
	text("!!", 650, 310);
	text("!!", 650, 340);
	text("!", 650, 370);

	//Filled in circles represent travel progress.
	
	//Empty circles
	noFill();
	stroke(0);
	strokeWeight(3);
	circle(900, 90, 15);
	circle(875, 120, 15);
	circle(900, 120, 15);
	circle(875, 150, 15);
	circle(900, 150, 15);
	circle(900, 180, 15);
	circle(875, 210, 15);
	circle(900, 210, 15);
	circle(900, 240, 15);
	circle(875, 270, 15);
	circle(900, 270, 15);
	circle(875, 300, 15);
	circle(900, 300, 15);
	circle(875, 330, 15);
	circle(900, 330, 15);
	circle(900, 360, 15);
	//Filled Circles
	fill(0);
	strokeWeight(1);
	circle(850, 90, 15);
	circle(875, 90, 15);
	circle(850, 120, 15);
	circle(850, 150, 15);
	circle(850, 180, 15);
	circle(875, 180, 15);
	circle(850, 210, 15);
	circle(850, 240, 15);
	circle(875, 240, 15);
	circle(850, 270, 15);
	circle(850, 300, 15);
	circle(850, 330, 15);
	circle(850, 360, 15);
	circle(875, 360, 15);
}