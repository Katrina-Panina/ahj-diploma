import Chaos from './Chaos';

// const chaos = new Chaos(document.querySelector('.chaos_organizer'), 'http://localhost:7070');
const chaos = new Chaos(document.querySelector('.chaos_organizer'), 'https://katrina-heroku.herokuapp.com');
chaos.init();
