const darkMode = document.querySelector('.dark-mode')
const seach = document.querySelector('.input-seach')
const selectRegion = document.querySelector('.select-region')
const boxRegion = document.querySelector('.box-region')
fetch('https://restcountries.com/v3.1/all')
  .then((resp) => {
    return resp.json()
  })
  .then((data) => {
    return data.forEach(region => {
      const article = document.createElement('article')
      article.classList.add('region', 'flex', 'flex-col', 'justify-between', 'rounded-xl', 'bg-[rgb(43,55,67)]', 'overflow-auto', 'w-56', 'h-100', 'my-14', 'mx-20')
      article.innerHTML = `
      <div class="w-full h-1/2 flex justify-center overflow-auto">
        <img class="flags h-full" src="${region.flags.png}" alt="bandera de cuba">
      </div>
      <div class="p-5 flex flex-col gap-4 text-lg text-white">
        <p class="name font-bold">${region.name.common}</p>
        <p class="population text-sm">Population: <span class="text-slate-300">${region.population}</span></p>
        <p class="continente text-sm">Region: <span class="text-slate-300">${region.region}</span></p>
        <p class="capital text-sm">Capital: <span class="text-slate-300">${region.capital}</span></p>
      </div>
      `
      boxRegion.append(article)

      selectRegion.addEventListener('change', () => {
        boxRegion.innerHTML = ''
        const filteredRegion = data.filter((region) => {
          return region.region === selectRegion.value
        })
        filteredRegion.forEach(region => {
          const article = document.createElement('article')
          article.classList.add('region', 'flex', 'flex-col', 'justify-between', 'rounded-xl', 'bg-[rgb(43,55,67)]', 'overflow-auto', 'w-56', 'h-100', 'my-14', 'mx-20')
          article.innerHTML = `
          <div class="w-full h-1/2 flex justify-center overflow-auto">
            <img class="flags h-full" src="${region.flags.png}" alt="bandera de cuba">
          </div>
          <div class="p-5 flex flex-col gap-4 text-lg text-white">
            <p class="name font-bold">${region.name.common}</p>
            <p class="population text-sm">Population: <span class="text-slate-300">${region.population}</span></p>
            <p class="continente text-sm">Region: <span class="text-slate-300">${region.region}</span></p>
            <p class="capital text-sm">Capital: <span class="text-slate-300">${region.capital}</span></p>
          </div>
          `
          boxRegion.append(article)
        })
        // if (seach.value === '' && selectRegion.value === '') {
        //   const article = document.createElement('article')
        //   article.classList.add('region', 'flex', 'flex-col', 'justify-between', 'rounded-xl', 'bg-[rgb(43,55,67)]', 'overflow-auto', 'w-56', 'h-100', 'my-14', 'mx-20')
        //   article.innerHTML = `
        //   <div class="w-full h-1/2 flex justify-center overflow-auto">
        //     <img class="flags h-full" src="${region.flags.png}" alt="bandera de cuba">
        //   </div>
        //   <div class="p-5 flex flex-col gap-4 text-lg text-white">
        //     <p class="name font-bold">${region.name.common}</p>
        //     <p class="population text-sm">Population: <span class="text-slate-300">${region.population}</span></p>
        //     <p class="continente text-sm">Region: <span class="text-slate-300">${region.region}</span></p>
        //     <p class="capital text-sm">Capital: <span class="text-slate-300">${region.capital}</span></p>
        //   </div>
        //   `
        //   boxRegion.append(article)
        // }
      })
      // seach.addEventListener('keyup', (event) => {
      //   boxRegion.innerHTML = ''
      //   const filterRegion = data.filter((region) => {
      //     return region.name.common.toLowerCase() === seach.vale.toLowerCase()
      //   })
      //   filterRegion.forEach(region => {
      //     if (event.key === 'Enter') {
      //       const article = document.createElement('article')
      //       article.classList.add('region', 'flex', 'flex-col', 'justify-between', 'rounded-xl', 'bg-[rgb(43,55,67)]', 'overflow-auto', 'w-56', 'h-100', 'my-14', 'mx-20')
      //       article.innerHTML = `
      //     <div class="w-full h-1/2 flex justify-center overflow-auto">
      //       <img class="flags h-full" src="${region.flags.png}" alt="bandera de cuba">
      //     </div>
      //     <div class="p-5 flex flex-col gap-4 text-lg text-white">
      //       <p class="name font-bold">${region.name.common}</p>
      //       <p class="population text-sm">Population: <span class="text-slate-300">${region.population}</span></p>
      //       <p class="continente text-sm">Region: <span class="text-slate-300">${region.region}</span></p>
      //       <p class="capital text-sm">Capital: <span class="text-slate-300">${region.capital}</span></p>
      //     </div>
      //     `
      //       boxRegion.append(article)
      //     }
      //   })
      // })
    })
  })
  .catch((error) => { console.error(error) })

// selectRegion.addEventListener('change', (data) => {
//   if (selectRegion.value === data.region) {
//     const article = document.createElement('article')
//     article.classList.add('region', 'flex', 'flex-col', 'justify-between', 'rounded-xl', 'bg-[rgb(43,55,67)]', 'overflow-auto', 'w-56', 'h-100', 'my-14', 'mx-20')
//     article.innerHTML = ''
//     article.innerHTML = `
//     <div class="p-5 flex flex-col gap-4 text-lg text-white">
//     <p class="font-bold">${data.name.common}</p>
//     <p class="text-sm">Population: <span class="text-slate-300">${data.population}</span></p>
//     <p class="text-sm">Region: <span class="text-slate-300">${data.region}</span></p>
//     <p class="text-sm">Capital: <span class="text-slate-300">${data.capital}</span></p>
//   </div>
//   `
//     boxRegion.append(article)
//   }
// })
