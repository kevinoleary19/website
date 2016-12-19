// @flow
import cognition from '../new-images/cognition.png';
import datepicker from '../new-images/datepicker.png';
import igem from '../new-images/igem.png';
import nusci from '../new-images/nusci-cover.png';

import { ProjectType } from '../types/types';

export const projects: Array<ProjectType> = [
  {
    header: "Angular 2 Datepicker",
    description: "An opensource datepicker library made for the front end web " +
                  "framework Angular 2. Inspired by Google’s material design.",
    technology: ["Angular 2", "Typescript"],
    src: datepicker,
    githubLink: "https://github.com/koleary94/Angular-2-Datepicker"
  },
  {
    header: "Cognition Lab Website",
    description: "Website created for laboratory in cognition class. " +
                  "Handled creating and modifying user objects to store " +
                  "answers to videos and other psychological tests.",
    technology: ["Ruby on Rails", "Coffeescript"],
    src: cognition,
    githubLink: "https://github.com/koleary94/CognitionLab"
  },
  {
    header: "NUSCI Magazine",
    description: "Head designer for Northestern University science magazine. " +
                  "Led rebrand of magazine and oversaw team of 6 designers.",
    technology: ["Adobe Indesign", "Adobe Illustrator", "Adobe Photoshop"],
    src: nusci
  },
  {
    header: "IGEM 2015 Website",
    description: "Website for Northeastern University's 2015 IGEM team.",
    technology: ["jQuery", "CSS", "HTML"],
    src: igem,
    githubLink: null,
    webLink: "http://2015.igem.org/Team:Northeastern_Boston"
  }
];
