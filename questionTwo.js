/*
Question 2
The following questions relate to a given remote API which responds in a random time between 0 and 2 seconds.

We will use the below function as a mock api:
*/

function getResponse() {
	return new Promise((resolve, reject) => {
		const timeout = Math.floor(Math.random() * 2000);
		setTimeout(() => {
			resolve(timeout);
		}, timeout);
	});
}

/*
2.1 Write a function that will output the response from 
the getResponse api call once the promise has been completed.
*/

const waitForResponse = async () => {
	console.log(await getResponse());
};

waitForResponse();

/*
2.2 Write a wrapper service that will call the getResponse 
service and resolve when the response is smaller than 800 
and reject when the response is larger than 800.
*/

function getResponseWrapper() {
	return new Promise((resolve, reject) => {
		getResponse().then(res => {
			if (res < 800) {
				resolve(res);
			} else {
				reject(res);
			}
		});
	});
}

/*
2.3 Use your wrapper service to output the result of 10 
calls to the getResponse service and only output the 
result once all requests have completed.
*/

Promise.all([
	getResponseWrapper(),
	getResponseWrapper(),
	getResponseWrapper(),
	getResponseWrapper(),
	getResponseWrapper(),
	getResponseWrapper(),
	getResponseWrapper(),
	getResponseWrapper(),
	getResponseWrapper(),
	getResponseWrapper()
])
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	});
