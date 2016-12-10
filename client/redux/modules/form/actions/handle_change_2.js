/*
 * I made it this way to break the form state handling into an object for each hanlder
 */
export default function (type) {
  return function ({key, value}) {
    return {
      type,
      key,
      value
    }
  }
}
