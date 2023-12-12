export function sizeFilter(bytesSize: any): number {
  // Bytes KB MB GB TB
  let num = 0
  while (Math.abs(bytesSize) >= 1024) {
    bytesSize /= 1024
    num++
    if (num == 4) break
  }
  return num
}

export function getUnit(num: number) {
  return ['Bytes', 'KB', 'MB', 'GB', 'TB'][num]
}

export function turnSize(size: any, nums: number) {
  let num = 0
  while (num <= nums) {
    size /= 1024
    num++
    if (num == nums) break
  }
  return Math.round(size)
}

export function dealWithSize(dataArr: number[], unit: number) {
  return dataArr.map((i: any) => turnSize(i, unit))
}
