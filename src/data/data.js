// @flow
import cognition from '../images/cognition.png';
import datepicker from '../images/datepicker.png';
import igem from '../images/igem.png';
import nusci from '../images/nusci-cover.png';

import { ProjectType } from '../types/types';

export const projects: Array<ProjectType> = [
  {
    header: "Angular 2 Datepicker",
    style: "project--datepicker",
    description: "An opensource datepicker library made for the front end web " +
                  "framework Angular 2. Inspired by Google’s material design.",
    technology: ["Angular 2", "Typescript"],
    src: datepicker
  },
  {
    header: "Cognition Lab Website",
    style: "project--cognition",
    description: "Website created created for laboratory in cognition class" +
                  "that handled creating and modifying user objects to store " +
                  "answers to videos and other psychological tests.",
    technology: ["Ruby on Rails", "Coffeescript"],
    src: cognition
  },
  {
    header: "NUSCI Magazine",
    style: "project--nusci-mag",
    description: "Head designer for Northestern University science magazine. " +
                  "Led rebrand of magazine and oversaw team of 6 designers.",
    technology: ["Adobe Indesign", "Adobe Illustrator", "Adobe Photoshop"],
    src: nusci
  },
  {
    header: "NUSCI Website",
    style: "project--nusci-web",
    description: "Website for NUSCI magazine to publish content" +
                  "and give brand online presence.",
    technology: ["Wordpress", "Unix", "PHP"],
    src: nusci
  },
  {
    header: "IGEM 2015 Website",
    style: "project--igem",
    description: "Website for Northeastern University's 2015 IGEM team.",
    technology: ["jQuery", "CSS", "HTML"],
    src: igem
  }
];
