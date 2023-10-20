function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

const scriptURL =
  'https://script.google.com/macros/s/AKfycbyfy6EjcMk_f_5ATZcyGfJ9WjRIcm69Ya5LXf8PA_9_YhEqOQeB5G4a-XusX9JyI28/exec';
const form = document.forms['contact-form'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = 'Message sent successfully';
      setTimeout(function () {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
