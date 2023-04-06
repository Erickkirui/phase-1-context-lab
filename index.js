/* Your Code Here */
// create employeees records
function createEmployeeRecord(employeeInfo) {
    const employee = {};
    employee.firstName = employeeInfo[0];
    employee.familyName = employeeInfo[1];
    employee.title = employeeInfo[2];
    employee.payPerHour = employeeInfo[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    return employee;
  }
  // function create employee records
  function createEmployeeRecords(arrayOfArrays) {
    const employeeRecords = [];
  
    arrayOfArrays.forEach(array => {
      const employeeRecord = createEmployeeRecord(array);
      employeeRecords.push(employeeRecord);
    });
  
    return employeeRecords;
  }

//function that takes in an employee record object and a date stamp.
function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    });
    return employee;
  }

  //
  function createTimeOutEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(' ')
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date,
    })
  
    return employee
  }
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
    }
    function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
    }
    function findEmployeeByFirstName(collection, firstNameString) {
    for (let i = 0; i < collection.length; i++) {
    if (collection[i].firstName === firstNameString) {
    return collection[i];
    }
    }
    return null;
    }
    let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
    return memo + allWagesFor.call(rec)
    }, 0)
  }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

