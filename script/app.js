(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				// querySelectorAll is for a one to many relationship and returns a NodeList (an array) of matching elements
				puzzlePieces = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone"),
				gameBoard = document.querySelector(".puzzle-board"); // one to one relationship -> returns the first matching element
				dragcontainer = document.querySelector(".puzzle-pieces");

	let imageNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// add event handling here -> how is the user going to use our app?
	// what triggers do we need?
	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources
		imageNames.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.bgkey}.jpg`;
		});

		// and set the drop zone background
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;

		console.log(dropZones)

        dropZones.forEach((dropZone) => {

            while (dropZone.firstChild) 
            {let thisChild = dropZone.removeChild(dropZone.firstChild);


                dragcontainer.appendChild(thisChild);
            }
        })



    }



	function allowDrag(event) {
		// let the drag happen, and store a reference of the ID of the element we're dragging
		console.log('started dragging an image: this one - ', event.target.id);

		event.dataTransfer.setData("draggedImg", this.id);
		// event.dataTransfer.setData("targetTrack", this.dataset.track);

		// set a reference to a data track so i can retrieve it later in the drop
	}


	function allowDragOver(event) {

		console.log('dragged something over me!');
		event.preventDefault(); // for next week



		
	}

	function allowDrop(event) {
		console.log('dropped something on me');

		let droppedImage = event.dataTransfer.getData("draggedImg");
		// let currentTrack = event.dataTransfer.getData('targetTrack');
           if (event.currentTarget.children.length === 0) {
           event.target.appendChild(document.querySelector(`#${droppedImage}`));
        }
		
		//debugger;
		 


	}

	function resetPieces(event) {
		console.log('Now, try this puzzle');

	
		


		/*const dropZones = document.querySelectorAll(".drop-zone");
		let theimg = dropZones.firstElementChild
		const dragcontainer = document.querySelector(".puzzle-pieces");

		dragcontainer.appendChild(theimg)*/


		/*var foo = document.getElementById('img0');
        for (var i = 0; i < foo.children.length; i++) {
        console.log(foo.children[i].tagName);
}




		/*let droppedImage = document.

		event.removeChild(document.querySelectorAll(`images/${piece + this.dataset.bgkey}.jpg`));*/

	
	// let currentTrack = event.dataTransfer.getData('targetTrack');
		//debugger;
	}

	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));
	puzzlePieces.forEach(piece => piece.addEventListener('dragover', allowDragOver));	
	puzzleButtons.forEach(button => button.addEventListener('click', resetPieces));



	for (let zone of dropZones) {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	}

	// research call, apply and bind
	changeImageSet.call(puzzleButtons[0]); // emulates a click on the first bottom button
})();
