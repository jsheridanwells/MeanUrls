FROM mongo:latest
COPY ./mongo_seed.sh /mongo_seed.sh
COPY ./MOCK_DATA.json /MOCK_DATA.json
ENTRYPOINT ["/bin/bash", "/mongo_seed.sh"]
