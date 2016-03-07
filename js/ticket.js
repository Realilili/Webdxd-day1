// function buyTicket(e){
// 	console.log(e);
// 	var ticketNum =e.children[1].innerText;
// 	if(ticketNum>0){
// 		e.children[1].innerText--}
// 	else{
// 		alert("Ticket Sold Out");
// 	}
// }






$('.ticket-btn').click(function(){
	var ticketNum = $($(this).find('span')).html();
	//get number of ticket from buttom span
	if (ticketNum >1 ){
		$($(this).find('span')).html(ticketNum-1);
	}
	else{
	// $(this).fadeOut();
	$(this).addClass ('alert-btn');
	$(this).html('Sold Out');
	//change text to sold out and add alert button class when ticket number equals zero
	}
//set number of ticket left	
});

$('#add-movie').click(function(){

	console.log("add movie button is clicked");

	var moviedataref = new Firebase('https://yhcd8mszl9d.firebaseio-demo.com/');
	var name=$('#movie-name').val();
	var text=$('#director').val();
	var date=$('#release-date').val();
	var ticket=$('#ticket').val();

	if(name !== "" && director !=="" && date !== "" && ticket !== "" ){
		moviedataref.push( {name:name, director: text, release_date:date, ticket: ticket});
	} else{
		alert('Please complete this form!');
	}
});







