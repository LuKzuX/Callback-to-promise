//creation of the function that will get data from the database
const user = {
  get: (callback) => {
    setTimeout(() => {
      let err = null
      let data = { name: "Lucas" } //toggle this to undefined to test the error
      if (!data) {
        err = { error: "CANNOT GET DATA FROM DATABASE" }
        callback((err = err), (data = undefined))
      } else {
        callback((err = err), (data = data))
      }
    }, 500)
  },
}

//consuming the function using the callback
user.get((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

//converting the callback approach to a promise
const getPromisify = () => {
  return new Promise((resolve, reject) => {
    user.get((err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

//consuming the function using promises
getPromisify()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
