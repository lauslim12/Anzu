#!/bin/bash
# Parsing variables.
LINK_TO_WEBSERVER = $1

# Keep up with the repository.
git pull origin master

# Ping the connection to the webserver where Anzu is deployed.
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET $LINK_TO_WEBSERVER

# Run the script by using the following command: bash ./main.sh <link_to_webserver>
