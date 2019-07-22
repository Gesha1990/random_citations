import authorsList from './data';

class EventEmitter {
	constructor() {
		this.events = {}
	}
	on(type, listener) {
		 this.events[type] = this.events[type] || [];
		 this.events[type].push(listener);
	}
	trigger(type, arg) {
		if (this.events[type]) {
			this.events[type].forEach(listener => listener(arg));
		} 
	}
}

class Touratte  extends EventEmitter{
	constructor(){
		super();
		window.onload = this.generatorRandomnicity.bind(this);
		this.addButton = document.querySelector('.add');
		this.addButton.addEventListener('click', this.clearIntervalId.bind(this));
		this.authorsList = authorsList;
		this.commonCounter = 0;
	}

	clearIntervalId(){
		clearInterval(this.intervalId);
	}

	generatorRandomnicity () {
		
		this.intervalId = setInterval( () => {
		var randomAuthor = '';
		var randomCitation = '';
		var randomAuthor_id = Math.floor(Math.random() * (4) + 1);
		var randomCitation_index = Math.floor(Math.random() * 4);
		
		authorsList.forEach(author => {
			if(author._id == randomAuthor_id){
				randomAuthor = author.name;
				randomCitation = author.citations[randomCitation_index];
			}});
			this.commonCounter ++;
			console.log(randomAuthor, randomAuthor_id, randomCitation)
			this.trigger('addRandomWisdom', {randomAuthor, randomCitation, randomAuthor_id});
			
		}, Math.floor(Math.random() * 5000/1000+1)*1000);	
	}
	
}

export default Touratte;


