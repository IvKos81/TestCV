// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"I4sy":[function(require,module,exports) {

},{"./image\\logo\\favourite.png":[["favourite.a45b93db.png","TMUg"],"TMUg"],"./image\\logo\\favourite_save.png":[["favourite_save.6eacd141.png","UWtJ"],"UWtJ"],"./image\\logo\\arrowdown.png":[["arrowdown.f389e545.png","wscb"],"wscb"],"./image\\portfoliobig.png":[["portfoliobig.c7257c1c.png","AwW4"],"AwW4"]}],"mpVp":[function(require,module,exports) {
"use strict";

require("./styles.scss");

// favourite Button
var favouriteButton = document.querySelector('.vacancy_favourite');
var vacancyButton = document.querySelector('.vacancy_button');
favouriteButton.addEventListener('click', function () {
  favouriteButton.classList.toggle('favouritesave');

  if (vacancyButton.innerHTML === 'Предложить вакансию') {
    vacancyButton.innerHTML = 'Приглашение отправлено &#10003';
  } else {
    vacancyButton.innerHTML = 'Предложить вакансию';
  }
});
var favouriteButtonD = document.querySelector('.desktop>.vacancy_favourite');
var vacancyButtonD = document.querySelector('.desktop>.vacancy_button');
favouriteButtonD.addEventListener('click', function () {
  favouriteButtonD.classList.toggle('favouritesave');

  if (vacancyButtonD.innerHTML === 'Предложить вакансию') {
    vacancyButtonD.innerHTML = 'Приглашение отправлено &#10003';
  } else {
    vacancyButtonD.innerHTML = 'Предложить вакансию';
  }
}); // vacancy menu

var vacancySubmenu = document.querySelector('.vacancysubmenu');
vacancyButton.addEventListener('click', function () {
  if (vacancySubmenu.style.display !== 'block') {
    vacancySubmenu.style.display = 'block';
  } else {
    vacancySubmenu.style.display = 'none';
  }
});
var vacancySubmenuD = document.querySelector('.desktop>.vacancysubmenu');
vacancyButtonD.addEventListener('click', function () {
  if (vacancySubmenuD.style.display !== 'block') {
    vacancySubmenuD.style.display = 'block';
  } else {
    vacancySubmenuD.style.display = 'none';
  }
}); // feedback menu

var feedbackTitle = document.querySelector('.feedback_title');
var feedbackCardGallery = document.querySelector('.feedback_cardgallery');
var feedbackLogo = document.querySelector('.feedback_logo');
feedbackTitle.addEventListener('click', function () {
  if (feedbackCardGallery.style.display !== 'none') {
    feedbackCardGallery.style.display = 'none';
    feedbackLogo.style.transform = 'translateY(5px) rotate(270deg)';
  } else {
    feedbackCardGallery.style.display = 'block';
    feedbackLogo.style.transform = 'translateY(5px) rotate(90deg)';
  }
});
var feedbackTitleD = document.querySelector('.desktop>.feedback_title');
var feedbackCardGalleryD = document.querySelector('.desktop>.feedback_cardgallery');
var feedbackLogoD = document.querySelector('.feedback_logo.desktop');
feedbackTitleD.addEventListener('click', function () {
  if (feedbackCardGalleryD.style.display !== 'none') {
    feedbackCardGalleryD.style.display = 'none';
    feedbackLogoD.style.transform = 'translateY(5px) rotate(270deg)';
  } else {
    feedbackCardGalleryD.style.display = 'block';
    feedbackLogoD.style.transform = 'translateY(5px) rotate(90deg)';
  }
}); // cvmenu popup

var cvmenuFile = document.querySelector('.cvmenu_file');
var popup = document.querySelector('.popup');
var popupButtonClose = document.querySelector('.button_close');
cvmenuFile.addEventListener('click', function () {
  popup.style.display = 'block';
});
popupButtonClose.addEventListener('click', function () {
  popup.style.display = 'none';
});
var cvmenuFileD = document.querySelector('.desktop>.cvmenu_file');
var popupD = document.querySelector('.desktop>.popup');
var popupButtonCloseD = document.querySelector('.button_close.desktop');
cvmenuFileD.addEventListener('click', function () {
  popupD.style.display = 'block';
});
popupButtonCloseD.addEventListener('click', function () {
  popupD.style.display = 'none';
}); // portfolio popup

var jobBlockPortfolio = document.querySelector('.job_block_portfolio_gallery');
var popupPortfolio = document.querySelector('.popup_portfolio');
var popupMobilePortfolio = document.querySelector('.popupmobile_portfolio');
var bodyWrapper = document.querySelector('.wrapper');
var popupPortfolioClose = document.querySelector('.popup_portfolio_close');
var popupMobilePortfolioClose = document.querySelector('.popupmobile_portfolio_close');
var popupPortfolioPictBlock = document.querySelector('.popup_portfolio_pictblock');
var popupMobilePortfolioPictBlock = document.querySelector('.popupmobile_portfolio_pictblock');
jobBlockPortfolio.addEventListener('click', function (evt) {
  console.log(evt.target);

  if (window.innerWidth > 992) {
    popupPortfolio.style.opacity = '100';
    popupPortfolio.style.zIndex = '2';
    popupPortfolioPictBlock.style.background = 'url(' + evt.target.src + ')' + 'center no-repeat';
    popupPortfolioPictBlock.style.backgroundSize = 'contain';
    bodyWrapper.style.color = '#000000';
    bodyWrapper.style.opacity = '0.5';
  } else {
    popupMobilePortfolio.style.opacity = '100';
    popupMobilePortfolio.style.zIndex = '2';
    popupMobilePortfolioPictBlock.style.background = 'url(' + evt.target.src + ')' + 'center no-repeat';
    popupMobilePortfolioPictBlock.style.backgroundSize = 'contain';
    bodyWrapper.style.color = '#000000';
    bodyWrapper.style.opacity = '0.5';
  }
});
popupPortfolioClose.addEventListener('click', function () {
  popupPortfolio.style.opacity = '0';
  popupPortfolio.style.zIndex = '-1';
  bodyWrapper.style.backgroundColor = '#ffffff';
  bodyWrapper.style.opacity = '1';
});
popupMobilePortfolioClose.addEventListener('click', function () {
  popupMobilePortfolio.style.opacity = '0';
  popupMobilePortfolio.style.zIndex = '-1';
  bodyWrapper.style.backgroundColor = '#ffffff';
  bodyWrapper.style.opacity = '1';
}); // gallery in page portfolio 

$('.job_block_portfolio_gallery').slick({
  infinite: true,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});
},{"./styles.scss":"I4sy"}]},{},["mpVp"], null)