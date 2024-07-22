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

  $(".menu-department-btn").on("click", () => {
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
  $(".button-row .")
});
