/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('body.controller-issues.action-show h2', {}, function (elem) {
  var link, description,
    numElem = $('h2'),
    titleElem = $('.subject h3'),
    projectElem = $('h1');

  description = titleElem.innerText;
  if (numElem !== null) {
    description = numElem.innerText + " " + description;
  }

  link = togglbutton.createTimerLink({
    className: 'redmine',
    description: description,
    projectName: projectElem && projectElem.textContent
  });

  $('h2').appendChild(link);
});
