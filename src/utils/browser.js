import { PROJECT_PAGE_BREAKPOINT } from '../constants';

export function isMobile() {
  return window.innerWidth < PROJECT_PAGE_BREAKPOINT;
}
