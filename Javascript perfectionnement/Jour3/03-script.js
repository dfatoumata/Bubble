let url = window.location.href
let windowWidth = window.outerWidth
export let windowHeight = window.outerHeight
export default function informationsWindow() {
    console.log(`${url} ${windowWidth}px x ${windowHeight}px`);
}