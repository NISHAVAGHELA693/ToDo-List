var rowindex ;
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    if (firstName === '' || lastName === '' || dob === '' || email === '') {
      document.getElementById('warningMessage').textContent = 'Please fill in all fields.';
      return;
    }
    // Clear warning message
    document.getElementById('warningMessage').textContent = '';
    // Create a new table row
    if(rowindex){
    var table = document.getElementById('userTable');
    var newRow = table.insertRow(-1);
    // Insert cells in the new row
    var firstNameCell = newRow.insertCell(0);
    var lastNameCell = newRow.insertCell(1);
    var dobCell = newRow.insertCell(2);
    var emailCell = newRow.insertCell(3);
    var actionsCell = newRow.insertCell(4);
    // Set cell values
    firstNameCell.textContent = firstName;
    lastNameCell.textContent = lastName;
    dobCell.textContent = dob;
    emailCell.textContent = email;
    // Create Edit button
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editRow(newRow);
    });
    actionsCell.appendChild(editButton);
    // Create Delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteRow(newRow);
    });
    actionsCell.appendChild(deleteButton);
  }else{

  }
    // Clear the form
    document.getElementById('userForm').reset();

  });
  function editRow(row) {
    // Get cell values of the selected row
    rowindex=row.rowIndex
    var firstName = row.cells[0].textContent;
    var lastName = row.cells[1].textContent;
    var dob = row.cells[2].textContent;
    var email = row.cells[3].textContent;

    document.getElementById('firstName').value=firstName;
    document.getElementById('lastName').value=lastName;
    document.getElementById('dob').value=dob;
    document.getElementById('email').value=email;

  }
  function deleteRow(newRow){
     
  }