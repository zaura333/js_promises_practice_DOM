var e=new Promise(function(e,t){document.addEventListener("mouseup",function(t){0===t.button&&e("First promise was resolved")}),setTimeout(function(){return t(Error("First promise was rejected"))},3e3)}),t=new Promise(function(e){document.addEventListener("mouseup",function(t){(0===t.button||2===t.button)&&e("Second promise was resolved")})}),n=new Promise(function(e){var t,n;document.addEventListener("mouseup",function(o){0===o.button&&(n=!0),2===o.button&&(t=!0),n&&t&&e("Third promise was resolved")})});function o(e){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.classList.add("success"),t.innerText=e,document.body.appendChild(t)}function i(e){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.classList.add("warning"),t.innerText=e.message,document.body.appendChild(t)}e.then(o).catch(i),t.then(o).catch(i),n.then(o).catch(i);
//# sourceMappingURL=index.73a997ac.js.map
