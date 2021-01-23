export interface Url {
  location:string;
  code?: string;
}

export function getAllUrls(): Url[] {
  const testUrls: Url[] = [
    { location: 'https://google.com', code: 'AbCd1' }
  ];
  return testUrls;
}

export function getOneUrl(code: string): Url {
  const testUrl: Url = { location: 'https://google.com', code };
  return testUrl;
}

export function addUrl(newUrl: Url): Url {
  const url: Url = { location: newUrl.location, code: createCode(5) };
  return url;
}

function createCode(length): string {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)))
    .toString(36)
    .slice(1);
}

