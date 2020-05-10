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

        sceneEl.querySelector("#bg").object3D.visible = "true";
        sceneEl.querySelector("#bg").setAttribute("src", data.track);     
        // sceneEl.querySelector("#bg").setAttribute("sound", data.track);   
        // sceneEl.querySelector("bg").components.sound.playsound();
        sceneEl.querySelector("#model").object3D.visible = "true";
        var entityS = document.querySelector('[sound]');
        // entityS.components.sound.setAttribute("src", data.tracksound);
        entityS.components.sound.playSound();

        console.log(data.tracksound);
      });
    }
  });
  