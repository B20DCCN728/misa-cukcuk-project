/* Created by B20DCCN728 */
$(() => {
  // Define data for dropdown menu
  let employee = {
    "employeeId": "00000000-0000-0000-0000-000000000000",
    "employeeCode": "NV0001",
    "firstName": "Nguyễn",
    "lastName": "Văn A",
    "fullName": "Nguyễn Văn A",
  }

  // Position dropdown menu
  $(".position-option").on("click", function() {
    let selectedOption = $(this).find(".option-text").text();
    $(".btn-position-text").text(selectedOption);
    $(".dropdown-position-menu").removeClass("open");
  });

  $(".menu-position-btn").on("click", () => {
    $(".dropdown-position-menu").toggleClass("open");
  });

  // -> Department dropdown menu
  // $(".department-option").on("click", function() {
  //   let selectedOption = $(this).find(".option-text").text();
  //   $(".btn-department-text").text(selectedOption);
  //   $(".dropdown-department-menu").removeClass("open");
  // });

  // Fetch department data from https://cukcuk.manhnv.net/api/v1/Departments
  $(".menu-department-btn").on("click", () =>  {
    $(".dropdown-department-menu").toggleClass("open");
    $("#department-options").empty();
    // Fetch department data from https://cukcuk.manhnv.net/api/v1/Departments
    axios.get('https://cukcuk.manhnv.net/api/v1/Departments')
      .then((response) => {
        console.log("Data:", response.data);
        let departments = response.data;
        departments.forEach((department) => {
          let listDepartment = `
            <li class="department-option option">
              <i class="fab fa-instagram" style="color: #ff0000"></i>
              <span class="option-text">${department.DepartmentName}</span>
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
});