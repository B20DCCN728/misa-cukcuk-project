/* Created by B20DCCN728 */
$(() => {
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

  // -> Post form data to server
  $(".button-row .submit-form").on("click", () => {
    var now = new Date();
    let newEmployee = {
        "createdDate": now.toISOString(),
        "createdBy": null,
        "modifiedDate": null,
        "modifiedBy": null,
        "employeeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "employeeCode": "string",
        "firstName": "string",
        "lastName": "string",
        "fullName": "string",
        "gender": 0,
        "dateOfBirth": "2024-07-22T07:04:38.468Z",
        "phoneNumber": "string",
        "email": "user@example.com",
        "address": "string",
        "identityNumber": "string",
        "identityDate": "2024-07-22T07:04:38.468Z",
        "identityPlace": "string",
        "joinDate": "2024-07-22T07:04:38.468Z",
        "martialStatus": 0,
        "educationalBackground": 0,
        "qualificationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "departmentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "positionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "nationalityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "workStatus": 0,
        "personalTaxCode": "string",
        "salary": 0,
        "positionCode": "string",
        "positionName": "string",
        "departmentCode": "string",
        "departmentName": "string",
        "qualificationName": "string",
        "nationalityName": "string"
    };
  });
});
