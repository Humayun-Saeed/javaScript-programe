

const airports = [
	 {
		 start: 'ISB',
		 end: 'LHR',
		 cost: 1000
	 },
	 {
		 start: 'LHR',
		 end: 'NYC',
		 cost: 750
	 },
	 {
		 start: 'CBS',
		 end: 'NYC',
		 cost: 775
	 },
	 {
		 start: 'ISB',
		 end: 'CBS',
		 cost: 575
	 },
	 {
		 start: 'CBS',
		 end: 'GRC',
		 cost: 731
	 },
	 {
		 start: 'NYC',
		 end: 'GRC',
		 cost: 459
	 }
 ];


 function airport(airports,start,end){

    // console.log(start,end);
    for(var x=0 ;x<airports.length;x++){
		//console.log(airports[1].start);

        // console.log(airports[x]);
        //console.log(x.start);
       if(airports[x].start=== start && airports[x].end=== end){
            console.log(airports[x].start);
            console.log(airports[x].end);
			
			console.log(airports[1].end);
			console.log(airports[0].cost+airports[1].cost);
            break;
    }

 }
}
 airport(airports,'ISB','NYC');

