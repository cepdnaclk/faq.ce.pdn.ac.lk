var collapseState = false;

$(document).ready(() => {
  $(".btn-expand-all").click(function () {
    if (collapseState == false) {
      // Expand all
      $(".btn-expand-all").html("SHRINK ALL");
      $(".multi-collapse").collapse({ toggle: true }).collapse("show");
      collapseState = true;
    } else {
      // Shrink all
      $(".btn-expand-all").html("EXPAND ALL");
      $(".multi-collapse").collapse({ toggle: true }).collapse("hide");
      collapseState = false;
    }
  });
});
