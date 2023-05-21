window.onload = function() {
      var sizeInfo = document.getElementById("sizeInfo");
      var width, height;

      function updateSizeInfo()
	  {
        width = window.innerWidth;
        height = window.innerHeight;
        sizeInfo.textContent = "Width: " + width + " and Height: " + height;
      }
      updateSizeInfo();
	window.addEventListener("resize", updateSizeInfo);
    };