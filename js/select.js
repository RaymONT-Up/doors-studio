// --------- Кастомовые селекты на странице
/* Look for any elements with the class "custom-select": */
// initClick for click on first element in selectors with class js-select-init-click and give active class
const customSelect = (select, count, initClick = false) => {
  x = document.getElementsByClassName(select);
  l = x.length;

  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("div");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    a.setAttribute("value", selElmnt.options[selElmnt.selectedIndex].value);
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("div");
    b.setAttribute("class", "select-items select-hide");

    for (j = count; j < ll; j++) {
      /* For each option in the original select element,
            create a new DIV that will act as an option item: */
      c = document.createElement("div");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.classList.add("status");
      c.classList.add(selElmnt.options[j].dataset.status);

      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
                and the selected item: */

        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;

        // if a selective element was made, then a class is produced
        var wrapper = this.parentNode.parentNode;
        wrapper.classList.add("select--active");
        firstClick = false;

        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
        except the current select box: */
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
  document.addEventListener("click", closeAllSelect);

  // ---------------
  if (initClick) {
    // init click on every first select-items

    const selectWrapper = document.querySelectorAll(".js-select-init-click")[0];
    selectWrapper.querySelectorAll(".select-items").forEach(select => {
      select.children[0].click();
    });
  }
};
customSelect("js-select", 1);

// if there is a class 'js-select-init-click', then we launch an init click for it
if (Boolean(document.querySelector(".js-select-init-click"))) {
  customSelect("js-select-init-click", 0, true);
}
