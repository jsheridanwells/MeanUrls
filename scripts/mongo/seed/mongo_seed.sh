#!/bin/bash
if [ -f "/MOCK_DATA.json" ]; then
  FILE="/MOCK_DATA.json"
elif [ -f "./MOCK_DATA.json" ]; then
  FILE="./MOCK_DATA.json"
else
  echo "Mock data file not found. Make sure container has a MOCK_DATA.json file for this script to work"
  exit 1
fi

mongoimport --host $MONGO_HOSTNAME \
  --authenticationDatabase $DB_NAME \
  --username $APP_USER --password $APP_PWD \
  --db $DB_NAME \
  --collection $DB_COLLECTION_NAME \
  --file $FILE --jsonArray
