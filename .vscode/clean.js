const fs = require('fs');
const file = process.argv[2];
let content = fs.readFileSync(file, { encoding: 'utf-8' });

const { JSDOM } = require('jsdom');
const dom = new JSDOM(content);
const { head, body } = dom.window.document;
const title = head.querySelector('title');
if (title.innerHTML == '') {
    head.removeChild(title);
} else {
    console.log(title.innerHTML);
}
head?.replaceWith(...head?.children);
if (body.innerHTML.trim() == '') {
    body.parentNode.removeChild(body);
}

content = dom.serialize();
content = content.replace('<!DOCTYPE html><html>', `<!-- ${file} -->\n`);
content = content.replace('<!-- 리액트를 사용하는 코드 입력 -->', `<!-- ${file} -->`);
content = content.replace('</html>', '');
content = content.replaceAll('@17', '@18');

fs.writeFileSync(file, content);
