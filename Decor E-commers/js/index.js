const datas = [
  { name: "Collection", id: 1 },
  { name: "Shop", id: 2 },
  { name: "About", id: 3 },
  { name: "Wishlits", id: 4 },
  { name: "Login", id: 5 },
  { name: "Bag", id: 6 }
]

let lection = document.getElementById("colection").innerHTML = datas[0].name
let shop = document.getElementById("shop").innerHTML = datas[1].name
let about = document.getElementById("about").innerHTML = datas[2].name
let wishl = document.getElementById("wishlist").innerHTML = datas[3].name
let login = document.getElementById("login").innerHTML = datas[4].name
let bag = document.getElementById("bag").innerHTML = datas[5].name;

const menuToggle = document.querySelector('.menu-toggle span')
const nav = document.querySelector('.navbar .nav-item')

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('menu')
})