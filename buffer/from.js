const bufFrom = Buffer.from('hello buffer');
// 控制台输出形式：ASCII 16进制形式
// console.log(bufFrom);    // 输出 <Buffer 68 65 6c 6c 6f 20 62 75 66 66 65 72>

// 申请一个大小
const alloc = Buffer.alloc(32);
alloc.write('123456789')
// console.log(alloc);  // <Buffer 31 32 33 34 35 36 37 38 39 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
// console.log(alloc.toString())    // 123456789


const fs = require('fs');
fs.readFile('./898V2%$AWDH3KMR5)UYU(EL.jpg',(err,data) => {
  // console.log(data)
  console.log(Buffer.isBuffer(data))
  fs.writeFile('./cxk.png',data,() => {})
  const anotherBuffer = Buffer.from(data).toString('base64');
  // console.log(anotherBuffer)
  const decodeImage = Buffer.from(anotherBuffer,'base64');
  console.log(Buffer.compare(data,decodeImage))
  fs.writeFile('cxk1.jpg',decodeImage,() => {})
})