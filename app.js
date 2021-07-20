const upcoming = document.getElementById('upcoming');
const previous = document.getElementById('previous');
const upcards = document.getElementById('event-cards1');
const preCards = document.getElementById('event-cards2');

upcoming.addEventListener('click', ()=>{
    upcards.style.display = "block";
    preCards.style.display = "none";
    previous.classList.add('btn-inactive');
    previous.classList.remove('btn-active');
    upcoming.classList.add('btn-active');
    upcoming.classList.remove('btn-inactive');
    console.log("hello");
});

previous.addEventListener('click', ()=>{
    upcards.style.display = "none";
    preCards.style.display = "block";
    previous.classList.add('btn-active');
    previous.classList.remove('btn-inactive');
    upcoming.classList.add('btn-inactive');
    upcoming.classList.remove('btn-active');
    console.log("hello");
});