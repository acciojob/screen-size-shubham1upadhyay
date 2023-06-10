window.onload = function() {
      var sizeInfo = document.getElementById("sizeInfo");
      var width, height;

      function updateSize()
	  {
        width = window.innerWidth;
        height = window.innerHeight;
        sizeInfo.textContent = "Width: " + width + " and Height: " + height;
      }
      updateSize();
	window.addEventListener("resize", updateSize);
    };