
#!/usr/bin/bash

rsync -rlptzv --progress --exclude=.git --exclude=.vscode --exclude=/node_modules --exclude=/build /home/dany/projects/github/seesee/gateway/client/* ubuntu@34.234.108.25:/home/ubuntu/testing/gateway/client"