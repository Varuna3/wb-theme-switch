let count = 0;
const h1 = document.getElementById("counter");
const buttons = document.getElementsByTagName("button");

const increase = () => {
  count++;
  h1.innerText = count;
};

const decrease = () => {
  count--;
  h1.innerText = count;
};

const reset = () => {
  count = 0;
  h1.innerHTML = `<mark>${count}</mark>`;
};

const selectTheme = (theme) => {
  document.getElementsByTagName("body")[0].className = `${theme}`;
  document.getElementsByTagName("main")[0].className = `${theme}`;
  for (const b in buttons) {
    b.className = `${theme}`;
  }
};
