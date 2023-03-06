
let search = document.getElementById('search')
let button = document.getElementById('search-button')
let image = document.getElementById('image')
let description = document.getElementById('description-box')
let randomButton = document.getElementById('random-button')

// fetch('https://superheroapi.com/api.php/621052459849335/search/thanos')
// .then(response=>response.json())
// .then(json=>console.log(json))


let mainLink = 'https://superheroapi.com/api.php/621052459849335/'


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


async function fx() {
  await fetch(`${mainLink}/search/${search.value}`)
    .then(response => response.json())
    .then(json => {
      image.innerHTML = `<img src="${json.results[0].image.url}">`
      const z = Object.entries(json.results[0].powerstats)
      const y = `<h1>Name:${json.results[0].name}</h1>`
      description.innerHTML= y
      description.innerHTML+= '<h3>Stats:</h3>'
      z.map(stat=>description.innerHTML+=`<p>{${stat}}</p>`)
    })


}


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
 

 function fx2(){
  let y = Math.ceil(Math.random()*731)
    fetch(`${mainLink}${y}`)
    .then(response => response.json())
    .then(json => {
      image.innerHTML = `<img src="${json.image.url}">`
      const z = json.powerstats
      const y = `<h1>Name:'${json.name}'</h1>`
      description.innerHTML = y
      description.innerHTML += '<h3>Stats:</h3>'
      for (let key in z) {
        let emoji = {intelligence: '🧠', strength: '💪', speed: '⚡️', durability: '🏋️', power: '📊', combat: '⚔️'}
        description.innerHTML += `<p>${emoji[key]} ${key}: ${z[key]}</p>`
      }
    })
}


// const randomHero = () => {
//   return Math.ceil(Math.random()*731)
// }




// function getSuperHero(id) {
//   fetch(`${mainLink}${id}`)
//       .then(response => response.json())
//       .then(json => {
//         const superHero = json
//         showHeroInfo(superHero) })
// }


// const getSearchSuperHero = (name) => {
//   fetch(`${mainLink}/search/${name}`)
//     .then(response => response.json())
//     .then(json => {
//       const hero = json.results[0]
//       showHeroInfo(hero) 
//     })
// }


// const showHeroInfo = (character) => {
//   image.innerHTML = `<img src="${character.image.url}">`
//       const z = character.powerstats
//       const y = `<h1>Name:'${character.name}'</h1>`
//       description.innerHTML = y
//       description.innerHTML += '<h3>Stats:</h3>'
//       for (let key in z) {
//         description.innerHTML += `<p>${statToEmoji[key]} ${key}: ${z[key]}</p>`
//       }
// }





// const statToEmoji = {
//   intelligence: '🧠',
//   strength: '💪',
//   speed: '⚡',
//   durability: '🏋️‍♂️',
//   power: '📊',
//   combat: '⚔️',
// }


// button.onclick=()=>getSearchSuperHero(search.value)

// randomButton.onclick=()=>getSuperHero(randomHero())























// const randomHero = () => {
//   const numberOfHeroes = 731
//   return Math.floor(Math.random() * numberOfHeroes) + 1
// }


// function getSuperHero(id) {
//     fetch(`${mainLink}${id}`)
//       .then(response => response.json())
//       .then(json => {
//         console.log(json.powerstats)
//         const superHero = json
//         showHeroInfo(superHero) 
//       })
//   }

  // const statToEmoji = {
  //   intelligence: '🧠',
  //   strength: '💪',
  //   speed: '⚡',
  //   durability: '🏋️‍♂️',
  //   power: '📊',
  //   combat: '⚔️',
  // }

  // const showHeroInfo = (character) => {
  //   const name = `<h2>${character.name}</h2>`
  
  //   const img = `<img src="${character.image.url}" height=200 width=200/>`
    
  //   const stats = Object.keys(character.powerstats).map(stat => {
  //     return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  //   }).join('')
    
  //   heroImageDiv.innerHTML = `${name}${img}${stats}`
  // }


  // const getSearchSuperHero = (name) => {
  //   console.log(searchInput.value)
  //   fetch(`${BASE_URL}/search/${name}`)
  //     .then(response => response.json())
  //     .then(json => {
  //       const hero = json.results[0]
  //       showHeroInfo(hero) 
  //     })
  // }
  


  
  // newHeroButton.onclick = () => getSuperHero(randomHero())
  
  // searchButton.onclick = () => getSearchSuperHero(searchInput.value)