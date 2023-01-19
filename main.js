import createAlertTailwind from './src/helpers/createAlertTailwind'
const darkMode = document.querySelector('.dark-mode')
const seach = document.querySelector('.input-seach')
const selectRegion = document.querySelector('.select-region')
const boxRegion = document.querySelector('.box-region')
const url = 'https://restcountries.com/v3.1/all'
let allRegion = []

function createHTML (region) {
  const regionHTML = document.createElement('article')
  regionHTML.classList.add('region', 'flex', 'flex-col', 'justify-between', 'rounded-xl', 'dark:bg-[rgb(43,55,67)]', 'overflow-auto', 'w-56', 'h-100', 'my-14', 'mx-20', 'shadow-lg')
  regionHTML.innerHTML = `
    <div class="w-full shadow-lg h-1/2 flex justify-center overflow-auto">
      <img class="flags h-full" src="${region.flags.png}" alt="bandera de cuba">
    </div>
    <div class="p-5 title flex flex-col gap-4 text-lg dark:text-white">
      <p class="name font-bold">${region.name.common}</p>
      <p class="population text-sm">Population: <span class="dark:text-slate-300">${region.population}</span></p>
      <p class="continente text-sm">Region: <span class="dark:text-slate-300 text-slate-600">${region.region}</span></p>
      <p class="capital text-sm">Capital: <span class="dark:text-slate-300 text-slate-600">${region.capital}</span></p>
    </div>
    `

  return regionHTML
}

const printRegion = (allCountri) => {
  // Borramos el contenido de toda la caja que contiene las banderas

  boxRegion.innerHTML = ''

  // Generamos el contenido de las banderas

  allCountri.forEach((region) => {
    const regionHTML = createHTML(region)
    // Lo llevamos al DOM
    boxRegion.append(regionHTML)
  })
}

const getRegionFromAPI = () => {
  fetch(url)
    .then(resp => resp.json())
    .then(allCountri => {
      allRegion = allCountri
      printRegion(allCountri)
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

const dark = document.querySelector('html')
darkMode.onclick = () => {
  // document.html.classList.toggle('dark')
  dark.classList.toggle('dark')
}
