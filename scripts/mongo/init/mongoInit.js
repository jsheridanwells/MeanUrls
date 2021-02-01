// use shell command to save env variable to a temporary file, then return the contents.
// source: https://stackoverflow.com/questions/39444467/how-to-pass-environment-variable-to-mongo-script/60192758#60192758
function getEnvVariable(envVar, defaultValue) {
  var command = run("sh", "-c", `printenv --null ${ envVar } >/tmp/${ envVar }.txt`);
  // note: 'printenv --null' prevents adding line break to value
  if (command != 0) return defaultValue;
  return cat(`/tmp/${ envVar }.txt`)
}

// create application user
var dbUser = getEnvVariable('APP_USER', 'app_user');
var dbPwd = getEnvVariable('APP_PWD', 'app_user()');
var dbName = getEnvVariable('DB_NAME', 'MeanUrls');
var dbCollectionName = getEnvVariable('DB_COLLECTION_NAME', 'Urls');
db = db.getSiblingDB(dbName);
db.createUser({
  'user': dbUser,
  'pwd': dbPwd,
  'roles': [
    {
      'role': 'dbOwner',
      'db': getEnvVariable('DB_NAME', 'MeanUrls')
    }
  ]
});

db.createCollection(dbCollectionName);
