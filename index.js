function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${katzDeliLine.slice(-1)}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine=[]){
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}`;
  }
}

function currentLine(katzDeliLine) {
  if katzDeliLine=[] {
    return `The line is currently empty.`
  }
}
