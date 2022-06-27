var headers = new Headers();
headers.append('Service-Worker-Allowed', '/');
console.log(headers.get('Service-Worker-Allowed'));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("sw.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}