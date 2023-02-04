let data = [
  {
    Monthly: ["$ 19.99", "$ 24.99", "$ 39.99"],
    Annual: ["$ 199.99", "$ 249.99", "$ 399.99"],
  },
];
let check = document.getElementById("toggle");
check.addEventListener("change", (e) => {
  let main = document.getElementById("main");
  if (e.target.checked) {
    for (let i = 0; i < 4; i++) {
      main.children[i].children[0].children[1].textContent = data[0].Monthly[i];
    }
  } else if (!e.target.checked) {
    for (let i = 0; i < 4; i++) {
      main.children[i].children[0].children[1].textContent = data[0].Annual[i];
    }
  }
});
