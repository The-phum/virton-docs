/* Highlighting utilities for Sphinx HTML documentation. */
"use strict";

<<<<<<< HEAD
const SPHINX_HIGHLIGHT_ENABLED = true
=======
const SPHINX_HIGHLIGHT_ENABLED = true;
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75

/**
 * highlight a given string on a node by wrapping it in
 * span elements with the given class name.
 */
const _highlight = (node, addItems, text, className) => {
  if (node.nodeType === Node.TEXT_NODE) {
    const val = node.nodeValue;
    const parent = node.parentNode;
    const pos = val.toLowerCase().indexOf(text);
    if (
<<<<<<< HEAD
      pos >= 0 &&
      !parent.classList.contains(className) &&
      !parent.classList.contains("nohighlight")
=======
      pos >= 0
      && !parent.classList.contains(className)
      && !parent.classList.contains("nohighlight")
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75
    ) {
      let span;

      const closestNode = parent.closest("body, svg, foreignObject");
      const isInSVG = closestNode && closestNode.matches("svg");
      if (isInSVG) {
        span = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      } else {
        span = document.createElement("span");
        span.classList.add(className);
      }

      span.appendChild(document.createTextNode(val.substr(pos, text.length)));
      const rest = document.createTextNode(val.substr(pos + text.length));
<<<<<<< HEAD
      parent.insertBefore(
        span,
        parent.insertBefore(
          rest,
          node.nextSibling
        )
      );
=======
      parent.insertBefore(span, parent.insertBefore(rest, node.nextSibling));
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75
      node.nodeValue = val.substr(0, pos);
      /* There may be more occurrences of search term in this node. So call this
       * function recursively on the remaining fragment.
       */
      _highlight(rest, addItems, text, className);

      if (isInSVG) {
        const rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
<<<<<<< HEAD
          "rect"
=======
          "rect",
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75
        );
        const bbox = parent.getBBox();
        rect.x.baseVal.value = bbox.x;
        rect.y.baseVal.value = bbox.y;
        rect.width.baseVal.value = bbox.width;
        rect.height.baseVal.value = bbox.height;
        rect.setAttribute("class", className);
        addItems.push({ parent: parent, target: rect });
      }
    }
  } else if (node.matches && !node.matches("button, select, textarea")) {
    node.childNodes.forEach((el) => _highlight(el, addItems, text, className));
  }
};
const _highlightText = (thisNode, text, className) => {
  let addItems = [];
  _highlight(thisNode, addItems, text, className);
  addItems.forEach((obj) =>
<<<<<<< HEAD
    obj.parent.insertAdjacentElement("beforebegin", obj.target)
=======
    obj.parent.insertAdjacentElement("beforebegin", obj.target),
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75
  );
};

/**
 * Small JavaScript module for the documentation.
 */
const SphinxHighlight = {
<<<<<<< HEAD

=======
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75
  /**
   * highlight the search words provided in localstorage in the text
   */
  highlightSearchWords: () => {
<<<<<<< HEAD
    if (!SPHINX_HIGHLIGHT_ENABLED) return;  // bail if no highlight
=======
    if (!SPHINX_HIGHLIGHT_ENABLED) return; // bail if no highlight
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75

    // get and clear terms from localstorage
    const url = new URL(window.location);
    const highlight =
<<<<<<< HEAD
        localStorage.getItem("sphinx_highlight_terms")
        || url.searchParams.get("highlight")
        || "";
    localStorage.removeItem("sphinx_highlight_terms")
    url.searchParams.delete("highlight");
    window.history.replaceState({}, "", url);

    // get individual terms from highlight string
    const terms = highlight.toLowerCase().split(/\s+/).filter(x => x);
=======
      localStorage.getItem("sphinx_highlight_terms")
      || url.searchParams.get("highlight")
      || "";
    localStorage.removeItem("sphinx_highlight_terms");
    // Update history only if '?highlight' is present; otherwise it
    // clears text fragments (not set in window.location by the browser)
    if (url.searchParams.has("highlight")) {
      url.searchParams.delete("highlight");
      window.history.replaceState({}, "", url);
    }

    // get individual terms from highlight string
    const terms = highlight
      .toLowerCase()
      .split(/\s+/)
      .filter((x) => x);
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75
    if (terms.length === 0) return; // nothing to do

    // There should never be more than one element matching "div.body"
    const divBody = document.querySelectorAll("div.body");
    const body = divBody.length ? divBody[0] : document.querySelector("body");
    window.setTimeout(() => {
      terms.forEach((term) => _highlightText(body, term, "highlighted"));
    }, 10);

    const searchBox = document.getElementById("searchbox");
    if (searchBox === null) return;
    searchBox.appendChild(
      document
        .createRange()
        .createContextualFragment(
<<<<<<< HEAD
          '<p class="highlight-link">' +
            '<a href="javascript:SphinxHighlight.hideSearchWords()">' +
            _("Hide Search Matches") +
            "</a></p>"
        )
=======
          '<p class="highlight-link">'
            + '<a href="javascript:SphinxHighlight.hideSearchWords()">'
            + _("Hide Search Matches")
            + "</a></p>",
        ),
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75
    );
  },

  /**
   * helper function to hide the search marks again
   */
  hideSearchWords: () => {
    document
      .querySelectorAll("#searchbox .highlight-link")
      .forEach((el) => el.remove());
    document
      .querySelectorAll("span.highlighted")
      .forEach((el) => el.classList.remove("highlighted"));
<<<<<<< HEAD
    localStorage.removeItem("sphinx_highlight_terms")
=======
    localStorage.removeItem("sphinx_highlight_terms");
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75
  },

  initEscapeListener: () => {
    // only install a listener if it is really needed
    if (!DOCUMENTATION_OPTIONS.ENABLE_SEARCH_SHORTCUTS) return;

    document.addEventListener("keydown", (event) => {
      // bail for input elements
<<<<<<< HEAD
      if (BLACKLISTED_KEY_CONTROL_ELEMENTS.has(document.activeElement.tagName)) return;
      // bail with special keys
      if (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) return;
      if (DOCUMENTATION_OPTIONS.ENABLE_SEARCH_SHORTCUTS && (event.key === "Escape")) {
=======
      if (BLACKLISTED_KEY_CONTROL_ELEMENTS.has(document.activeElement.tagName))
        return;
      // bail with special keys
      if (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey)
        return;
      if (
        DOCUMENTATION_OPTIONS.ENABLE_SEARCH_SHORTCUTS
        && event.key === "Escape"
      ) {
>>>>>>> 6ef2fbfca306e754ecaf6b0145c837157367ad75
        SphinxHighlight.hideSearchWords();
        event.preventDefault();
      }
    });
  },
};

_ready(() => {
  /* Do not call highlightSearchWords() when we are on the search page.
   * It will highlight words from the *previous* search query.
   */
  if (typeof Search === "undefined") SphinxHighlight.highlightSearchWords();
  SphinxHighlight.initEscapeListener();
});
