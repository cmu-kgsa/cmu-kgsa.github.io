# Welcome to CMU KGSA!

This repository holds a source code for the website for CMU KGSA.

***

### HOWTO: edit/improve the website

If you are a CMU KGSA admin who is willing to improve this website, please read this section.

Currently, there are four html pages that will be most frequently visited: *{index, about, life, career}.html*.

* **index.html** holds the front page.
* **about.html** introduces purpose, function, structure and organization of CMU KGSA.
* **life.html** shows two life wikis: settling in guide and living tips. It is a static page without any editing function. It would be good to implement such user-editing 
* **career.html** presents recent recruiting events (pulled from cmu.kgsa.career google calendar) and sponsorship

Currently our website is based on [Bootstrap](https://getbootstrap.com/), does not use any open source 'board' services like xeboard. Reasoning behind this is to not use database, as it needs an actual server to store all website data. Instead, we decided to keep our website static, show minimal information necessary, and guide people to the adequate websites (i.e, CMU KGSA Facebook group, KDisTech Facebook group, CMU KGSA Bridge homepage, etc.) for their purposes. If for some reason this has changed, please feel free to embed database-based services to the site.

If you are trying to do a minor edit to the website without altering current Bootstrap-based theme, referring to each html files will be enough to figure out which section to edit. If you have to add a new CSS rule or Javascript code, [*creative.css*](/tree/master/css/creative.css) and [*creative.js*](/tree/master/js/creative.js) holds stylesheet rules and Javascript codes for all four pages. For *career.html*, [*calendar.js*](/tree/master/js/calendar.js) contains JQuery code to read calendar events and prints recent events. When you are dealing with these files, please make sure that you first change link of each file from minified version to normal version in the html page to see any changes.

Please contact [here](mailto:fishhyuk11@gmail.com) if there is anything we can help.

*last modified by Gihyuk Ko, 12/02/2017*