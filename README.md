# Node Http Proxy

A docker implementation of the project http-party/node-http-proxy.

## Get Started

Startup the webserver:

```
docker run --rm -it -p 3000:3000/tcp -e 'ORIGIN_URL=https://httpbin.com' isacaraujo/node-http-proxy
```

Then, test it:

```
curl -i localhost:3000/get
```
