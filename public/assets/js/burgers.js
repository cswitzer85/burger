// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var nowdevour = $(this).data("devour");
  
      var nowDevourState = {
        devoured: nowDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: nowDevourState
      }).then(
        function() {
          console.log("changed devour to", nowDevour);
          // Reload  page to update list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Prevent Default on submit.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#brgr").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created the burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  