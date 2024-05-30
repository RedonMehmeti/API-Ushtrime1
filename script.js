// let file = "text.txt"
// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);

// function fetchRandomDogImage() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(data => {
//         document.getElementById('dogImage').src = data.message; // Update the image source with the new dog image URL
//       });
//   }

//   fetchRandomDogImage();

function fetchRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('dogImage').src = data.message; // Update the image source with the new dog image URL
      })
      .catch(error => console.error('Error fetching the dog image:', error));
}

document.getElementById('newImageBtn').addEventListener('click', fetchRandomDogImage);