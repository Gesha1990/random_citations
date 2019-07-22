class  Render {
	constructor(touratte) {
		this.touratte = touratte;
		this.touratte.on('addRandomWisdom', this.renderWisdom.bind(this));
		this.placeCitation = document.querySelector('.Citation');
		this.placeAuthor = document.querySelector('.Author');
		this.commonCounter = document.querySelector('.counter');
		this.authorsList =  this.createAuthorsList();
	}

	createAuthorsList(){
		const ul = document.querySelector('.authors-list');
		
		this.touratte.authorsList.forEach(author => {
			var li = document.createElement('li');
			li.textContent = `${author.name} 0`;
			li.setAttribute('data-id', author._id);
			ul.appendChild(li);
		});
		
		return ul;
	}

	renderWisdom(args) {
		
		var liList = this.authorsList.querySelectorAll('li');
		
		liList.forEach(li => {
			if(li.dataset.id == args.randomAuthor_id) {
			li.textContent = li.textContent.replace(/\d+$/, function(n){ return ++n })
			li.classList.toggle('highlight');
			
			setTimeout(function(){
				li.classList.toggle('highlight')
			}, 1000);
			}
		}
	)
		this.placeCitation.textContent = args.randomCitation
		this.placeAuthor.textContent = args.randomAuthor;
		this.commonCounter.textContent = this.touratte.commonCounter;
	}
}
 export default Render;


 
 
 