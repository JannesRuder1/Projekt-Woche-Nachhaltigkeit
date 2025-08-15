import { Grid, Cell, HTMLStuff, OtherStuff, Sidebar } from "./library.js";

class Krankenhaus extends Cell {
  constructor() {
    super("krankenhaus.jpeg", "Krankenhaus");
    this.personal = 0;
    this.sidebar = new Sidebar();
    this.sidebar.add("h1", { content: "Krankenhaus" });
    this.sidebar.add("div", { content: "Personal: " });
    this.sidebar.add("range", {
      min: 1,
      max: 100,
      value: 1,
      callback: (value) => {
        this.personal = value;
        this.output_div.innerHTML = "Personal gerade: " + this.personal;
      },
    });
    this.output_div = this.sidebar.add("div", {
      content: "Personal gerade: " + this.personal,
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Park extends Cell {
  constructor() {
    super("park.jpeg", "Park");
    this.bäume = 0;
    this.sidebar = new Sidebar();
    this.sidebar.add("h1", { content: "Park" });
    this.sidebar.add("button", {
      content: "Bäume pflanzen",
      callback: () => {
        this.bäume++;
        this.output_div.innerHTML = this.bäume;
      },
    });
    this.sidebar.add("div", { content: "Bäume: " });
    this.output_div = this.sidebar.add("div", { content: "" });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Wohngebiet extends Cell {
  constructor() {
    super("wohngebiet.jpeg", "Wohngebiet");
    this.sidebar = new Sidebar();
    this.headline = this.sidebar.add("h1", { content: "Wohngebiet" });
    this.temp_headline = this.image;
    this.sidebar.add("input", {
      type: "text",
      placeholder: "name",
      callback: (event) => {
        this.temp_headline = event.target.value;
      },
    });
    this.sidebar.add("button", {
      content: "Submit",
      callback: () => {
        this.headline.innerHTML = this.temp_headline;
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Random_Rectange extends OtherStuff {
  constructor(x, y, width, height, color) {
    super(x, y, width, height);
    this.color = color;
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  onclick() {
    console.log("Random Rectangle Pressed");
  }
}

const html = new HTMLStuff();

html.add("h1", "Spielname");
html.add("p", "Eine random description");

const grid = new Grid([Park, Krankenhaus, Wohngebiet], 9, 9, 600, 600);

grid.other_stuff.push(new Random_Rectange(400, 400, 20, 20, "pink"));