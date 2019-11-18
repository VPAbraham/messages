const testNum = (num) => {
  return new Promise = (resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open('GET', num);

    req.onload = () => {
      if (req.status > 10) {
        resolve(`${num} is greater than 10, success!`)
      }
      else {
        reject(Error(`${num} is less than 10, error!`))
      }
    }
  }

}

makeAllCaps = (vals) => {
  return new Promise = (resolve, reject)  
  
}