const fs = require('fs');
const file = process.argv[2];
let content = fs.readFileSync(file, { encoding: 'utf-8' });

const { JSDOM } = require('jsdom');
const dom = new JSDOM(content);
const { head, body } = dom.window.document;
const title = head.querySelector('title');
title && head.removeChild(title);
body.replaceWith(...body.children);
head?.replaceWith(...head?.children);

content = dom.serialize();
content = content.replace('<!DOCTYPE html>', `<!-- ${file} -->\n`);
content = content.replace('<!-- 리액트를 사용하는 코드 입력 -->', `<!-- ${file} -->`);
content = content.replace(/<\/?html>/g, '');
content = content.replaceAll('@17', '@18');

fs.writeFileSync(file, content);
