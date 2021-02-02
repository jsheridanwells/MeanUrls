import * as mongo from 'mongodb';

export interface MongoDbConfig {
  appUser: string;
  appPassword: string;
  dbName: string;
  dbCollectionName: string;
  hostName: string;
  mongoPort: string | number;
}

export class Mongo {
  public static client: mongo.MongoClient;

  public static buildMongoUrl(config: MongoDbConfig): string {
    return 'mongodb://'
      + `${ config.appUser }:${ encodeURIComponent(config.appPassword) }`
      + `@${ config.hostName }:${ config.mongoPort }`
      + `/${ config.dbName }`;
  }

  public static connect(url: string): Promise<any> {
    return new Promise<any>((res, rej) => {
      mongo.MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err
        : any, client: mongo.MongoClient) => {
        if (err) rej(err);
        else {
          Mongo.client = client;
          res(client);
        }
      });
    })
  }

  public static disconnect(): void {
    Mongo.client.close();
  }
}
