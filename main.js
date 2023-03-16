function toHTML() {
  const body = document.querySelector("body");

  const h1 = document.createElement("h1");
  h1.textContent = "Lab7 Assignment";

  h1.setAttribute("style", "color: blue;");

  const hr = document.createElement("hr");
  body.appendChild(h1);
  body.appendChild(hr);

  const h2 = document.createElement("h2");
  h2.textContent = "Task";
  h2.style.color = "red";
  body.appendChild(h2);

  const p1 = document.createElement("p");
  p1.innerHTML =
    "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
  body.appendChild(p1);

  const ul = document.createElement("ul");

  const fivePointsGreen1 = document.createElement("b");
  fivePointsGreen1.textContent = "5 points";
  fivePointsGreen1.color = "green";

  const fivePointsPurple2 = document.createElement("b");
  fivePointsPurple2.textContent = "5 points";
  fivePointsPurple2.color = "purple";

  const paranthesis = document.createTextNode(");");

  const li1 = document.createElement("li");
  const li1_textContent = document.createTextNode("find elements in the DOM (");
  li1.appendChild(li1_textContent);
  li1.appendChild(fivePointsGreen1);
  li1.appendChild(document.createTextNode(");"));
  li1.style.color = "green";
  li1.classList.add("even");

  const li2 = document.createElement("li");
  const li2_textContent = document.createTextNode(
    "create/add/remove elements ("
  );
  li2.appendChild(li2_textContent);
  li2.appendChild(fivePointsPurple2);
  li2.appendChild(document.createTextNode(");"));
  li2.style.color = "purple";
  li2.classList.add("odd");

  const fivePointsGreen3 = document.createElement("b");
  fivePointsGreen3.textContent = "5 points";
  fivePointsGreen3.color = "green";

  const fivePointsPurple4 = document.createElement("b");
  fivePointsPurple4.textContent = "5 points";
  fivePointsPurple4.color = "purple";

  const li3 = document.createElement("li");
  const li3_textContent = document.createTextNode(
    "change content of the elements ("
  );
  li3.appendChild(li3_textContent);
  li3.appendChild(fivePointsGreen3);
  li3.appendChild(document.createTextNode(");"));
  li3.style.color = "green";
  li3.classList.add("even");

  const li4 = document.createElement("li");
  const li4_textContent = document.createTextNode(
    "change styles of the elements ("
  );
  li4.appendChild(li4_textContent);
  li4.appendChild(fivePointsPurple4);
  li4.appendChild(document.createTextNode(");"));
  li4.style.color = "purple";
  li4.classList.add("odd");

  const fivePointsGreen5 = document.createElement("b");
  fivePointsGreen5.textContent = "5 points";
  fivePointsGreen5.color = "green";

  const fivePointsPurple6 = document.createElement("b");
  fivePointsPurple6.textContent = "5 points";
  fivePointsPurple6.color = "purple";

  const li5 = document.createElement("li");
  const li5_textContent = document.createTextNode(
    "change attributes of the elements ("
  );
  li5.appendChild(li5_textContent);
  li5.appendChild(fivePointsGreen5);
  li5.appendChild(document.createTextNode(");"));
  li5.style.color = "green";
  li5.classList.add("even");

  const li6 = document.createElement("li");
  const li6_textContent = document.createTextNode(
    "change classes of the elements ("
  );
  li6.appendChild(li6_textContent);
  li6.appendChild(fivePointsPurple6);
  li6.appendChild(document.createTextNode(")."));
  li6.style.color = "purple";
  li6.classList.add("odd");

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  body.appendChild(ul);

  const hr2 = document.createElement("hr");
  body.appendChild(hr2);

  const h2_2 = document.createElement("h2");
  h2_2.textContent = "Submission";
  h2_2.style.color = "red";
  body.appendChild(h2_2);

  const p2 = document.createElement("p");
  p2.textContent = "To submit your work, follow these instructions:";
  body.appendChild(p2);

  const ul2 = document.createElement("ul");

  const lab7 = document.createElement("b");
  lab7.textContent = "lab7";
  lab7.color = "green";

  const fivePointsGreen7 = document.createElement("b");
  fivePointsGreen7.textContent = "1 point";
  fivePointsGreen7.color = "green";

  const li7 = document.createElement("li");
  const li7_textContent = document.createTextNode(
    "Create a new repository on Github, named "
  );

  li7.appendChild(li7_textContent);
  li7.appendChild(lab7);
  li7.appendChild(document.createTextNode(" ("));
  li7.appendChild(fivePointsGreen7);
  li7.appendChild(document.createTextNode(")."));
  li7.style.color = "green";
  li7.classList.add("even");

  const li8 = document.createElement("li");
  const li8_textContent = document.createTextNode(
    "Clone this repository to your local machine and work inside it."
  );
  li8.appendChild(li8_textContent);

  li8.style.color = "purple";
  li8.classList.add("odd");

  const index = document.createElement("b");
  index.textContent = "index.html";
  index.color = "green";

  const onePointGreen = document.createElement("b");
  onePointGreen.textContent = "1 point";
  onePointGreen.color = "green";
  const li9 = document.createElement("li");
  const li9_textContent = document.createTextNode(
    "Create a new HTML file, called "
  );

  li9.appendChild(li9_textContent);
  li9.appendChild(index);
  li9.appendChild(
    document.createTextNode(
      ', which has only one <h1> tag with "Hello, World!" message ('
    )
  );
  li9.appendChild(onePointGreen);
  li9.appendChild(document.createTextNode(")."));
  li9.style.color = "green";
  li9.classList.add("even");

  const main = document.createElement("b");
  main.textContent = "main.js";
  main.color = "purple";

  const onePointPurple = document.createElement("b");
  onePointPurple.textContent = "1 point";
  onePointPurple.color = "purple";

  const li10 = document.createElement("li");
  const li10_textContent = document.createTextNode(
    "Create a new JavaScript file, called "
  );
  li10.appendChild(li10_textContent);
  li10.appendChild(main);
  li10.appendChild(
    document.createTextNode(
      ", which must contain your program (assignment) described above ("
    )
  );
  li10.appendChild(onePointPurple);
  li10.appendChild(document.createTextNode(")."));
  li10.style.color = "purple";
  li10.classList.add("odd");

  const mainGreen = document.createElement("b");
  mainGreen.textContent = "main.js";
  mainGreen.color = "green";

  const indexGreen = document.createElement("b");
  indexGreen.textContent = "index.html";
  indexGreen.color = "green";

  const bodyGreen = document.createElement("b");
  bodyGreen.textContent = "body";
  bodyGreen.color = "green";
  const li11 = document.createElement("li");
  const li11_textContent = document.createTextNode("Link this ");
  li11.appendChild(li11_textContent);
  li11.appendChild(mainGreen);
  li11.appendChild(document.createTextNode("  file to your "));
  li11.appendChild(indexGreen);
  li11.appendChild(
    document.createTextNode(
      "  file (Note: place your script at the end of the "
    )
  );
  li11.appendChild(bodyGreen);
  li11.appendChild(document.createTextNode(" section)."));
  li11.style.color = "green";
  li11.classList.add("even");

  const mainPurple = document.createElement("b");
  mainPurple.textContent = "main.js";
  mainPurple.color = "purple";

  const indexPurple = document.createElement("b");
  indexPurple.textContent = "index.html";
  indexPurple.color = "purple";

  const fivePointsPurpleLast = document.createElement("b");
  fivePointsPurpleLast.textContent = "5 points";
  fivePointsPurpleLast.color = "purple";

  const li12 = document.createElement("li");
  const li12_textContent = document.createTextNode(
    "Write a JavaScript program in "
  );
  li12.appendChild(li12_textContent);
  li12.appendChild(mainPurple);
  li12.appendChild(document.createTextNode(" to make your "));
  li12.appendChild(indexPurple);
  li12.appendChild(
    document.createTextNode(" look identical to this HTML file (")
  );
  li12.appendChild(fivePointsPurpleLast);
  li12.appendChild(document.createTextNode(")."));
  li12.style.color = "purple";
  li12.classList.add("odd");

  const twoPoints = document.createElement("b");
  twoPoints.textContent = "2 points";
  twoPoints.color = "green";

  const li13 = document.createElement("li");
  const li13_textContent = document.createTextNode(
    "After you finish your work, submit it to the Github ("
  );
  li13.appendChild(li13_textContent);
  li13.appendChild(twoPoints);
  li13.appendChild(document.createTextNode(")."));
  li13.style.color = "green";
  li13.classList.add("even");

  ul2.appendChild(li7);
  ul2.appendChild(li8);
  ul2.appendChild(li9);
  ul2.appendChild(li10);
  ul2.appendChild(li11);
  ul2.appendChild(li12);
  ul2.appendChild(li13);
  body.appendChild(ul2);
  body.appendChild(document.createElement("hr"));

  const extraText = document.getElementsByTagName("h1")[0];
  extraText.remove();
}

toHTML();
