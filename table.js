"use strict";

const STARRED = "⭐";

/* Descriptions of each table column */
const HEADINGS = [
  "Title",
  "Category",
  "Read On"
];

/* Dictionary mapping category abbreviations to plain English */
const CATEGORIES = {
  ml: "Machine Learning",
  pl: "Programming Languages",
  sec: "Security",
  dist: "Distributed Systems",
  cs: "Theoretical CS"
};

/* We need the table element in sortTable */
let tableElem;

window.addEventListener("load", () => {
  createSorter();
  createTable();

  /* Initially:
   * - read papers come first, from most to least recent;
   * - unread papers are alphabetic by category and within each category */
  sortTable(3);
  sortTable(4);
  sortTable(0);
});

function createSorter() {
  const selector = document.createElement("select");
  selector.id = "sortSelector";

  for(let i = 0; i < sorts.length; i ++) {
    const option = document.createElement("option");
    option.value = i.toString();
    option.appendChild(document.createTextNode(sorts[i].description));
    selector.appendChild(option);
  }

  const button = document.createElement("button");
  button.id = "sortButton";
  button.appendChild(document.createTextNode("Sort"));
  button.addEventListener("click", () => sortTable(parseInt(selector.value)));

  const wrapper = document.getElementById("wrapper");
  wrapper.appendChild(selector);
  wrapper.appendChild(button);
}

function createTable() {
    /* Helper to create a td with a specified CSS class and text */
  function cell(klass, content) {
    const elem = document.createElement("td");
    elem.className = klass;

    if(typeof(content) === "string") {
      content = document.createTextNode(content);
    }

    if(content) {
      elem.appendChild(content);
    }

    return elem;
  }

  /* Instantiate a table */

  tableElem = document.createElement("table");
  tableElem.id = "paperTable";

  /* Build and append heading row */

  const headingRowElem = document.createElement("tr");

  for(const heading of HEADINGS) {
    const headingCellElem = document.createElement("th");

    if(heading) {
      headingCellElem.appendChild(document.createTextNode(heading));
    }

    headingRowElem.appendChild(headingCellElem);
  }

  tableElem.appendChild(headingRowElem);

  /* Build and append a row for each paper */

  for(const paper of papers) {
    const rowElem = document.createElement("tr");
    rowElem.className = 'paperRow ' + (paper.read ? 'paperRead' : 'paperUnread');

    let title;

    if(paper.pdf) {
      title = document.createElement("a");
      title.href = `pdfs/${paper.pdf}`;
      title.appendChild(document.createTextNode(paper.title));
    } else {
      title = paper.title;
    }

    rowElem.appendChild(cell("paperTitle", title));
    rowElem.appendChild(cell("paperCategory", CATEGORIES[paper.category]));
    rowElem.appendChild(cell("paperReadOn", paper.read));

    tableElem.appendChild(rowElem);
    paper.rowElem = rowElem;
  }

  document.getElementById("wrapper").appendChild(tableElem);
}

function sortTable(sortIndex) {
  stableSort(papers, sorts[sortIndex].pred);

  for(let i = 0; i < papers.length; i ++) {
    tableElem.removeChild(tableElem.lastChild);
  }

  for(const paper of papers) {
    tableElem.appendChild(paper.rowElem);
  }
}

function stableSort(ary, pred) {
  for(let i = 1; i < ary.length; i ++) {
    for(let j = i; j > 0; j --) {
      if(pred(ary[j], ary[j - 1])) {
        const t = ary[j - 1];
        ary[j - 1] = ary[j];
        ary[j] = t;
      } else {
        break;
      }
    }
  }
}

function dmyLessThan(x, y) {
  const xs = x.split('/');
  const ys = y.split('/');

  for(let i = 2; i >= 0; i --) {
    if(xs[i] < ys[i]) {
      return true;
    } else if(xs[i] > ys[i]) {
      return false;
    }
  }

  return false;
}

const sorts = [
  {
    description: "Most- to Least-Recently Read",
    pred: (x, y) => {
      if(x.read === null) {
        return false;
      } else if(y.read === null) {
        return true;
      } else {
        return dmyLessThan(y.read, x.read);
      }
    }
  },
  {
    description: "Least- to Most-Recently Read",
    pred: (x, y) => {
      if(x.read === null) {
        return false;
      } else if(y.read === null) {
        return true;
      } else {
        return dmyLessThan(x.read, y.read);
      }
    }
  },
  {
    description: "Unread First",
    pred: (x, y) => (x.read === null && y.read !== null)
  },
  {
    description: "Alphabetically by Title",
    pred: (x, y) => {
      const pre = (v) => {
        const vw = v.toLowerCase().split(" ");

        if(vw[0] === "a" || vw[0] === "the" || vw[0] == "an") {
          vw.shift();
        }

        return vw.join(" ");
      }

      return (pre(x.title) < pre(y.title));
    }
  },
  {
    description: "Alphabetically by Category",
    pred: (x, y) => (CATEGORIES[x.category] < CATEGORIES[y.category])
  }
];

for(const abbrev in CATEGORIES) {
  sorts.push({
    description: `${CATEGORIES[abbrev]} First`,
    pred: (x, y) => {
      if(x.category === abbrev) {
        return (y.category !== abbrev);
      } else {
        return false;
      }
    }
  });
}
