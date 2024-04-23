
// An API provider is streaming a list of tuples that include an organization name, and an asset ID in a string format.

// Example Data:

// data_stream = “["Dept. Of Transportation#66ab8b0f-d5e6-480f-8db3-3e395bde6ae6", "Websites.com#0dcdad21-d97e-4dcb-9390-a8b61676237e","Dept. Of Transportation#ab80e3ab-8a8b-4f76-8381-5850e835e2d0"]”

// Construct an API or method that allows a user to query a single organization and return a list of assets owned by that organization.

// class Solution {
//   public static void main(String[] args) {
//     String data_stream = "[\"Dept. Of Transportation#66ab8b0f-d5e6-480f-8db3-3e395bde6ae6\", \"Websites.com#0dcdad21-d97e-4dcb-9390-a8b61676237e\",\"Dept. Of Transportation#ab80e3ab-8a8b-4f76-8381-5850e835e2d0\"]";

//     System.out.println(data_stream);

//   }
// }

const data = ["Dept. Of Transportation#66ab8b0f-d5e6-480f-8db3-3e395bde6ae6", "Websites.com#0dcdad21-d97e-4dcb-9390-a8b61676237e","Dept. Of Transportation#ab80e3ab-8a8b-4f76-8381-5850e835e2d0"]

// 1. Get data and store in the format that can be queried 
// 2. When API is made return assets realated to query

// An API provider is also sending log data related to the assets owned by an organization.

// Example Data:

// log_data = “["66ab8b0f-d5e6-480f-8db3-3e395bde6ae6#log_type_alert#1", "UUID2#log_type_debug#2", "66ab8b0f-d5e6-480f-8db3-3e395bde6ae6#log_type_info#1"]”

// Where the elements are UUID of the asset, the type of log entry, and the priority or level of the alert; where 1 is high.

// Contstruct an API or method that returns an ordered list organizations of or assets ranked by level of logs along with the the number of each type of log.

const logs = ["66ab8b0f-d5e6-480f-8db3-3e395bde6ae6#log_type_alert#2", "0dcdad21-d97e-4dcb-9390-a8b61676237e#log_type_debug#2", "66ab8b0f-d5e6-480f-8db3-3e395bde6ae6#log_type_info#1",
  "66ab8b0f-d5e6-480f-8db3-3e3953636356356#log_type_info#3"]

const fetchedData = new Map()

function getData(data) {
  data.forEach(cur => {
    const key = cur.split('#')[0]
    const value = cur.split('#')[1]
    if (fetchedData.has(key)) {
      const arr = fetchedData.get(key)
      if (arr.length > 0) {
        arr.push(value)
        fetchedData.set(key, arr)
      }
    } else {
      fetchedData.set(key, [value])
    }
  })
}

getData(data)
console.log(fetchedData)

function getAssets(name) {
  let result = "No data found"
  if (fetchedData.has(name)) {
    result = fetchedData.get(name)
  }
  return `Assets for requested name: ${name} are: ${result}`
}

console.log(getAssets("Dept. Of Transportation"))
console.log(getAssets("2345245"))


// const data = ["Dept. Of Transportation#66ab8b0f-d5e6-480f-8db3-3e395bde6ae6", "Websites.com#0dcdad21-d97e-4dcb-9390-a8b61676237e","Dept. Of Transportation#ab80e3ab-8a8b-4f76-8381-5850e835e2d0"]

// const logs = ["66ab8b0f-d5e6-480f-8db3-3e395bde6ae6#log_type_alert#1", "0dcdad21-d97e-4dcb-9390-a8b61676237e#log_type_debug#2", "66ab8b0f-d5e6-480f-8db3-3e395bde6ae6#log_type_info#1",
//   "66ab8b0f-d5e6-480f-8db3-3e3953636356356#log_type_info#3"]

// Map (
//   name: [assets]
// )

// Request name: string
// Response [{
//   id: string
//   logLevel: string
//   logType: string
// }]

const fetchedLogs = new Map()

function getLogs(data) {
  logs.forEach(cur => {
    const key = cur.split('#')[0]
    const logType = cur.split('#')[1]
    const logLevel = parseInt(cur.split('#')[2])
    if (fetchedLogs.has(key)) {
      const arr = fetchedLogs.get(key)
      if (arr.length > 0) {
        arr.push({
          logType,
          logLevel
        })
        fetchedLogs.set(key, arr)
      }
    } else {
      fetchedLogs.set(key, [{
        logType,
        logLevel
      }])
    }
  })
}

getLogs(logs)
console.log(fetchedLogs)

function getLogsByName(name) {
  let result = "No logs found"
  let ids = []
  const assetsArr = fetchedData.get(name)
  if (assetsArr && assetsArr.length > 0) {
    assetsArr.forEach(id => {
      if (fetchedLogs.has(id)){
        ids = fetchedLogs.get(id) //[ { logType: 'log_type_debug', logLevel: '2' } ],
        ids.map(cur => {cur.id = id})
      }
    })
    if (ids.length > 0) {
      ids.sort((a, b) => a.logLevel - b.logLevel)
      result = ids
    }
  }
  return result
}
console.log(getLogsByName("Dept. Of Transportation"))