// ==UserScript==
// @name         XueQiu
// @namespace    http://tampermonkey.net/
// @version      2024-07-09
// @description  try to take over the world!
// @author       You
// @match        https://xueqiu.com/
// @match        *://xueqiu.com/*
// @match        *://*.xueqiu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xueqiu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.title = 'INVESTMENT'

    const hideStyleStr = 'display: none;';

    // remove element by class name 'nav stickyFixed'
    document.querySelector('.nav.stickyFixed').style = hideStyleStr;

    // find user__col--middle's first child div
    const user__col = document.querySelector('.user__col--middle');
    const firstChild = user__col.firstElementChild;

    // remove firstChild's children but class name 'home-timeline'
    for (let i = 0; i < firstChild.children.length; i++) {
        const child = firstChild.children[i];
        if (child.className !== 'home-timeline') {
          child.style = hideStyleStr;
        }
    }

    // remove user__col's siblings
    user__col.nextElementSibling.style = hideStyleStr;

    // remove left info
    document.querySelector('.user__col--lf').style = hideStyleStr;

    // cancel fixed tabs by modify style content
    const hideTabNames = ['视频', '达人', '私募', 'ETF']
    const tabEl = document.querySelector('.sticky-content-fixed');
    tabEl.style = 'position: relative;';
    for (let i = 0; i < tabEl.children.length; i++) {
        const x = tabEl.children[i];
        if (hideTabNames.includes(x.innerText)) {
            x.style = hideStyleStr;
        }
    }

    // remove chat
    document.querySelector('.snbim-mainview-wrap').style = hideStyleStr;

    // remove ad
    const taichiBubble = document.querySelector('.taichi__bubble');
    if (taichiBubble) {
      taichiBubble.style = hideStyleStr;
    }
})();
