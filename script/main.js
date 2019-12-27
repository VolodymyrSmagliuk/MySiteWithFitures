function toggleTheme() {
    if (localStorage.getItem("theme") !== "dark") {               // if the theme is dark
      themeButton.children[0].setAttribute("fill", "#6ee559");    // color the button green
      themeButton.children[1].setAttribute("cx", "45");           // move the circle inside the button to the right
      root.id = "dark";                                           // set the id of the html element to "dark"
      localStorage.setItem("theme", root.id);                     // save the info about the dark theme 
      localStorage.setItem("themeButtonFill", "#6ee559");         // ...
      localStorage.setItem("themeButtonX", "45");                 // ...
    } else {                                                      // if the theme id clear
        themeButton.children[0].setAttribute("fill", "#ddd");     // color the button gray
        themeButton.children[1].setAttribute("cx", "15");         // move the circle inside the button to the left
        root.id = "";                                             // set the id of the html element to ""  
        localStorage.setItem("theme", root.id);                   // save the info about the clear theme 
        localStorage.setItem("themeButtonFill", "#ddd");          // ...
        localStorage.setItem("themeButtonX", "15");               // ...
      }
    };
          
  var root = document.documentElement;                            // references the html element
  var themeButton = document.getElementById("themeButton");       // references the button to change the mode
          
  if (localStorage.getItem("theme")) {                                                        // if the "theme" property is set on localStorage
    themeButton.children[0].setAttribute("fill", localStorage.getItem("themeButtonFill"));    // set the "fill" attribute using the key of the same name on localStorage 
    themeButton.children[1].setAttribute("cx", localStorage.getItem("themeButtonX"));         // set the "cx" attribute using the key of the same name on localStorage
    root.id = "dark";
  }