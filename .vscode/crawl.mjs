import { JSDOM } from 'jsdom';

const dom = await JSDOM.fromURL('https://ohou.se/store');
const { head, body } = dom.window.document;

let articles = body.querySelectorAll("article");
for (let item of articles) {
  let image = item.querySelector('img.image').src;
  let title = item.querySelector('.today-deal-item__header__name').textContent;
  let rate = item.querySelector('.production-item-price__rate').textContent;
  let price = item.querySelector('.production-item-price__price').textContent;
  console.log({title, image, rate, price});
}
