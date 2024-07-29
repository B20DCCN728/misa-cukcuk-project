/* Created by B20DCCN728 */
$(() => {
  // Define data for dropdown menu
  let employee = {
    "employeeId": "", //
    "employeeCode": "", //
    "fullName": "", //
    "email": "", // 
    "phoneNumber": "", //
    "identityNumber": "", //
    "dateOfBirth": "", //
    "gender": "", //
    "address": "", //
    "departmentId": "", //
    "positionId": "", // 
    "department": "", // ->
    "position": "", // ->
    "identityDate": "", //
    "identityPlace": "", //
    "bankAccount": "", //
    "bankBrand": "", //
    "bankName": "", // 
    "landlineNumber": "", //
    "createdDate": "", // ->
    "createdBy": "",
    "modifiedDate": "",
    "modifiedBy": ""
  };

  // Position dropdown menu
  $(".position-option").on("click", function() {
    let selectedOption = $(this).find(".option-text").text();
    $(".btn-position-text").text(selectedOption);
    $(".dropdown-position-menu").removeClass("open");
  });

  $(".menu-position-btn").on("click", () => {
    $(".dropdown-position-menu").toggleClass("open");
  });

  // Fetch position data from https://localhost:7221/api/v1/Positions
  $(".menu-position-btn").on("click", () => {
    $(".dropdown-position-menu").toggleClass("open");
    $("#position-options").empty();
    axios.get('https://localhost:7221/api/v1/Positions')
      .then((response) => {
        console.log("Data:", response.data);
        let positions = response.data;
        positions.forEach((position) => {
          let listPosition = `
            <li class="position-option option">
              <i class="fab fa-instagram" style="color: #ff0000"></i>
              <span class="option-text">${position.PositionName}</span>
            </li>
          `;
          $("#position-options").append(listPosition);
        });

        // Define click event for each position option
        $(".position-option").on("click", function() {
          let selectedOption = $(this).find(".option-text").text();
          $(".btn-position-text").text(selectedOption);
          $(".dropdown-position-menu").removeClass("open");
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });

  // Fetch department data from https://localhost:7221/api/Departments
  $(".menu-department-btn").on("click", () =>  {
    $(".dropdown-department-menu").toggleClass("open");
    $("#department-options").empty();
    // Fetch department data from https://localhost:7221/api/Departments
    axios.get('https://localhost:7221/api/Departments')
      .then((response) => {
        console.log("Data:", response.data);
        let departments = response.data;
        departments.forEach((department) => {
          let listDepartment = `
            <li class="department-option option">
              <i class="fab fa-instagram" style="color: #ff0000"></i>
              <span class="option-text">${department.departmentName}</span>
            </li>
          `;
          $("#department-options").append(listDepartment);
        });
        
        // Define click event for each department option
        $(".department-option").on("click", function() {
          let selectedOption = $(this).find(".option-text").text();
          $(".btn-department-text").text(selectedOption);
          $(".dropdown-department-menu").removeClass("open");
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });

  // Post new employee data to server
  $(".button-row .submit-form").on("click", () => {
    const generateUUID = () => {
      // Generate a random UUID v4
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
    };

    var now = new Date();
    // Define new data for object
    var dateOfBirth = new Date($("#date-of-birth").val()).toISOString();
    var identityDate = new Date($("#identityCardDate").val()).toISOString();

    // New employee object -> POST to server
    let newEmployee = {
        "createdDate": now.toISOString(),
        "createdBy": null,
        "modifiedDate": null,
        "modifiedBy": null,
        "employeeId": generateUUID(),
        "employeeCode": $("#employeeCode").val(),
        "firstName": null,
        "lastName": null,
        "fullName": $("#fullName").val(),
        "gender": $('input[name="gender"]:checked').val(),
        "dateOfBirth": dateOfBirth,
        "phoneNumber": $("#mobilePhone").val(),
        "email": $("#email").val(),
        "address": $("#address").val(),
        "identityNumber": $("#identityCard").val(),
        "identityDate": identityDate,
        "identityPlace": $("#identityCardDate").val(),
        "joinDate": null,
        "martialStatus": null,
        "educationalBackground": null,
        "qualificationId": null,
        "departmentId": null,
        "positionId": null,
        "nationalityId": null,
        "workStatus": null,
        "personalTaxCode": "",
        "salary": null,
        "positionCode": "string",
        "positionName": "string",
        "departmentCode": "string",
        "departmentName": "string",
        "qualificationName": null,
        "nationalityName": null
    };

    console.log("New employee: ", newEmployee); // -> Check new employee data

    // POST new employee data to server
    axios.post('https://cukcuk.manhnv.net/api/v1/employees', newEmployee)
      .then((response) => {
        console.log("Data:", response.data);
        alert("Data has been posted successfully!");
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });

  function refreshForm() {
    $("#employeeCode").val("");
    $("#fullName").val("");
    $("#dateOfBirth").val("");
    $("#identityNumber").val("");
    $('input[name="gender"]').prop('checked', false);
    $("#identityDate").val("");
    $("#identityPlace").val("");
    $("#address").val("");
    $("#landline").val("");
    $("#mobilePhone").val("");
    $("#email").val("");
    $("#bankAccount").val("");
    $("#bankName").val("");
    $("#bankBrand").val("");
  };

  // Close modal
  $('.form-header .exit').on('click', function() {
      refreshForm();
      $('.modal').css('display', 'none');
  });

  $('button[type="reset"]').on('click', function() {
      refreshForm();
      $('.modal').css('display', 'none');
  });

});