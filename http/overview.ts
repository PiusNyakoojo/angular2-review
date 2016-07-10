/*
	The observable pattern is certain pattern where we have a stream of data (or event which emits data). These are observables,
	something.. something that we can observe to see what happens.

	On the other end, we have a Subscriber which listens to the events.

	By default, angular 2 uses the Observable pattern to access the web. So you can think of the response that we get from
	a server as a data stream that we listen to once we've sent a request. We know we'll probably get a response eventually,
	so we listen for it.

	So you can think of it as: We've got the observable or response from our server, and similarly, we've got the 
	subscriber who listens for the response. From the subscriber, we can then handle the response and use it in our
	application.

	We can also cancel observables so we stop listening to responses. So Observables aren't exactly callbacks.. but
	you can think of them as having similar functionality.
*/