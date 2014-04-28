/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('body.controller-issues.action-show h2', {}, function (elem) {
  var link, description, project,
    numElem = $('h2'),
    titleElem = $('.subject h3'),
    projectElem = $('h1');

  description = titleElem.innerText;
  if (numElem !== null) {
    description = numElem.innerText + " " + description;
  }
  project = projectElem.innerText;
  project = project.substring(project.length - project.split('').reverse().join('').search('»') + 1);

  link = togglbutton.createTimerLink({
    className: 'redmine',
    description: description,
    projectName: projectElem && project
  });

  $('h2').appendChild(link);
});
