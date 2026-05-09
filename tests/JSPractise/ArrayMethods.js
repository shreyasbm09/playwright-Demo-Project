      

      // Array Methods in JavaScript
      //filter, map and reduce are higher-order functions that operate on arrays in JavaScript.
      // filter creates a new array with all elements that pass the test implemented by the provided function. It takes a callback function that returns a boolean value, and it includes only the elements for which the callback returns true in the new array.
      // map creates a new array populated with the results of calling a provided function on every element in the calling array. It takes a callback function that transforms each element and returns the new value, which is then included in the new array.
      // reduce executes a reducer function on each element of the array, resulting in a single output value. It takes a callback function that accumulates a result based on the elements of the array, and it can also take an initial value for the accumulator.     

      const students = [{name: "Alice", score: 85},
         {name: "Bob", score: 92},
          {name: "Charlie", score: 8},
           {name: "David", score: 90},
            {name: "Eve", score: 18}];

          const passedStudents = students.filter(student => student.score > 36);
          console.log(passedStudents);
          const UpperCasepassedStudentNames = passedStudents.map(student => student.name.toUpperCase());
          console.log(UpperCasepassedStudentNames); 

          const totalScore = passedStudents.reduce((sum, student) => sum + student.score, 0);
          console.log(totalScore);