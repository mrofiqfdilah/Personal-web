const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
tab.addEventListener('click', () =>{
  const target = document.querySelector(tab.dataset.target)

  tabContents.forEach(tc =>{
      tc.classList.remove('filters__active')
  })
  target.classList.add('filters__active')

  tabs.forEach(t =>{
      t.classList.remove('filter-tab-active')
  })
  tab.classList.add('filter-tab-active')
})
})

//gelap 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// topik yg dipilih (jika user memilih)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// mendapatkan tema saat ini yang dimiliki antarmuka dengan validasi class tema gelap
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// memvalidasi jika user sebelumnya memilih topik
if (selectedTheme) {
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
// Add or remove the dark / icon theme
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)
// We save the theme and the current icon that the user chose
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})

sssss
const sr = ScrollReveal({
origin: 'top',
distance: '60px',
duration: 2500,
delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})

