const now = new Date();
const datetime = document.getElementById("datetime");
datetime.value = `${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`;