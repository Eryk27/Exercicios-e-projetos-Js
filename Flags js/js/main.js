import flags from './model/flags.js';
const main = document.querySelector('main');
let flagsHTML = '';

for (const flag of flags) {
  flagsHTML += `
    <div class="flag col-2 my-2 text-center">
      <img src="${flag.image}" alt="${flag.name}">
      <p>${flag.name}</p>
    </div>
  `;
}


main.innerHTML = flagsHTML;