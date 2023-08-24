// get query variable from url
export function getQueryVariable(variable = '', url = window.location.search || window.location.hash) {
  const str = variable.toLowerCase();
  const search = url.split('?');
  if (search.length > 1) {
    const vars = search[1].split('&');
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (pair[0].toLowerCase() === str) { return decodeURIComponent(pair[1]); }
    }
  }
  return (false);
}

export function getRandom() {
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  return randomBuffer[0] / (0xffffffff + 1);
}

export function fisrtToLowercase(str: string) {
  return str.charAt(0).toLowerCase() + str.substr(1);
}
