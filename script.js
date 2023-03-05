
let search = document.getElementById('search')
let button = document.getElementById('search-button')
let image = document.getElementById('image')
let description = document.getElementById('description-box')

// fetch('https://superheroapi.com/api.php/621052459849335/search/thanos')
// .then(response=>response.json())
// .then(json=>console.log(json))


let mainLink = 'https://superheroapi.com/api.php/621052459849335'


// button.onclick=()=>{
//     fetch(`${mainLink}/search/${search.value}`)
//     .then(response=>response.json())
//     .then(json=>image.innerHTML=`<img src="${json.results[0].image.url}">`)
//     .then(getinfo.innerHTML='<button>Get Hero Info</button>')
// }


// let fx=(z)=>{
//     z = Math.ceil(Math.random()*731)
//     fetch(`${mainLink}/${z}`)
//     .then(response=>response.json())
//     .then(json=>image.innerHTML=`<img src="${json.image.url}">`)
// }

// button.onclick=()=>fx()


// async function fx(){
//         await fetch(`${mainLink}/search/${search.value}`)
//         .then(response=>response.json())
//         .then (json=>image.innerHTML=`<img src="${json.results[0].image.url}">`)
//         getinfo.innerHTML='<button>Get Hero Info</button>'
//     }



// async function fx() {
//   await fetch(`${mainLink}/search/${search.value}`)
//     .then(response => response.json())
//     .then(json => {
//       image.innerHTML = `<img src="${json.results[0].image.url}">`
//       const name = `<h1>Name: ${json.results[0].name}</h1>`
//       const intelligence = `<h3>Intelligence: ${json.results[0].powerstats.intelligence}</h3>`
//       const strength = `<h3>Strength: ${json.results[0].powerstats.strength}</h3>`
//       description.innerHTML = `${name}${intelligence}${strength}`
//     })


// }


// async function fx() {
//   await fetch(`${mainLink}/search/${search.value}`)
//     .then(response => response.json())
//     .then(json => {
//       image.innerHTML = `<img src="${json.results[0].image.url}">`
//       const z = Object.entries(json.results[0].powerstats)
//       const y = `<h1>Name:${json.results[0].name}</h1>`
//       description.innerHTML= y
//       description.innerHTML+= '<h3>Stats:</h3>'
//       z.map(stat=>description.innerHTML+=`<p>{${stat}}</p>`)
//     })


//}


function fx() {
  fetch(`${mainLink}/search/${search.value}`)
    .then(response => response.json())
    .then(json => {
      image.innerHTML = `<img src="${json.results[0].image.url}">`
      const z = json.results[0].powerstats
      const y = `<h1>Name:'${json.results[0].name}'</h1>`
      description.innerHTML = y
      description.innerHTML += '<h3>Stats:</h3>'
      for (let key in z) {
        let emoji = {intelligence: '🧠', strength: '💪', speed: '⚡️', durability: '🏋️', power: '📊', combat: '⚔️'}
        description.innerHTML += `<p>${emoji[key]} ${key}: ${z[key]}</p>`
      }
    })
}
 

