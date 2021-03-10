import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent); 

export function isMobile(): boolean {
  return (md.mobile() || '').length > 0;
}

export function isChrome(): boolean {
  return (md as any).ua.includes('Chrome');
}

export function isFireFox(): boolean {
  return (md as any).ua.includes('Firefox');
}

export function isSafari(): boolean {
  return (md as any).ua.includes('Safari') && !isChrome();
}

export function isIPhone(): boolean {
  return md.is('iPhone');
}

export function isiOS(): boolean {
  return md.is('iOS');
}

export default {
  isMobile,
  isChrome,
  isFireFox,
  isSafari,
  isIPhone,
  isiOS,
}