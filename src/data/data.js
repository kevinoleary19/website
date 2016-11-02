import datepicker from '../images/datepicker.png';
import nusci from '../images/nusci-cover.png';

export const projects = [
  {
    header: 'Angular 2 Datepicker',
    style: 'project--datepicker',
    description: 'A minimalist datepicker library made for the front end web \
                  framework Angular 2. Inspired by Google’s material design.',
    technology: ['Angular 2', 'Typescript', 'CSS'],
    src: datepicker
  },
  {
    header: 'NUSCI Magazine',
    style: 'project--nusci-mag',
    description: 'Head designer for Northestern University science magazine. \
                  Led rebrand of magazine and oversaw team of 6 designers.',
    technology: ['Adobe Indesign', 'Adobe Illustrator', 'Adobe Photoshop'],
    src: nusci
  },
  {
    header: 'NUSCI Website',
    style: 'project--nusci-web',
    description: 'Website for NUSCI magazine to publish content \
                  and give brand online presence.',
    technology: ['Wordpress', 'Unix', 'PHP'],
    src: nusci
  },
  {
    header: 'IGEM 2015 Website',
    style: 'project--igem',
    description: "Website for Northeastern University's 2015 IGEM team.",
    technology: ['jQuery', 'CSS', 'HTML'],
    src: nusci
  }
];
