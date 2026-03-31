// ==UserScript==
// @name        wampserver_projects_links
// @namespace   Violentmonkey Scripts
// @match       http://localhost:8081/*
// @grant       none
// @version     2026.03.31.09.07
// @author      thomaslinux9
// @description Transforme les projets listés sur php wampserver en liens cliquables
// ==/UserScript==
javascript:(document.querySelectorAll(".projects li:not(.projectsdir)").forEach(projet => {
  projet.innerHTML = '<a href="/' + projet.innerText + '">' + projet.innerText + '</a>'
})) 
