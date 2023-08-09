
const createEmployeeRecord = function(array) {
    const eRecord = {
        firstName: `${array[0]}`,
        familyName: `${array[1]}`,
        title: `${array[2]}`,
        payPerHour: `${array[3]}`,
        timeInEvents: [],
        timeOutEvents: []

    }
    return eRecord
}

function createEmployeeRecords(data) {
    const obj = []
    for (let i = 0; i < data.length; i++) {
    obj.push(createEmployeeRecord(data[i]))
    }
    return obj
}

function createTimeInEvent(date) {

    const timeStamp = date.split("")

    const timeInObj = {
        type:"TimeIn",
        hour:+timeStamp[1],
        date:timeStamp[0]
    };

    this.timeInEvents.push(timeInObj);
    return this
    }

    function createTimeOutEvent(date) {
        const spliting = date.split("")

    const timeOutObj = {type:"TimeOut", 
          hour:+spliting[1], 
          date:+spliting[0]
    }

    this.timeOutEvents.push(timeOutObj)
    return this

}

function hoursWorkedOnDate(date) {

    const timeIn = this.timeInEvents.find(obj => obj.date===date);
    const timeOut = this.timeOutEvents.find(obj => obj.date===date);

    return (timeOut.hour - timeIn.hour)/100
}

const allWagesFor = function() {
    const eligibleDates = this.timeInEvents.map(function (memo, d) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, date) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable

    }

    function wagesEarnedOnDate(date) { 
        return hoursWorkedOnDate.call(this, date)*(this.payPerHour)
    }

    function FindEmployeeByFirstName(coll,firstNameStr) {
        return coll.find(item => item.firstName === firstNameStr)
    }

    function calculatePayroll(employees){
        return employees.reduce((acc,item) => acc + allWagesFor.call(item),0);
    }

