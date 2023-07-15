AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "car",
        title: "Car!",
        url: "Car.png",
      },
      {
        id: "lightning",
        title: "Lightning Strike vol 1",
        url: "Lightning.png",
      },
      {
        id: "lightning2",
        title: "Lightning Strike vol 2",
        url: "Lightning 2.png",
      },
      {
        id: "stickmen",
        title: "Revenge of the Stickmen!!!",
        url: "Stickmen revenge.png",
      }
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id)
      
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
     
      // Title Text Element
      const titleEl = this.createTitle(position, item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {primitive: "box", height: 16, width: 11})
    entityEl.setAttribute("material", {color: "#0077cc", opacity: 1})
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("id", id)
    return entityEl
  },
  createThumbnail: function(item) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {primitive: "box", height: 15, width: 10, depth: 1.1})
    entityEl.setAttribute("material", {src: item.url})
    return entityEl
  },
  createTitle: function(position, item) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("text", {font: "exo2bold", align: "center", width: 70, color: "#e65100", value: item.title})
    const elPosition = position
    elPosition.y = -20
    entityEl.setAttribute("position", elPosition)
    return entityEl
  }
});