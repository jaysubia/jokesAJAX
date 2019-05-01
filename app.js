document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {

  const number = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);

      let output = ``

      if (response.type === 'success') {
        // the parameter that goes inside of this function can be anything we want in the video he says joke I tried test and it still works it basicially takes the response and inputs it into the parameter
        response.value.forEach(function (test) {
          console.log(test);
          output += `<li>${test.joke}</li>`
        })
      } else {
        output += `<li>Something Went Wrong</li>`
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}






// Now this is important right here.
// I can't I'm not going to do a response for each because the response is an object.
// OK it's an object that has type and value.
// So we're not going to loop through an object with this type in value we want to loop through the value
// which holds the array.
// So we're going to say response.value.foreach().
// And this is what I mean when I say the API is all formatted different differently.
// You might have another API that will actually return the array as the response.
// That way you can just say response.foreach().
// So it all depends on how the API is formatted OK whether it's your own or whether it's an external one
// like this.
// Hopefully that makes sense.