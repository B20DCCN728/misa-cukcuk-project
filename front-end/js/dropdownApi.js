/* Created by B20DCCN728 */
$(() => {
  // Position dropdown menu

  $(".position-option").on("click", function() {
    let selectedOption = $(this).find(".option-text").text();
    $(".btn-position-text").text(selectedOption);
    $(".dropdown-position-menu").removeClass("open");
  });

  $(".menu-position-btn").on("click", function() {
    $(".dropdown-position-menu").toggleClass("open");
  });

  // Department dropdown menu

  $(".department-option").on("click", function() {
    let selectedOption = $(this).find(".option-text").text();
    $(".btn-department-text").text(selectedOption);
    $(".dropdown-department-menu").removeClass("open");
  });

  $(".menu-department-btn").on("click", function() {
    $(".dropdown-department-menu").toggleClass("open");
  });
});
