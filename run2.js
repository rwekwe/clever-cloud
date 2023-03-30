#!/bin/sh
UUID=${UUID:-'61af74e8-2f50-4f47-95ba-613f997b5135'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
