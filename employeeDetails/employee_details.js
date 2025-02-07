const employees = [
    {id: 1, name: 'Jhon Doe', age: 30, department: 'IT', salary: 50000},
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000},
    {id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000},
];

function displayEmployee() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById("employeeDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaies() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert (`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, insex) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById("employeeDetails").innerHTML = hrEmployeesDisplay;
}

function findEmployeesById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeeDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this ID';
    }
}

