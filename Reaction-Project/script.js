        var start = new Date().getTime();
        var attempt = 0;
        function getRandomColor() {
           var letters = '0123456789ABCDEF';
           var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
         }
        return color;
    }

        function move(){
            var top;
            var wh;
            var left = Math.random() * 300;
           // var right = Math.random()*300;
            var top = Math.random()*300;
            wh = ((Math.random() *400) +100);
             var share = document.getElementById("shape");
             share.style.left = left + "px";
             share.style.top = top + "px";
             share.style.width = wh + "px";
             share.style.height = wh + "px";
             share.style.display = "block";
             share.style.backgroundColor = getRandomColor();
             start = new Date().getTime();

        }
        move();
        document.getElementById("shape").onclick = function() {
          document.getElementById("shape").style.display = "none";
          var end = new Date().getTime();
          var timeTaken = (end - start) / 1000;
          //alert("Your reaction time: " + timeTaken + " seconds");
          attempt++;
          var row = document.createElement("tr");
          row.innerHTML = `<td>${attempt}</td>${timeTaken.toFixed(3)}</td>`;
          document.querySelector("#timeTable tbody").appendChild(row);
          move();
};