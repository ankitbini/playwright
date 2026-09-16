set env=%1
set tag=%2

set COMMON_CONFIG_FILE=env/common.env
set NODE_ENV=%env%

npm run cucumber -- --profile %tag% || npm run postcucumber