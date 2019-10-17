// I can use this for modeling the data
//Put the queries in here

/*

*/

export const selectAllEmployees = 'SELECT * FROM qualification.employee';
export const deleteById = 'DELETE FROM employee where empEmployeeID = ';
export const populateDb = 'INSERT INTO `employee` (`empEmployeeID`, `empLastName`, `empFirstName`, `empDepartmentID`, `empHireDate`, `empDateOfBirth`, `empAddress`, `empTown`, `empState`, `empPostcode`, `empContact`) VALUES \n' +
    '(4, \'Grouse\', \'Ivan\', 3, \'2001-03-17\', \'1964-12-12\', \'45 Sandy Creek Rd\', \'Mapdot\', \'NSW\', \'2999\', \'0444444444\'), \n' +
    '(5, \'Champion\', \'Harold\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(6, \'Defus\', \'Roger\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(7, \'George\', \'Bill\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(8, \'Derry\', \'Sally\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(9, \'Chocco\', \'Freddo\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(10, \'Liam\', \'George\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(11, \'Cuckmaster 3000\', \'Thruster\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(12, \'Gall\', \'Derry\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(13, \'Lenny\', \'Lennard\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(14, \'Leery\', \'Mariaane\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL) ,\n' +
    '(15, \'Donaldson\', \'George\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(16, \'Cuckmaster 3000\', \'Thruster\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(17, \'Gorrry\', \'David\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(18, \'Mc Maggots\', \'Smoths\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(19, \'Loggins\', \'Leroy\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL),\n' +
    '(20, \'The Merciless\', \'Neckbeard\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(21, \'Appleby\', \'Andrey\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(22, \'Rogerson\', \'Billy\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(23, \'Mc Sloth\', \'Slothy\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(24, \'The Great\', \'Phillip\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL) ,\n' +
    '(25, \'Zarry\', \'Zards\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL),\n' +
    '(26, \'Andrews\', \'Abrahams\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL) ';