# Welcome to CMU KGSA!

This repository holds a source code for the CMU KGSA website.

***

### HOWTO: edit/improve the website

Please read this section if you are a CMU KGSA admin who is willing to improve our website.

Currently, there are four html pages in the website: *{index, about, life, career}.html*.

* **index.html** is the front page.
* **about.html** introduces purpose, function, structure and organization of CMU KGSA.
* **life.html** shows two life wikis: guide for settling in and general living tips in Pittsburgh. Unlike other wiki-like services, no interactive user-inputs are possible.
* **career.html** shows recent recruiting events (from cmu.kgsa.career google calendar) and an extensive guideline on how to support our group.

Currently our website is based on [Bootstrap](https://getbootstrap.com/), does not use any bulletinboard-like services such as xeboard. Main motivation behind this is to avoid using DB as it needs an active server to store and retrieve all website data. Instead, we decided to keep our website static, show minimal information that is enough to guide people to the appropriate sites (i.e, CMU KGSA Facebook group, KDisTech Facebook group, CMU KGSA Bridge homepage, etc.) to meet their needs. If for some reason this policy has changed, please feel free to imbed whatever services necessary to the site.

If you are trying to do a minor edit while keeping current Bootstrap-based website, referring to each html files mentioned above will be enough to figure out which parts to edit. If you have to add a new CSS rule or Javascript code, [*creative.css*](css/creative.css) and [*creative.js*](js/creative.js) holds stylesheet rules and Javascript codes for all four pages. For *career.html*, [*calendar.js*](js/calendar.js) contains JQuery code to read calendar events and prints recent events. Minified _*.js_ and _*.css_ files are imported to each page, so when you are dealing with these files, make sure that you first change link of each file from minified to normal version to see any changes.

Please contact [here](mailto:fishhyuk11@gmail.com) if there is anything we can help.

*last modified by Gihyuk Ko, 03/12/2018*