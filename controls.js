AFRAME.registerComponent("start-interact", {
    init: function () {
      var data = this.data;
      var sceneEl = document.querySelector("a-scene");
      var entityEl = sceneEl.querySelector("#start");
  
      entityEl.addEventListener("mouseenter", function () {
        entityEl.setAttribute("color", "#636363");
      });
  
      entityEl.addEventListener("mouseleave", function () {
        entityEl.setAttribute("color", "black");
      });
  
      entityEl.addEventListener("click", function () {
        sceneEl.removeChild(entityEl);
        startSketch = true;
        sceneEl.querySelector("#menu0").object3D.visible = "true";
        sceneEl.querySelector("#menu1").object3D.visible = "true";
        sceneEl.querySelector("#menu2").object3D.visible = "true";
      });
    }
  });
  
  AFRAME.registerComponent("song-interact", {
    init: function () {
      var data = this.data;
      var songEl = this.el;
      console.log(songEl);
  
      songEl.addEventListener("mouseenter", function () {
        songEl.setAttribute("color", "#636363");
      });
  
      songEl.addEventListener("mouseleave", function () {
        songEl.setAttribute("color", "teal");
      });
  
      songEl.addEventListener("click", function () {
        var sceneEl = document.querySelector("a-scene");
        var entityEl = sceneEl.querySelector("#menu0");
        sceneEl.removeChild(entityEl);
        var entityEl = sceneEl.querySelector("#menu1");
        sceneEl.removeChild(entityEl);
        var entityEl = sceneEl.querySelector("#menu2");
        sceneEl.removeChild(entityEl);
        // This is your EVENT LISTENER YOU CAN DECIDE TO START THE WAV FILES
        // FROM HERE

        sceneEl.querySelector("#bg").setAttribute("src", data.track);   
        sceneEl.querySelector("#bg").object3D.visible = "true";  

        sceneEl.querySelector("#p1").setAttribute("src", data.track1);   
        sceneEl.querySelector("#p1").object3D.visible = "true";  
        sceneEl.querySelector("#p2").setAttribute("src", data.track2);   
        sceneEl.querySelector("#p2").object3D.visible = "true";
        sceneEl.querySelector("#p3").setAttribute("src", data.track3);   
        sceneEl.querySelector("#p3").object3D.visible = "true";  
        sceneEl.querySelector("#p4").setAttribute("src", data.track4);   
        sceneEl.querySelector("#p4").object3D.visible = "true";
        sceneEl.querySelector("#p5").setAttribute("src", data.track5);   
        sceneEl.querySelector("#p5").object3D.visible = "true";        

        sceneEl.querySelector("#model").object3D.visible = "true";

        sceneEl.querySelector("#play").setAttribute("src", data.tracksound);
        sceneEl.querySelector("#play").setAttribute("autoplay", true);

      });
    }
  });
  