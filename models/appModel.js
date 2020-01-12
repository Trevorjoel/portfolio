// I can use this for modeling the data
//Put the queries in here

/*

*/

export const selectAllEmployees = 'SELECT * FROM qualification.employee';
export const deleteById = 'DELETE FROM employee where empEmployeeID = ';
export const populateDb = 'INSERT INTO `employee` (`empEmployeeID`, `empLastName`, `empFirstName`, `empDepartmentID`, `empHireDate`, `empDateOfBirth`, `empAddress`, `empTown`, `empState`, `empPostcode`, `empContact`) VALUES \n' +
    '(1, \'Springsteen\', \'Bruce\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(2, \'Hammett\', \'Kirk\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(3, \'Waters\', \'Rodger\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(4, \'Beiber\', \'Justin\', 3, \'2001-03-17\', \'1964-12-12\', \'45 Sandy Creek Rd\', \'Mapdot\', \'NSW\', \'2999\', \'0444444444\'), \n' +
    '(5, \'Stalin\', \'Joseph\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(6, \'Cosby\', \'Bill\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(7, \'Ronald\', \'McDonald\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(8, \'Kropotkin\', \'Peter\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(9, \'Marley\', \'Bob\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(10, \'Richards\', \'Keith\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(11, \'Elizabeth\', \'Queen\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(12, \'Marx\', \'Karl\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(13, \'Trump\', \'Donald\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(14, \'Gates\', \'Bill\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL) ,\n' +
    '(15, \'Harrison\', \'George\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(16, \'Pump\', \'Lil\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(17, \'Cobain\', \'Kurt\', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(18, \'Kitcherner\', \'Lord\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL), \n' +
    '(19, \'Whillhelm\', \'Kaiser\', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL),\n' +
    '(20, \'The Merciless\', \'Neckbeard\', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL)';