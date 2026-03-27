import { decodeVIN } from './decoder/vinDecoder.js'

const result = decodeVIN('JTDKW123200207137') // 2004 Toyota echo
const result2 = decodeVIN('MNALSFD403W349328') // 2003 Ford Courier
const result3 = decodeVIN('WBACB62070EA36519') // 1998 BMW 3 Series

console.log(result, result2, result3)