## 编码
计算机世界都是二进制 0 / 1，需要一个规则，把这些二进制对应到我们的字符串。
utf-8 编码需要发送的字符串   接收方再用utf-8解码
## 常见的编码
- 16进制 hex
- unicode 编码：&#xe607; 计算机界的字符标准，去哪世界的语言文字，都有一个对应的unicode。utf-8就是Unicode的一种实现
- base64：用64个字符来表示一段二进制

##传输
流
```js
fs.createReadStream().pipe(fs.WriteStream)
```
流的好处：
不用一次性读取所有的内容，中间有一个管道源源不断的传输数据，
A(读) ——> B(写)
数据不对等，
buffer 有单独的空间管理这些数据。
缓冲一下传输速度，这个单独的区域就是buffer

## Buffer 基础
```js
{ [Function: Buffer]
  poolSize: 8192,   // 8kb
  // buffer 的创建方式
  from: [Function: from],
  of: [Function: of],
  alloc: [Function: alloc],
  allocUnsafe: [Function: allocUnsafe],
  allocUnsafeSlow: [Function: allocUnsafeSlow],
  isBuffer: [Function: isBuffer],
  compare: [Function: compare],
  isEncoding: [Function: isEncoding],
  concat: [Function: concat],
  byteLength: [Function: byteLength],
  [Symbol(kIsEncodingSymbol)]: [Function: isEncoding] }
```
<Buffer 68 65 >
控制台输出形式：ASCII 16进制形式