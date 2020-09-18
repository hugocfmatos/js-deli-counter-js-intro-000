function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${katzDeliLine.slice(-1)}. You are number ${katzDeliLine.length} in line.`
}
