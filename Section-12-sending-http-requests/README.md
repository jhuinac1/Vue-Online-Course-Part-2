# HTTP REQUEST



### What is "a Backed"?


### What is that? A POST request? And a REST API?

There are different "kinds" of Http requests you could say - defined by the method (POST, GET, DELETE, ...) you attach to them (via the "method" you define on an outgoing request).

And the server to which you're sending those requests may then react in which ever way it is configured to react to incoming requests with different methods.

It may store data in a database for an incoming POST request, it may fetch data for a GET request.

Typically, servers are built to work as a "REST API" - that means they have clearly defined "endpoints" (URL + Http method combinations) for which they do different things.

You can learn more about REST APIs (and how to build your own one!) with this free series: https://academind.com/learn/node-js/building-a-restful-api-with/what-is-a-restful-api-/

Also make sure you understand, in general, how the web works: https://academind.com/learn/web-dev/how-the-web-works/

## Using Axios Instead Of "fetch()"
In this course, we use the native fetch() API for sending Http requests. It's built into the browser and hence we don't have to install any extra package to use it.

If you prefer third-party libraries like Axios (https://github.com/axios/axios) you can of course also use such libraries though.

For example, you could replace the fetch() code from the last lecture with this Axios code:

Instead of:
```javascript
fetch('https://vue-http-demo-85e9e.firebaseio.com/surveys.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: this.enteredName,
    rating: this.chosenRating,
  }),
});
```
you can write this code with Axios:
```javascript
import axios from 'axios'; // at the start of your <script> tag, before you "export default ..."
...
axios.post('https://vue-http-demo-85e9e.firebaseio.com/surveys.json', {
  name: this.enteredName,
  rating: this.chosenRating,
});
```
As you can see, with Axios, you have to write less code. It automatically sets the Content-Type header for you, it also automatically converts the body data to JSON.

BUT - as a downside - you have to add an extra package, which ultimately increases the size of the web app you're shipping in the end.

Later in the module, we'll also start reacting to the response returned by the request.

fetch() returns a Promise, hence we can use then(), catch() and async/ await there. For Axios, it's just the same - it also returns a Promise.