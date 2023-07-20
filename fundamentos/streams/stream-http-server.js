import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberSteam extends Transform {
  _transform(chunk, encoding, callback) {
    const tranformed = Number(chunk.toString()) * -1;

    console.log(tranformed);

    callback(null, Buffer.from(String(tranformed)));
  }
}

const server = http.createServer((req, res) => {

 

  console.log(fullStreamContent)

  return res.end(fullStreamContent)


  // return req
  // .pipe(new InverseNumberSteam())
  // .pipe(res);
});

server.listen(3334);
