const theme = document.getElementById('theme');
if (theme) theme.onclick = () => document.body.classList.toggle('light');

const d = document.getElementById('date');
if (d) d.onclick = () => alert(new Date().toLocaleDateString());

setInterval(() => {
  document.title = new Date().toLocaleTimeString();
}, 1000);