var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  console.log(this.readyState, xhttp.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.response);
  }
}
// // xhttp.open("GET", "data/hello_world.json")
// // xhttp.send()
// var xhttp = new XMLHttpRequest()
// xhttp.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let response = JSON.parse(this.response)
//     // handlerResponse(response)
//   }
// }
// var koder = {
//   firstName: 'Cristina',
//   lastName: 'Bermudez',
//   generation: 5,
//   favoritePerson: 'me :)',
//   imaginationForThisExcercise:'none',
//   favoriteColor: 'black',
//   favoriteNumber: 5,
//   adress : {
//     street:'Corregidora',
//     houseNumber : '40',
//     city : 'CDMX',
//   }
// // }
// xhttp.open('POST', "https://ajaxkode.firebaseio.com/posts.json")
// xhttp.send(JSON.stringify(posts))
// // const handlerResponse = (response) => {
//   console.log(response)
//   var parent = document.getElementById('container')
//   response.forEach(({ element, text }) => {
//     let node = document.createElement(element)
//     node.innerText = text
//     parent.appendChild(node)
//   });
// }
xhttp.open('POST', "https://ajaxkode.firebaseio.com/posts.json")
var posts = {
  title: "Black Hole",
  description: "The first picture of black hole",
  img: "https://images.newscientist.com/wp-content/uploads/2019/04/08111018/screenshot-2019-04-08-10.24.34.jpg",
  author: "Josue Xicotencatl Avalos"
}
xhttp.send(JSON.stringify(posts))
