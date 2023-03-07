let p = fetch("https://kontests.net/api/v1/all");
let cardCoding = document.getElementById("cardCoding");
p.then((responce) => {
  return responce.json()

}).then((v) => {
  console.log(v)
  let cardData = ``
  v.forEach((item) => {
    // console.log(item)
    cardData += `
    <div class="card mb-4" style="width: 22rem;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER3xA2OeIRsckOlvxOibrxmfnrSXer0KQcA&usqp=CAU" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Start time Contest:${item.start_time}</p>
            <p class="card-text">Start time Contest:${item.end_time}</p>
            <a href="${item.url}" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
       `

  })
  cardCoding.innerHTML = cardData
})


// let noteStore = prompt("Enter Your Note")
// alert("your note is" + noteStore)
// if (noteStore) {
//   localStorage.setItem("note", noteStore)
// }
// let cd = confirm("Do you want delete Your Note.")
// if (cd) {
//   localStorage.removeItem("note");
//   alert("Your note delete Successfully")
// }