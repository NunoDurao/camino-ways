document.addEventListener("DOMContentLoaded", () => {
  console.log("camino-ways JS imported successfully!");
});


(function () {
  const slider = document.querySelector(".main-slider");
  const imagenes = document.querySelector(".slider-imagenes");
  const controles = document.querySelectorAll(".count-imagenes-num");
  const img = document.querySelectorAll(".slider-img");
  const countimg = document.querySelectorAll(".slider-img").length;
  const next = document.querySelector(".slider-controles-next");
  const previous = document.querySelector(".slider-controles-previous");
  const imgactivo = document.querySelectorAll(".slider-img.activo");

  controlesPuntos();
  desplazamiento();
  setInterval(auto, 4500);
  next.addEventListener("click", () => btnNext());
  previous.addEventListener("click", () => btnPrevious());

  function controlesPuntos() {
    controles.forEach((punto, i) => {
      controles[i].addEventListener("click", () => {
        let scrollWidth = slider.scrollWidth;
        let posicion = i;
        let operacion = posicion * -scrollWidth;
        controles.forEach((punto, i) => {
          controles[i].classList.remove("activo");
        });
        img.forEach((punto, i) => {
          img[i].classList.remove("activo");
        });
        img[i].classList.add("activo");
        controles[i].classList.add("activo");
      });
    });
  }

  function posicion() {
    var pos;
    img.forEach((punto, i) => {
      if (img[i].className === "slider-img activo") {
        pos = i;
      }
    });
    return pos;
  }

  function btnNext() {
    let pos = posicion();
    pos = pos + 1;
    if (pos >= countimg) {
      pos = 0;
    } else {
      pos = pos;
    }
    controles.forEach((punto, i) => {
      controles[i].classList.remove("activo");
    });
    img.forEach((punto, i) => {
      img[i].classList.remove("activo");
    });
    img[pos].classList.add("activo");
    controles[pos].classList.add("activo");
  }

  function btnPrevious() {
    let pos = posicion();
    pos = pos - 1;
    if (pos < 0) {
      pos = countimg - 1;
    } else {
      pos = pos;
    }
    controles.forEach((punto, i) => {
      controles[i].classList.remove("activo");
    });
    img.forEach((punto, i) => {
      img[i].classList.remove("activo");
    });
    img[pos].classList.add("activo");
    controles[pos].classList.add("activo");
  }

  function auto() {
    let pos = posicion();
    pos = pos + 1;
    if (pos >= countimg) {
      pos = 0;
    } else {
      pos = pos;
    }
    controles.forEach((punto, i) => {
      controles[i].classList.remove("activo");
    });
    img.forEach((punto, i) => {
      img[i].classList.remove("activo");
    });
    img[pos].classList.add("activo");
    controles[pos].classList.add("activo");
  }

  function desplazamiento() {
    img.forEach((punto, i) => {
      img[i].addEventListener("dragstart", (e) => e.preventDefault());
      let pressed = false;
      let startX = 0;

      img[i].addEventListener("mousedown", function (e) {
        pressed = true;
        startX = e.clientX;
      });

      img[i].addEventListener("mouseleave", function (e) {
        pressed = false;
      });

      window.addEventListener("mouseup", function (e) {
        pressed = false;
      });

      img[i].addEventListener("mousemove", function (e) {
        if (!pressed) {
          return;
        }

        let abc = (this.scrollLeft += startX - e.clientX);

        if (abc >= 0) {
          console.log(abc);
          btnNext();
        } else {
          btnPrevious();
        }
      });
    });
  }
})();


