import { PROJECT_PAGE_BREAKPOINT } from '../constants';

export function isMobile() {
  return window.matchMedia(`(max-device-width: ${PROJECT_PAGE_BREAKPOINT}px)`).matches;
}
