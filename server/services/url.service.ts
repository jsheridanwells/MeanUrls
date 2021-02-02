import { Mongo } from '../data/mongo';
export interface Url {
  location:string;
  code?: string;
}

export async function getAllUrls(): Promise<Url[]>{
  const urls = await Mongo.client.db('MeanUrls').collection('Urls').find({}).toArray();
  return urls;
}

export async function getUrlByCode(code: string): Promise<Url> {
  const url = await Mongo.client.db('MeanUrls').collection('Urls').findOne({ code });
  return url;
}

export async function addUrl(newUrl: Url): Promise<Url> {
  const url: Url = { location: newUrl.location, code: createCode(7) };
  const collection = await Mongo.client.db('MeanUrls').collection('Urls');
  await collection.insertOne(url);
  return url;
}

function createCode(length: number): string {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)))
    .toString(36)
    .slice(1);
}
