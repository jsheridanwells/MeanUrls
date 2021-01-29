export interface Url {
  location:string;
  code?: string;
}

export function getAllUrls(): Url[] {
  return testUrlList;
}

export function getUrlByCode(code: string): Url {
  return testUrlList.filter(url => url.code === code)[0];
}

export function addUrl(newUrl: Url): Url {
  const url: Url = { location: newUrl.location, code: createCode(7) };
  return url;
}

function createCode(length: number): string {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)))
    .toString(36)
    .slice(1);
}

const testUrlList: Url[] = [
    { location: 'https://google.com', code: 'AaBbCc1' },
    { location: 'https://jeremywells.io', code: 'ZzYyXx9' },
    { location: 'https://dev.to', code: 'JjKkLl5' },
];
