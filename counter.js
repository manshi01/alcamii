export function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
      counter = count
      element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
  }
  document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.toggle('show');
});
