



const openIcon = document.getElementById('open-icon');
const menu = document.getElementById('n-links');
const themeIcon = document.getElementById('theme-icon')

//---------SHOW-MENU EVENT------------------//
function showMenu(){
    menu.classList.toggle('showtransition')
}

//----------TOGGLE-THEME------------------//
function toggleTheme(){
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme')){
        themeIcon.classList.replace('fa-moon','fa-sun')
        themeIcon.style.color='white';
    }
    else{
        themeIcon.classList.replace('fa-sun','fa-moon')
        themeIcon.style.color='black';
    }
}


//---------------MENU-ICON HANDLER---------------//
openIcon.addEventListener('click', showMenu)

//---------------THEME-ICON HANDLER---------------//
themeIcon.addEventListener('click', toggleTheme)