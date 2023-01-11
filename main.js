import createAlertTailwind from './src/helpers/createAlertTailwind'
const darkMode = document.querySelector('.dark-mode')
const seach = document.querySelector('.input-seach')
const selectRegion = document.querySelector('.select-region')
const boxRegion = document.querySelector('.box-region')
const url = 'https://restcountries.com/v3.1/all'
let allRegion = []
function createAPI (region) {
  const regionHTML = document.createElement('article')
  regionHTML.classList.add('region', 'flex', 'flex-col', 'justify-between', 'rounded-xl', 'bg-[rgb(43,55,67)]', 'overflow-auto', 'w-56', 'h-100', 'my-14', 'mx-20', 'shadow-lg')
  regionHTML.innerHTML = `
    <div class="w-full h-1/2 flex justify-center overflow-auto">
      <img class="flags h-full" src="${region.flags.png}" alt="bandera de cuba">
    </div>
    <div class="p-5 title flex flex-col gap-4 text-lg text-white">
      <p class="name font-bold">${region.name.common}</p>
      <p class="population text-sm">Population: <span class="text-slate-300">${region.population}</span></p>
      <p class="continente text-sm">Region: <span class="text-slate-300">${region.region}</span></p>
      <p class="capital text-sm">Capital: <span class="text-slate-300">${region.capital}</span></p>
    </div>
    `

  return regionHTML
}

const printRegion = (nation) => {
  // Borramos el contenido de toda la caja que contiene las banderas

  boxRegion.innerHTML = ''

  // Generamos el contenido de las banderas

  nation.forEach((region) => {
    const regionHTML = createAPI(region)
    // Lo llevamos al DOM
    boxRegion.append(regionHTML)
  })
}

const getRegionFromAPI = () => {
  fetch(url)
    .then(resp => resp.json())
    .then(region => {
      allRegion = region
      printRegion(region)
    })
    .catch(err => createAlertTailwind(err.message))
}

getRegionFromAPI()

selectRegion.addEventListener('change', () => {
  if (selectRegion.value !== '') {
    const filteredRegion = allRegion.filter((region) => {
      return region.region === selectRegion.value
    })
    printRegion(filteredRegion)
  } else {
    printRegion(allRegion)
  }
})

seach.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const filteredSeach = allRegion.filter((region) => {
      return region.name.common.toLowerCase().includes(seach.value.toLowerCase())
    })
    console.log('hola')
    printRegion(filteredSeach)
  }
})

const darkModeText = document.querySelector('.paragraph')
const title = document.querySelector('.title')
const header = document.querySelector('.header')
const h1 = document.querySelector('h1')
const moon = document.querySelector('.moon')
const lupa = document.querySelector('.lupa')
console.log(darkModeText)
darkMode.onclick = () => {
  document.body.classList.toggle('bg-[rgb(32,45,54)]')
  document.body.classList.toggle('bg-white')
  header.classList.toggle('bg-[rgb(43,55,67)]')
  header.classList.toggle('bg-white')
  h1.classList.toggle('text-white')
  h1.classList.toggle('text-black')
  moon.classList.toggle('text-white')
  moon.classList.toggle('text-black')
  darkModeText.classList.toggle('text-white')
  darkModeText.classList.toggle('text-black')
  seach.classList.toggle('bg-[rgb(43,55,67)]')
  seach.classList.toggle('bg-white')
  lupa.classList.toggle('bg-[rgb(43,55,67)]')
  lupa.classList.toggle('bg-white')
  selectRegion.classList.toggle('bg-[rgb(43,55,67)]')
  selectRegion.classList.toggle('bg-white')
  lupa.classList.toggle('text-white')
  lupa.classList.toggle('text-black')
  selectRegion.classList.toggle('text-white')
  selectRegion.classList.toggle('text-black')
}
console.log(title)
