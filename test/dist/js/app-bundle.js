/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/Api.ts":
/*!************************!*\
  !*** ./src/api/Api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* binding */ Api),
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var mithril_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril/request */ "./node_modules/mithril/request.js");
/* harmony import */ var mithril_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_apiState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/apiState */ "./src/state/apiState.ts");


class Api {
  query(schema, query, success, failed) {
    if (_state_apiState__WEBPACK_IMPORTED_MODULE_1__.apiState.queryUrl == null) {
      failed(null);
      return;
    }
    (0,mithril_request__WEBPACK_IMPORTED_MODULE_0__.request)({
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        query: query,
        schema: schema
      },
      method: "POST",
      url: _state_apiState__WEBPACK_IMPORTED_MODULE_1__.apiState.queryUrl
    }).then(response => {
      if (response.ise) {
        failed(response);
      } else {
        success(response);
      }
    }).catch(() => failed(null));
  }
  testApi(success, failed) {
    this.query("CREATE TABLE x(ID INT PRIMARY KEY); INSERT INTO x(ID) VALUES(5);", "SELECT * FROM x;", success, failed);
  }
}
const api = new Api();

/***/ }),

/***/ "./src/api/ApiSettings.ts":
/*!********************************!*\
  !*** ./src/api/ApiSettings.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiSettings": () => (/* binding */ ApiSettings),
/* harmony export */   "apiSettings": () => (/* binding */ apiSettings)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "./src/storage.ts");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ "./src/api/Api.ts");
/* harmony import */ var _state_apiState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/apiState */ "./src/state/apiState.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_3__);




class ApiSettings {
  static validationSuccess(success) {
    _state_apiState__WEBPACK_IMPORTED_MODULE_2__.apiState.validation = "success";
    _state_apiState__WEBPACK_IMPORTED_MODULE_2__.apiState.isValidating = false;
    success();
    (0,mithril__WEBPACK_IMPORTED_MODULE_3__.redraw)();
  }
  static validationFailed(error, failed) {
    _state_apiState__WEBPACK_IMPORTED_MODULE_2__.apiState.validation = "failed";
    _state_apiState__WEBPACK_IMPORTED_MODULE_2__.apiState.isValidating = false;
    failed(error);
    (0,mithril__WEBPACK_IMPORTED_MODULE_3__.redraw)();
  }
  static startValidation(success, failed) {
    _state_apiState__WEBPACK_IMPORTED_MODULE_2__.apiState.isValidating = true;
    _state_apiState__WEBPACK_IMPORTED_MODULE_2__.apiState.validation = "no_validation";
    (0,mithril__WEBPACK_IMPORTED_MODULE_3__.redraw)();
    _Api__WEBPACK_IMPORTED_MODULE_1__.api.testApi(() => ApiSettings.validationSuccess(success), e => ApiSettings.validationFailed(e, failed));
  }
  static runLiveValidations(seconds, success, failed) {
    setInterval(() => {
      ApiSettings.startValidation(success, failed);
    }, seconds * 1000);
  }
  static updateQueryUrlInState(url) {
    _state_apiState__WEBPACK_IMPORTED_MODULE_2__.apiState.queryUrl = url;
    _state_apiState__WEBPACK_IMPORTED_MODULE_2__.apiState.validation = "no_validation";
  }
  updateQueryUrl(url, success, failed) {
    _storage__WEBPACK_IMPORTED_MODULE_0__.storage.saveQueryUrl(url);
    ApiSettings.updateQueryUrlInState(url);
    ApiSettings.startValidation(success, failed);
  }
}
const apiSettings = new ApiSettings();

/***/ }),

/***/ "./src/navigation.ts":
/*!***************************!*\
  !*** ./src/navigation.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": () => (/* binding */ Navigation),
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
/* harmony import */ var mithril_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril/route */ "./node_modules/mithril/route.js");
/* harmony import */ var mithril_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril_route__WEBPACK_IMPORTED_MODULE_0__);

class Navigation {
  apiOptions() {
    mithril_route__WEBPACK_IMPORTED_MODULE_0___default().set("/api-options");
  }
  apiDownload() {
    mithril_route__WEBPACK_IMPORTED_MODULE_0___default().set("/api-download");
  }
}
const navigation = new Navigation();

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _ui_welcome_Welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/welcome/Welcome */ "./src/ui/welcome/Welcome.tsx");
/* harmony import */ var _ui_chapter_basics_SqlBasics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/chapter-basics/SqlBasics */ "./src/ui/chapter-basics/SqlBasics.tsx");
/* harmony import */ var _ui_apiOptions_ApiOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/apiOptions/ApiOptions */ "./src/ui/apiOptions/ApiOptions.tsx");
/* harmony import */ var _ui_chapter_history_History__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/chapter-history/History */ "./src/ui/chapter-history/History.tsx");
/* harmony import */ var _ui_apiDownload_ApiDownload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/apiDownload/ApiDownload */ "./src/ui/apiDownload/ApiDownload.tsx");
/* harmony import */ var _ui_presentation_Presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/presentation/Presentation */ "./src/ui/presentation/Presentation.tsx");






const Routes = {
  "/welcome": _ui_welcome_Welcome__WEBPACK_IMPORTED_MODULE_0__.Welcome,
  "/sql-basics": _ui_chapter_basics_SqlBasics__WEBPACK_IMPORTED_MODULE_1__.SqlBasics,
  "/api-options": _ui_apiOptions_ApiOptions__WEBPACK_IMPORTED_MODULE_2__.ApiOptions,
  "/history": _ui_chapter_history_History__WEBPACK_IMPORTED_MODULE_3__.History,
  "/api-download": _ui_apiDownload_ApiDownload__WEBPACK_IMPORTED_MODULE_4__.ApiDownload,
  "/presentation": _ui_presentation_Presentation__WEBPACK_IMPORTED_MODULE_5__.Presentation
};

/***/ }),

/***/ "./src/state/apiOptionsState.ts":
/*!**************************************!*\
  !*** ./src/state/apiOptionsState.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiOptionsState": () => (/* binding */ ApiOptionsState),
/* harmony export */   "apiOptionsState": () => (/* binding */ apiOptionsState)
/* harmony export */ });
class ApiOptionsState {
  validation = "none";
}
const apiOptionsState = new ApiOptionsState();

/***/ }),

/***/ "./src/state/apiState.ts":
/*!*******************************!*\
  !*** ./src/state/apiState.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiState": () => (/* binding */ ApiState),
/* harmony export */   "apiState": () => (/* binding */ apiState)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "./src/storage.ts");

class ApiState {
  constructor(queryUrl, validation, isValidating) {
    this.queryUrl = queryUrl;
    this.validation = validation;
    this.isValidating = isValidating;
  }
}
const apiState = new ApiState(_storage__WEBPACK_IMPORTED_MODULE_0__.storage.getQueryUrl(), "no_validation", false);

/***/ }),

/***/ "./src/storage.ts":
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage),
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });
class Storage {
  queryUrlKey = "_query";
  getQueryUrl() {
    return window.localStorage.getItem(this.queryUrlKey);
  }
  saveQueryUrl(queryUrl) {
    window.localStorage.setItem(this.queryUrlKey, queryUrl);
  }
  removeQueryUrl() {
    window.localStorage.removeItem(this.queryUrlKey);
  }
}
const storage = new Storage();

/***/ }),

/***/ "./src/ui/apiDownload/ApiDownload.tsx":
/*!********************************************!*\
  !*** ./src/ui/apiDownload/ApiDownload.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiDownload": () => (/* binding */ ApiDownload)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout */ "./src/ui/layout.ts");
/* provided dependency */ var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");

const ApiDownload = function () {
  return {
    view: () => _layout__WEBPACK_IMPORTED_MODULE_0__.layout.free(m('[', null, m("h1", null, "Download PHP API"), m("p", null, "Read the docs before you install it..."), m("a", {
      className: "btn btn-link",
      href: "https://github.com/kacperfaber/mitrhil-sql-presentation/blob/master/api/api.php"
    }, "Download"), m("a", {
      className: "btn btn-link",
      href: "https://github.com/kacperfaber/mitrhil-sql-presentation/blob/master/api/api.txt"
    }, "Documentation")))
  };
};

/***/ }),

/***/ "./src/ui/apiOptions/ApiOptions.tsx":
/*!******************************************!*\
  !*** ./src/ui/apiOptions/ApiOptions.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiOptions": () => (/* binding */ ApiOptions)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout */ "./src/ui/layout.ts");
/* harmony import */ var _state_apiState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/apiState */ "./src/state/apiState.ts");
/* harmony import */ var _state_apiOptionsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/apiOptionsState */ "./src/state/apiOptionsState.ts");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mithril/hyperscript */ "./node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_ApiSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/ApiSettings */ "./src/api/ApiSettings.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ApiOptions_ApiState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApiOptions_ApiState */ "./src/ui/apiOptions/ApiOptions_ApiState.tsx");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../navigation */ "./src/navigation.ts");








const ApiOptions = function () {
  return {
    view: () => _layout__WEBPACK_IMPORTED_MODULE_0__.layout.free(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("div", {
      className: "container"
    }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("div", {
      className: "row"
    }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("div", {
      className: "col-12"
    }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("div", {
      className: "form"
    }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("div", {
      className: "form-group"
    }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("label", {
      className: "form-label",
      htmlFor: "apiOptions_queryUrl"
    }, "Adres API: "), queryUrlInput()), saveButton(), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()(_ApiOptions_ApiState__WEBPACK_IMPORTED_MODULE_6__.ApiOptions_ApiState, null), downloadApi())))))
  };
};
function downloadApi() {
  function downloadClicked() {
    _navigation__WEBPACK_IMPORTED_MODULE_7__.navigation.apiDownload();
  }
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("button.btn.btn-secondary", {
    onclick: downloadClicked
  }, "Pobierz API");
}
function queryUrlInput() {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("input[type=text]#apiOptions_queryUrl.form-control", {
    value: _state_apiState__WEBPACK_IMPORTED_MODULE_1__.apiState.queryUrl
  });
}
function saveButton() {
  function validationSuccess() {
    _state_apiOptionsState__WEBPACK_IMPORTED_MODULE_2__.apiOptionsState.validation = "validation_ok";
    (0,mithril__WEBPACK_IMPORTED_MODULE_5__.redraw)();
  }
  function validationFailed() {
    _state_apiOptionsState__WEBPACK_IMPORTED_MODULE_2__.apiOptionsState.validation = "validation_failed";
    (0,mithril__WEBPACK_IMPORTED_MODULE_5__.redraw)();
  }
  function saveButtonClicked() {
    const newUrl = document.getElementById("apiOptions_queryUrl").value;
    _state_apiOptionsState__WEBPACK_IMPORTED_MODULE_2__.apiOptionsState.validation = "pending_validation";
    (0,mithril__WEBPACK_IMPORTED_MODULE_5__.redraw)();
    _api_ApiSettings__WEBPACK_IMPORTED_MODULE_4__.apiSettings.updateQueryUrl(newUrl, validationSuccess, validationFailed);
  }
  switch (_state_apiOptionsState__WEBPACK_IMPORTED_MODULE_2__.apiOptionsState.validation) {
    case "none":
      return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("button.btn.btn-primary", {
        onclick: saveButtonClicked
      }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("i.icon-ok"), "ZAPISZ");
    case "pending_validation":
      return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("button.btn.btn-primary", {
        disabled: true
      }, [mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("div", {
        class: "spinner-border",
        role: "status"
      }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("span", {
        class: "sr-only"
      }, "Loading...")), "ZAPISZ"]);
    case "validation_failed":
      return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("button.btn.btn-danger", {
        onclick: saveButtonClicked
      }, "ZAPISZ");
    case "validation_ok":
      return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("button.btn.btn-success", {
        onclick: saveButtonClicked
      }, "ZAPISZ");
  }
}

/***/ }),

/***/ "./src/ui/apiOptions/ApiOptions_ApiState.tsx":
/*!***************************************************!*\
  !*** ./src/ui/apiOptions/ApiOptions_ApiState.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiOptions_ApiState": () => (/* binding */ ApiOptions_ApiState)
/* harmony export */ });
/* harmony import */ var _state_apiState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/apiState */ "./src/state/apiState.ts");
/* provided dependency */ var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");

const ApiOptions_ApiState = function () {
  return {
    view: () => m("div", null, renderLabel(), renderCurrentState())
  };
};
function renderLabel() {
  return m("span", null, "Status API: ");
}
function renderCurrentState() {
  if (_state_apiState__WEBPACK_IMPORTED_MODULE_0__.apiState.isValidating) {
    return m("div", {
      style: "height: 25px; width: 25px;",
      class: "spinner-border",
      role: "status"
    });
  } else if (_state_apiState__WEBPACK_IMPORTED_MODULE_0__.apiState.validation == "success") {
    return m("span", {
      className: "text-green"
    }, "OK");
  } else if (_state_apiState__WEBPACK_IMPORTED_MODULE_0__.apiState.validation == "failed") {
    return m("span", {
      className: "text-red"
    }, "Weryfikacja przebieg\u0142a negatywnie");
  } else if (_state_apiState__WEBPACK_IMPORTED_MODULE_0__.apiState.validation == "no_validation") {
    return m("span", null, "Brak weryfikacji");
  }
  return m("span", null, "Nothing to show...");
}

/***/ }),

/***/ "./src/ui/chapter-basics/SqlBasics.tsx":
/*!*********************************************!*\
  !*** ./src/ui/chapter-basics/SqlBasics.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlBasics": () => (/* binding */ SqlBasics),
/* harmony export */   "section_coToJestDoCzegoSluzy": () => (/* binding */ section_coToJestDoCzegoSluzy),
/* harmony export */   "section_kategorieSql": () => (/* binding */ section_kategorieSql)
/* harmony export */ });
/* harmony import */ var _utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ChapterSection */ "./src/ui/utils/ChapterSection.ts");
/* provided dependency */ var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");

const SqlBasics = function () {
  return {
    view: () => (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapter)(m('[', null, m("div", {
      className: "col-10 offset-1"
    }, section_coToJestDoCzegoSluzy(), section_kategorieSql())), "Podstawy języka SQL")
  };
};
function section_kategorieSql() {
  const element = m('[', null, m("h5", null, "DDL - Data Defintion Language"), m("p", null, "Komendy powi\u0105zane z tworzeniem struktury bazy danych"), m("h5", null, "DML - Data Modification Language"), m("p", null, "Zarz\u0105dzanie danymi"), m("h5", null, "DCL - Data Control Language"), m("p", null, "Zarz\u0105dzanie uprawnieniami, u\u017Cytkownikami etc."), m("h5", null, "TCL - ang. Transaction Control Language"), m("p", null, "Obs\u0142uga transakcji danych"), m("h5", null, "DQL - ang. Data Querying Language"), m("p", null, "Pobieranie danych np. poprzez SELECT"));
  return (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapterSection)(element, "Język SQL, a raczej polecenia w nim zostały pogrupowane na: ", "section-kategorie-sql");
}
function section_coToJestDoCzegoSluzy() {
  const element = m('[', null, m("p", null, "SQL - ang. Structured Query Language czyli strukturalny j\u0119zyk zapyta\u0144 to j\u0119zyk s\u0142u\u017C\u0105cy do porozumiewania si\u0119 z baz\u0105 danych", m("ul", null, m("li", null, "Tworzenie baz danych"), m("li", null, "Tworzenie tabel"), m("li", null, "Wysy\u0142anie/Zapisywanie rekord\xF3w"), m("li", null, "Pobieranie danych"), m("li", null, "Zarz\u0105dzanie u\u017Cytkownikami bazy danych"))));
  return (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapterSection)(element, "Co to jest SQL i do czego służy?", "section-co-to-jest-do-czego-sluzy");
}

/***/ }),

/***/ "./src/ui/chapter-history/History.tsx":
/*!********************************************!*\
  !*** ./src/ui/chapter-history/History.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "History": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ChapterSection */ "./src/ui/utils/ChapterSection.ts");
/* provided dependency */ var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");


/* TODO przyszlosc jezyka */

const History = function () {
  return {
    view: () => (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapter)(m('[', null, section_sequel(), section_dialekty()), "Historia języka SQL")
  };
};
function section_sequel() {
  return (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapterSection)(m('[', null, m("p", null, "Pierwszym oficjalnym j\u0119zykiem baz danych byl ", m("strong", null, "SEQUEL"), " (ang. Structured English Query Language powsta\u0142y w latach 70-tych. Wykorzystano go w pierwszym silniku bazodanowym nazywanym SYSTEM-R. SEQUEL by\u0142 przyjazny dla u\u017Cytkownika, by\u0142 to w sumie bardzo logiczny j\u0119zyk angielski."), m("p", null, "Po pewnym czasie okaza\u0142o si\u0119 jednak \u017Ce nazwa SEQUEL by\u0142a wcze\u015Bniej zarejestrowan\u0105 firm\u0105, dlatego nazwa zosta\u0142a zmieniona na SQL.")), "SEQUEL", "section-sequel");
}
function section_dialekty() {
  return (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapterSection)(m('[', null, m("p", null, "W 1986r. powsta\u0142 pierwszy uznany dialekt opracowany przez ANSI nazywany ", m("strong", null, "SQL:86"), "Jednak pomimo istnienia r\xF3\u017Cnych dialekt\xF3w, podstawowe funkcje s\u0105 sp\xF3jne i r\xF3\u017Cnice s\u0105 zauwa\u017Calne dopiero na wy\u017Cszym poziomie zaawansowania."), m("p", null, "Reszta dialekt\xF3w to np. ", m("ul", null, m("li", null, "Transact-SQL (T-SQL)"), m("li", null, "PL/SQL"), m("li", null, "MySQL"), m("li", null, "SQL/PSM"), m("li", null, "SQL-92"), m("li", null, "SQL:1999"), m("li", null, "SQL:2003")))), "Pierwsze dialekty języka", "section-historyczne-dialekty");
}

/***/ }),

/***/ "./src/ui/chapter-usage/SqlUsage.tsx":
/*!*******************************************!*\
  !*** ./src/ui/chapter-usage/SqlUsage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlUsage": () => (/* binding */ SqlUsage)
/* harmony export */ });
/* harmony import */ var _utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ChapterSection */ "./src/ui/utils/ChapterSection.ts");
/* provided dependency */ var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");

const SqlUsage = function () {
  return {
    view: () => (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapter)(m('[', null, section_zastosowanie()), "Zastosowanie języka SQL")
  };
};
function section_zastosowanie() {
  return (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapterSection)(m('[', null, m("p", null, "SQL znajduje szerokie zastosowanie na stronach internetowych, jest w zasadzie najbardziej domy\u015Bln\u0105 form\u0105 zapisywania danych w postaci relacyjnej. W tabelach relacyjnej bazy danych wykorzystuj\u0105c SQL mo\u017Cna zapisa\u0107 np. ", m("ul", null, m("li", null, "Liste u\u017Cytkownik\xF3w"), m("li", null, "Liste zam\xF3wie\u0144 na sklepie internetowym"), m("li", null, "Stan magazynowy produkt\xF3w"), m("li", null, "Zarz\u0105dzanie firm\u0105 poprzez dane pracownik\xF3w, historie wynagrodze\u0144"))), m("p", null, "Z bardziej natywnych rzeczy, mo\u017Cemy wspomnie\u0107 \u017Ce SQL w spos\xF3b kompletny pozwala zarz\u0105dza\u0107 baz\u0105 danych. Poprzez: ", m("ul", null, m("li", null, "Wysy\u0142anie rekord\xF3w"), m("li", null, "Tworzenie raport\xF3w"), m("li", null, "Usuwanie danych"), m("li", null, "Tworzenie baz danych"), m("li", null, "Zarz\u0105dzanie istniej\u0105cymi bazami danych"), m("li", null, "Zarz\u0105dzanie ustawieniami bazy, u\u017Cytkownikami etc...")))), "Zastosowanie na stronach", "section-zastosowanie-sql-na-stronach");
}

/***/ }),

/***/ "./src/ui/groupBy/GroupBy.tsx":
/*!************************************!*\
  !*** ./src/ui/groupBy/GroupBy.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupBy": () => (/* binding */ GroupBy)
/* harmony export */ });
/* harmony import */ var _utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ChapterSection */ "./src/ui/utils/ChapterSection.ts");
/* harmony import */ var _sqlConsole_SchemaButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sqlConsole/SchemaButtons */ "./src/ui/sqlConsole/SchemaButtons.ts");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mithril/hyperscript */ "./node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sqlConsole_SqlConsole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sqlConsole/SqlConsole */ "./src/ui/sqlConsole/SqlConsole.tsx");




const presets = [{
  query: "SELECT SUM(ID) FROM kot GROUP BY COL;",
  schema: "CREATE TABLE kot(ID INT PRIMARY KEY, COL TEXT); INSERT INTO kot(ID, COL) VALUES(1, 'RUDY'); INSERT INTO kot(ID, COL) VALUES(2, 'RUDY'); INSERT INTO kot(ID, COL) VALUES(2, 'BLOND'); INSERT INTO kot(ID, COL) VALUES(3, 'BLOND')",
  text: "Koty/Kolor"
}];
const groupBy_SqlConsoleState = {
  withResetButton: false,
  id: "groupby",
  query: "",
  schema: "",
  result: null,
  isWorking: false,
  schemaButtons: mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("div"),
  isActive: false
};
groupBy_SqlConsoleState.schemaButtons = (0,_sqlConsole_SchemaButtons__WEBPACK_IMPORTED_MODULE_1__.schemaButtonsFrom)(groupBy_SqlConsoleState, presets);
const GroupBy = function () {
  return {
    view: () => (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapter)(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()('[', null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("p", null, "GROUP BY to klauzula j\u0119zyka SQL, kt\xF3ra s\u0142u\u017Cy do grupowania wierszy zwr\xF3conych przez zapytanie SELECT na podstawie jednej lub kilku kolumn. U\u017Cywa si\u0119 jej, aby obliczy\u0107 warto\u015Bci grupowe, takie jak suma, \u015Brednia lub liczba wierszy w ka\u017Cdej grupie."), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("p", null, "Za\u0142\xF3\u017Cmy, \u017Ce mamy tabel\u0119 \"orders\" z danymi dotycz\u0105cymi zam\xF3wie\u0144, w tym nazwisko klienta, dat\u0119 zam\xF3wienia i kwot\u0119 zam\xF3wienia. Aby wy\u015Bwietli\u0107 sum\u0119 zam\xF3wie\u0144 dla ka\u017Cdego klienta, mo\u017Cemy u\u017Cy\u0107 zapytania SQL z klauzul\u0105 GROUP: ", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("br", null), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("br", null), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("strong", null, "SELECT customer_name, SUM(order_amount)", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("br", null), "FROM orders", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("br", null), "GROUP BY customer_name;", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("br", null))), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("p", null, "Klauzula GROUP BY mo\u017Ce by\u0107 u\u017Cyta z innymi klauzulami, takimi jak HAVING i ORDER BY, aby doda\u0107 filtry lub uporz\u0105dkowa\u0107 wyniki. Na przyk\u0142ad, mo\u017Cna doda\u0107 HAVING, aby wy\u015Bwietli\u0107 tylko nazwiska klient\xF3w, kt\xF3rzy z\u0142o\u017Cyli zam\xF3wienia o warto\u015Bci wi\u0119kszej ni\u017C 1000, w ten spos\xF3b:"), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()(_sqlConsole_SqlConsole__WEBPACK_IMPORTED_MODULE_3__.SqlConsole, {
      state: groupBy_SqlConsoleState
    })), "Co to jest GROUP BY?")
  };
};

/***/ }),

/***/ "./src/ui/layout.ts":
/*!**************************!*\
  !*** ./src/ui/layout.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": () => (/* binding */ Layout),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/Navbar */ "./src/ui/navbar/Navbar.tsx");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril/hyperscript */ "./node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1__);


class Layout {
  free(node) {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div#view", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__.Navbar), node);
  }
}
const layout = new Layout();

/***/ }),

/***/ "./src/ui/navbar/Navbar.tsx":
/*!**********************************!*\
  !*** ./src/ui/navbar/Navbar.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _Navbar_ApiState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar_ApiState */ "./src/ui/navbar/Navbar_ApiState.tsx");
/* provided dependency */ var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");

const Navbar = function () {
  return {
    view: () => m("nav", {
      id: "navbar",
      className: "navbar fixed-top"
    }, m("div", {
      className: "navbar-brand text-center"
    }, "SQL - Podstawy j\u0119zyka"), m(_Navbar_ApiState__WEBPACK_IMPORTED_MODULE_0__.Navbar_ApiState, null))
  };
};

/***/ }),

/***/ "./src/ui/navbar/Navbar_ApiState.tsx":
/*!*******************************************!*\
  !*** ./src/ui/navbar/Navbar_ApiState.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar_ApiState": () => (/* binding */ Navbar_ApiState)
/* harmony export */ });
/* harmony import */ var _state_apiState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/apiState */ "./src/state/apiState.ts");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation */ "./src/navigation.ts");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mithril/hyperscript */ "./node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2__);



const Navbar_ApiState = function () {
  return {
    view: () => mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("div", null, renderLabel(), renderCurrentStatus(), renderSettingsButton())
  };
};
function renderSettingsButton() {
  function navigateToOptions() {
    _navigation__WEBPACK_IMPORTED_MODULE_1__.navigation.apiOptions();
  }
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("button.btn", {
    onclick: navigateToOptions
  }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("i.icon-cog"));
}
function renderCurrentStatus() {
  if (_state_apiState__WEBPACK_IMPORTED_MODULE_0__.apiState.queryUrl == null) return renderNoUrl();
  if (_state_apiState__WEBPACK_IMPORTED_MODULE_0__.apiState.isValidating) return renderPendingValidation();
  switch (_state_apiState__WEBPACK_IMPORTED_MODULE_0__.apiState.validation) {
    case "failed":
      return renderTestFailed();
    case "success":
      return renderOk();
    case "no_validation":
      return renderNoValidation();
  }
}
function renderNoValidation() {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("span", {
    className: "text-red"
  }, "Nie zweryfikowano");
}
function renderLabel() {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("span", null, "Status API: ");
}
function renderOk() {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("span", {
    className: "text-green"
  }, "OK");
}
function renderTestFailed() {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("span", {
    className: "text-red"
  }, "Testy negatywne");
}
function renderNoUrl() {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("span", {
    className: "text-red"
  }, "Brak API");
}
function renderPendingValidation() {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    style: "height: 15px; width: 15px;",
    class: "spinner-border",
    role: "status"
  });
}

/***/ }),

/***/ "./src/ui/presentation/Presentation.tsx":
/*!**********************************************!*\
  !*** ./src/ui/presentation/Presentation.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Presentation": () => (/* binding */ Presentation)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout */ "./src/ui/layout.ts");
/* harmony import */ var _chapter_basics_SqlBasics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chapter-basics/SqlBasics */ "./src/ui/chapter-basics/SqlBasics.tsx");
/* harmony import */ var _chapter_history_History__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chapter-history/History */ "./src/ui/chapter-history/History.tsx");
/* harmony import */ var _chapter_usage_SqlUsage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chapter-usage/SqlUsage */ "./src/ui/chapter-usage/SqlUsage.tsx");
/* harmony import */ var _sqlFetch_SqlFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sqlFetch/SqlFetch */ "./src/ui/sqlFetch/SqlFetch.tsx");
/* harmony import */ var _whereClause_WhereClause__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../whereClause/WhereClause */ "./src/ui/whereClause/WhereClause.tsx");
/* harmony import */ var _groupBy_GroupBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../groupBy/GroupBy */ "./src/ui/groupBy/GroupBy.tsx");
/* harmony import */ var _Presentation_Ending__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Presentation_Ending */ "./src/ui/presentation/Presentation_Ending.tsx");
/* provided dependency */ var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");








const Presentation = function () {
  return {
    view: () => _layout__WEBPACK_IMPORTED_MODULE_0__.layout.free(m('[', null, m("div", {
      className: "container",
      style: "background-color: #222;"
    }, m(_chapter_basics_SqlBasics__WEBPACK_IMPORTED_MODULE_1__.SqlBasics, null), m(_chapter_history_History__WEBPACK_IMPORTED_MODULE_2__.History, null), m(_chapter_usage_SqlUsage__WEBPACK_IMPORTED_MODULE_3__.SqlUsage, null), m(_sqlFetch_SqlFetch__WEBPACK_IMPORTED_MODULE_4__.SqlFetch, null), m(_whereClause_WhereClause__WEBPACK_IMPORTED_MODULE_5__.WhereClause, null), m(_groupBy_GroupBy__WEBPACK_IMPORTED_MODULE_6__.GroupBy, null)), m(_Presentation_Ending__WEBPACK_IMPORTED_MODULE_7__.Presentation_Ending, null)))
  };
};

/***/ }),

/***/ "./src/ui/presentation/Presentation_Ending.tsx":
/*!*****************************************************!*\
  !*** ./src/ui/presentation/Presentation_Ending.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Presentation_Ending": () => (/* binding */ Presentation_Ending)
/* harmony export */ });
/* provided dependency */ var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
const Presentation_Ending = function () {
  return {
    view: () => m("div", {
      id: "presentation-end"
    }, m("br", null), m("br", null), m("br", null), m("br", null), "Prezentacj\u0119 wykona\u0142: ", m("br", null), m("h2", {
      id: "author"
    }, "Kacper Faber"))
  };
};

/***/ }),

/***/ "./src/ui/sqlConsole/SchemaButtons.ts":
/*!********************************************!*\
  !*** ./src/ui/sqlConsole/SchemaButtons.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schemaButtonFor": () => (/* binding */ schemaButtonFor),
/* harmony export */   "schemaButtonsFrom": () => (/* binding */ schemaButtonsFrom)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril/hyperscript */ "./node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1__);


function schemaButtonFor(tState, text, query, schema) {
  function clicked() {
    tState.query = query;
    tState.schema = schema;
    (0,mithril__WEBPACK_IMPORTED_MODULE_0__.redraw)();
  }
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("button.btn.btn-secondary.schema-preset", {
    onclick: clicked
  }, text);
}
function schemaButtonsFrom(tState, preset) {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div", preset.map(x => schemaButtonFor(tState, x.text, x.query, x.schema)));
}

/***/ }),

/***/ "./src/ui/sqlConsole/SqlConsole.tsx":
/*!******************************************!*\
  !*** ./src/ui/sqlConsole/SqlConsole.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlConsole": () => (/* binding */ SqlConsole)
/* harmony export */ });
/* harmony import */ var _state_apiState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/apiState */ "./src/state/apiState.ts");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril/hyperscript */ "./node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/Api */ "./src/api/Api.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_3__);




const SqlConsole = function (v) {
  return {
    view: () => mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('[', null, renderSqlConsole(v.attrs.state))
  };
};
function getSchemaTextAreaId(state) {
  return "schema-" + state.id;
}
function getQueryTextAreaId(state) {
  return "query-" + state.id;
}
function readQuery(state) {
  return document.getElementById(getQueryTextAreaId(state)).value;
}
function readSchema(state) {
  return document.getElementById(getSchemaTextAreaId(state)).value;
}
function renderError(state) {
  const err = state.error;
  if (err != null) {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("p", {
      className: "text-red"
    }, err.err ?? "Nieznany błąd");
  }
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('[', null);
}
function renderExecuteButton(state) {
  function executeSuccess(qr) {
    state.isWorking = false;
    state.result = qr;
    state.error = null;
    (0,mithril__WEBPACK_IMPORTED_MODULE_3__.redraw)();
  }
  function executeFailed(error) {
    state.isWorking = false;
    state.result = null;
    state.error = error;
    (0,mithril__WEBPACK_IMPORTED_MODULE_3__.redraw)();
  }
  function executeQueryButtonClicked() {
    state.isWorking = true;
    let schema = readSchema(state);
    let query = readQuery(state);
    state.query = query;
    state.schema = schema;
    _api_Api__WEBPACK_IMPORTED_MODULE_2__.api.query(schema, query, executeSuccess, executeFailed);
    (0,mithril__WEBPACK_IMPORTED_MODULE_3__.redraw)();
  }
  if (state.isWorking) {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("button.btn.btn-secondary", {
      disabled: true
    }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div.spinner-border", {
      role: "status",
      style: {
        width: "10px",
        height: "10px"
      }
    }));
  } else {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("button.btn.btn-success", {
      onclick: executeQueryButtonClicked
    }, [mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("i.icon-ok"), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("Wykonaj")]);
  }
}
function renderTable(result) {
  function renderHeadersList() {
    return result.headers.map(x => mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("th", x));
  }
  function renderThead() {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("thead", renderHeadersList());
  }
  function renderRow(row) {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("tr", row.map(x => mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("td", x)));
  }
  function renderRows() {
    return result.rows.map(r => renderRow(r));
  }
  function renderTbody() {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("tbody", renderRows());
  }
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("table", {
    className: "table-dark table table-striped"
  }, renderThead(), renderTbody());
}
function renderResetButton(state) {
  function resetButtonClicked() {
    state.result = null;
  }
  if (state.withResetButton) {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("button.btn.btn-danger", {
      onclick: resetButtonClicked
    }, "Wyczyść");
  }
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('[', null);
}
function renderResult(state) {
  if (state.result == null) {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("h3", null, "Brak rezultat\xF3w");
  }
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div.container", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div.row", state.result.map(x => mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div.col", renderTable(x)))));
}
function renderSchemaTextArea(state) {
  let schemaTextAreaId = getSchemaTextAreaId(state);
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('[', null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    className: "form-group"
  }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("label", {
    htmlFor: schemaTextAreaId
  }, "Schemat: "), textAreaFor(schemaTextAreaId, "3", state.schema)), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("br", null), state.schemaButtons);
}
function textAreaFor(id, rows, value) {
  if (value == null) {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("textarea", {
      className: "form-control",
      id: id,
      rows: rows
    });
  }
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("textarea", {
    className: "form-control",
    id: id,
    rows: rows,
    value: value
  });
}
function renderQueryTextArea(state) {
  let queryTextAreaId = getQueryTextAreaId(state);
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div", null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    className: "form-group"
  }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("label", {
    htmlFor: queryTextAreaId
  }, "Zapytanie: "), textAreaFor(queryTextAreaId, "3", state.query)), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("br", null), renderExecuteButton(state), renderResetButton(state));
}
function renderConsole(state) {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    className: "animate-in container sql-console"
  }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    className: "row"
  }, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("h2", null, "Konsola SQL"), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    className: "col-6"
  }, renderSchemaTextArea(state)), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    className: "col-6"
  }, renderQueryTextArea(state))), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    className: "row"
  }, renderResult(state), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("br", null), renderError(state)));
}
function renderActiveButton(state) {
  function activeButtonClicked() {
    state.isActive = true;
    (0,mithril__WEBPACK_IMPORTED_MODULE_3__.redraw)();
  }
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("button.btn.btn-success", {
    onclick: activeButtonClicked
  }, "Pokaż konsole");
}
function renderSqlConsole(state) {
  if (_state_apiState__WEBPACK_IMPORTED_MODULE_0__.apiState.queryUrl != null && _state_apiState__WEBPACK_IMPORTED_MODULE_0__.apiState.validation != "failed") {
    if (!state.isActive) {
      return renderActiveButton(state);
    }
    return renderConsole(state);
  }
  return renderApiDisabled();
}
function renderApiDisabled() {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()("h4", {
    className: "text-red"
  }, "Do u\u017Cycia konsoli wymagane jest po\u0142\u0105czenie z API.");
}

/***/ }),

/***/ "./src/ui/sqlFetch/SqlFetch.tsx":
/*!**************************************!*\
  !*** ./src/ui/sqlFetch/SqlFetch.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlFetch": () => (/* binding */ SqlFetch)
/* harmony export */ });
/* harmony import */ var _sqlConsole_SqlConsole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sqlConsole/SqlConsole */ "./src/ui/sqlConsole/SqlConsole.tsx");
/* harmony import */ var _utils_ChapterSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ChapterSection */ "./src/ui/utils/ChapterSection.ts");
/* harmony import */ var _sqlConsole_SchemaButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sqlConsole/SchemaButtons */ "./src/ui/sqlConsole/SchemaButtons.ts");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mithril/hyperscript */ "./node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3__);




const presets = [{
  query: "SELECT * FROM user;",
  schema: "CREATE TABLE user(ID INT PRIMARY KEY, NAME TEXT); INSERT INTO user(ID, NAME) VALUES(1, 'Kacper'); INSERT INTO user(ID, NAME) VALUES(2, 'Kacper#2');",
  text: "Lista userów"
}, {
  query: "SELECT * FROM kot WHERE TRUE;",
  schema: "CREATE TABLE kot(ID INT PRIMARY KEY, NAME TEXT); INSERT INTO kot(ID, NAME) VALUES(1, 'Puszek'); INSERT INTO kot(ID, NAME) VALUES(2, 'Mruczek'); INSERT INTO kot(ID, NAME) VALUES(3, 'Kot we butach'); INSERT INTO kot(ID, NAME) VALUES(4, 'Sofia'); INSERT INTO kot(ID, NAME) VALUES(5, 'Klara');",
  text: "Koty"
}];
const sqlFetch_SqlConsoleState = {
  withResetButton: true,
  id: "sql-fetch",
  query: "SELECT * FROM user;",
  schema: "CREATE TABLE USER(ID INT PRIMARY KEY, NAME TEXT); INSERT INTO USER(ID, NAME) VALUES(1, 'Kacper');",
  result: null,
  isWorking: false,
  schemaButtons: mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("div"),
  isActive: false
};
sqlFetch_SqlConsoleState.schemaButtons = schemaButtons();
function schemaButtons() {
  return (0,_sqlConsole_SchemaButtons__WEBPACK_IMPORTED_MODULE_2__.schemaButtonsFrom)(sqlFetch_SqlConsoleState, presets);
}
const SqlFetch = function () {
  return {
    view: () => (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_1__.chapter)(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()('[', null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("p", null, "Pobieranie danych z bazy jest mo\u017Cliwe g\u0142\xF3wnie poprzez polecenie ", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("strong", null, "select"), " (ang. Wybierz)."), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("p", null, "Pozwala ono wybra\u0107 dane z wybranych przez nas kolumn i nieco je zmodyfikowa\u0107"), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("p", null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("strong", null, "SQL nie wybiera tylko danych"), ", pozwala na wykonanie operacji na pobranych danych", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("ul", null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("li", null, "Dzia\u0142ania na liczbach:", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("ul", null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("li", null, "SUM - s\u0142u\u017Cy do sumowania warto\u015Bci numerycznych w kolumnie. Dla przyk\u0142adu, zapytanie \"SELECT SUM(quantity) FROM orders\" zwr\xF3ci sum\u0119 warto\u015Bci w kolumnie \"quantity\" tabeli \"orders\"."), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("li", null, "AVG - s\u0142u\u017Cy do obliczania \u015Bredniej arytmetycznej warto\u015Bci numerycznych w kolumnie. Dla przyk\u0142adu, zapytanie \"SELECT AVG(price) FROM products\" zwr\xF3ci \u015Bredni\u0105 warto\u015B\u0107 w kolumnie \"price\" tabeli \"products\"."), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("li", null, "MAX - s\u0142u\u017Cy do znajdowania najwi\u0119kszej warto\u015Bci w kolumnie. Dla przyk\u0142adu, zapytanie \"SELECT MAX(price) FROM products\" zwr\xF3ci najwi\u0119ksz\u0105 warto\u015B\u0107 w kolumnie \"price\" tabeli \"products\"."), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("li", null, "MIN - s\u0142u\u017Cy do znajdowania najmniejszej warto\u015Bci w kolumnie. Dla przyk\u0142adu, zapytanie \"SELECT MIN(price) FROM products\" zwr\xF3ci najmniejsz\u0105 warto\u015B\u0107 w kolumnie \"price\" tabeli \"products\"."), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("li", null, "COUNT DISTINCT - s\u0142u\u017Cy do zliczania unikalnych warto\u015Bci w kolumnie. Dla przyk\u0142adu, zapytanie \"SELECT COUNT(DISTINCT category) FROM products\" zwr\xF3ci liczb\u0119 unikalnych warto\u015Bci w kolumnie \"category\" tabeli \"products\"."))))), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("p", null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("h5", null, "Przyk\u0142ad polecenia ", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("strong", null, "SELECT")), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()("p", null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_3___default()(_sqlConsole_SqlConsole__WEBPACK_IMPORTED_MODULE_0__.SqlConsole, {
      state: sqlFetch_SqlConsoleState
    })))), "Pobieranie danych z bazy")
  };
};

/***/ }),

/***/ "./src/ui/utils/ChapterSection.ts":
/*!****************************************!*\
  !*** ./src/ui/utils/ChapterSection.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chapter": () => (/* binding */ chapter),
/* harmony export */   "chapterSection": () => (/* binding */ chapterSection)
/* harmony export */ });
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril/hyperscript */ "./node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0__);

function defaultChapterSectionHeader(text) {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("h3.chapter-section-header", text);
}
function chapterSection(node, header, id) {
  const headerElement = typeof header == "string" ? defaultChapterSectionHeader(header) : header;
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(id != null ? `div#${id}.chapter-section` : "div.chapter-section", {}, [headerElement, node]);
}
function defaultChapterHeader(text) {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("h1.chapter-header", text);
}
function getChapterHeader(header) {
  if (header == null) {
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("div");
  }
  switch (typeof header) {
    case "string":
      return defaultChapterHeader(header);
  }
  return header;
}
function chapter(vnode, header) {
  return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("div.row", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("div.col-10.offset-1", mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("div.chapter", getChapterHeader(header), vnode)));
}

/***/ }),

/***/ "./src/ui/welcome/Welcome.tsx":
/*!************************************!*\
  !*** ./src/ui/welcome/Welcome.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Welcome": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout */ "./src/ui/layout.ts");
/* provided dependency */ var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");

const Welcome = function () {
  return {
    view: () => _layout__WEBPACK_IMPORTED_MODULE_0__.layout.free(m("h1", null, "Hello World!"))
  };
};

/***/ }),

/***/ "./src/ui/whereClause/WhereClause.tsx":
/*!********************************************!*\
  !*** ./src/ui/whereClause/WhereClause.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhereClause": () => (/* binding */ WhereClause)
/* harmony export */ });
/* harmony import */ var _utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ChapterSection */ "./src/ui/utils/ChapterSection.ts");
/* harmony import */ var _sqlConsole_SchemaButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sqlConsole/SchemaButtons */ "./src/ui/sqlConsole/SchemaButtons.ts");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mithril/hyperscript */ "./node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sqlConsole_SqlConsole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sqlConsole/SqlConsole */ "./src/ui/sqlConsole/SqlConsole.tsx");




const presets = [{
  query: "SELECT * FROM u WHERE age > 18;",
  schema: "CREATE TABLE u(ID INT PRIMARY KEY, NAME TEXT, AGE INT); INSERT INTO u(ID, NAME, AGE) VALUES(0, 'Kacper', 20); INSERT INTO u(ID, NAME, AGE) VALUES(0, 'Mateusz', 15); INSERT INTO u(ID, NAME, AGE) VALUES(3, 'Oskar', 13); INSERT INTO u(ID, NAME, AGE) VALUES(2, 'Karolina', 17);",
  text: "Pełnoletni użytkownicy"
}, {
  query: "SELECT * FROM kot WHERE NAME IS NOT NULL;",
  schema: "CREATE TABLE kot(ID INT PRIMARY KEY, NAME TEXT); INSERT INTO kot(ID, NAME) VALUES(1, 'Puszek'); INSERT INTO kot(ID, NAME) VALUES(2, NULL); INSERT INTO kot(ID, NAME) VALUES(3, 'Kot we butach')",
  text: "Podane imie / OR NULL"
}];
const whereClause_SqlConsoleState = {
  withResetButton: false,
  id: "where",
  query: "SELECT * FROM user WHERE age > 18;",
  schema: "CREATE TABLE user(ID INT PRIMARY KEY, NAME TEXT, AGE INT); INSERT INTO user(ID, NAME, TEXT) VALUES(0, 'Kacper', 20); INSERT INTO user(ID, NAME, TEXT) VALUES(0, 'Mateusz', 15);",
  result: null,
  isWorking: false,
  schemaButtons: mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("div"),
  isActive: false
};
whereClause_SqlConsoleState.schemaButtons = (0,_sqlConsole_SchemaButtons__WEBPACK_IMPORTED_MODULE_1__.schemaButtonsFrom)(whereClause_SqlConsoleState, presets);
const WhereClause = function () {
  return {
    view: () => (0,_utils_ChapterSection__WEBPACK_IMPORTED_MODULE_0__.chapter)(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()('[', null, mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("p", null, "WHERE to klauzula j\u0119zyka SQL, kt\xF3ra pozwala na okre\u015Blenie warunk\xF3w, jakie musz\u0105 by\u0107 spe\u0142nione przez wiersze zwracane przez zapytanie SELECT."), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("p", null, "Mo\u017Cna u\u017Cy\u0107 WHERE, aby filtrowa\u0107 wyniki zapytania i wy\u015Bwietla\u0107 tylko te wiersze, kt\xF3re spe\u0142niaj\u0105 okre\u015Blone kryteria. Na przyk\u0142ad, je\u015Bli chcesz wy\u015Bwietli\u0107 tylko wiersze z tabeli, kt\xF3re maj\u0105 warto\u015B\u0107 w kolumnie 'name' r\xF3wn\u0105 'Kacper', wpiszesz \"SELECT * FROM user WHERE name = 'Kacper'\";"), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("p", null, "WHERE jest cz\u0119sto u\u017Cywane wraz z innymi klauzulami, takimi jak ORDER BY lub GROUP BY, aby uporz\u0105dkowa\u0107 i ograniczy\u0107 wyniki zapytania."), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("br", null), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()("h3", null, "Przyklady: "), mithril_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()(_sqlConsole_SqlConsole__WEBPACK_IMPORTED_MODULE_3__.SqlConsole, {
      state: whereClause_SqlConsoleState
    })), "Klauzula WHERE")
  };
};

/***/ }),

/***/ "./node_modules/mithril/api/mount-redraw.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/api/mount-redraw.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

module.exports = function(render, schedule, console) {
	var subscriptions = []
	var pending = false
	var offset = -1

	function sync() {
		for (offset = 0; offset < subscriptions.length; offset += 2) {
			try { render(subscriptions[offset], Vnode(subscriptions[offset + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		offset = -1
	}

	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}

	redraw.sync = sync

	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount expects a component, not a vnode.")
		}

		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			if (index <= offset) offset -= 2
			render(root, [])
		}

		if (component != null) {
			subscriptions.push(root, component)
			render(root, Vnode(component), redraw)
		}
	}

	return {mount: mount, redraw: redraw}
}


/***/ }),

/***/ "./node_modules/mithril/api/router.js":
/*!********************************************!*\
  !*** ./node_modules/mithril/api/router.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")
var m = __webpack_require__(/*! ../render/hyperscript */ "./node_modules/mithril/render/hyperscript.js")
var Promise = __webpack_require__(/*! ../promise/promise */ "./node_modules/mithril/promise/promise.js")

var buildPathname = __webpack_require__(/*! ../pathname/build */ "./node_modules/mithril/pathname/build.js")
var parsePathname = __webpack_require__(/*! ../pathname/parse */ "./node_modules/mithril/pathname/parse.js")
var compileTemplate = __webpack_require__(/*! ../pathname/compileTemplate */ "./node_modules/mithril/pathname/compileTemplate.js")
var assign = __webpack_require__(/*! ../util/assign */ "./node_modules/mithril/util/assign.js")
var censor = __webpack_require__(/*! ../util/censor */ "./node_modules/mithril/util/censor.js")

var sentinel = {}

function decodeURIComponentSave(component) {
	try {
		return decodeURIComponent(component)
	} catch(e) {
		return component
	}
}

module.exports = function($window, mountRedraw) {
	var callAsync = $window == null
		// In case Mithril.js' loaded globally without the DOM, let's not break
		? null
		: typeof $window.setImmediate === "function" ? $window.setImmediate : $window.setTimeout
	var p = Promise.resolve()

	var scheduled = false

	// state === 0: init
	// state === 1: scheduled
	// state === 2: done
	var ready = false
	var state = 0

	var compiled, fallbackRoute

	var currentResolver = sentinel, component, attrs, currentPath, lastUpdate

	var RouterRoot = {
		onbeforeupdate: function() {
			state = state ? 2 : 1
			return !(!state || sentinel === currentResolver)
		},
		onremove: function() {
			$window.removeEventListener("popstate", fireAsync, false)
			$window.removeEventListener("hashchange", resolveRoute, false)
		},
		view: function() {
			if (!state || sentinel === currentResolver) return
			// Wrap in a fragment to preserve existing key semantics
			var vnode = [Vnode(component, attrs.key, attrs)]
			if (currentResolver) vnode = currentResolver.render(vnode[0])
			return vnode
		},
	}

	var SKIP = route.SKIP = {}

	function resolveRoute() {
		scheduled = false
		// Consider the pathname holistically. The prefix might even be invalid,
		// but that's not our problem.
		var prefix = $window.location.hash
		if (route.prefix[0] !== "#") {
			prefix = $window.location.search + prefix
			if (route.prefix[0] !== "?") {
				prefix = $window.location.pathname + prefix
				if (prefix[0] !== "/") prefix = "/" + prefix
			}
		}
		// This seemingly useless `.concat()` speeds up the tests quite a bit,
		// since the representation is consistently a relatively poorly
		// optimized cons string.
		var path = prefix.concat()
			.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponentSave)
			.slice(route.prefix.length)
		var data = parsePathname(path)

		assign(data.params, $window.history.state)

		function reject(e) {
			console.error(e)
			setPath(fallbackRoute, null, {replace: true})
		}

		loop(0)
		function loop(i) {
			// state === 0: init
			// state === 1: scheduled
			// state === 2: done
			for (; i < compiled.length; i++) {
				if (compiled[i].check(data)) {
					var payload = compiled[i].component
					var matchedRoute = compiled[i].route
					var localComp = payload
					var update = lastUpdate = function(comp) {
						if (update !== lastUpdate) return
						if (comp === SKIP) return loop(i + 1)
						component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
						attrs = data.params, currentPath = path, lastUpdate = null
						currentResolver = payload.render ? payload : null
						if (state === 2) mountRedraw.redraw()
						else {
							state = 2
							mountRedraw.redraw.sync()
						}
					}
					// There's no understating how much I *wish* I could
					// use `async`/`await` here...
					if (payload.view || typeof payload === "function") {
						payload = {}
						update(localComp)
					}
					else if (payload.onmatch) {
						p.then(function () {
							return payload.onmatch(data.params, path, matchedRoute)
						}).then(update, path === fallbackRoute ? null : reject)
					}
					else update("div")
					return
				}
			}

			if (path === fallbackRoute) {
				throw new Error("Could not resolve default route " + fallbackRoute + ".")
			}
			setPath(fallbackRoute, null, {replace: true})
		}
	}

	// Set it unconditionally so `m.route.set` and `m.route.Link` both work,
	// even if neither `pushState` nor `hashchange` are supported. It's
	// cleared if `hashchange` is used, since that makes it automatically
	// async.
	function fireAsync() {
		if (!scheduled) {
			scheduled = true
			// TODO: just do `mountRedraw.redraw()` here and elide the timer
			// dependency. Note that this will muck with tests a *lot*, so it's
			// not as easy of a change as it sounds.
			callAsync(resolveRoute)
		}
	}

	function setPath(path, data, options) {
		path = buildPathname(path, data)
		if (ready) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)
			else $window.history.pushState(state, title, route.prefix + path)
		}
		else {
			$window.location.href = route.prefix + path
		}
	}

	function route(root, defaultRoute, routes) {
		if (!root) throw new TypeError("DOM element being rendered to does not exist.")

		compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a '/'.")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		fallbackRoute = defaultRoute
		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes.")
			}
		}

		if (typeof $window.history.pushState === "function") {
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			$window.addEventListener("hashchange", resolveRoute, false)
		}

		ready = true
		mountRedraw.mount(root, RouterRoot)
		resolveRoute()
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode) {
			// Omit the used parameters from the rendered element - they are
			// internal. Also, censor the various lifecycle methods.
			//
			// We don't strip the other parameters because for convenience we
			// let them be specified in the selector as well.
			var child = m(
				vnode.attrs.selector || "a",
				censor(vnode.attrs, ["options", "params", "selector", "onclick"]),
				vnode.children
			)
			var options, onclick, href

			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
				child.attrs.href = null
				child.attrs["aria-disabled"] = "true"
				// If you *really* do want add `onclick` on a disabled link, use
				// an `oncreate` hook to add it.
			} else {
				options = vnode.attrs.options
				onclick = vnode.attrs.onclick
				// Easier to build it now to keep it isomorphic.
				href = buildPathname(child.attrs.href, vnode.attrs.params)
				child.attrs.href = route.prefix + href
				child.attrs.onclick = function(e) {
					var result
					if (typeof onclick === "function") {
						result = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}

					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child
		},
	}
	route.param = function(key) {
		return attrs && key != null ? attrs[key] : attrs
	}

	return route
}


/***/ }),

/***/ "./node_modules/mithril/hyperscript.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/hyperscript.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var hyperscript = __webpack_require__(/*! ./render/hyperscript */ "./node_modules/mithril/render/hyperscript.js")

hyperscript.trust = __webpack_require__(/*! ./render/trust */ "./node_modules/mithril/render/trust.js")
hyperscript.fragment = __webpack_require__(/*! ./render/fragment */ "./node_modules/mithril/render/fragment.js")

module.exports = hyperscript


/***/ }),

/***/ "./node_modules/mithril/index.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var hyperscript = __webpack_require__(/*! ./hyperscript */ "./node_modules/mithril/hyperscript.js")
var request = __webpack_require__(/*! ./request */ "./node_modules/mithril/request.js")
var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/mithril/mount-redraw.js")

var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.Fragment = "["
m.mount = mountRedraw.mount
m.route = __webpack_require__(/*! ./route */ "./node_modules/mithril/route.js")
m.render = __webpack_require__(/*! ./render */ "./node_modules/mithril/render.js")
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = __webpack_require__(/*! ./querystring/parse */ "./node_modules/mithril/querystring/parse.js")
m.buildQueryString = __webpack_require__(/*! ./querystring/build */ "./node_modules/mithril/querystring/build.js")
m.parsePathname = __webpack_require__(/*! ./pathname/parse */ "./node_modules/mithril/pathname/parse.js")
m.buildPathname = __webpack_require__(/*! ./pathname/build */ "./node_modules/mithril/pathname/build.js")
m.vnode = __webpack_require__(/*! ./render/vnode */ "./node_modules/mithril/render/vnode.js")
m.PromisePolyfill = __webpack_require__(/*! ./promise/polyfill */ "./node_modules/mithril/promise/polyfill.js")
m.censor = __webpack_require__(/*! ./util/censor */ "./node_modules/mithril/util/censor.js")

module.exports = m


/***/ }),

/***/ "./node_modules/mithril/mount-redraw.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/mount-redraw.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var render = __webpack_require__(/*! ./render */ "./node_modules/mithril/render.js")

module.exports = __webpack_require__(/*! ./api/mount-redraw */ "./node_modules/mithril/api/mount-redraw.js")(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null)


/***/ }),

/***/ "./node_modules/mithril/pathname/build.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/build.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var buildQueryString = __webpack_require__(/*! ../querystring/build */ "./node_modules/mithril/querystring/build.js")
var assign = __webpack_require__(/*! ../util/assign */ "./node_modules/mithril/util/assign.js")

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ }),

/***/ "./node_modules/mithril/pathname/compileTemplate.js":
/*!**********************************************************!*\
  !*** ./node_modules/mithril/pathname/compileTemplate.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var parsePathname = __webpack_require__(/*! ./parse */ "./node_modules/mithril/pathname/parse.js")

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ }),

/***/ "./node_modules/mithril/pathname/parse.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/parse.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var parseQueryString = __webpack_require__(/*! ../querystring/parse */ "./node_modules/mithril/querystring/parse.js")

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1)
	}
	return {
		path: path,
		params: queryIndex < 0
			? {}
			: parseQueryString(url.slice(queryIndex + 1, queryEnd)),
	}
}


/***/ }),

/***/ "./node_modules/mithril/promise/polyfill.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/promise/polyfill.js ***!
  \**************************************************/
/***/ ((module) => {


/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with 'new'.")
	if (typeof executor !== "function") throw new TypeError("executor must be a function.")

	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved with itself.")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}

	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}

module.exports = PromisePolyfill


/***/ }),

/***/ "./node_modules/mithril/promise/promise.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/promise/promise.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global window */


var PromisePolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/mithril/promise/polyfill.js")

if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = window.Promise
} else if (typeof __webpack_require__.g !== "undefined") {
	if (typeof __webpack_require__.g.Promise === "undefined") {
		__webpack_require__.g.Promise = PromisePolyfill
	} else if (!__webpack_require__.g.Promise.prototype.finally) {
		__webpack_require__.g.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = __webpack_require__.g.Promise
} else {
	module.exports = PromisePolyfill
}


/***/ }),

/***/ "./node_modules/mithril/querystring/build.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/build.js ***!
  \***************************************************/
/***/ ((module) => {



module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ }),

/***/ "./node_modules/mithril/querystring/parse.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/parse.js ***!
  \***************************************************/
/***/ ((module) => {



function decodeURIComponentSave(str) {
	try {
		return decodeURIComponent(str)
	} catch(err) {
		return str
	}
}

module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}, data = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponentSave(entry[0])
		var value = entry.length === 2 ? decodeURIComponentSave(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j === levels.length - 1) cursor[level] = value
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data
}


/***/ }),

/***/ "./node_modules/mithril/render.js":
/*!****************************************!*\
  !*** ./node_modules/mithril/render.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



module.exports = __webpack_require__(/*! ./render/render */ "./node_modules/mithril/render/render.js")(typeof window !== "undefined" ? window : null)


/***/ }),

/***/ "./node_modules/mithril/render/fragment.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/render/fragment.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "./node_modules/mithril/render/hyperscriptVnode.js")

module.exports = function() {
	var vnode = hyperscriptVnode.apply(0, arguments)

	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ }),

/***/ "./node_modules/mithril/render/hyperscript.js":
/*!****************************************************!*\
  !*** ./node_modules/mithril/render/hyperscript.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "./node_modules/mithril/render/hyperscriptVnode.js")
var hasOwn = __webpack_require__(/*! ../util/hasOwn */ "./node_modules/mithril/util/hasOwn.js")

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className

	vnode.tag = state.tag
	vnode.attrs = {}

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null

	if (hasClass) attrs.class = null

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}

	return vnode
}

function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode.apply(1, arguments)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}

	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ }),

/***/ "./node_modules/mithril/render/hyperscriptVnode.js":
/*!*********************************************************!*\
  !*** ./node_modules/mithril/render/hyperscriptVnode.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril.js requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
	var attrs = arguments[this], start = this + 1, children

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = this
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	return Vnode("", attrs.key, attrs, children)
}


/***/ }),

/***/ "./node_modules/mithril/render/render.js":
/*!***********************************************!*\
  !*** ./node_modules/mithril/render/render.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

module.exports = function($window) {
	var $doc = $window && $window.document
	var currentRedraw

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("'vnode.state' must not be modified.")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (!maybeSetContentEditable(vnode)) {
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++
			if (isOldKeyed !== isKeyed) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
		}
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (!maybeSetContentEditable(vnode)) {
			updateNodes(element, old.children, vnode.children, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequence
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}

	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm not exactly interested in doing that.
	function moveNodes(parent, vnode, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				for (var i = 0; i < vnode.instance.length; i++) {
					frag.appendChild(vnode.instance[i])
				}
			} else if (vnode.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode.dom)
			} else if (vnode.children.length === 1) {
				vnode = vnode.children[0]
				if (vnode != null) continue
			} else {
				for (var i = 0; i < vnode.children.length; i++) {
					var child = vnode.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function maybeSetContentEditable(vnode) {
		if (vnode.attrs == null || (
			vnode.attrs.contenteditable == null && // attribute
			vnode.attrs.contentEditable == null // property
		)) return false
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted.")
		return true
	}

	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(parent, vnode)
		}
	}
	function removeNode(parent, vnode) {
		var mask = 0
		var original = vnode.state
		var stateResult, attrsResult
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
			var result = callHook.call(vnode.state.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode, original)

		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode)
			removeChild(parent, vnode)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}

		function reallyRemove() {
			checkState(vnode, original)
			onremove(vnode)
			removeChild(parent, vnode)
		}
	}
	function removeHTML(parent, vnode) {
		for (var i = 0; i < vnode.instance.length; i++) {
			parent.removeChild(vnode.instance[i])
		}
	}
	function removeChild(parent, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				removeHTML(parent, vnode)
			} else {
				if (vnode.tag !== "[") {
					parent.removeChild(vnode.dom)
					if (!Array.isArray(vnode.children)) break
				}
				if (vnode.children.length === 1) {
					vnode = vnode.children[0]
					if (vnode != null) continue
				} else {
					for (var i = 0; i < vnode.children.length; i++) {
						var child = vnode.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
		//
		// Also, the DOM does things to inputs based on the value, so it needs set first.
		// See: https://github.com/MithrilJS/mithril.js/issues/2622
		if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type)
		var isFileInput = attrs != null && vnode.tag === "input" && attrs.type === "file"
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns, isFileInput)
		}
	}
	function setAttr(vnode, key, old, value, ns, isFileInput) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object" || key === "type" && vnode.tag === "input") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				//setting input[type=file][value] to same value causes an error to be generated if it's non-empty
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && (isFileInput || vnode.dom === activeElement())) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				//setting input[type=file][value] to different value is an error if it's non-empty
				// Not ideal, but it at least works around the most common source of uncaught exceptions for now.
				if (isFileInput && "" + value !== "") { console.error("`value` is read-only on file inputs!"); return }
				/* eslint-enable no-implicit-coercion */
			}
			vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n") updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& key !== "title" // creates "null" as title
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (old && old === attrs) {
			console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major")
		}
		if (attrs != null) {
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			//
			// Also, the DOM does things to inputs based on the value, so it needs set first.
			// See: https://github.com/MithrilJS/mithril.js/issues/2622
			if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type)
			var isFileInput = vnode.tag === "input" && attrs.type === "file"
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns, isFileInput)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			vnode.events._ = currentRedraw
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode.attrs = old.attrs
		vnode.children = old.children
		vnode.text = old.text
		return true
	}

	var currentDOM

	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("DOM element being rendered to does not exist.")
		if (currentDOM != null && dom.contains(currentDOM)) {
			throw new TypeError("Node is currently being rendered to and thus is locked.")
		}
		var prevRedraw = currentRedraw
		var prevDOM = currentDOM
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI

		currentDOM = dom
		currentRedraw = typeof redraw === "function" ? redraw : undefined
		try {
			// First time rendering into a node clears it out
			if (dom.vnodes == null) dom.textContent = ""
			vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
			dom.vnodes = vnodes
			// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
			if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
			for (var i = 0; i < hooks.length; i++) hooks[i]()
		} finally {
			currentRedraw = prevRedraw
			currentDOM = prevDOM
		}
	}
}


/***/ }),

/***/ "./node_modules/mithril/render/trust.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/trust.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),

/***/ "./node_modules/mithril/render/vnode.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/vnode.js ***!
  \**********************************************/
/***/ ((module) => {



function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError(
					isKeyed && (input[i] != null || typeof input[i] === "boolean")
						? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole."
						: "In fragments, vnodes must either all have keys or none have keys."
				)
			}
		}
		for (var i = 0; i < input.length; i++) {
			children[i] = Vnode.normalize(input[i])
		}
	}
	return children
}

module.exports = Vnode


/***/ }),

/***/ "./node_modules/mithril/request.js":
/*!*****************************************!*\
  !*** ./node_modules/mithril/request.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var PromisePolyfill = __webpack_require__(/*! ./promise/promise */ "./node_modules/mithril/promise/promise.js")
var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./request/request */ "./node_modules/mithril/request/request.js")(typeof window !== "undefined" ? window : null, PromisePolyfill, mountRedraw.redraw)


/***/ }),

/***/ "./node_modules/mithril/request/request.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/request/request.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var buildPathname = __webpack_require__(/*! ../pathname/build */ "./node_modules/mithril/pathname/build.js")
var hasOwn = __webpack_require__(/*! ../util/hasOwn */ "./node_modules/mithril/util/hasOwn.js")

module.exports = function($window, Promise, oncompletion) {
	var callbackCount = 0

	function PromiseProxy(executor) {
		return new Promise(executor)
	}

	// In case the global Promise is some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto

	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise. At the time of writing, this is
				// only necessary for V8, but their behavior is the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request/tests/test-request.js` for
				// a bit more background on the issue at hand.
				promise.constructor = PromiseProxy
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if (hasOwn.call(args.headers, key) && key.toLowerCase() === name) return true
		}
		return false
	}

	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData || body instanceof $window.URLSearchParams)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			var xhr = new $window.XMLHttpRequest(), aborted = false, isTimeout = false
			var original = xhr, replacedAbort
			var abort = xhr.abort

			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, "content-type")) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, "accept")) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType

			for (var key in args.headers) {
				if (hasOwn.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return

				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message

						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") {
								// Handle no-content which will not parse.
								try { response = JSON.parse(ev.target.responseText) }
								catch (e) { response = null }
							}
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}

						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							var completeErrorResponse = function() {
								try { message = ev.target.responseText }
								catch (e) { message = response }
								var error = new Error(message)
								error.code = ev.target.status
								error.response = response
								reject(error)
							}

							if (xhr.status === 0) {
								// Use setTimeout to push this code block onto the event queue
								// This allows `xhr.ontimeout` to run in the case that there is a timeout
								// Without this setTimeout, `xhr.ontimeout` doesn't have a chance to reject
								// as `xhr.onreadystatechange` will run before it
								setTimeout(function() {
									if (isTimeout) return
									completeErrorResponse()
								})
							} else completeErrorResponse()
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			xhr.ontimeout = function (ev) {
				isTimeout = true
				var error = new Error("Request timed out")
				error.code = ev.target.status
				reject(error)
			}

			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr

				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData || body instanceof $window.URLSearchParams) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}


/***/ }),

/***/ "./node_modules/mithril/route.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/route.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./api/router */ "./node_modules/mithril/api/router.js")(typeof window !== "undefined" ? window : null, mountRedraw)


/***/ }),

/***/ "./node_modules/mithril/util/assign.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/util/assign.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// This exists so I'm only saving it once.


var hasOwn = __webpack_require__(/*! ./hasOwn */ "./node_modules/mithril/util/hasOwn.js")

module.exports = Object.assign || function(target, source) {
	for (var key in source) {
		if (hasOwn.call(source, key)) target[key] = source[key]
	}
}


/***/ }),

/***/ "./node_modules/mithril/util/censor.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/util/censor.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



// Note: this is mildly perf-sensitive.
//
// It does *not* use `delete` - dynamic `delete`s usually cause objects to bail
// out into dictionary mode and just generally cause a bunch of optimization
// issues within engines.
//
// Ideally, I would've preferred to do this, if it weren't for the optimization
// issues:
//
// ```js
// const hasOwn = require("./hasOwn")
// const magic = [
//     "key", "oninit", "oncreate", "onbeforeupdate", "onupdate",
//     "onbeforeremove", "onremove",
// ]
// module.exports = (attrs, extras) => {
//     const result = Object.assign(Object.create(null), attrs)
//     for (const key of magic) delete result[key]
//     if (extras != null) for (const key of extras) delete result[key]
//     return result
// }
// ```

var hasOwn = __webpack_require__(/*! ./hasOwn */ "./node_modules/mithril/util/hasOwn.js")
// Words in RegExp literals are sometimes mangled incorrectly by the internal bundler, so use RegExp().
var magic = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$")

module.exports = function(attrs, extras) {
	var result = {}

	if (extras != null) {
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && !magic.test(key) && extras.indexOf(key) < 0) {
				result[key] = attrs[key]
			}
		}
	} else {
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && !magic.test(key)) {
				result[key] = attrs[key]
			}
		}
	}

	return result
}


/***/ }),

/***/ "./node_modules/mithril/util/hasOwn.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/util/hasOwn.js ***!
  \*********************************************/
/***/ ((module) => {

// This exists so I'm only saving it once.


module.exports = {}.hasOwnProperty


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril/route */ "./node_modules/mithril/route.js");
/* harmony import */ var mithril_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril_route__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/routes.ts");
/* harmony import */ var _api_ApiSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/ApiSettings */ "./src/api/ApiSettings.ts");



_api_ApiSettings__WEBPACK_IMPORTED_MODULE_2__.ApiSettings.startValidation(() => {}, () => {});
// ApiSettings.runLiveValidations(10, () => {}, () => {});

mithril_route__WEBPACK_IMPORTED_MODULE_0___default()(document.body, "/presentation", _routes__WEBPACK_IMPORTED_MODULE_1__.Routes);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsZ0VBQWdFO0FBQ2hFLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLG1CQUFtQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7OztBQy9DQTtBQUNZOztBQUVaLG1CQUFtQjs7Ozs7OztVQ0huQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ0Q7QUFDYztBQUU5Q3BKLHlFQUEyQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMvQzs7QUFFQWUsb0RBQUssQ0FBQ3VDLFFBQVEsQ0FBQ2pFLElBQUksRUFBRSxlQUFlLEVBQUVzQywyQ0FBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvYXBpL0FwaS50cyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvYXBpL0FwaVNldHRpbmdzLnRzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL3NyYy9uYXZpZ2F0aW9uLnRzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL3NyYy9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vc3JjL3N0YXRlL2FwaU9wdGlvbnNTdGF0ZS50cyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvc3RhdGUvYXBpU3RhdGUudHMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vc3JjL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vc3JjL3VpL2FwaURvd25sb2FkL0FwaURvd25sb2FkLnRzeCIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvYXBpT3B0aW9ucy9BcGlPcHRpb25zLnRzeCIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvYXBpT3B0aW9ucy9BcGlPcHRpb25zX0FwaVN0YXRlLnRzeCIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvY2hhcHRlci1iYXNpY3MvU3FsQmFzaWNzLnRzeCIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvY2hhcHRlci1oaXN0b3J5L0hpc3RvcnkudHN4Iiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL3NyYy91aS9jaGFwdGVyLXVzYWdlL1NxbFVzYWdlLnRzeCIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvZ3JvdXBCeS9Hcm91cEJ5LnRzeCIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvbGF5b3V0LnRzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL3NyYy91aS9uYXZiYXIvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvbmF2YmFyL05hdmJhcl9BcGlTdGF0ZS50c3giLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vc3JjL3VpL3ByZXNlbnRhdGlvbi9QcmVzZW50YXRpb24udHN4Iiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL3NyYy91aS9wcmVzZW50YXRpb24vUHJlc2VudGF0aW9uX0VuZGluZy50c3giLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vc3JjL3VpL3NxbENvbnNvbGUvU2NoZW1hQnV0dG9ucy50cyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvc3FsQ29uc29sZS9TcWxDb25zb2xlLnRzeCIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvc3FsRmV0Y2gvU3FsRmV0Y2gudHN4Iiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL3NyYy91aS91dGlscy9DaGFwdGVyU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvd2VsY29tZS9XZWxjb21lLnRzeCIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9zcmMvdWkvd2hlcmVDbGF1c2UvV2hlcmVDbGF1c2UudHN4Iiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL2FwaS9tb3VudC1yZWRyYXcuanMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvYXBpL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9oeXBlcnNjcmlwdC5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9tb3VudC1yZWRyYXcuanMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvY29tcGlsZVRlbXBsYXRlLmpzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL3BhdGhuYW1lL3BhcnNlLmpzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL3Byb21pc2UvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcHJvbWlzZS9wcm9taXNlLmpzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL3F1ZXJ5c3RyaW5nL2J1aWxkLmpzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL3F1ZXJ5c3RyaW5nL3BhcnNlLmpzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL2h5cGVyc2NyaXB0LmpzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9oeXBlcnNjcmlwdFZub2RlLmpzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL3RydXN0LmpzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci92bm9kZS5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZXF1ZXN0LmpzIiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlcXVlc3QvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yb3V0ZS5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC91dGlsL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC91dGlsL2NlbnNvci5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC91dGlsL2hhc093bi5qcyIsIndlYnBhY2s6Ly9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWl0cmhpbC1zcWwtcHJlc2VudGF0aW9uLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwibWl0aHJpbC9yZXF1ZXN0XCJcclxuaW1wb3J0IHthcGlTdGF0ZX0gZnJvbSBcIi4uL3N0YXRlL2FwaVN0YXRlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBRdWVyeVJlc3BvbnNlID0gQXJyYXk8UmVzdWx0PjtcclxuZXhwb3J0IHR5cGUgUmVzdWx0ID0geyBoZWFkZXJzOiBBcnJheTxzdHJpbmc+LCByb3dzOiBBcnJheTxBcnJheTxTdHJpbmc+PiB9O1xyXG5leHBvcnQgdHlwZSBFcnJvclJlc3BvbnNlID0ge2Vycjogc3RyaW5nfVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwaSB7XHJcbiAgICBxdWVyeShzY2hlbWE6IHN0cmluZywgcXVlcnk6IHN0cmluZywgc3VjY2VzczogKHI6IFF1ZXJ5UmVzcG9uc2UpID0+IHZvaWQsIGZhaWxlZDogKGU6IEVycm9yUmVzcG9uc2UgfCBudWxsKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKGFwaVN0YXRlLnF1ZXJ5VXJsID09IG51bGwpIHtcclxuICAgICAgICAgICAgZmFpbGVkKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0KHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LCBib2R5OiB7cXVlcnk6IHF1ZXJ5LCBzY2hlbWE6IHNjaGVtYX0sIG1ldGhvZDogXCJQT1NUXCIsIHVybDogYXBpU3RhdGUucXVlcnlVcmx9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWxlZChyZXNwb25zZSBhcyBFcnJvclJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlIGFzIFF1ZXJ5UmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gZmFpbGVkKG51bGwpKTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0QXBpKHN1Y2Nlc3M6ICgpID0+IHZvaWQsIGZhaWxlZDogKGU6IEVycm9yUmVzcG9uc2UgfCBudWxsKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5xdWVyeShcclxuICAgICAgICAgICAgXCJDUkVBVEUgVEFCTEUgeChJRCBJTlQgUFJJTUFSWSBLRVkpOyBJTlNFUlQgSU5UTyB4KElEKSBWQUxVRVMoNSk7XCIsXHJcbiAgICAgICAgICAgIFwiU0VMRUNUICogRlJPTSB4O1wiLFxyXG4gICAgICAgICAgICBzdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsZWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gbmV3IEFwaSgpOyIsImltcG9ydCB7c3RvcmFnZX0gZnJvbSBcIi4uL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHthcGksIEVycm9yUmVzcG9uc2V9IGZyb20gXCIuL0FwaVwiO1xyXG5pbXBvcnQge2FwaVN0YXRlfSBmcm9tIFwiLi4vc3RhdGUvYXBpU3RhdGVcIjtcclxuaW1wb3J0IHtyZWRyYXd9IGZyb20gXCJtaXRocmlsXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXR0aW5ncyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB2YWxpZGF0aW9uU3VjY2VzcyhzdWNjZXNzOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgYXBpU3RhdGUudmFsaWRhdGlvbiA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICAgIGFwaVN0YXRlLmlzVmFsaWRhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICByZWRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB2YWxpZGF0aW9uRmFpbGVkKGVycm9yOiBFcnJvclJlc3BvbnNlIHwgbnVsbCwgZmFpbGVkOiAoZXJyb3I6IEVycm9yUmVzcG9uc2UgfCBudWxsKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgYXBpU3RhdGUudmFsaWRhdGlvbiA9IFwiZmFpbGVkXCI7XHJcbiAgICAgICAgYXBpU3RhdGUuaXNWYWxpZGF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZmFpbGVkKGVycm9yKTtcclxuICAgICAgICByZWRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0VmFsaWRhdGlvbihzdWNjZXNzOiAoKSA9PiB2b2lkLCBmYWlsZWQ6IChlOiBFcnJvclJlc3BvbnNlIHwgbnVsbCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGFwaVN0YXRlLmlzVmFsaWRhdGluZyA9IHRydWU7XHJcbiAgICAgICAgYXBpU3RhdGUudmFsaWRhdGlvbiA9IFwibm9fdmFsaWRhdGlvblwiO1xyXG4gICAgICAgIHJlZHJhdygpO1xyXG5cclxuICAgICAgICBhcGkudGVzdEFwaSgoKSA9PiBBcGlTZXR0aW5ncy52YWxpZGF0aW9uU3VjY2VzcyhzdWNjZXNzKSwgKGU6IEVycm9yUmVzcG9uc2UgfCBudWxsKSA9PiBBcGlTZXR0aW5ncy52YWxpZGF0aW9uRmFpbGVkKGUsIGZhaWxlZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcnVuTGl2ZVZhbGlkYXRpb25zKHNlY29uZHM6IG51bWJlciwgc3VjY2VzczogKCkgPT4gdm9pZCwgZmFpbGVkOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBBcGlTZXR0aW5ncy5zdGFydFZhbGlkYXRpb24oc3VjY2VzcywgZmFpbGVkKTtcclxuICAgICAgICB9LCBzZWNvbmRzICogMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlUXVlcnlVcmxJblN0YXRlKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgYXBpU3RhdGUucXVlcnlVcmwgPSB1cmw7XHJcbiAgICAgICAgYXBpU3RhdGUudmFsaWRhdGlvbiA9IFwibm9fdmFsaWRhdGlvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVF1ZXJ5VXJsKHVybDogc3RyaW5nLCBzdWNjZXNzOiAoKSA9PiB2b2lkLCBmYWlsZWQ6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBzdG9yYWdlLnNhdmVRdWVyeVVybCh1cmwpO1xyXG4gICAgICAgIEFwaVNldHRpbmdzLnVwZGF0ZVF1ZXJ5VXJsSW5TdGF0ZSh1cmwpO1xyXG4gICAgICAgIEFwaVNldHRpbmdzLnN0YXJ0VmFsaWRhdGlvbihzdWNjZXNzLCBmYWlsZWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXBpU2V0dGluZ3MgPSBuZXcgQXBpU2V0dGluZ3MoKTsiLCJpbXBvcnQgcm91dGUgZnJvbSBcIm1pdGhyaWwvcm91dGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIHtcclxuICAgIGFwaU9wdGlvbnMoKSB7XHJcbiAgICAgICAgcm91dGUuc2V0KFwiL2FwaS1vcHRpb25zXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwaURvd25sb2FkKCkge1xyXG4gICAgICAgIHJvdXRlLnNldChcIi9hcGktZG93bmxvYWRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oKTsiLCJpbXBvcnQge1dlbGNvbWV9IGZyb20gXCIuL3VpL3dlbGNvbWUvV2VsY29tZVwiO1xyXG5pbXBvcnQge1NxbEJhc2ljc30gZnJvbSBcIi4vdWkvY2hhcHRlci1iYXNpY3MvU3FsQmFzaWNzXCI7XHJcbmltcG9ydCB7QXBpT3B0aW9uc30gZnJvbSBcIi4vdWkvYXBpT3B0aW9ucy9BcGlPcHRpb25zXCI7XHJcbmltcG9ydCB7SGlzdG9yeX0gZnJvbSBcIi4vdWkvY2hhcHRlci1oaXN0b3J5L0hpc3RvcnlcIjtcclxuaW1wb3J0IHtBcGlEb3dubG9hZH0gZnJvbSBcIi4vdWkvYXBpRG93bmxvYWQvQXBpRG93bmxvYWRcIjtcclxuaW1wb3J0IHtQcmVzZW50YXRpb259IGZyb20gXCIuL3VpL3ByZXNlbnRhdGlvbi9QcmVzZW50YXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0ZXMgPSB7XHJcbiAgICBcIi93ZWxjb21lXCI6IFdlbGNvbWUsXHJcbiAgICBcIi9zcWwtYmFzaWNzXCI6IFNxbEJhc2ljcyxcclxuICAgIFwiL2FwaS1vcHRpb25zXCI6IEFwaU9wdGlvbnMsXHJcbiAgICBcIi9oaXN0b3J5XCI6SGlzdG9yeSxcclxuICAgIFwiL2FwaS1kb3dubG9hZFwiOiBBcGlEb3dubG9hZCxcclxuICAgIFwiL3ByZXNlbnRhdGlvblwiOiBQcmVzZW50YXRpb25cclxufSIsImV4cG9ydCBjbGFzcyBBcGlPcHRpb25zU3RhdGUge1xyXG4gICAgdmFsaWRhdGlvbjogQXBpT3B0aW9uc1N0YXRlX1ZhbGlkYXRpb24gPSBcIm5vbmVcIjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXBpT3B0aW9uc1N0YXRlX1ZhbGlkYXRpb24gPSBcInBlbmRpbmdfdmFsaWRhdGlvblwiIHwgXCJ2YWxpZGF0aW9uX29rXCIgfCBcInZhbGlkYXRpb25fZmFpbGVkXCIgfCBcIm5vbmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlPcHRpb25zU3RhdGUgPSBuZXcgQXBpT3B0aW9uc1N0YXRlKCk7XHJcblxyXG4iLCJpbXBvcnQge3N0b3JhZ2V9IGZyb20gXCIuLi9zdG9yYWdlXCI7XHJcblxyXG50eXBlIEFwaVZhbGlkYXRpb24gPSBcInN1Y2Nlc3NcIiB8IFwiZmFpbGVkXCIgfCBcIm5vX3ZhbGlkYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcXVlcnlVcmw6IHN0cmluZyB8IG51bGwsIHB1YmxpYyB2YWxpZGF0aW9uOiBBcGlWYWxpZGF0aW9uLCBwdWJsaWMgaXNWYWxpZGF0aW5nOiBib29sZWFuKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcGlTdGF0ZSA9IG5ldyBBcGlTdGF0ZShzdG9yYWdlLmdldFF1ZXJ5VXJsKCksIFwibm9fdmFsaWRhdGlvblwiLCBmYWxzZSk7IiwiZXhwb3J0IGNsYXNzIFN0b3JhZ2Uge1xyXG4gICAgcXVlcnlVcmxLZXk6IHN0cmluZyA9IFwiX3F1ZXJ5XCJcclxuXHJcbiAgICBnZXRRdWVyeVVybCgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucXVlcnlVcmxLZXkpXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVF1ZXJ5VXJsKHF1ZXJ5VXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5xdWVyeVVybEtleSwgcXVlcnlVcmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVF1ZXJ5VXJsKCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnF1ZXJ5VXJsS2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpOyIsImltcG9ydCB7bGF5b3V0fSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBpRG93bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZpZXc6ICgpID0+IGxheW91dC5mcmVlKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgxPkRvd25sb2FkIFBIUCBBUEk8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+UmVhZCB0aGUgZG9jcyBiZWZvcmUgeW91IGluc3RhbGwgaXQuLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2thY3BlcmZhYmVyL21pdHJoaWwtc3FsLXByZXNlbnRhdGlvbi9ibG9iL21hc3Rlci9hcGkvYXBpLnBocFwiPkRvd25sb2FkPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rYWNwZXJmYWJlci9taXRyaGlsLXNxbC1wcmVzZW50YXRpb24vYmxvYi9tYXN0ZXIvYXBpL2FwaS50eHRcIj5Eb2N1bWVudGF0aW9uPC9hPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2xheW91dH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5pbXBvcnQge1Zub2RlfSBmcm9tIFwibWl0aHJpbFwiO1xyXG5pbXBvcnQge2FwaVN0YXRlfSBmcm9tIFwiLi4vLi4vc3RhdGUvYXBpU3RhdGVcIjtcclxuaW1wb3J0IHthcGlPcHRpb25zU3RhdGV9IGZyb20gXCIuLi8uLi9zdGF0ZS9hcGlPcHRpb25zU3RhdGVcIjtcclxuaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWwvaHlwZXJzY3JpcHRcIjtcclxuaW1wb3J0IHthcGlTZXR0aW5nc30gZnJvbSBcIi4uLy4uL2FwaS9BcGlTZXR0aW5nc1wiO1xyXG5pbXBvcnQge3JlZHJhd30gZnJvbSBcIm1pdGhyaWxcIlxyXG5pbXBvcnQge0FwaU9wdGlvbnNfQXBpU3RhdGV9IGZyb20gXCIuL0FwaU9wdGlvbnNfQXBpU3RhdGVcIjtcclxuaW1wb3J0IHtuYXZpZ2F0aW9ufSBmcm9tIFwiLi4vLi4vbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwaU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZpZXc6ICgpID0+IGxheW91dC5mcmVlKChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIGh0bWxGb3I9XCJhcGlPcHRpb25zX3F1ZXJ5VXJsXCI+QWRyZXMgQVBJOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdWVyeVVybElucHV0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2F2ZUJ1dHRvbigpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcGlPcHRpb25zX0FwaVN0YXRlLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZG93bmxvYWRBcGkoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZG93bmxvYWRBcGkoKSB7XHJcbiAgICBmdW5jdGlvbiBkb3dubG9hZENsaWNrZWQoKSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbi5hcGlEb3dubG9hZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG0oXCJidXR0b24uYnRuLmJ0bi1zZWNvbmRhcnlcIiwge29uY2xpY2s6IGRvd25sb2FkQ2xpY2tlZH0sIFwiUG9iaWVyeiBBUElcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5VXJsSW5wdXQoKTogVm5vZGUge1xyXG4gICAgcmV0dXJuIG0oXCJpbnB1dFt0eXBlPXRleHRdI2FwaU9wdGlvbnNfcXVlcnlVcmwuZm9ybS1jb250cm9sXCIsIHt2YWx1ZTogYXBpU3RhdGUucXVlcnlVcmx9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUJ1dHRvbigpOiBWbm9kZSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0aW9uU3VjY2VzcygpIHtcclxuICAgICAgICBhcGlPcHRpb25zU3RhdGUudmFsaWRhdGlvbiA9IFwidmFsaWRhdGlvbl9va1wiO1xyXG4gICAgICAgIHJlZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRpb25GYWlsZWQoKSB7XHJcbiAgICAgICAgYXBpT3B0aW9uc1N0YXRlLnZhbGlkYXRpb24gPSBcInZhbGlkYXRpb25fZmFpbGVkXCI7XHJcbiAgICAgICAgcmVkcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZUJ1dHRvbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VXJsID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBpT3B0aW9uc19xdWVyeVVybFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBhcGlPcHRpb25zU3RhdGUudmFsaWRhdGlvbiA9IFwicGVuZGluZ192YWxpZGF0aW9uXCI7XHJcbiAgICAgICAgcmVkcmF3KCk7XHJcbiAgICAgICAgYXBpU2V0dGluZ3MudXBkYXRlUXVlcnlVcmwobmV3VXJsLCB2YWxpZGF0aW9uU3VjY2VzcywgdmFsaWRhdGlvbkZhaWxlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChhcGlPcHRpb25zU3RhdGUudmFsaWRhdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBtKFwiYnV0dG9uLmJ0bi5idG4tcHJpbWFyeVwiLCB7b25jbGljazogc2F2ZUJ1dHRvbkNsaWNrZWR9LCBtKFwiaS5pY29uLW9rXCIpLCBcIlpBUElTWlwiKTtcclxuICAgICAgICBjYXNlIFwicGVuZGluZ192YWxpZGF0aW9uXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBtKFwiYnV0dG9uLmJ0bi5idG4tcHJpbWFyeVwiLCB7ZGlzYWJsZWQ6IHRydWV9LCBbXHJcbiAgICAgICAgICAgICAgICAoPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pLCBcIlpBUElTWlwiXSk7XHJcblxyXG4gICAgICAgIGNhc2UgXCJ2YWxpZGF0aW9uX2ZhaWxlZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gbShcImJ1dHRvbi5idG4uYnRuLWRhbmdlclwiLCB7b25jbGljazogc2F2ZUJ1dHRvbkNsaWNrZWR9LCBcIlpBUElTWlwiKTtcclxuXHJcbiAgICAgICAgY2FzZSBcInZhbGlkYXRpb25fb2tcIjpcclxuICAgICAgICAgICAgcmV0dXJuIG0oXCJidXR0b24uYnRuLmJ0bi1zdWNjZXNzXCIsIHtvbmNsaWNrOiBzYXZlQnV0dG9uQ2xpY2tlZH0sIFwiWkFQSVNaXCIpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7YXBpU3RhdGV9IGZyb20gXCIuLi8uLi9zdGF0ZS9hcGlTdGF0ZVwiO1xyXG5pbXBvcnQge1Zub2RlfSBmcm9tIFwibWl0aHJpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwaU9wdGlvbnNfQXBpU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZpZXc6ICgpID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJMYWJlbCgpfVxyXG4gICAgICAgICAgICAgICAge3JlbmRlckN1cnJlbnRTdGF0ZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxhYmVsKCk6IFZub2RlIHtcclxuICAgIHJldHVybiA8c3Bhbj5TdGF0dXMgQVBJOiA8L3NwYW4+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRTdGF0ZSgpOiBWbm9kZSB7XHJcbiAgICBpZiAoYXBpU3RhdGUuaXNWYWxpZGF0aW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICgoPGRpdiBzdHlsZT1cImhlaWdodDogMjVweDsgd2lkdGg6IDI1cHg7XCIgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIi8+KSlcclxuICAgIH0gZWxzZSBpZiAoYXBpU3RhdGUudmFsaWRhdGlvbiA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuXCI+T0s8L3NwYW4+XHJcbiAgICB9IGVsc2UgaWYgKGFwaVN0YXRlLnZhbGlkYXRpb24gPT0gXCJmYWlsZWRcIikge1xyXG4gICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZFwiPldlcnlmaWthY2phIHByemViaWVnxYJhIG5lZ2F0eXduaWU8L3NwYW4+XHJcbiAgICB9IGVsc2UgaWYgKGFwaVN0YXRlLnZhbGlkYXRpb24gPT0gXCJub192YWxpZGF0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gPHNwYW4+QnJhayB3ZXJ5ZmlrYWNqaTwvc3Bhbj5cclxuICAgIH1cclxuICAgIHJldHVybiA8c3Bhbj5Ob3RoaW5nIHRvIHNob3cuLi48L3NwYW4+XHJcbn0iLCJpbXBvcnQge1Zub2RlfSBmcm9tIFwibWl0aHJpbFwiO1xyXG5pbXBvcnQge2NoYXB0ZXIsIGNoYXB0ZXJTZWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvQ2hhcHRlclNlY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcWxCYXNpY3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZpZXc6ICgpID0+IGNoYXB0ZXIoKDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICB7c2VjdGlvbl9jb1RvSmVzdERvQ3plZ29TbHV6eSgpfVxyXG5cclxuICAgICAgICAgICAgICAgIHtzZWN0aW9uX2thdGVnb3JpZVNxbCgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz4pLCBcIlBvZHN0YXd5IGrEmXp5a2EgU1FMXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uX2thdGVnb3JpZVNxbCgpOiBWbm9kZSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gKDw+XHJcbiAgICAgICAgICAgIDxoNT5EREwgLSBEYXRhIERlZmludGlvbiBMYW5ndWFnZTwvaDU+XHJcbiAgICAgICAgICAgIDxwPktvbWVuZHkgcG93acSFemFuZSB6IHR3b3J6ZW5pZW0gc3RydWt0dXJ5IGJhenkgZGFueWNoPC9wPlxyXG4gICAgICAgICAgICA8aDU+RE1MIC0gRGF0YSBNb2RpZmljYXRpb24gTGFuZ3VhZ2U8L2g1PlxyXG4gICAgICAgICAgICA8cD5aYXJ6xIVkemFuaWUgZGFueW1pPC9wPlxyXG4gICAgICAgICAgICA8aDU+RENMIC0gRGF0YSBDb250cm9sIExhbmd1YWdlPC9oNT5cclxuICAgICAgICAgICAgPHA+WmFyesSFZHphbmllIHVwcmF3bmllbmlhbWksIHXFvHl0a293bmlrYW1pIGV0Yy48L3A+XHJcbiAgICAgICAgICAgIDxoNT5UQ0wgLSBhbmcuIFRyYW5zYWN0aW9uIENvbnRyb2wgTGFuZ3VhZ2U8L2g1PlxyXG4gICAgICAgICAgICA8cD5PYnPFgnVnYSB0cmFuc2FrY2ppIGRhbnljaDwvcD5cclxuICAgICAgICAgICAgPGg1PkRRTCAtIGFuZy4gRGF0YSBRdWVyeWluZyBMYW5ndWFnZTwvaDU+XHJcbiAgICAgICAgICAgIDxwPlBvYmllcmFuaWUgZGFueWNoIG5wLiBwb3ByemV6IFNFTEVDVDwvcD48Lz5cclxuICAgIClcclxuICAgIHJldHVybiBjaGFwdGVyU2VjdGlvbihlbGVtZW50LCBcIkrEmXp5ayBTUUwsIGEgcmFjemVqIHBvbGVjZW5pYSB3IG5pbSB6b3N0YcWCeSBwb2dydXBvd2FuZSBuYTogXCIsIFwic2VjdGlvbi1rYXRlZ29yaWUtc3FsXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbl9jb1RvSmVzdERvQ3plZ29TbHV6eSgpOiBWbm9kZSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gKDw+XHJcbiAgICAgICAgPHA+U1FMIC0gYW5nLiBTdHJ1Y3R1cmVkIFF1ZXJ5IExhbmd1YWdlIGN6eWxpIHN0cnVrdHVyYWxueSBqxJl6eWsgemFweXRhxYQgdG8gasSZenlrIHPFgnXFvMSFY3kgZG9cclxuICAgICAgICAgICAgcG9yb3p1bWlld2FuaWEgc2nEmSB6IGJhesSFIGRhbnljaFxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+VHdvcnplbmllIGJheiBkYW55Y2g8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlR3b3J6ZW5pZSB0YWJlbDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+V3lzecWCYW5pZS9aYXBpc3l3YW5pZSByZWtvcmTDs3c8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlBvYmllcmFuaWUgZGFueWNoPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5aYXJ6xIVkemFuaWUgdcW8eXRrb3duaWthbWkgYmF6eSBkYW55Y2g8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvPilcclxuICAgIHJldHVybiBjaGFwdGVyU2VjdGlvbihlbGVtZW50LCBcIkNvIHRvIGplc3QgU1FMIGkgZG8gY3plZ28gc8WCdcW8eT9cIiwgXCJzZWN0aW9uLWNvLXRvLWplc3QtZG8tY3plZ28tc2x1enlcIik7XHJcbn0iLCJpbXBvcnQge1Zub2RlfSBmcm9tIFwibWl0aHJpbFwiO1xyXG5pbXBvcnQge2NoYXB0ZXIsIGNoYXB0ZXJTZWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvQ2hhcHRlclNlY3Rpb25cIjtcclxuXHJcbi8qIFRPRE8gcHJ6eXN6bG9zYyBqZXp5a2EgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBIaXN0b3J5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2aWV3OiAoKSA9PiBjaGFwdGVyKCg8PlxyXG4gICAgICAgICAgICB7c2VjdGlvbl9zZXF1ZWwoKX1cclxuICAgICAgICAgICAge3NlY3Rpb25fZGlhbGVrdHkoKX1cclxuICAgICAgICA8Lz4pLCBcIkhpc3RvcmlhIGrEmXp5a2EgU1FMXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlY3Rpb25fc2VxdWVsKCk6IFZub2RlIHtcclxuICAgIHJldHVybiBjaGFwdGVyU2VjdGlvbigoXHJcbiAgICAgICAgPD48cD5QaWVyd3N6eW0gb2ZpY2phbG55bSBqxJl6eWtpZW0gYmF6IGRhbnljaCBieWwgPHN0cm9uZz5TRVFVRUw8L3N0cm9uZz4gKGFuZy4gU3RydWN0dXJlZCBFbmdsaXNoIFF1ZXJ5XHJcbiAgICAgICAgICAgIExhbmd1YWdlXHJcbiAgICAgICAgICAgIHBvd3N0YcWCeSB3IGxhdGFjaCA3MC10eWNoLiBXeWtvcnp5c3Rhbm8gZ28gdyBwaWVyd3N6eW0gc2lsbmlrdSBiYXpvZGFub3d5bSBuYXp5d2FueW0gU1lTVEVNLVIuXHJcbiAgICAgICAgICAgIFNFUVVFTCBiecWCIHByenlqYXpueSBkbGEgdcW8eXRrb3duaWthLCBiecWCIHRvIHcgc3VtaWUgYmFyZHpvIGxvZ2ljem55IGrEmXp5ayBhbmdpZWxza2kuXHJcbiAgICAgICAgPC9wPjxwPlBvIHBld255bSBjemFzaWUgb2themHFgm8gc2nEmSBqZWRuYWsgxbxlIG5hendhIFNFUVVFTCBiecWCYSB3Y3plxZtuaWVqIHphcmVqZXN0cm93YW7EhSBmaXJtxIUsIGRsYXRlZ28gbmF6d2FcclxuICAgICAgICAgICAgem9zdGHFgmEgem1pZW5pb25hIG5hIFNRTC48L3A+PC8+KSwgXCJTRVFVRUxcIiwgXCJzZWN0aW9uLXNlcXVlbFwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWN0aW9uX2RpYWxla3R5KCk6IFZub2RlIHtcclxuICAgIHJldHVybiBjaGFwdGVyU2VjdGlvbigoXHJcbiAgICAgICAgPD48cD5XIDE5ODZyLiBwb3dzdGHFgiBwaWVyd3N6eSB1em5hbnkgZGlhbGVrdCBvcHJhY293YW55IHByemV6IEFOU0kgbmF6eXdhbnkgPHN0cm9uZz5TUUw6ODY8L3N0cm9uZz5cclxuICAgICAgICAgICAgSmVkbmFrIHBvbWltbyBpc3RuaWVuaWEgcsOzxbxueWNoIGRpYWxla3TDs3csIHBvZHN0YXdvd2UgZnVua2NqZSBzxIUgc3DDs2puZSBpIHLDs8W8bmljZSBzxIUgemF1d2HFvGFsbmUgZG9waWVybyBuYVxyXG4gICAgICAgICAgICB3ecW8c3p5bSBwb3ppb21pZSB6YWF3YW5zb3dhbmlhLjwvcD5cclxuICAgICAgICAgICAgPHA+UmVzenRhIGRpYWxla3TDs3cgdG8gbnAuIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5UcmFuc2FjdC1TUUwgKFQtU1FMKTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+UEwvU1FMPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5NeVNRTDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+U1FML1BTTTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+U1FMLTkyPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5TUUw6MTk5OTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+U1FMOjIwMDM8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPjwvcD5cclxuICAgICAgICA8Lz4pLCBcIlBpZXJ3c3plIGRpYWxla3R5IGrEmXp5a2FcIiwgXCJzZWN0aW9uLWhpc3Rvcnljem5lLWRpYWxla3R5XCIpO1xyXG59IiwiaW1wb3J0IHtjaGFwdGVyLCBjaGFwdGVyU2VjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL0NoYXB0ZXJTZWN0aW9uXCI7XHJcbmltcG9ydCB7Vm5vZGV9IGZyb20gXCJtaXRocmlsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3FsVXNhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZpZXc6ICgpID0+IGNoYXB0ZXIoKFxyXG4gICAgICAgICAgICAoPD57c2VjdGlvbl96YXN0b3Nvd2FuaWUoKX08Lz4pXHJcbiAgICAgICAgKSwgXCJaYXN0b3Nvd2FuaWUgasSZenlrYSBTUUxcIilcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VjdGlvbl96YXN0b3Nvd2FuaWUoKTogVm5vZGUge1xyXG4gICAgcmV0dXJuIGNoYXB0ZXJTZWN0aW9uKCg8PlxyXG4gICAgICAgIDxwPlNRTCB6bmFqZHVqZSBzemVyb2tpZSB6YXN0b3Nvd2FuaWUgbmEgc3Ryb25hY2hcclxuICAgICAgICAgICAgaW50ZXJuZXRvd3ljaCwgamVzdCB3IHphc2FkemllIG5hamJhcmR6aWVqIGRvbXnFm2xuxIUgZm9ybcSFIHphcGlzeXdhbmlhIGRhbnljaCB3IHBvc3RhY2lcclxuICAgICAgICAgICAgcmVsYWN5am5lai4gVyB0YWJlbGFjaCByZWxhY3lqbmVqIGJhenkgZGFueWNoIHd5a29yenlzdHVqxIVjIFNRTCBtb8W8bmEgemFwaXNhxIcgbnAuIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5MaXN0ZSB1xbx5dGtvd25pa8OzdzwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+TGlzdGUgemFtw7N3aWXFhCBuYSBza2xlcGllIGludGVybmV0b3d5bTwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpPlN0YW4gbWFnYXp5bm93eSBwcm9kdWt0w7N3PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5aYXJ6xIVkemFuaWUgZmlybcSFIHBvcHJ6ZXogZGFuZSBwcmFjb3duaWvDs3csIGhpc3RvcmllIHd5bmFncm9kemXFhDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlogYmFyZHppZWogbmF0eXdueWNoIHJ6ZWN6eSwgbW/FvGVteSB3c3BvbW5pZcSHIMW8ZSBTUUwgdyBzcG9zw7NiIGtvbXBsZXRueSBwb3p3YWxhIHphcnrEhWR6YcSHIGJhesSFIGRhbnljaC5cclxuICAgICAgICAgICAgUG9wcnplejogPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPld5c3nFgmFuaWUgcmVrb3Jkw7N3PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5Ud29yemVuaWUgcmFwb3J0w7N3PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5Vc3V3YW5pZSBkYW55Y2g8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlR3b3J6ZW5pZSBiYXogZGFueWNoPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5aYXJ6xIVkemFuaWUgaXN0bmllasSFY3ltaSBiYXphbWkgZGFueWNoPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5aYXJ6xIVkemFuaWUgdXN0YXdpZW5pYW1pIGJhenksIHXFvHl0a293bmlrYW1pIGV0Yy4uLjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+PC9wPlxyXG4gICAgPC8+KSwgXCJaYXN0b3Nvd2FuaWUgbmEgc3Ryb25hY2hcIiwgXCJzZWN0aW9uLXphc3Rvc293YW5pZS1zcWwtbmEtc3Ryb25hY2hcIilcclxufSIsImltcG9ydCB7Y2hhcHRlcn0gZnJvbSBcIi4uL3V0aWxzL0NoYXB0ZXJTZWN0aW9uXCI7XHJcbmltcG9ydCB7U2NoZW1hQnV0dG9uUHJlc2V0LCBzY2hlbWFCdXR0b25zRnJvbX0gZnJvbSBcIi4uL3NxbENvbnNvbGUvU2NoZW1hQnV0dG9uc1wiO1xyXG5pbXBvcnQge1NxbENvbnNvbGVTdGF0ZX0gZnJvbSBcIi4uLy4uL3N0YXRlL1NxbENvbnNvbGVTdGF0ZVwiO1xyXG5pbXBvcnQgbSBmcm9tIFwibWl0aHJpbC9oeXBlcnNjcmlwdFwiO1xyXG5pbXBvcnQge1NxbENvbnNvbGV9IGZyb20gXCIuLi9zcWxDb25zb2xlL1NxbENvbnNvbGVcIjtcclxuXHJcbmNvbnN0IHByZXNldHM6IEFycmF5PFNjaGVtYUJ1dHRvblByZXNldD4gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcXVlcnk6IFwiU0VMRUNUIFNVTShJRCkgRlJPTSBrb3QgR1JPVVAgQlkgQ09MO1wiLFxyXG4gICAgICAgIHNjaGVtYTogXCJDUkVBVEUgVEFCTEUga290KElEIElOVCBQUklNQVJZIEtFWSwgQ09MIFRFWFQpOyBJTlNFUlQgSU5UTyBrb3QoSUQsIENPTCkgVkFMVUVTKDEsICdSVURZJyk7IElOU0VSVCBJTlRPIGtvdChJRCwgQ09MKSBWQUxVRVMoMiwgJ1JVRFknKTsgSU5TRVJUIElOVE8ga290KElELCBDT0wpIFZBTFVFUygyLCAnQkxPTkQnKTsgSU5TRVJUIElOVE8ga290KElELCBDT0wpIFZBTFVFUygzLCAnQkxPTkQnKVwiLFxyXG4gICAgICAgIHRleHQ6IFwiS290eS9Lb2xvclwiXHJcbiAgICB9XHJcbl07XHJcblxyXG5jb25zdCBncm91cEJ5X1NxbENvbnNvbGVTdGF0ZTogU3FsQ29uc29sZVN0YXRlID0ge1xyXG4gICAgd2l0aFJlc2V0QnV0dG9uOiBmYWxzZSxcclxuICAgIGlkOiBcImdyb3VwYnlcIixcclxuICAgIHF1ZXJ5OiBcIlwiLFxyXG4gICAgc2NoZW1hOiBcIlwiLFxyXG4gICAgcmVzdWx0OiBudWxsLFxyXG4gICAgaXNXb3JraW5nOiBmYWxzZSxcclxuICAgIHNjaGVtYUJ1dHRvbnM6IG0oXCJkaXZcIiksXHJcbiAgICBpc0FjdGl2ZTogZmFsc2VcclxufVxyXG5cclxuZ3JvdXBCeV9TcWxDb25zb2xlU3RhdGUuc2NoZW1hQnV0dG9ucyA9IHNjaGVtYUJ1dHRvbnNGcm9tKGdyb3VwQnlfU3FsQ29uc29sZVN0YXRlLCBwcmVzZXRzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cEJ5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2aWV3OiAoKSA9PiBjaGFwdGVyKDw+PHA+R1JPVVAgQlkgdG8ga2xhdXp1bGEgasSZenlrYSBTUUwsIGt0w7NyYSBzxYJ1xbx5IGRvIGdydXBvd2FuaWEgd2llcnN6eSB6d3LDs2NvbnljaCBwcnplelxyXG4gICAgICAgICAgICAgICAgemFweXRhbmllIFNFTEVDVCBuYSBwb2RzdGF3aWUgamVkbmVqIGx1YiBraWxrdSBrb2x1bW4uIFXFvHl3YSBzacSZIGplaiwgYWJ5IG9ibGljennEhyB3YXJ0b8WbY2kgZ3J1cG93ZSwgdGFraWVcclxuICAgICAgICAgICAgICAgIGphayBzdW1hLCDFm3JlZG5pYSBsdWIgbGljemJhIHdpZXJzenkgdyBrYcW8ZGVqIGdydXBpZS48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+WmHFgsOzxbxteSwgxbxlIG1hbXkgdGFiZWzEmSBcIm9yZGVyc1wiIHogZGFueW1pIGRvdHljesSFY3ltaSB6YW3Ds3dpZcWELCB3IHR5bSBuYXp3aXNrbyBrbGllbnRhLCBkYXTEmSB6YW3Ds3dpZW5pYSBpXHJcbiAgICAgICAgICAgICAgICAgICAga3dvdMSZIHphbcOzd2llbmlhLiBBYnkgd3nFm3dpZXRsacSHIHN1bcSZIHphbcOzd2llxYQgZGxhIGthxbxkZWdvIGtsaWVudGEsIG1vxbxlbXkgdcW8ecSHIHphcHl0YW5pYSBTUUwgeiBrbGF1enVsxIVcclxuICAgICAgICAgICAgICAgICAgICBHUk9VUDogPGJyLz48YnIvPjxzdHJvbmc+U0VMRUNUIGN1c3RvbWVyX25hbWUsIFNVTShvcmRlcl9hbW91bnQpPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRlJPTSBvcmRlcnM8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHUk9VUCBCWSBjdXN0b21lcl9uYW1lOzxici8+PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8cD5LbGF1enVsYSBHUk9VUCBCWSBtb8W8ZSBiecSHIHXFvHl0YSB6IGlubnltaSBrbGF1enVsYW1pLCB0YWtpbWkgamFrIEhBVklORyBpIE9SREVSIEJZLCBhYnkgZG9kYcSHIGZpbHRyeSBsdWIgdXBvcnrEhWRrb3dhxIcgd3luaWtpLiBOYSBwcnp5a8WCYWQsIG1vxbxuYSBkb2RhxIcgSEFWSU5HLCBhYnkgd3nFm3dpZXRsacSHIHR5bGtvIG5hendpc2thIGtsaWVudMOzdywga3TDs3J6eSB6xYJvxbx5bGkgemFtw7N3aWVuaWEgbyB3YXJ0b8WbY2kgd2nEmWtzemVqIG5pxbwgMTAwMCwgdyB0ZW4gc3Bvc8OzYjo8L3A+XHJcbiAgICAgICAgICAgIDxTcWxDb25zb2xlIHN0YXRlPXtncm91cEJ5X1NxbENvbnNvbGVTdGF0ZX0vPlxyXG4gICAgICAgICAgICA8Lz4sXHJcbiAgICAgICAgICAgIFwiQ28gdG8gamVzdCBHUk9VUCBCWT9cIlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCB7Vm5vZGV9IGZyb20gXCJtaXRocmlsXCI7XHJcbmltcG9ydCB7TmF2YmFyfSBmcm9tIFwiLi9uYXZiYXIvTmF2YmFyXCI7XHJcbmltcG9ydCBtIGZyb20gXCJtaXRocmlsL2h5cGVyc2NyaXB0XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQge1xyXG4gICAgZnJlZShub2RlOiBWbm9kZSk6IFZub2RlIHtcclxuICAgICAgICByZXR1cm4gbShcImRpdiN2aWV3XCIsIG0oTmF2YmFyKSwgbm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsYXlvdXQgPSBuZXcgTGF5b3V0KCk7IiwiaW1wb3J0IHtOYXZiYXJfQXBpU3RhdGV9IGZyb20gXCIuL05hdmJhcl9BcGlTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmJhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmlldzogKCkgPT4gKFxyXG5cclxuICAgICAgICAgICAgPG5hdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhciBmaXhlZC10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU1FMIC0gUG9kc3Rhd3kgasSZenlrYVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdmJhcl9BcGlTdGF0ZS8+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1Zub2RlfSBmcm9tIFwibWl0aHJpbFwiO1xyXG5pbXBvcnQge2FwaVN0YXRlfSBmcm9tIFwiLi4vLi4vc3RhdGUvYXBpU3RhdGVcIjtcclxuaW1wb3J0IHtuYXZpZ2F0aW9ufSBmcm9tIFwiLi4vLi4vbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgbSBmcm9tIFwibWl0aHJpbC9oeXBlcnNjcmlwdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmJhcl9BcGlTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmlldzogKCkgPT4gKDxkaXY+XHJcbiAgICAgICAgICAgIHtyZW5kZXJMYWJlbCgpfVxyXG4gICAgICAgICAgICB7cmVuZGVyQ3VycmVudFN0YXR1cygpfVxyXG4gICAgICAgICAgICB7cmVuZGVyU2V0dGluZ3NCdXR0b24oKX1cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNldHRpbmdzQnV0dG9uKCkge1xyXG4gICAgZnVuY3Rpb24gbmF2aWdhdGVUb09wdGlvbnMoKSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbi5hcGlPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG0oXCJidXR0b24uYnRuXCIsIHtvbmNsaWNrOiBuYXZpZ2F0ZVRvT3B0aW9uc30sIG0oXCJpLmljb24tY29nXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFN0YXR1cygpIHtcclxuICAgIGlmIChhcGlTdGF0ZS5xdWVyeVVybCA9PSBudWxsKSByZXR1cm4gcmVuZGVyTm9VcmwoKTtcclxuICAgIGlmIChhcGlTdGF0ZS5pc1ZhbGlkYXRpbmcpIHJldHVybiByZW5kZXJQZW5kaW5nVmFsaWRhdGlvbigpO1xyXG4gICAgc3dpdGNoIChhcGlTdGF0ZS52YWxpZGF0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcImZhaWxlZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyVGVzdEZhaWxlZCgpO1xyXG4gICAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJPaygpO1xyXG4gICAgICAgIGNhc2UgXCJub192YWxpZGF0aW9uXCI6XHJcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJOb1ZhbGlkYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTm9WYWxpZGF0aW9uKCkge1xyXG4gICAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZFwiPk5pZSB6d2VyeWZpa293YW5vPC9zcGFuPilcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGFiZWwoKSB7XHJcbiAgICByZXR1cm4gKDxzcGFuPlN0YXR1cyBBUEk6IDwvc3Bhbj4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJPaygpOiBWbm9kZSB7XHJcbiAgICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW5cIj5PSzwvc3Bhbj4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUZXN0RmFpbGVkKCk6IFZub2RlIHtcclxuICAgIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWRcIj5UZXN0eSBuZWdhdHl3bmU8L3NwYW4+KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTm9VcmwoKTogVm5vZGUge1xyXG4gICAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZFwiPkJyYWsgQVBJPC9zcGFuPik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBlbmRpbmdWYWxpZGF0aW9uKCk6IFZub2RlIHtcclxuICAgIHJldHVybiAoPGRpdiBzdHlsZT1cImhlaWdodDogMTVweDsgd2lkdGg6IDE1cHg7XCIgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIi8+KTtcclxufSIsImltcG9ydCB7bGF5b3V0fSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7U3FsQmFzaWNzfSBmcm9tIFwiLi4vY2hhcHRlci1iYXNpY3MvU3FsQmFzaWNzXCI7XHJcbmltcG9ydCB7SGlzdG9yeX0gZnJvbSBcIi4uL2NoYXB0ZXItaGlzdG9yeS9IaXN0b3J5XCI7XHJcbmltcG9ydCB7U3FsVXNhZ2V9IGZyb20gXCIuLi9jaGFwdGVyLXVzYWdlL1NxbFVzYWdlXCI7XHJcbmltcG9ydCB7U3FsRmV0Y2h9IGZyb20gXCIuLi9zcWxGZXRjaC9TcWxGZXRjaFwiO1xyXG5pbXBvcnQge1doZXJlQ2xhdXNlfSBmcm9tIFwiLi4vd2hlcmVDbGF1c2UvV2hlcmVDbGF1c2VcIjtcclxuaW1wb3J0IHtHcm91cEJ5fSBmcm9tIFwiLi4vZ3JvdXBCeS9Hcm91cEJ5XCI7XHJcbmltcG9ydCB7UHJlc2VudGF0aW9uX0VuZGluZ30gZnJvbSBcIi4vUHJlc2VudGF0aW9uX0VuZGluZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZXNlbnRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmlldzogKCkgPT4gbGF5b3V0LmZyZWUoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3FsQmFzaWNzLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGlzdG9yeS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNxbFVzYWdlLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3FsRmV0Y2gvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxXaGVyZUNsYXVzZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyb3VwQnkvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UHJlc2VudGF0aW9uX0VuZGluZy8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBQcmVzZW50YXRpb25fRW5kaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHt2aWV3OiAoKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcmVzZW50YXRpb24tZW5kXCI+PGJyLz48YnIvPjxici8+PGJyLz5QcmV6ZW50YWNqxJkgd3lrb25hxYI6IDxici8+PGgyIGlkPVwiYXV0aG9yXCI+S2FjcGVyXHJcbiAgICAgICAgICAgICAgICBGYWJlcjwvaDI+PC9kaXY+KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTcWxDb25zb2xlU3RhdGV9IGZyb20gXCIuLi8uLi9zdGF0ZS9TcWxDb25zb2xlU3RhdGVcIjtcclxuaW1wb3J0IHtyZWRyYXcsIFZub2RlfSBmcm9tIFwibWl0aHJpbFwiO1xyXG5pbXBvcnQgbSBmcm9tIFwibWl0aHJpbC9oeXBlcnNjcmlwdFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgU2NoZW1hQnV0dG9uUHJlc2V0ID0ge3RleHQ6IHN0cmluZywgcXVlcnk6IHN0cmluZywgc2NoZW1hOiBzdHJpbmd9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVtYUJ1dHRvbkZvcih0U3RhdGU6IFNxbENvbnNvbGVTdGF0ZSwgdGV4dDogc3RyaW5nLCBxdWVyeTogc3RyaW5nLCBzY2hlbWE6IHN0cmluZykge1xyXG4gICAgZnVuY3Rpb24gY2xpY2tlZCgpIHtcclxuICAgICAgICB0U3RhdGUucXVlcnkgPSBxdWVyeTtcclxuICAgICAgICB0U3RhdGUuc2NoZW1hID0gc2NoZW1hO1xyXG4gICAgICAgIHJlZHJhdygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG0oXCJidXR0b24uYnRuLmJ0bi1zZWNvbmRhcnkuc2NoZW1hLXByZXNldFwiLCB7b25jbGljazogY2xpY2tlZH0sIHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2NoZW1hQnV0dG9uc0Zyb20odFN0YXRlOiBTcWxDb25zb2xlU3RhdGUsIHByZXNldDogQXJyYXk8U2NoZW1hQnV0dG9uUHJlc2V0Pik6IFZub2RlIHtcclxuICAgIHJldHVybiBtKFwiZGl2XCIsIHByZXNldC5tYXAoeCA9PiBzY2hlbWFCdXR0b25Gb3IodFN0YXRlLCB4LnRleHQsIHgucXVlcnksIHguc2NoZW1hKSkpXHJcbn0iLCJpbXBvcnQge3JlcXVlc3QsIFZub2RlfSBmcm9tIFwibWl0aHJpbFwiO1xyXG5pbXBvcnQge1NxbENvbnNvbGVTdGF0ZX0gZnJvbSBcIi4uLy4uL3N0YXRlL1NxbENvbnNvbGVTdGF0ZVwiO1xyXG5pbXBvcnQge2FwaVN0YXRlfSBmcm9tIFwiLi4vLi4vc3RhdGUvYXBpU3RhdGVcIjtcclxuaW1wb3J0IG0gZnJvbSBcIm1pdGhyaWwvaHlwZXJzY3JpcHRcIjtcclxuaW1wb3J0IHthcGksIEVycm9yUmVzcG9uc2UsIFF1ZXJ5UmVzcG9uc2UsIFJlc3VsdH0gZnJvbSBcIi4uLy4uL2FwaS9BcGlcIjtcclxuaW1wb3J0IHtyZWRyYXd9IGZyb20gXCJtaXRocmlsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3FsQ29uc29sZSA9IGZ1bmN0aW9uICh2OiBWbm9kZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2aWV3OiAoKSA9PiAoXHJcbiAgICAgICAgICAgIDw+e3JlbmRlclNxbENvbnNvbGUodi5hdHRycy5zdGF0ZSl9PC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlbWFUZXh0QXJlYUlkKHN0YXRlOiBTcWxDb25zb2xlU3RhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwic2NoZW1hLVwiICsgc3RhdGUuaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFF1ZXJ5VGV4dEFyZWFJZChzdGF0ZTogU3FsQ29uc29sZVN0YXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcInF1ZXJ5LVwiICsgc3RhdGUuaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRRdWVyeShzdGF0ZTogU3FsQ29uc29sZVN0YXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0UXVlcnlUZXh0QXJlYUlkKHN0YXRlKSkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRTY2hlbWEoc3RhdGU6IFNxbENvbnNvbGVTdGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldFNjaGVtYVRleHRBcmVhSWQoc3RhdGUpKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXJyb3Ioc3RhdGU6IFNxbENvbnNvbGVTdGF0ZSk6IFZub2RlIHtcclxuICAgIGNvbnN0IGVyciA9IHN0YXRlLmVycm9yO1xyXG4gICAgaWYgKGVyciAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkXCI+e2Vyci5lcnIgPz8gXCJOaWV6bmFueSBixYLEhWRcIn08L3A+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPD48Lz5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXhlY3V0ZUJ1dHRvbihzdGF0ZTogU3FsQ29uc29sZVN0YXRlKTogVm5vZGUge1xyXG4gICAgZnVuY3Rpb24gZXhlY3V0ZVN1Y2Nlc3MocXI6IFF1ZXJ5UmVzcG9uc2UpIHtcclxuICAgICAgICBzdGF0ZS5pc1dvcmtpbmcgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5yZXN1bHQgPSBxcjtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgcmVkcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXhlY3V0ZUZhaWxlZChlcnJvcjogRXJyb3JSZXNwb25zZSB8IG51bGwpIHtcclxuICAgICAgICBzdGF0ZS5pc1dvcmtpbmcgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5yZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgcmVkcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXhlY3V0ZVF1ZXJ5QnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgICAgICBzdGF0ZS5pc1dvcmtpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBzY2hlbWEgPSByZWFkU2NoZW1hKHN0YXRlKTtcclxuICAgICAgICBsZXQgcXVlcnkgPSByZWFkUXVlcnkoc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgICAgICAgc3RhdGUuc2NoZW1hID0gc2NoZW1hO1xyXG4gICAgICAgIGFwaS5xdWVyeShzY2hlbWEsIHF1ZXJ5LCBleGVjdXRlU3VjY2VzcywgZXhlY3V0ZUZhaWxlZCk7XHJcbiAgICAgICAgcmVkcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXRlLmlzV29ya2luZykge1xyXG4gICAgICAgIHJldHVybiBtKFwiYnV0dG9uLmJ0bi5idG4tc2Vjb25kYXJ5XCIsIHtkaXNhYmxlZDogdHJ1ZX0sIG0oXCJkaXYuc3Bpbm5lci1ib3JkZXJcIiwge1xyXG4gICAgICAgICAgICByb2xlOiBcInN0YXR1c1wiLFxyXG4gICAgICAgICAgICBzdHlsZToge3dpZHRoOiBcIjEwcHhcIiwgaGVpZ2h0OiBcIjEwcHhcIn1cclxuICAgICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBtKFwiYnV0dG9uLmJ0bi5idG4tc3VjY2Vzc1wiLCB7b25jbGljazogZXhlY3V0ZVF1ZXJ5QnV0dG9uQ2xpY2tlZH0sIFttKFwiaS5pY29uLW9rXCIpLCBtKFwiV3lrb25halwiKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFibGUocmVzdWx0OiBSZXN1bHQpOiBWbm9kZSB7XHJcbiAgICBmdW5jdGlvbiByZW5kZXJIZWFkZXJzTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0LmhlYWRlcnMubWFwKCh4KSA9PiBtKFwidGhcIiwgeCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlclRoZWFkKCkge1xyXG4gICAgICAgIHJldHVybiBtKFwidGhlYWRcIiwgcmVuZGVySGVhZGVyc0xpc3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyUm93KHJvdzogQXJyYXk8U3RyaW5nPikge1xyXG4gICAgICAgIHJldHVybiBtKFwidHJcIiwgcm93Lm1hcCh4ID0+IG0oXCJ0ZFwiLCB4KSkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyUm93cygpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHIgPT4gcmVuZGVyUm93KHIpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJUYm9keSgpIHtcclxuICAgICAgICByZXR1cm4gbShcInRib2R5XCIsIHJlbmRlclJvd3MoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICg8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtZGFyayB0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAge3JlbmRlclRoZWFkKCl9XHJcbiAgICAgICAge3JlbmRlclRib2R5KCl9XHJcbiAgICA8L3RhYmxlPilcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUmVzZXRCdXR0b24oc3RhdGU6IFNxbENvbnNvbGVTdGF0ZSkge1xyXG4gICAgZnVuY3Rpb24gcmVzZXRCdXR0b25DbGlja2VkKCkge1xyXG4gICAgICAgIHN0YXRlLnJlc3VsdCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXRlLndpdGhSZXNldEJ1dHRvbikge1xyXG4gICAgICAgIHJldHVybiBtKFwiYnV0dG9uLmJ0bi5idG4tZGFuZ2VyXCIsIHtvbmNsaWNrOiByZXNldEJ1dHRvbkNsaWNrZWR9LCBcIld5Y3p5xZvEh1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoPD48Lz4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclJlc3VsdChzdGF0ZTogU3FsQ29uc29sZVN0YXRlKTogVm5vZGUge1xyXG4gICAgaWYgKHN0YXRlLnJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuICg8aDM+QnJhayByZXp1bHRhdMOzdzwvaDM+KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG0oXCJkaXYuY29udGFpbmVyXCIsIG0oXCJkaXYucm93XCIsIHN0YXRlLnJlc3VsdC5tYXAoeCA9PiBtKFwiZGl2LmNvbFwiLCByZW5kZXJUYWJsZSh4KSkpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNjaGVtYVRleHRBcmVhKHN0YXRlOiBTcWxDb25zb2xlU3RhdGUpIHtcclxuICAgIGxldCBzY2hlbWFUZXh0QXJlYUlkID0gZ2V0U2NoZW1hVGV4dEFyZWFJZChzdGF0ZSk7XHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtzY2hlbWFUZXh0QXJlYUlkfT5TY2hlbWF0OiA8L2xhYmVsPlxyXG4gICAgICAgICAgICB7dGV4dEFyZWFGb3Ioc2NoZW1hVGV4dEFyZWFJZCwgXCIzXCIsIHN0YXRlLnNjaGVtYSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyPjwvYnI+e3N0YXRlLnNjaGVtYUJ1dHRvbnN9PC8+KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXh0QXJlYUZvcihpZDogc3RyaW5nLCByb3dzOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudWxsKTogVm5vZGUge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gKDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17aWR9IHJvd3M9e3Jvd3N9Lz4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPXtpZH0gcm93cz17cm93c30gdmFsdWU9e3ZhbHVlfS8+KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUXVlcnlUZXh0QXJlYShzdGF0ZTogU3FsQ29uc29sZVN0YXRlKSB7XHJcbiAgICBsZXQgcXVlcnlUZXh0QXJlYUlkID0gZ2V0UXVlcnlUZXh0QXJlYUlkKHN0YXRlKTtcclxuICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3F1ZXJ5VGV4dEFyZWFJZH0+WmFweXRhbmllOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICB7dGV4dEFyZWFGb3IocXVlcnlUZXh0QXJlYUlkLCBcIjNcIiwgc3RhdGUucXVlcnkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxicj48L2JyPntyZW5kZXJFeGVjdXRlQnV0dG9uKHN0YXRlKX17cmVuZGVyUmVzZXRCdXR0b24oc3RhdGUpfTwvZGl2PilcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29uc29sZShzdGF0ZTogU3FsQ29uc29sZVN0YXRlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbiBjb250YWluZXIgc3FsLWNvbnNvbGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Lb25zb2xhIFNRTDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJTY2hlbWFUZXh0QXJlYShzdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlclF1ZXJ5VGV4dEFyZWEoc3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJSZXN1bHQoc3RhdGUpfVxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJFcnJvcihzdGF0ZSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBY3RpdmVCdXR0b24oc3RhdGU6IFNxbENvbnNvbGVTdGF0ZSk6IFZub2RlIHtcclxuICAgIGZ1bmN0aW9uIGFjdGl2ZUJ1dHRvbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgc3RhdGUuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHJlZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtKFwiYnV0dG9uLmJ0bi5idG4tc3VjY2Vzc1wiLCB7b25jbGljazogYWN0aXZlQnV0dG9uQ2xpY2tlZH0sIFwiUG9rYcW8IGtvbnNvbGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNxbENvbnNvbGUoc3RhdGU6IFNxbENvbnNvbGVTdGF0ZSk6IFZub2RlIHtcclxuICAgIGlmIChhcGlTdGF0ZS5xdWVyeVVybCAhPSBudWxsICYmIGFwaVN0YXRlLnZhbGlkYXRpb24gIT0gXCJmYWlsZWRcIikge1xyXG4gICAgICAgIGlmICghc3RhdGUuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlckFjdGl2ZUJ1dHRvbihzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZW5kZXJDb25zb2xlKHN0YXRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZW5kZXJBcGlEaXNhYmxlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBcGlEaXNhYmxlZCgpOiBWbm9kZSB7XHJcbiAgICByZXR1cm4gKDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXJlZFwiPkRvIHXFvHljaWEga29uc29saSB3eW1hZ2FuZSBqZXN0IHBvxYLEhWN6ZW5pZSB6IEFQSS48L2g0Pik7XHJcbn0iLCJpbXBvcnQge1NxbENvbnNvbGV9IGZyb20gXCIuLi9zcWxDb25zb2xlL1NxbENvbnNvbGVcIjtcclxuaW1wb3J0IHtjaGFwdGVyfSBmcm9tIFwiLi4vdXRpbHMvQ2hhcHRlclNlY3Rpb25cIjtcclxuaW1wb3J0IHtTY2hlbWFCdXR0b25QcmVzZXQsIHNjaGVtYUJ1dHRvbnNGcm9tfSBmcm9tIFwiLi4vc3FsQ29uc29sZS9TY2hlbWFCdXR0b25zXCI7XHJcbmltcG9ydCB7U3FsQ29uc29sZVN0YXRlfSBmcm9tIFwiLi4vLi4vc3RhdGUvU3FsQ29uc29sZVN0YXRlXCI7XHJcbmltcG9ydCBtIGZyb20gXCJtaXRocmlsL2h5cGVyc2NyaXB0XCI7XHJcblxyXG5jb25zdCBwcmVzZXRzOiBBcnJheTxTY2hlbWFCdXR0b25QcmVzZXQ+ID0gW1xyXG4gICAge1xyXG4gICAgICAgIHF1ZXJ5OiBcIlNFTEVDVCAqIEZST00gdXNlcjtcIixcclxuICAgICAgICBzY2hlbWE6IFwiQ1JFQVRFIFRBQkxFIHVzZXIoSUQgSU5UIFBSSU1BUlkgS0VZLCBOQU1FIFRFWFQpOyBJTlNFUlQgSU5UTyB1c2VyKElELCBOQU1FKSBWQUxVRVMoMSwgJ0thY3BlcicpOyBJTlNFUlQgSU5UTyB1c2VyKElELCBOQU1FKSBWQUxVRVMoMiwgJ0thY3BlciMyJyk7XCIsXHJcbiAgICAgICAgdGV4dDogXCJMaXN0YSB1c2Vyw7N3XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcXVlcnk6IFwiU0VMRUNUICogRlJPTSBrb3QgV0hFUkUgVFJVRTtcIixcclxuICAgICAgICBzY2hlbWE6IFwiQ1JFQVRFIFRBQkxFIGtvdChJRCBJTlQgUFJJTUFSWSBLRVksIE5BTUUgVEVYVCk7IElOU0VSVCBJTlRPIGtvdChJRCwgTkFNRSkgVkFMVUVTKDEsICdQdXN6ZWsnKTsgSU5TRVJUIElOVE8ga290KElELCBOQU1FKSBWQUxVRVMoMiwgJ01ydWN6ZWsnKTsgSU5TRVJUIElOVE8ga290KElELCBOQU1FKSBWQUxVRVMoMywgJ0tvdCB3ZSBidXRhY2gnKTsgSU5TRVJUIElOVE8ga290KElELCBOQU1FKSBWQUxVRVMoNCwgJ1NvZmlhJyk7IElOU0VSVCBJTlRPIGtvdChJRCwgTkFNRSkgVkFMVUVTKDUsICdLbGFyYScpO1wiLFxyXG4gICAgICAgIHRleHQ6IFwiS290eVwiXHJcbiAgICB9XHJcbl07XHJcblxyXG5jb25zdCBzcWxGZXRjaF9TcWxDb25zb2xlU3RhdGU6IFNxbENvbnNvbGVTdGF0ZSA9IHtcclxuICAgIHdpdGhSZXNldEJ1dHRvbjogdHJ1ZSxcclxuICAgIGlkOiBcInNxbC1mZXRjaFwiLFxyXG4gICAgcXVlcnk6IFwiU0VMRUNUICogRlJPTSB1c2VyO1wiLFxyXG4gICAgc2NoZW1hOiBcIkNSRUFURSBUQUJMRSBVU0VSKElEIElOVCBQUklNQVJZIEtFWSwgTkFNRSBURVhUKTsgSU5TRVJUIElOVE8gVVNFUihJRCwgTkFNRSkgVkFMVUVTKDEsICdLYWNwZXInKTtcIixcclxuICAgIHJlc3VsdDogbnVsbCxcclxuICAgIGlzV29ya2luZzogZmFsc2UsXHJcbiAgICBzY2hlbWFCdXR0b25zOiBtKFwiZGl2XCIpLFxyXG4gICAgaXNBY3RpdmU6IGZhbHNlXHJcbn1cclxuXHJcbnNxbEZldGNoX1NxbENvbnNvbGVTdGF0ZS5zY2hlbWFCdXR0b25zID0gc2NoZW1hQnV0dG9ucygpO1xyXG5cclxuZnVuY3Rpb24gc2NoZW1hQnV0dG9ucygpIHtcclxuICAgIHJldHVybiBzY2hlbWFCdXR0b25zRnJvbShzcWxGZXRjaF9TcWxDb25zb2xlU3RhdGUsIHByZXNldHMpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3FsRmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZpZXc6ICgpID0+IGNoYXB0ZXIoKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHA+UG9iaWVyYW5pZSBkYW55Y2ggeiBiYXp5IGplc3QgbW/FvGxpd2UgZ8WCw7N3bmllIHBvcHJ6ZXogcG9sZWNlbmllIDxzdHJvbmc+c2VsZWN0PC9zdHJvbmc+IChhbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgV3liaWVyeikuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+UG96d2FsYSBvbm8gd3licmHEhyBkYW5lIHogd3licmFueWNoIHByemV6IG5hcyBrb2x1bW4gaSBuaWVjbyBqZSB6bW9keWZpa293YcSHPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5TUUwgbmllIHd5YmllcmEgdHlsa28gZGFueWNoPC9zdHJvbmc+LCBwb3p3YWxhIG5hIHd5a29uYW5pZSBvcGVyYWNqaSBuYSBwb2JyYW55Y2ggZGFueWNoXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEemlhxYJhbmlhIG5hIGxpY3piYWNoOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TVU0gLSBzxYJ1xbx5IGRvIHN1bW93YW5pYSB3YXJ0b8WbY2kgbnVtZXJ5Y3pueWNoIHcga29sdW1uaWUuIERsYSBwcnp5a8WCYWR1LCB6YXB5dGFuaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTRUxFQ1QgU1VNKHF1YW50aXR5KSBGUk9NIG9yZGVyc1wiIHp3csOzY2kgc3VtxJkgd2FydG/Fm2NpIHcga29sdW1uaWUgXCJxdWFudGl0eVwiIHRhYmVsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyc1wiLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFWRyAtIHPFgnXFvHkgZG8gb2JsaWN6YW5pYSDFm3JlZG5pZWogYXJ5dG1ldHljem5laiB3YXJ0b8WbY2kgbnVtZXJ5Y3pueWNoIHcga29sdW1uaWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERsYSBwcnp5a8WCYWR1LCB6YXB5dGFuaWUgXCJTRUxFQ1QgQVZHKHByaWNlKSBGUk9NIHByb2R1Y3RzXCIgendyw7NjaSDFm3JlZG5pxIUgd2FydG/Fm8SHIHdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga29sdW1uaWUgXCJwcmljZVwiIHRhYmVsaSBcInByb2R1Y3RzXCIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TUFYIC0gc8WCdcW8eSBkbyB6bmFqZG93YW5pYSBuYWp3acSZa3N6ZWogd2FydG/Fm2NpIHcga29sdW1uaWUuIERsYSBwcnp5a8WCYWR1LCB6YXB5dGFuaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTRUxFQ1QgTUFYKHByaWNlKSBGUk9NIHByb2R1Y3RzXCIgendyw7NjaSBuYWp3acSZa3N6xIUgd2FydG/Fm8SHIHcga29sdW1uaWUgXCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmVsaSBcInByb2R1Y3RzXCIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TUlOIC0gc8WCdcW8eSBkbyB6bmFqZG93YW5pYSBuYWptbmllanN6ZWogd2FydG/Fm2NpIHcga29sdW1uaWUuIERsYSBwcnp5a8WCYWR1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6YXB5dGFuaWUgXCJTRUxFQ1QgTUlOKHByaWNlKSBGUk9NIHByb2R1Y3RzXCIgendyw7NjaSBuYWptbmllanN6xIUgd2FydG/Fm8SHIHcga29sdW1uaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiIHRhYmVsaSBcInByb2R1Y3RzXCIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q09VTlQgRElTVElOQ1QgLSBzxYJ1xbx5IGRvIHpsaWN6YW5pYSB1bmlrYWxueWNoIHdhcnRvxZtjaSB3IGtvbHVtbmllLiBEbGEgcHJ6eWvFgmFkdSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemFweXRhbmllIFwiU0VMRUNUIENPVU5UKERJU1RJTkNUIGNhdGVnb3J5KSBGUk9NIHByb2R1Y3RzXCIgendyw7NjaSBsaWN6YsSZIHVuaWthbG55Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FydG/Fm2NpIHcga29sdW1uaWUgXCJjYXRlZ29yeVwiIHRhYmVsaSBcInByb2R1Y3RzXCIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5Qcnp5a8WCYWQgcG9sZWNlbmlhIDxzdHJvbmc+U0VMRUNUPC9zdHJvbmc+PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNxbENvbnNvbGUgc3RhdGU9e3NxbEZldGNoX1NxbENvbnNvbGVTdGF0ZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC8+KSwgXCJQb2JpZXJhbmllIGRhbnljaCB6IGJhenlcIilcclxuICAgIH1cclxufSIsImltcG9ydCB7Vm5vZGV9IGZyb20gXCJtaXRocmlsXCI7XHJcbmltcG9ydCBtIGZyb20gXCJtaXRocmlsL2h5cGVyc2NyaXB0XCI7XHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0Q2hhcHRlclNlY3Rpb25IZWFkZXIodGV4dDogc3RyaW5nKTogVm5vZGUge1xyXG4gICAgcmV0dXJuIG0oXCJoMy5jaGFwdGVyLXNlY3Rpb24taGVhZGVyXCIsIHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhcHRlclNlY3Rpb24obm9kZTogVm5vZGUsIGhlYWRlcjogc3RyaW5nIHwgVm5vZGUsIGlkOiBzdHJpbmcgfCBudWxsKTogVm5vZGUge1xyXG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IHR5cGVvZiBoZWFkZXIgPT0gXCJzdHJpbmdcIiA/IGRlZmF1bHRDaGFwdGVyU2VjdGlvbkhlYWRlcihoZWFkZXIpIDogaGVhZGVyO1xyXG4gICAgcmV0dXJuIG0oaWQgIT0gbnVsbCA/IGBkaXYjJHtpZH0uY2hhcHRlci1zZWN0aW9uYCA6IFwiZGl2LmNoYXB0ZXItc2VjdGlvblwiLCB7fSwgW2hlYWRlckVsZW1lbnQsIG5vZGVdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVmYXVsdENoYXB0ZXJIZWFkZXIodGV4dDogc3RyaW5nKTogVm5vZGUge1xyXG4gICAgcmV0dXJuIG0oXCJoMS5jaGFwdGVyLWhlYWRlclwiLCB0ZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2hhcHRlckhlYWRlcihoZWFkZXI6IHN0cmluZyB8IG51bGwgfCBWbm9kZSk6IFZub2RlIHtcclxuICAgIGlmIChoZWFkZXIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBtKFwiZGl2XCIpXHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHR5cGVvZiBoZWFkZXIpIHtcclxuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q2hhcHRlckhlYWRlcihoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYXB0ZXIodm5vZGU6IFZub2RlLCBoZWFkZXI6IHN0cmluZyB8IG51bGwgfCBWbm9kZSk6IFZub2RlIHtcclxuICAgIHJldHVybiBtKFwiZGl2LnJvd1wiLCBtKFwiZGl2LmNvbC0xMC5vZmZzZXQtMVwiLCBtKFwiZGl2LmNoYXB0ZXJcIiwgZ2V0Q2hhcHRlckhlYWRlcihoZWFkZXIpLCB2bm9kZSkpKTtcclxufSIsImltcG9ydCB7bGF5b3V0fSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgV2VsY29tZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7dmlldzogKCkgPT4gbGF5b3V0LmZyZWUoPGgxPkhlbGxvIFdvcmxkITwvaDE+KX1cclxufSIsImltcG9ydCB7Y2hhcHRlcn0gZnJvbSBcIi4uL3V0aWxzL0NoYXB0ZXJTZWN0aW9uXCI7XHJcbmltcG9ydCB7U2NoZW1hQnV0dG9uUHJlc2V0LCBzY2hlbWFCdXR0b25zRnJvbX0gZnJvbSBcIi4uL3NxbENvbnNvbGUvU2NoZW1hQnV0dG9uc1wiO1xyXG5pbXBvcnQge1NxbENvbnNvbGVTdGF0ZX0gZnJvbSBcIi4uLy4uL3N0YXRlL1NxbENvbnNvbGVTdGF0ZVwiO1xyXG5pbXBvcnQgbSBmcm9tIFwibWl0aHJpbC9oeXBlcnNjcmlwdFwiO1xyXG5pbXBvcnQge1NxbENvbnNvbGV9IGZyb20gXCIuLi9zcWxDb25zb2xlL1NxbENvbnNvbGVcIjtcclxuXHJcbmNvbnN0IHByZXNldHM6IEFycmF5PFNjaGVtYUJ1dHRvblByZXNldD4gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcXVlcnk6IFwiU0VMRUNUICogRlJPTSB1IFdIRVJFIGFnZSA+IDE4O1wiLFxyXG4gICAgICAgIHNjaGVtYTogXCJDUkVBVEUgVEFCTEUgdShJRCBJTlQgUFJJTUFSWSBLRVksIE5BTUUgVEVYVCwgQUdFIElOVCk7IElOU0VSVCBJTlRPIHUoSUQsIE5BTUUsIEFHRSkgVkFMVUVTKDAsICdLYWNwZXInLCAyMCk7IElOU0VSVCBJTlRPIHUoSUQsIE5BTUUsIEFHRSkgVkFMVUVTKDAsICdNYXRldXN6JywgMTUpOyBJTlNFUlQgSU5UTyB1KElELCBOQU1FLCBBR0UpIFZBTFVFUygzLCAnT3NrYXInLCAxMyk7IElOU0VSVCBJTlRPIHUoSUQsIE5BTUUsIEFHRSkgVkFMVUVTKDIsICdLYXJvbGluYScsIDE3KTtcIixcclxuICAgICAgICB0ZXh0OiBcIlBlxYJub2xldG5pIHXFvHl0a293bmljeVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHF1ZXJ5OiBcIlNFTEVDVCAqIEZST00ga290IFdIRVJFIE5BTUUgSVMgTk9UIE5VTEw7XCIsXHJcbiAgICAgICAgc2NoZW1hOiBcIkNSRUFURSBUQUJMRSBrb3QoSUQgSU5UIFBSSU1BUlkgS0VZLCBOQU1FIFRFWFQpOyBJTlNFUlQgSU5UTyBrb3QoSUQsIE5BTUUpIFZBTFVFUygxLCAnUHVzemVrJyk7IElOU0VSVCBJTlRPIGtvdChJRCwgTkFNRSkgVkFMVUVTKDIsIE5VTEwpOyBJTlNFUlQgSU5UTyBrb3QoSUQsIE5BTUUpIFZBTFVFUygzLCAnS290IHdlIGJ1dGFjaCcpXCIsXHJcbiAgICAgICAgdGV4dDogXCJQb2RhbmUgaW1pZSAvIE9SIE5VTExcIlxyXG4gICAgfVxyXG5dO1xyXG5jb25zdCB3aGVyZUNsYXVzZV9TcWxDb25zb2xlU3RhdGU6IFNxbENvbnNvbGVTdGF0ZSA9IHtcclxuICAgIHdpdGhSZXNldEJ1dHRvbjogZmFsc2UsXHJcbiAgICBpZDogXCJ3aGVyZVwiLFxyXG4gICAgcXVlcnk6IFwiU0VMRUNUICogRlJPTSB1c2VyIFdIRVJFIGFnZSA+IDE4O1wiLFxyXG4gICAgc2NoZW1hOiBcIkNSRUFURSBUQUJMRSB1c2VyKElEIElOVCBQUklNQVJZIEtFWSwgTkFNRSBURVhULCBBR0UgSU5UKTsgSU5TRVJUIElOVE8gdXNlcihJRCwgTkFNRSwgVEVYVCkgVkFMVUVTKDAsICdLYWNwZXInLCAyMCk7IElOU0VSVCBJTlRPIHVzZXIoSUQsIE5BTUUsIFRFWFQpIFZBTFVFUygwLCAnTWF0ZXVzeicsIDE1KTtcIixcclxuICAgIHJlc3VsdDogbnVsbCxcclxuICAgIGlzV29ya2luZzogZmFsc2UsXHJcbiAgICBzY2hlbWFCdXR0b25zOiBtKFwiZGl2XCIpLFxyXG4gICAgaXNBY3RpdmU6IGZhbHNlXHJcbn1cclxuXHJcbndoZXJlQ2xhdXNlX1NxbENvbnNvbGVTdGF0ZS5zY2hlbWFCdXR0b25zID0gc2NoZW1hQnV0dG9uc0Zyb20od2hlcmVDbGF1c2VfU3FsQ29uc29sZVN0YXRlLCBwcmVzZXRzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaGVyZUNsYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmlldzogKCkgPT4gY2hhcHRlcig8PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFdIRVJFIHRvIGtsYXV6dWxhIGrEmXp5a2EgU1FMLCBrdMOzcmEgcG96d2FsYSBuYSBva3JlxZtsZW5pZSB3YXJ1bmvDs3csIGpha2llIG11c3rEhSBiecSHIHNwZcWCbmlvbmUgcHJ6ZXpcclxuICAgICAgICAgICAgICAgIHdpZXJzemUgendyYWNhbmUgcHJ6ZXogemFweXRhbmllIFNFTEVDVC48L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgTW/FvG5hIHXFvHnEhyBXSEVSRSwgYWJ5IGZpbHRyb3dhxIcgd3luaWtpIHphcHl0YW5pYSBpIHd5xZt3aWV0bGHEhyB0eWxrbyB0ZSB3aWVyc3plLCBrdMOzcmUgc3BlxYJuaWFqxIVcclxuICAgICAgICAgICAgICAgIG9rcmXFm2xvbmUga3J5dGVyaWEuIE5hIHByenlrxYJhZCwgamXFm2xpIGNoY2VzeiB3ecWbd2lldGxpxIcgdHlsa28gd2llcnN6ZSB6IHRhYmVsaSwga3TDs3JlIG1hasSFIHdhcnRvxZvEhyB3XHJcbiAgICAgICAgICAgICAgICBrb2x1bW5pZSAnbmFtZScgcsOzd27EhSAnS2FjcGVyJywgd3Bpc3plc3ogXCJTRUxFQ1QgKiBGUk9NIHVzZXIgV0hFUkUgbmFtZSA9ICdLYWNwZXInXCI7XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+V0hFUkUgamVzdCBjesSZc3RvIHXFvHl3YW5lIHdyYXogeiBpbm55bWkga2xhdXp1bGFtaSwgdGFraW1pIGphayBPUkRFUiBCWSBsdWIgR1JPVVAgQlksIGFieSB1cG9yesSFZGtvd2HEhyBpXHJcbiAgICAgICAgICAgICAgICBvZ3JhbmljennEhyB3eW5pa2kgemFweXRhbmlhLjwvcD5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxoMz5Qcnp5a2xhZHk6IDwvaDM+XHJcbiAgICAgICAgICAgIDxTcWxDb25zb2xlIHN0YXRlPXt3aGVyZUNsYXVzZV9TcWxDb25zb2xlU3RhdGV9Lz5cclxuICAgICAgICA8Lz4sIFwiS2xhdXp1bGEgV0hFUkVcIilcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZW5kZXIsIHNjaGVkdWxlLCBjb25zb2xlKSB7XG5cdHZhciBzdWJzY3JpcHRpb25zID0gW11cblx0dmFyIHBlbmRpbmcgPSBmYWxzZVxuXHR2YXIgb2Zmc2V0ID0gLTFcblxuXHRmdW5jdGlvbiBzeW5jKCkge1xuXHRcdGZvciAob2Zmc2V0ID0gMDsgb2Zmc2V0IDwgc3Vic2NyaXB0aW9ucy5sZW5ndGg7IG9mZnNldCArPSAyKSB7XG5cdFx0XHR0cnkgeyByZW5kZXIoc3Vic2NyaXB0aW9uc1tvZmZzZXRdLCBWbm9kZShzdWJzY3JpcHRpb25zW29mZnNldCArIDFdKSwgcmVkcmF3KSB9XG5cdFx0XHRjYXRjaCAoZSkgeyBjb25zb2xlLmVycm9yKGUpIH1cblx0XHR9XG5cdFx0b2Zmc2V0ID0gLTFcblx0fVxuXG5cdGZ1bmN0aW9uIHJlZHJhdygpIHtcblx0XHRpZiAoIXBlbmRpbmcpIHtcblx0XHRcdHBlbmRpbmcgPSB0cnVlXG5cdFx0XHRzY2hlZHVsZShmdW5jdGlvbigpIHtcblx0XHRcdFx0cGVuZGluZyA9IGZhbHNlXG5cdFx0XHRcdHN5bmMoKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRyZWRyYXcuc3luYyA9IHN5bmNcblxuXHRmdW5jdGlvbiBtb3VudChyb290LCBjb21wb25lbnQpIHtcblx0XHRpZiAoY29tcG9uZW50ICE9IG51bGwgJiYgY29tcG9uZW50LnZpZXcgPT0gbnVsbCAmJiB0eXBlb2YgY29tcG9uZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJtLm1vdW50IGV4cGVjdHMgYSBjb21wb25lbnQsIG5vdCBhIHZub2RlLlwiKVxuXHRcdH1cblxuXHRcdHZhciBpbmRleCA9IHN1YnNjcmlwdGlvbnMuaW5kZXhPZihyb290KVxuXHRcdGlmIChpbmRleCA+PSAwKSB7XG5cdFx0XHRzdWJzY3JpcHRpb25zLnNwbGljZShpbmRleCwgMilcblx0XHRcdGlmIChpbmRleCA8PSBvZmZzZXQpIG9mZnNldCAtPSAyXG5cdFx0XHRyZW5kZXIocm9vdCwgW10pXG5cdFx0fVxuXG5cdFx0aWYgKGNvbXBvbmVudCAhPSBudWxsKSB7XG5cdFx0XHRzdWJzY3JpcHRpb25zLnB1c2gocm9vdCwgY29tcG9uZW50KVxuXHRcdFx0cmVuZGVyKHJvb3QsIFZub2RlKGNvbXBvbmVudCksIHJlZHJhdylcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge21vdW50OiBtb3VudCwgcmVkcmF3OiByZWRyYXd9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG52YXIgbSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvaHlwZXJzY3JpcHRcIilcbnZhciBQcm9taXNlID0gcmVxdWlyZShcIi4uL3Byb21pc2UvcHJvbWlzZVwiKVxuXG52YXIgYnVpbGRQYXRobmFtZSA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9idWlsZFwiKVxudmFyIHBhcnNlUGF0aG5hbWUgPSByZXF1aXJlKFwiLi4vcGF0aG5hbWUvcGFyc2VcIilcbnZhciBjb21waWxlVGVtcGxhdGUgPSByZXF1aXJlKFwiLi4vcGF0aG5hbWUvY29tcGlsZVRlbXBsYXRlXCIpXG52YXIgYXNzaWduID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzaWduXCIpXG52YXIgY2Vuc29yID0gcmVxdWlyZShcIi4uL3V0aWwvY2Vuc29yXCIpXG5cbnZhciBzZW50aW5lbCA9IHt9XG5cbmZ1bmN0aW9uIGRlY29kZVVSSUNvbXBvbmVudFNhdmUoY29tcG9uZW50KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb21wb25lbnQpXG5cdH0gY2F0Y2goZSkge1xuXHRcdHJldHVybiBjb21wb25lbnRcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR3aW5kb3csIG1vdW50UmVkcmF3KSB7XG5cdHZhciBjYWxsQXN5bmMgPSAkd2luZG93ID09IG51bGxcblx0XHQvLyBJbiBjYXNlIE1pdGhyaWwuanMnIGxvYWRlZCBnbG9iYWxseSB3aXRob3V0IHRoZSBET00sIGxldCdzIG5vdCBicmVha1xuXHRcdD8gbnVsbFxuXHRcdDogdHlwZW9mICR3aW5kb3cuc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyAkd2luZG93LnNldEltbWVkaWF0ZSA6ICR3aW5kb3cuc2V0VGltZW91dFxuXHR2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpXG5cblx0dmFyIHNjaGVkdWxlZCA9IGZhbHNlXG5cblx0Ly8gc3RhdGUgPT09IDA6IGluaXRcblx0Ly8gc3RhdGUgPT09IDE6IHNjaGVkdWxlZFxuXHQvLyBzdGF0ZSA9PT0gMjogZG9uZVxuXHR2YXIgcmVhZHkgPSBmYWxzZVxuXHR2YXIgc3RhdGUgPSAwXG5cblx0dmFyIGNvbXBpbGVkLCBmYWxsYmFja1JvdXRlXG5cblx0dmFyIGN1cnJlbnRSZXNvbHZlciA9IHNlbnRpbmVsLCBjb21wb25lbnQsIGF0dHJzLCBjdXJyZW50UGF0aCwgbGFzdFVwZGF0ZVxuXG5cdHZhciBSb3V0ZXJSb290ID0ge1xuXHRcdG9uYmVmb3JldXBkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHN0YXRlID0gc3RhdGUgPyAyIDogMVxuXHRcdFx0cmV0dXJuICEoIXN0YXRlIHx8IHNlbnRpbmVsID09PSBjdXJyZW50UmVzb2x2ZXIpXG5cdFx0fSxcblx0XHRvbnJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHQkd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmaXJlQXN5bmMsIGZhbHNlKVxuXHRcdFx0JHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCByZXNvbHZlUm91dGUsIGZhbHNlKVxuXHRcdH0sXG5cdFx0dmlldzogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXN0YXRlIHx8IHNlbnRpbmVsID09PSBjdXJyZW50UmVzb2x2ZXIpIHJldHVyblxuXHRcdFx0Ly8gV3JhcCBpbiBhIGZyYWdtZW50IHRvIHByZXNlcnZlIGV4aXN0aW5nIGtleSBzZW1hbnRpY3Ncblx0XHRcdHZhciB2bm9kZSA9IFtWbm9kZShjb21wb25lbnQsIGF0dHJzLmtleSwgYXR0cnMpXVxuXHRcdFx0aWYgKGN1cnJlbnRSZXNvbHZlcikgdm5vZGUgPSBjdXJyZW50UmVzb2x2ZXIucmVuZGVyKHZub2RlWzBdKVxuXHRcdFx0cmV0dXJuIHZub2RlXG5cdFx0fSxcblx0fVxuXG5cdHZhciBTS0lQID0gcm91dGUuU0tJUCA9IHt9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVJvdXRlKCkge1xuXHRcdHNjaGVkdWxlZCA9IGZhbHNlXG5cdFx0Ly8gQ29uc2lkZXIgdGhlIHBhdGhuYW1lIGhvbGlzdGljYWxseS4gVGhlIHByZWZpeCBtaWdodCBldmVuIGJlIGludmFsaWQsXG5cdFx0Ly8gYnV0IHRoYXQncyBub3Qgb3VyIHByb2JsZW0uXG5cdFx0dmFyIHByZWZpeCA9ICR3aW5kb3cubG9jYXRpb24uaGFzaFxuXHRcdGlmIChyb3V0ZS5wcmVmaXhbMF0gIT09IFwiI1wiKSB7XG5cdFx0XHRwcmVmaXggPSAkd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHByZWZpeFxuXHRcdFx0aWYgKHJvdXRlLnByZWZpeFswXSAhPT0gXCI/XCIpIHtcblx0XHRcdFx0cHJlZml4ID0gJHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHByZWZpeFxuXHRcdFx0XHRpZiAocHJlZml4WzBdICE9PSBcIi9cIikgcHJlZml4ID0gXCIvXCIgKyBwcmVmaXhcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gVGhpcyBzZWVtaW5nbHkgdXNlbGVzcyBgLmNvbmNhdCgpYCBzcGVlZHMgdXAgdGhlIHRlc3RzIHF1aXRlIGEgYml0LFxuXHRcdC8vIHNpbmNlIHRoZSByZXByZXNlbnRhdGlvbiBpcyBjb25zaXN0ZW50bHkgYSByZWxhdGl2ZWx5IHBvb3JseVxuXHRcdC8vIG9wdGltaXplZCBjb25zIHN0cmluZy5cblx0XHR2YXIgcGF0aCA9IHByZWZpeC5jb25jYXQoKVxuXHRcdFx0LnJlcGxhY2UoLyg/OiVbYS1mODldW2EtZjAtOV0pKy9naW0sIGRlY29kZVVSSUNvbXBvbmVudFNhdmUpXG5cdFx0XHQuc2xpY2Uocm91dGUucHJlZml4Lmxlbmd0aClcblx0XHR2YXIgZGF0YSA9IHBhcnNlUGF0aG5hbWUocGF0aClcblxuXHRcdGFzc2lnbihkYXRhLnBhcmFtcywgJHdpbmRvdy5oaXN0b3J5LnN0YXRlKVxuXG5cdFx0ZnVuY3Rpb24gcmVqZWN0KGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSlcblx0XHRcdHNldFBhdGgoZmFsbGJhY2tSb3V0ZSwgbnVsbCwge3JlcGxhY2U6IHRydWV9KVxuXHRcdH1cblxuXHRcdGxvb3AoMClcblx0XHRmdW5jdGlvbiBsb29wKGkpIHtcblx0XHRcdC8vIHN0YXRlID09PSAwOiBpbml0XG5cdFx0XHQvLyBzdGF0ZSA9PT0gMTogc2NoZWR1bGVkXG5cdFx0XHQvLyBzdGF0ZSA9PT0gMjogZG9uZVxuXHRcdFx0Zm9yICg7IGkgPCBjb21waWxlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY29tcGlsZWRbaV0uY2hlY2soZGF0YSkpIHtcblx0XHRcdFx0XHR2YXIgcGF5bG9hZCA9IGNvbXBpbGVkW2ldLmNvbXBvbmVudFxuXHRcdFx0XHRcdHZhciBtYXRjaGVkUm91dGUgPSBjb21waWxlZFtpXS5yb3V0ZVxuXHRcdFx0XHRcdHZhciBsb2NhbENvbXAgPSBwYXlsb2FkXG5cdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IGxhc3RVcGRhdGUgPSBmdW5jdGlvbihjb21wKSB7XG5cdFx0XHRcdFx0XHRpZiAodXBkYXRlICE9PSBsYXN0VXBkYXRlKSByZXR1cm5cblx0XHRcdFx0XHRcdGlmIChjb21wID09PSBTS0lQKSByZXR1cm4gbG9vcChpICsgMSlcblx0XHRcdFx0XHRcdGNvbXBvbmVudCA9IGNvbXAgIT0gbnVsbCAmJiAodHlwZW9mIGNvbXAudmlldyA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBjb21wID09PSBcImZ1bmN0aW9uXCIpPyBjb21wIDogXCJkaXZcIlxuXHRcdFx0XHRcdFx0YXR0cnMgPSBkYXRhLnBhcmFtcywgY3VycmVudFBhdGggPSBwYXRoLCBsYXN0VXBkYXRlID0gbnVsbFxuXHRcdFx0XHRcdFx0Y3VycmVudFJlc29sdmVyID0gcGF5bG9hZC5yZW5kZXIgPyBwYXlsb2FkIDogbnVsbFxuXHRcdFx0XHRcdFx0aWYgKHN0YXRlID09PSAyKSBtb3VudFJlZHJhdy5yZWRyYXcoKVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gMlxuXHRcdFx0XHRcdFx0XHRtb3VudFJlZHJhdy5yZWRyYXcuc3luYygpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIFRoZXJlJ3Mgbm8gdW5kZXJzdGF0aW5nIGhvdyBtdWNoIEkgKndpc2gqIEkgY291bGRcblx0XHRcdFx0XHQvLyB1c2UgYGFzeW5jYC9gYXdhaXRgIGhlcmUuLi5cblx0XHRcdFx0XHRpZiAocGF5bG9hZC52aWV3IHx8IHR5cGVvZiBwYXlsb2FkID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHBheWxvYWQgPSB7fVxuXHRcdFx0XHRcdFx0dXBkYXRlKGxvY2FsQ29tcClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAocGF5bG9hZC5vbm1hdGNoKSB7XG5cdFx0XHRcdFx0XHRwLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcGF5bG9hZC5vbm1hdGNoKGRhdGEucGFyYW1zLCBwYXRoLCBtYXRjaGVkUm91dGUpXG5cdFx0XHRcdFx0XHR9KS50aGVuKHVwZGF0ZSwgcGF0aCA9PT0gZmFsbGJhY2tSb3V0ZSA/IG51bGwgOiByZWplY3QpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgdXBkYXRlKFwiZGl2XCIpXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhdGggPT09IGZhbGxiYWNrUm91dGUpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlc29sdmUgZGVmYXVsdCByb3V0ZSBcIiArIGZhbGxiYWNrUm91dGUgKyBcIi5cIilcblx0XHRcdH1cblx0XHRcdHNldFBhdGgoZmFsbGJhY2tSb3V0ZSwgbnVsbCwge3JlcGxhY2U6IHRydWV9KVxuXHRcdH1cblx0fVxuXG5cdC8vIFNldCBpdCB1bmNvbmRpdGlvbmFsbHkgc28gYG0ucm91dGUuc2V0YCBhbmQgYG0ucm91dGUuTGlua2AgYm90aCB3b3JrLFxuXHQvLyBldmVuIGlmIG5laXRoZXIgYHB1c2hTdGF0ZWAgbm9yIGBoYXNoY2hhbmdlYCBhcmUgc3VwcG9ydGVkLiBJdCdzXG5cdC8vIGNsZWFyZWQgaWYgYGhhc2hjaGFuZ2VgIGlzIHVzZWQsIHNpbmNlIHRoYXQgbWFrZXMgaXQgYXV0b21hdGljYWxseVxuXHQvLyBhc3luYy5cblx0ZnVuY3Rpb24gZmlyZUFzeW5jKCkge1xuXHRcdGlmICghc2NoZWR1bGVkKSB7XG5cdFx0XHRzY2hlZHVsZWQgPSB0cnVlXG5cdFx0XHQvLyBUT0RPOiBqdXN0IGRvIGBtb3VudFJlZHJhdy5yZWRyYXcoKWAgaGVyZSBhbmQgZWxpZGUgdGhlIHRpbWVyXG5cdFx0XHQvLyBkZXBlbmRlbmN5LiBOb3RlIHRoYXQgdGhpcyB3aWxsIG11Y2sgd2l0aCB0ZXN0cyBhICpsb3QqLCBzbyBpdCdzXG5cdFx0XHQvLyBub3QgYXMgZWFzeSBvZiBhIGNoYW5nZSBhcyBpdCBzb3VuZHMuXG5cdFx0XHRjYWxsQXN5bmMocmVzb2x2ZVJvdXRlKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNldFBhdGgocGF0aCwgZGF0YSwgb3B0aW9ucykge1xuXHRcdHBhdGggPSBidWlsZFBhdGhuYW1lKHBhdGgsIGRhdGEpXG5cdFx0aWYgKHJlYWR5KSB7XG5cdFx0XHRmaXJlQXN5bmMoKVxuXHRcdFx0dmFyIHN0YXRlID0gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdGUgOiBudWxsXG5cdFx0XHR2YXIgdGl0bGUgPSBvcHRpb25zID8gb3B0aW9ucy50aXRsZSA6IG51bGxcblx0XHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVwbGFjZSkgJHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgdGl0bGUsIHJvdXRlLnByZWZpeCArIHBhdGgpXG5cdFx0XHRlbHNlICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHRpdGxlLCByb3V0ZS5wcmVmaXggKyBwYXRoKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdCR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJvdXRlLnByZWZpeCArIHBhdGhcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByb3V0ZShyb290LCBkZWZhdWx0Um91dGUsIHJvdXRlcykge1xuXHRcdGlmICghcm9vdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRPTSBlbGVtZW50IGJlaW5nIHJlbmRlcmVkIHRvIGRvZXMgbm90IGV4aXN0LlwiKVxuXG5cdFx0Y29tcGlsZWQgPSBPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcChmdW5jdGlvbihyb3V0ZSkge1xuXHRcdFx0aWYgKHJvdXRlWzBdICE9PSBcIi9cIikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiUm91dGVzIG11c3Qgc3RhcnQgd2l0aCBhICcvJy5cIilcblx0XHRcdGlmICgoLzooW15cXC9cXC4tXSspKFxcLnszfSk/Oi8pLnRlc3Qocm91dGUpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIlJvdXRlIHBhcmFtZXRlciBuYW1lcyBtdXN0IGJlIHNlcGFyYXRlZCB3aXRoIGVpdGhlciAnLycsICcuJywgb3IgJy0nLlwiKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cm91dGU6IHJvdXRlLFxuXHRcdFx0XHRjb21wb25lbnQ6IHJvdXRlc1tyb3V0ZV0sXG5cdFx0XHRcdGNoZWNrOiBjb21waWxlVGVtcGxhdGUocm91dGUpLFxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0ZmFsbGJhY2tSb3V0ZSA9IGRlZmF1bHRSb3V0ZVxuXHRcdGlmIChkZWZhdWx0Um91dGUgIT0gbnVsbCkge1xuXHRcdFx0dmFyIGRlZmF1bHREYXRhID0gcGFyc2VQYXRobmFtZShkZWZhdWx0Um91dGUpXG5cblx0XHRcdGlmICghY29tcGlsZWQuc29tZShmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5jaGVjayhkZWZhdWx0RGF0YSkgfSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiRGVmYXVsdCByb3V0ZSBkb2Vzbid0IG1hdGNoIGFueSBrbm93biByb3V0ZXMuXCIpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiAkd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdCR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZpcmVBc3luYywgZmFsc2UpXG5cdFx0fSBlbHNlIGlmIChyb3V0ZS5wcmVmaXhbMF0gPT09IFwiI1wiKSB7XG5cdFx0XHQkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHJlc29sdmVSb3V0ZSwgZmFsc2UpXG5cdFx0fVxuXG5cdFx0cmVhZHkgPSB0cnVlXG5cdFx0bW91bnRSZWRyYXcubW91bnQocm9vdCwgUm91dGVyUm9vdClcblx0XHRyZXNvbHZlUm91dGUoKVxuXHR9XG5cdHJvdXRlLnNldCA9IGZ1bmN0aW9uKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcblx0XHRpZiAobGFzdFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXHRcdFx0b3B0aW9ucy5yZXBsYWNlID0gdHJ1ZVxuXHRcdH1cblx0XHRsYXN0VXBkYXRlID0gbnVsbFxuXHRcdHNldFBhdGgocGF0aCwgZGF0YSwgb3B0aW9ucylcblx0fVxuXHRyb3V0ZS5nZXQgPSBmdW5jdGlvbigpIHtyZXR1cm4gY3VycmVudFBhdGh9XG5cdHJvdXRlLnByZWZpeCA9IFwiIyFcIlxuXHRyb3V0ZS5MaW5rID0ge1xuXHRcdHZpZXc6IGZ1bmN0aW9uKHZub2RlKSB7XG5cdFx0XHQvLyBPbWl0IHRoZSB1c2VkIHBhcmFtZXRlcnMgZnJvbSB0aGUgcmVuZGVyZWQgZWxlbWVudCAtIHRoZXkgYXJlXG5cdFx0XHQvLyBpbnRlcm5hbC4gQWxzbywgY2Vuc29yIHRoZSB2YXJpb3VzIGxpZmVjeWNsZSBtZXRob2RzLlxuXHRcdFx0Ly9cblx0XHRcdC8vIFdlIGRvbid0IHN0cmlwIHRoZSBvdGhlciBwYXJhbWV0ZXJzIGJlY2F1c2UgZm9yIGNvbnZlbmllbmNlIHdlXG5cdFx0XHQvLyBsZXQgdGhlbSBiZSBzcGVjaWZpZWQgaW4gdGhlIHNlbGVjdG9yIGFzIHdlbGwuXG5cdFx0XHR2YXIgY2hpbGQgPSBtKFxuXHRcdFx0XHR2bm9kZS5hdHRycy5zZWxlY3RvciB8fCBcImFcIixcblx0XHRcdFx0Y2Vuc29yKHZub2RlLmF0dHJzLCBbXCJvcHRpb25zXCIsIFwicGFyYW1zXCIsIFwic2VsZWN0b3JcIiwgXCJvbmNsaWNrXCJdKSxcblx0XHRcdFx0dm5vZGUuY2hpbGRyZW5cblx0XHRcdClcblx0XHRcdHZhciBvcHRpb25zLCBvbmNsaWNrLCBocmVmXG5cblx0XHRcdC8vIExldCdzIHByb3ZpZGUgYSAqcmlnaHQqIHdheSB0byBkaXNhYmxlIGEgcm91dGUgbGluaywgcmF0aGVyIHRoYW5cblx0XHRcdC8vIGxldHRpbmcgcGVvcGxlIHNjcmV3IHVwIGFjY2Vzc2liaWxpdHkgb24gYWNjaWRlbnQuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gVGhlIGF0dHJpYnV0ZSBpcyBjb2VyY2VkIHNvIHVzZXJzIGRvbid0IGdldCBzdXJwcmlzZWQgb3ZlclxuXHRcdFx0Ly8gYGRpc2FibGVkOiAwYCByZXN1bHRpbmcgaW4gYSBidXR0b24gdGhhdCdzIHNvbWVob3cgcm91dGFibGVcblx0XHRcdC8vIGRlc3BpdGUgYmVpbmcgdmlzaWJseSBkaXNhYmxlZC5cblx0XHRcdGlmIChjaGlsZC5hdHRycy5kaXNhYmxlZCA9IEJvb2xlYW4oY2hpbGQuYXR0cnMuZGlzYWJsZWQpKSB7XG5cdFx0XHRcdGNoaWxkLmF0dHJzLmhyZWYgPSBudWxsXG5cdFx0XHRcdGNoaWxkLmF0dHJzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IFwidHJ1ZVwiXG5cdFx0XHRcdC8vIElmIHlvdSAqcmVhbGx5KiBkbyB3YW50IGFkZCBgb25jbGlja2Agb24gYSBkaXNhYmxlZCBsaW5rLCB1c2Vcblx0XHRcdFx0Ly8gYW4gYG9uY3JlYXRlYCBob29rIHRvIGFkZCBpdC5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB2bm9kZS5hdHRycy5vcHRpb25zXG5cdFx0XHRcdG9uY2xpY2sgPSB2bm9kZS5hdHRycy5vbmNsaWNrXG5cdFx0XHRcdC8vIEVhc2llciB0byBidWlsZCBpdCBub3cgdG8ga2VlcCBpdCBpc29tb3JwaGljLlxuXHRcdFx0XHRocmVmID0gYnVpbGRQYXRobmFtZShjaGlsZC5hdHRycy5ocmVmLCB2bm9kZS5hdHRycy5wYXJhbXMpXG5cdFx0XHRcdGNoaWxkLmF0dHJzLmhyZWYgPSByb3V0ZS5wcmVmaXggKyBocmVmXG5cdFx0XHRcdGNoaWxkLmF0dHJzLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0dmFyIHJlc3VsdFxuXHRcdFx0XHRcdGlmICh0eXBlb2Ygb25jbGljayA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBvbmNsaWNrLmNhbGwoZS5jdXJyZW50VGFyZ2V0LCBlKVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAob25jbGljayA9PSBudWxsIHx8IHR5cGVvZiBvbmNsaWNrICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdFx0XHQvLyBkbyBub3RoaW5nXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb25jbGljay5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRvbmNsaWNrLmhhbmRsZUV2ZW50KGUpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQWRhcHRlZCBmcm9tIFJlYWN0IFJvdXRlcidzIGltcGxlbWVudGF0aW9uOlxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL3JlYWN0LXJvdXRlci9ibG9iLzUyMGEwYWNkNDhhZTFiMDY2ZWIwYjA3ZDZkNGQxNzkwYTFkMDI0ODIvcGFja2FnZXMvcmVhY3Qtcm91dGVyLWRvbS9tb2R1bGVzL0xpbmsuanNcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIFRyeSB0byBiZSBmbGV4aWJsZSBhbmQgaW50dWl0aXZlIGluIGhvdyB3ZSBoYW5kbGUgbGlua3MuXG5cdFx0XHRcdFx0Ly8gRnVuIGZhY3Q6IGxpbmtzIGFyZW4ndCBhcyBvYnZpb3VzIHRvIGdldCByaWdodCBhcyB5b3Vcblx0XHRcdFx0XHQvLyB3b3VsZCBleHBlY3QuIFRoZXJlJ3MgYSBsb3QgbW9yZSB2YWxpZCB3YXlzIHRvIGNsaWNrIGFcblx0XHRcdFx0XHQvLyBsaW5rIHRoYW4gdGhpcywgYW5kIG9uZSBtaWdodCB3YW50IHRvIG5vdCBzaW1wbHkgY2xpY2sgYVxuXHRcdFx0XHRcdC8vIGxpbmssIGJ1dCByaWdodCBjbGljayBvciBjb21tYW5kLWNsaWNrIGl0IHRvIGNvcHkgdGhlXG5cdFx0XHRcdFx0Ly8gbGluayB0YXJnZXQsIGV0Yy4gTm9wZSwgdGhpcyBpc24ndCBqdXN0IGZvciBibGluZCBwZW9wbGUuXG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0Ly8gU2tpcCBpZiBgb25jbGlja2AgcHJldmVudGVkIGRlZmF1bHRcblx0XHRcdFx0XHRcdHJlc3VsdCAhPT0gZmFsc2UgJiYgIWUuZGVmYXVsdFByZXZlbnRlZCAmJlxuXHRcdFx0XHRcdFx0Ly8gSWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG5cdFx0XHRcdFx0XHQoZS5idXR0b24gPT09IDAgfHwgZS53aGljaCA9PT0gMCB8fCBlLndoaWNoID09PSAxKSAmJlxuXHRcdFx0XHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSBgdGFyZ2V0PV9ibGFua2AsIGV0Yy5cblx0XHRcdFx0XHRcdCghZS5jdXJyZW50VGFyZ2V0LnRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQudGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmXG5cdFx0XHRcdFx0XHQvLyBObyBtb2RpZmllciBrZXlzXG5cdFx0XHRcdFx0XHQhZS5jdHJsS2V5ICYmICFlLm1ldGFLZXkgJiYgIWUuc2hpZnRLZXkgJiYgIWUuYWx0S2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdGUucmVkcmF3ID0gZmFsc2Vcblx0XHRcdFx0XHRcdHJvdXRlLnNldChocmVmLCBudWxsLCBvcHRpb25zKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNoaWxkXG5cdFx0fSxcblx0fVxuXHRyb3V0ZS5wYXJhbSA9IGZ1bmN0aW9uKGtleSkge1xuXHRcdHJldHVybiBhdHRycyAmJiBrZXkgIT0gbnVsbCA/IGF0dHJzW2tleV0gOiBhdHRyc1xuXHR9XG5cblx0cmV0dXJuIHJvdXRlXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgaHlwZXJzY3JpcHQgPSByZXF1aXJlKFwiLi9yZW5kZXIvaHlwZXJzY3JpcHRcIilcblxuaHlwZXJzY3JpcHQudHJ1c3QgPSByZXF1aXJlKFwiLi9yZW5kZXIvdHJ1c3RcIilcbmh5cGVyc2NyaXB0LmZyYWdtZW50ID0gcmVxdWlyZShcIi4vcmVuZGVyL2ZyYWdtZW50XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gaHlwZXJzY3JpcHRcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBoeXBlcnNjcmlwdCA9IHJlcXVpcmUoXCIuL2h5cGVyc2NyaXB0XCIpXG52YXIgcmVxdWVzdCA9IHJlcXVpcmUoXCIuL3JlcXVlc3RcIilcbnZhciBtb3VudFJlZHJhdyA9IHJlcXVpcmUoXCIuL21vdW50LXJlZHJhd1wiKVxuXG52YXIgbSA9IGZ1bmN0aW9uIG0oKSB7IHJldHVybiBoeXBlcnNjcmlwdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH1cbm0ubSA9IGh5cGVyc2NyaXB0XG5tLnRydXN0ID0gaHlwZXJzY3JpcHQudHJ1c3Rcbm0uZnJhZ21lbnQgPSBoeXBlcnNjcmlwdC5mcmFnbWVudFxubS5GcmFnbWVudCA9IFwiW1wiXG5tLm1vdW50ID0gbW91bnRSZWRyYXcubW91bnRcbm0ucm91dGUgPSByZXF1aXJlKFwiLi9yb3V0ZVwiKVxubS5yZW5kZXIgPSByZXF1aXJlKFwiLi9yZW5kZXJcIilcbm0ucmVkcmF3ID0gbW91bnRSZWRyYXcucmVkcmF3XG5tLnJlcXVlc3QgPSByZXF1ZXN0LnJlcXVlc3Rcbm0uanNvbnAgPSByZXF1ZXN0Lmpzb25wXG5tLnBhcnNlUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi9xdWVyeXN0cmluZy9wYXJzZVwiKVxubS5idWlsZFF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4vcXVlcnlzdHJpbmcvYnVpbGRcIilcbm0ucGFyc2VQYXRobmFtZSA9IHJlcXVpcmUoXCIuL3BhdGhuYW1lL3BhcnNlXCIpXG5tLmJ1aWxkUGF0aG5hbWUgPSByZXF1aXJlKFwiLi9wYXRobmFtZS9idWlsZFwiKVxubS52bm9kZSA9IHJlcXVpcmUoXCIuL3JlbmRlci92bm9kZVwiKVxubS5Qcm9taXNlUG9seWZpbGwgPSByZXF1aXJlKFwiLi9wcm9taXNlL3BvbHlmaWxsXCIpXG5tLmNlbnNvciA9IHJlcXVpcmUoXCIuL3V0aWwvY2Vuc29yXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gbVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHJlbmRlciA9IHJlcXVpcmUoXCIuL3JlbmRlclwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2FwaS9tb3VudC1yZWRyYXdcIikocmVuZGVyLCB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSBcInVuZGVmaW5lZFwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogbnVsbCwgdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgPyBjb25zb2xlIDogbnVsbClcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBidWlsZFF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4uL3F1ZXJ5c3RyaW5nL2J1aWxkXCIpXG52YXIgYXNzaWduID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzaWduXCIpXG5cbi8vIFJldHVybnMgYHBhdGhgIGZyb20gYHRlbXBsYXRlYCArIGBwYXJhbXNgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRlbXBsYXRlLCBwYXJhbXMpIHtcblx0aWYgKCgvOihbXlxcL1xcLi1dKykoXFwuezN9KT86LykudGVzdCh0ZW1wbGF0ZSkpIHtcblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUZW1wbGF0ZSBwYXJhbWV0ZXIgbmFtZXMgbXVzdCBiZSBzZXBhcmF0ZWQgYnkgZWl0aGVyIGEgJy8nLCAnLScsIG9yICcuJy5cIilcblx0fVxuXHRpZiAocGFyYW1zID09IG51bGwpIHJldHVybiB0ZW1wbGF0ZVxuXHR2YXIgcXVlcnlJbmRleCA9IHRlbXBsYXRlLmluZGV4T2YoXCI/XCIpXG5cdHZhciBoYXNoSW5kZXggPSB0ZW1wbGF0ZS5pbmRleE9mKFwiI1wiKVxuXHR2YXIgcXVlcnlFbmQgPSBoYXNoSW5kZXggPCAwID8gdGVtcGxhdGUubGVuZ3RoIDogaGFzaEluZGV4XG5cdHZhciBwYXRoRW5kID0gcXVlcnlJbmRleCA8IDAgPyBxdWVyeUVuZCA6IHF1ZXJ5SW5kZXhcblx0dmFyIHBhdGggPSB0ZW1wbGF0ZS5zbGljZSgwLCBwYXRoRW5kKVxuXHR2YXIgcXVlcnkgPSB7fVxuXG5cdGFzc2lnbihxdWVyeSwgcGFyYW1zKVxuXG5cdHZhciByZXNvbHZlZCA9IHBhdGgucmVwbGFjZSgvOihbXlxcL1xcLi1dKykoXFwuezN9KT8vZywgZnVuY3Rpb24obSwga2V5LCB2YXJpYWRpYykge1xuXHRcdGRlbGV0ZSBxdWVyeVtrZXldXG5cdFx0Ly8gSWYgbm8gc3VjaCBwYXJhbWV0ZXIgZXhpc3RzLCBkb24ndCBpbnRlcnBvbGF0ZSBpdC5cblx0XHRpZiAocGFyYW1zW2tleV0gPT0gbnVsbCkgcmV0dXJuIG1cblx0XHQvLyBFc2NhcGUgbm9ybWFsIHBhcmFtZXRlcnMsIGJ1dCBub3QgdmFyaWFkaWMgb25lcy5cblx0XHRyZXR1cm4gdmFyaWFkaWMgPyBwYXJhbXNba2V5XSA6IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocGFyYW1zW2tleV0pKVxuXHR9KVxuXG5cdC8vIEluIGNhc2UgdGhlIHRlbXBsYXRlIHN1YnN0aXR1dGlvbiBhZGRzIG5ldyBxdWVyeS9oYXNoIHBhcmFtZXRlcnMuXG5cdHZhciBuZXdRdWVyeUluZGV4ID0gcmVzb2x2ZWQuaW5kZXhPZihcIj9cIilcblx0dmFyIG5ld0hhc2hJbmRleCA9IHJlc29sdmVkLmluZGV4T2YoXCIjXCIpXG5cdHZhciBuZXdRdWVyeUVuZCA9IG5ld0hhc2hJbmRleCA8IDAgPyByZXNvbHZlZC5sZW5ndGggOiBuZXdIYXNoSW5kZXhcblx0dmFyIG5ld1BhdGhFbmQgPSBuZXdRdWVyeUluZGV4IDwgMCA/IG5ld1F1ZXJ5RW5kIDogbmV3UXVlcnlJbmRleFxuXHR2YXIgcmVzdWx0ID0gcmVzb2x2ZWQuc2xpY2UoMCwgbmV3UGF0aEVuZClcblxuXHRpZiAocXVlcnlJbmRleCA+PSAwKSByZXN1bHQgKz0gdGVtcGxhdGUuc2xpY2UocXVlcnlJbmRleCwgcXVlcnlFbmQpXG5cdGlmIChuZXdRdWVyeUluZGV4ID49IDApIHJlc3VsdCArPSAocXVlcnlJbmRleCA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIHJlc29sdmVkLnNsaWNlKG5ld1F1ZXJ5SW5kZXgsIG5ld1F1ZXJ5RW5kKVxuXHR2YXIgcXVlcnlzdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nKHF1ZXJ5KVxuXHRpZiAocXVlcnlzdHJpbmcpIHJlc3VsdCArPSAocXVlcnlJbmRleCA8IDAgJiYgbmV3UXVlcnlJbmRleCA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIHF1ZXJ5c3RyaW5nXG5cdGlmIChoYXNoSW5kZXggPj0gMCkgcmVzdWx0ICs9IHRlbXBsYXRlLnNsaWNlKGhhc2hJbmRleClcblx0aWYgKG5ld0hhc2hJbmRleCA+PSAwKSByZXN1bHQgKz0gKGhhc2hJbmRleCA8IDAgPyBcIlwiIDogXCImXCIpICsgcmVzb2x2ZWQuc2xpY2UobmV3SGFzaEluZGV4KVxuXHRyZXR1cm4gcmVzdWx0XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcGFyc2VQYXRobmFtZSA9IHJlcXVpcmUoXCIuL3BhcnNlXCIpXG5cbi8vIENvbXBpbGVzIGEgdGVtcGxhdGUgaW50byBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSByZXNvbHZlZCBwYXRoICh3aXRob3V0IHF1ZXJ5XG4vLyBzdHJpbmdzKSBhbmQgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgcGFyYW1ldGVycyB3aXRoIHRoZWlyXG4vLyBwYXJzZWQgdmFsdWVzLiBUaGlzIGV4cGVjdHMgdGhlIGlucHV0IG9mIHRoZSBjb21waWxlZCB0ZW1wbGF0ZSB0byBiZSB0aGVcbi8vIG91dHB1dCBvZiBgcGFyc2VQYXRobmFtZWAuIE5vdGUgdGhhdCBpdCBkb2VzICpub3QqIHJlbW92ZSBxdWVyeSBwYXJhbWV0ZXJzXG4vLyBzcGVjaWZpZWQgaW4gdGhlIHRlbXBsYXRlLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0ZW1wbGF0ZSkge1xuXHR2YXIgdGVtcGxhdGVEYXRhID0gcGFyc2VQYXRobmFtZSh0ZW1wbGF0ZSlcblx0dmFyIHRlbXBsYXRlS2V5cyA9IE9iamVjdC5rZXlzKHRlbXBsYXRlRGF0YS5wYXJhbXMpXG5cdHZhciBrZXlzID0gW11cblx0dmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoXCJeXCIgKyB0ZW1wbGF0ZURhdGEucGF0aC5yZXBsYWNlKFxuXHRcdC8vIEkgZXNjYXBlIGxpdGVyYWwgdGV4dCBzbyBwZW9wbGUgY2FuIHVzZSB0aGluZ3MgbGlrZSBgOmZpbGUuOmV4dGAgb3Jcblx0XHQvLyBgOmxhbmctOmxvY2FsZWAgaW4gcm91dGVzLiBUaGlzIGlzIGFsbCBtZXJnZWQgaW50byBvbmUgcGFzcyBzbyBJXG5cdFx0Ly8gZG9uJ3QgYWxzbyBhY2NpZGVudGFsbHkgZXNjYXBlIGAtYCBhbmQgbWFrZSBpdCBoYXJkZXIgdG8gZGV0ZWN0IGl0IHRvXG5cdFx0Ly8gYmFuIGl0IGZyb20gdGVtcGxhdGUgcGFyYW1ldGVycy5cblx0XHQvOihbXlxcLy4tXSspKFxcLnszfXxcXC4oPyFcXC4pfC0pP3xbXFxcXF4kKisuKCl8XFxbXFxde31dL2csXG5cdFx0ZnVuY3Rpb24obSwga2V5LCBleHRyYSkge1xuXHRcdFx0aWYgKGtleSA9PSBudWxsKSByZXR1cm4gXCJcXFxcXCIgKyBtXG5cdFx0XHRrZXlzLnB1c2goe2s6IGtleSwgcjogZXh0cmEgPT09IFwiLi4uXCJ9KVxuXHRcdFx0aWYgKGV4dHJhID09PSBcIi4uLlwiKSByZXR1cm4gXCIoLiopXCJcblx0XHRcdGlmIChleHRyYSA9PT0gXCIuXCIpIHJldHVybiBcIihbXi9dKylcXFxcLlwiXG5cdFx0XHRyZXR1cm4gXCIoW14vXSspXCIgKyAoZXh0cmEgfHwgXCJcIilcblx0XHR9XG5cdCkgKyBcIiRcIilcblx0cmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHQvLyBGaXJzdCwgY2hlY2sgdGhlIHBhcmFtcy4gVXN1YWxseSwgdGhlcmUgaXNuJ3QgYW55LCBhbmQgaXQncyBqdXN0XG5cdFx0Ly8gY2hlY2tpbmcgYSBzdGF0aWMgc2V0LlxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcGxhdGVLZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGVtcGxhdGVEYXRhLnBhcmFtc1t0ZW1wbGF0ZUtleXNbaV1dICE9PSBkYXRhLnBhcmFtc1t0ZW1wbGF0ZUtleXNbaV1dKSByZXR1cm4gZmFsc2Vcblx0XHR9XG5cdFx0Ly8gSWYgbm8gaW50ZXJwb2xhdGlvbnMgZXhpc3QsIGxldCdzIHNraXAgYWxsIHRoZSBjZXJlbW9ueVxuXHRcdGlmICgha2V5cy5sZW5ndGgpIHJldHVybiByZWdleHAudGVzdChkYXRhLnBhdGgpXG5cdFx0dmFyIHZhbHVlcyA9IHJlZ2V4cC5leGVjKGRhdGEucGF0aClcblx0XHRpZiAodmFsdWVzID09IG51bGwpIHJldHVybiBmYWxzZVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZGF0YS5wYXJhbXNba2V5c1tpXS5rXSA9IGtleXNbaV0uciA/IHZhbHVlc1tpICsgMV0gOiBkZWNvZGVVUklDb21wb25lbnQodmFsdWVzW2kgKyAxXSlcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHBhcnNlUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi4vcXVlcnlzdHJpbmcvcGFyc2VcIilcblxuLy8gUmV0dXJucyBge3BhdGgsIHBhcmFtc31gIGZyb20gYHVybGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJsKSB7XG5cdHZhciBxdWVyeUluZGV4ID0gdXJsLmluZGV4T2YoXCI/XCIpXG5cdHZhciBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIilcblx0dmFyIHF1ZXJ5RW5kID0gaGFzaEluZGV4IDwgMCA/IHVybC5sZW5ndGggOiBoYXNoSW5kZXhcblx0dmFyIHBhdGhFbmQgPSBxdWVyeUluZGV4IDwgMCA/IHF1ZXJ5RW5kIDogcXVlcnlJbmRleFxuXHR2YXIgcGF0aCA9IHVybC5zbGljZSgwLCBwYXRoRW5kKS5yZXBsYWNlKC9cXC97Mix9L2csIFwiL1wiKVxuXG5cdGlmICghcGF0aCkgcGF0aCA9IFwiL1wiXG5cdGVsc2Uge1xuXHRcdGlmIChwYXRoWzBdICE9PSBcIi9cIikgcGF0aCA9IFwiL1wiICsgcGF0aFxuXHRcdGlmIChwYXRoLmxlbmd0aCA+IDEgJiYgcGF0aFtwYXRoLmxlbmd0aCAtIDFdID09PSBcIi9cIikgcGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpXG5cdH1cblx0cmV0dXJuIHtcblx0XHRwYXRoOiBwYXRoLFxuXHRcdHBhcmFtczogcXVlcnlJbmRleCA8IDBcblx0XHRcdD8ge31cblx0XHRcdDogcGFyc2VRdWVyeVN0cmluZyh1cmwuc2xpY2UocXVlcnlJbmRleCArIDEsIHF1ZXJ5RW5kKSksXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG4vKiogQGNvbnN0cnVjdG9yICovXG52YXIgUHJvbWlzZVBvbHlmaWxsID0gZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VQb2x5ZmlsbCkpIHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgbXVzdCBiZSBjYWxsZWQgd2l0aCAnbmV3Jy5cIilcblx0aWYgKHR5cGVvZiBleGVjdXRvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKVxuXG5cdHZhciBzZWxmID0gdGhpcywgcmVzb2x2ZXJzID0gW10sIHJlamVjdG9ycyA9IFtdLCByZXNvbHZlQ3VycmVudCA9IGhhbmRsZXIocmVzb2x2ZXJzLCB0cnVlKSwgcmVqZWN0Q3VycmVudCA9IGhhbmRsZXIocmVqZWN0b3JzLCBmYWxzZSlcblx0dmFyIGluc3RhbmNlID0gc2VsZi5faW5zdGFuY2UgPSB7cmVzb2x2ZXJzOiByZXNvbHZlcnMsIHJlamVjdG9yczogcmVqZWN0b3JzfVxuXHR2YXIgY2FsbEFzeW5jID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogc2V0VGltZW91dFxuXHRmdW5jdGlvbiBoYW5kbGVyKGxpc3QsIHNob3VsZEFic29yYikge1xuXHRcdHJldHVybiBmdW5jdGlvbiBleGVjdXRlKHZhbHVlKSB7XG5cdFx0XHR2YXIgdGhlblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKHNob3VsZEFic29yYiAmJiB2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiAodGhlbiA9IHZhbHVlLnRoZW4pID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IHNlbGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKVxuXHRcdFx0XHRcdGV4ZWN1dGVPbmNlKHRoZW4uYmluZCh2YWx1ZSkpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y2FsbEFzeW5jKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKCFzaG91bGRBYnNvcmIgJiYgbGlzdC5sZW5ndGggPT09IDApIGNvbnNvbGUuZXJyb3IoXCJQb3NzaWJsZSB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb246XCIsIHZhbHVlKVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSBsaXN0W2ldKHZhbHVlKVxuXHRcdFx0XHRcdFx0cmVzb2x2ZXJzLmxlbmd0aCA9IDAsIHJlamVjdG9ycy5sZW5ndGggPSAwXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5zdGF0ZSA9IHNob3VsZEFic29yYlxuXHRcdFx0XHRcdFx0aW5zdGFuY2UucmV0cnkgPSBmdW5jdGlvbigpIHtleGVjdXRlKHZhbHVlKX1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRyZWplY3RDdXJyZW50KGUpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGV4ZWN1dGVPbmNlKHRoZW4pIHtcblx0XHR2YXIgcnVucyA9IDBcblx0XHRmdW5jdGlvbiBydW4oZm4pIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRpZiAocnVucysrID4gMCkgcmV0dXJuXG5cdFx0XHRcdGZuKHZhbHVlKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgb25lcnJvciA9IHJ1bihyZWplY3RDdXJyZW50KVxuXHRcdHRyeSB7dGhlbihydW4ocmVzb2x2ZUN1cnJlbnQpLCBvbmVycm9yKX0gY2F0Y2ggKGUpIHtvbmVycm9yKGUpfVxuXHR9XG5cblx0ZXhlY3V0ZU9uY2UoZXhlY3V0b3IpXG59XG5Qcm9taXNlUG9seWZpbGwucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3Rpb24pIHtcblx0dmFyIHNlbGYgPSB0aGlzLCBpbnN0YW5jZSA9IHNlbGYuX2luc3RhbmNlXG5cdGZ1bmN0aW9uIGhhbmRsZShjYWxsYmFjaywgbGlzdCwgbmV4dCwgc3RhdGUpIHtcblx0XHRsaXN0LnB1c2goZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgbmV4dCh2YWx1ZSlcblx0XHRcdGVsc2UgdHJ5IHtyZXNvbHZlTmV4dChjYWxsYmFjayh2YWx1ZSkpfSBjYXRjaCAoZSkge2lmIChyZWplY3ROZXh0KSByZWplY3ROZXh0KGUpfVxuXHRcdH0pXG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZS5yZXRyeSA9PT0gXCJmdW5jdGlvblwiICYmIHN0YXRlID09PSBpbnN0YW5jZS5zdGF0ZSkgaW5zdGFuY2UucmV0cnkoKVxuXHR9XG5cdHZhciByZXNvbHZlTmV4dCwgcmVqZWN0TmV4dFxuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7cmVzb2x2ZU5leHQgPSByZXNvbHZlLCByZWplY3ROZXh0ID0gcmVqZWN0fSlcblx0aGFuZGxlKG9uRnVsZmlsbGVkLCBpbnN0YW5jZS5yZXNvbHZlcnMsIHJlc29sdmVOZXh0LCB0cnVlKSwgaGFuZGxlKG9uUmVqZWN0aW9uLCBpbnN0YW5jZS5yZWplY3RvcnMsIHJlamVjdE5leHQsIGZhbHNlKVxuXHRyZXR1cm4gcHJvbWlzZVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG5cdHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pXG59XG5Qcm9taXNlUG9seWZpbGwucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZVBvbHlmaWxsLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0ZnVuY3Rpb24ocmVhc29uKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZVBvbHlmaWxsLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIFByb21pc2VQb2x5ZmlsbC5yZWplY3QocmVhc29uKTtcblx0XHRcdH0pXG5cdFx0fVxuXHQpXG59XG5Qcm9taXNlUG9seWZpbGwucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2VQb2x5ZmlsbCkgcmV0dXJuIHZhbHVlXG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUpIHtyZXNvbHZlKHZhbHVlKX0pXG59XG5Qcm9taXNlUG9seWZpbGwucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7cmVqZWN0KHZhbHVlKX0pXG59XG5Qcm9taXNlUG9seWZpbGwuYWxsID0gZnVuY3Rpb24obGlzdCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgdG90YWwgPSBsaXN0Lmxlbmd0aCwgY291bnQgPSAwLCB2YWx1ZXMgPSBbXVxuXHRcdGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmVzb2x2ZShbXSlcblx0XHRlbHNlIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcblx0XHRcdFx0ZnVuY3Rpb24gY29uc3VtZSh2YWx1ZSkge1xuXHRcdFx0XHRcdGNvdW50Kytcblx0XHRcdFx0XHR2YWx1ZXNbaV0gPSB2YWx1ZVxuXHRcdFx0XHRcdGlmIChjb3VudCA9PT0gdG90YWwpIHJlc29sdmUodmFsdWVzKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsaXN0W2ldICE9IG51bGwgJiYgKHR5cGVvZiBsaXN0W2ldID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBsaXN0W2ldID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiBsaXN0W2ldLnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGxpc3RbaV0udGhlbihjb25zdW1lLCByZWplY3QpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBjb25zdW1lKGxpc3RbaV0pXG5cdFx0XHR9KShpKVxuXHRcdH1cblx0fSlcbn1cblByb21pc2VQb2x5ZmlsbC5yYWNlID0gZnVuY3Rpb24obGlzdCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RbaV0udGhlbihyZXNvbHZlLCByZWplY3QpXG5cdFx0fVxuXHR9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2VQb2x5ZmlsbFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFByb21pc2VQb2x5ZmlsbCA9IHJlcXVpcmUoXCIuL3BvbHlmaWxsXCIpXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2Ygd2luZG93LlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHR3aW5kb3cuUHJvbWlzZSA9IFByb21pc2VQb2x5ZmlsbFxuXHR9IGVsc2UgaWYgKCF3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuXHRcdHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5maW5hbGx5XG5cdH1cblx0bW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUHJvbWlzZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRnbG9iYWwuUHJvbWlzZSA9IFByb21pc2VQb2x5ZmlsbFxuXHR9IGVsc2UgaWYgKCFnbG9iYWwuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuXHRcdGdsb2JhbC5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5maW5hbGx5XG5cdH1cblx0bW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuUHJvbWlzZVxufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlUG9seWZpbGxcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIFwiXCJcblxuXHR2YXIgYXJncyA9IFtdXG5cdGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcblx0XHRkZXN0cnVjdHVyZShrZXksIG9iamVjdFtrZXldKVxuXHR9XG5cblx0cmV0dXJuIGFyZ3Muam9pbihcIiZcIilcblxuXHRmdW5jdGlvbiBkZXN0cnVjdHVyZShrZXksIHZhbHVlKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRlc3RydWN0dXJlKGtleSArIFwiW1wiICsgaSArIFwiXVwiLCB2YWx1ZVtpXSlcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRkZXN0cnVjdHVyZShrZXkgKyBcIltcIiArIGkgKyBcIl1cIiwgdmFsdWVbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgYXJncy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IFwiXCIgPyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiBcIlwiKSlcblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gZGVjb2RlVVJJQ29tcG9uZW50U2F2ZShzdHIpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcblx0fSBjYXRjaChlcnIpIHtcblx0XHRyZXR1cm4gc3RyXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHJpbmcpIHtcblx0aWYgKHN0cmluZyA9PT0gXCJcIiB8fCBzdHJpbmcgPT0gbnVsbCkgcmV0dXJuIHt9XG5cdGlmIChzdHJpbmcuY2hhckF0KDApID09PSBcIj9cIikgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDEpXG5cblx0dmFyIGVudHJpZXMgPSBzdHJpbmcuc3BsaXQoXCImXCIpLCBjb3VudGVycyA9IHt9LCBkYXRhID0ge31cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGVudHJ5ID0gZW50cmllc1tpXS5zcGxpdChcIj1cIilcblx0XHR2YXIga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50U2F2ZShlbnRyeVswXSlcblx0XHR2YXIgdmFsdWUgPSBlbnRyeS5sZW5ndGggPT09IDIgPyBkZWNvZGVVUklDb21wb25lbnRTYXZlKGVudHJ5WzFdKSA6IFwiXCJcblxuXHRcdGlmICh2YWx1ZSA9PT0gXCJ0cnVlXCIpIHZhbHVlID0gdHJ1ZVxuXHRcdGVsc2UgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHZhbHVlID0gZmFsc2VcblxuXHRcdHZhciBsZXZlbHMgPSBrZXkuc3BsaXQoL1xcXVxcWz98XFxbLylcblx0XHR2YXIgY3Vyc29yID0gZGF0YVxuXHRcdGlmIChrZXkuaW5kZXhPZihcIltcIikgPiAtMSkgbGV2ZWxzLnBvcCgpXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZXZlbHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBsZXZlbCA9IGxldmVsc1tqXSwgbmV4dExldmVsID0gbGV2ZWxzW2ogKyAxXVxuXHRcdFx0dmFyIGlzTnVtYmVyID0gbmV4dExldmVsID09IFwiXCIgfHwgIWlzTmFOKHBhcnNlSW50KG5leHRMZXZlbCwgMTApKVxuXHRcdFx0aWYgKGxldmVsID09PSBcIlwiKSB7XG5cdFx0XHRcdHZhciBrZXkgPSBsZXZlbHMuc2xpY2UoMCwgaikuam9pbigpXG5cdFx0XHRcdGlmIChjb3VudGVyc1trZXldID09IG51bGwpIHtcblx0XHRcdFx0XHRjb3VudGVyc1trZXldID0gQXJyYXkuaXNBcnJheShjdXJzb3IpID8gY3Vyc29yLmxlbmd0aCA6IDBcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXZlbCA9IGNvdW50ZXJzW2tleV0rK1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGlzYWxsb3cgZGlyZWN0IHByb3RvdHlwZSBwb2xsdXRpb25cblx0XHRcdGVsc2UgaWYgKGxldmVsID09PSBcIl9fcHJvdG9fX1wiKSBicmVha1xuXHRcdFx0aWYgKGogPT09IGxldmVscy5sZW5ndGggLSAxKSBjdXJzb3JbbGV2ZWxdID0gdmFsdWVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvLyBSZWFkIG93biBwcm9wZXJ0aWVzIGV4Y2x1c2l2ZWx5IHRvIGRpc2FsbG93IGluZGlyZWN0XG5cdFx0XHRcdC8vIHByb3RvdHlwZSBwb2xsdXRpb25cblx0XHRcdFx0dmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGN1cnNvciwgbGV2ZWwpXG5cdFx0XHRcdGlmIChkZXNjICE9IG51bGwpIGRlc2MgPSBkZXNjLnZhbHVlXG5cdFx0XHRcdGlmIChkZXNjID09IG51bGwpIGN1cnNvcltsZXZlbF0gPSBkZXNjID0gaXNOdW1iZXIgPyBbXSA6IHt9XG5cdFx0XHRcdGN1cnNvciA9IGRlc2Ncblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGFcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcmVuZGVyL3JlbmRlclwiKSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogbnVsbClcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcbnZhciBoeXBlcnNjcmlwdFZub2RlID0gcmVxdWlyZShcIi4vaHlwZXJzY3JpcHRWbm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdm5vZGUgPSBoeXBlcnNjcmlwdFZub2RlLmFwcGx5KDAsIGFyZ3VtZW50cylcblxuXHR2bm9kZS50YWcgPSBcIltcIlxuXHR2bm9kZS5jaGlsZHJlbiA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlLmNoaWxkcmVuKVxuXHRyZXR1cm4gdm5vZGVcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcbnZhciBoeXBlcnNjcmlwdFZub2RlID0gcmVxdWlyZShcIi4vaHlwZXJzY3JpcHRWbm9kZVwiKVxudmFyIGhhc093biA9IHJlcXVpcmUoXCIuLi91dGlsL2hhc093blwiKVxuXG52YXIgc2VsZWN0b3JQYXJzZXIgPSAvKD86KF58I3xcXC4pKFteI1xcLlxcW1xcXV0rKSl8KFxcWyguKz8pKD86XFxzKj1cXHMqKFwifCd8KSgoPzpcXFxcW1wiJ1xcXV18LikqPylcXDUpP1xcXSkvZ1xudmFyIHNlbGVjdG9yQ2FjaGUgPSB7fVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iamVjdCkge1xuXHRmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBpZiAoaGFzT3duLmNhbGwob2JqZWN0LCBrZXkpKSByZXR1cm4gZmFsc2Vcblx0cmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gY29tcGlsZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG5cdHZhciBtYXRjaCwgdGFnID0gXCJkaXZcIiwgY2xhc3NlcyA9IFtdLCBhdHRycyA9IHt9XG5cdHdoaWxlIChtYXRjaCA9IHNlbGVjdG9yUGFyc2VyLmV4ZWMoc2VsZWN0b3IpKSB7XG5cdFx0dmFyIHR5cGUgPSBtYXRjaFsxXSwgdmFsdWUgPSBtYXRjaFsyXVxuXHRcdGlmICh0eXBlID09PSBcIlwiICYmIHZhbHVlICE9PSBcIlwiKSB0YWcgPSB2YWx1ZVxuXHRcdGVsc2UgaWYgKHR5cGUgPT09IFwiI1wiKSBhdHRycy5pZCA9IHZhbHVlXG5cdFx0ZWxzZSBpZiAodHlwZSA9PT0gXCIuXCIpIGNsYXNzZXMucHVzaCh2YWx1ZSlcblx0XHRlbHNlIGlmIChtYXRjaFszXVswXSA9PT0gXCJbXCIpIHtcblx0XHRcdHZhciBhdHRyVmFsdWUgPSBtYXRjaFs2XVxuXHRcdFx0aWYgKGF0dHJWYWx1ZSkgYXR0clZhbHVlID0gYXR0clZhbHVlLnJlcGxhY2UoL1xcXFwoW1wiJ10pL2csIFwiJDFcIikucmVwbGFjZSgvXFxcXFxcXFwvZywgXCJcXFxcXCIpXG5cdFx0XHRpZiAobWF0Y2hbNF0gPT09IFwiY2xhc3NcIikgY2xhc3Nlcy5wdXNoKGF0dHJWYWx1ZSlcblx0XHRcdGVsc2UgYXR0cnNbbWF0Y2hbNF1dID0gYXR0clZhbHVlID09PSBcIlwiID8gYXR0clZhbHVlIDogYXR0clZhbHVlIHx8IHRydWVcblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzZXMubGVuZ3RoID4gMCkgYXR0cnMuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKVxuXHRyZXR1cm4gc2VsZWN0b3JDYWNoZVtzZWxlY3Rvcl0gPSB7dGFnOiB0YWcsIGF0dHJzOiBhdHRyc31cbn1cblxuZnVuY3Rpb24gZXhlY1NlbGVjdG9yKHN0YXRlLCB2bm9kZSkge1xuXHR2YXIgYXR0cnMgPSB2bm9kZS5hdHRyc1xuXHR2YXIgaGFzQ2xhc3MgPSBoYXNPd24uY2FsbChhdHRycywgXCJjbGFzc1wiKVxuXHR2YXIgY2xhc3NOYW1lID0gaGFzQ2xhc3MgPyBhdHRycy5jbGFzcyA6IGF0dHJzLmNsYXNzTmFtZVxuXG5cdHZub2RlLnRhZyA9IHN0YXRlLnRhZ1xuXHR2bm9kZS5hdHRycyA9IHt9XG5cblx0aWYgKCFpc0VtcHR5KHN0YXRlLmF0dHJzKSAmJiAhaXNFbXB0eShhdHRycykpIHtcblx0XHR2YXIgbmV3QXR0cnMgPSB7fVxuXG5cdFx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRpZiAoaGFzT3duLmNhbGwoYXR0cnMsIGtleSkpIG5ld0F0dHJzW2tleV0gPSBhdHRyc1trZXldXG5cdFx0fVxuXG5cdFx0YXR0cnMgPSBuZXdBdHRyc1xuXHR9XG5cblx0Zm9yICh2YXIga2V5IGluIHN0YXRlLmF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKHN0YXRlLmF0dHJzLCBrZXkpICYmIGtleSAhPT0gXCJjbGFzc05hbWVcIiAmJiAhaGFzT3duLmNhbGwoYXR0cnMsIGtleSkpe1xuXHRcdFx0YXR0cnNba2V5XSA9IHN0YXRlLmF0dHJzW2tleV1cblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzTmFtZSAhPSBudWxsIHx8IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsKSBhdHRycy5jbGFzc05hbWUgPVxuXHRcdGNsYXNzTmFtZSAhPSBudWxsXG5cdFx0XHQ/IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsXG5cdFx0XHRcdD8gU3RyaW5nKHN0YXRlLmF0dHJzLmNsYXNzTmFtZSkgKyBcIiBcIiArIFN0cmluZyhjbGFzc05hbWUpXG5cdFx0XHRcdDogY2xhc3NOYW1lXG5cdFx0XHQ6IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsXG5cdFx0XHRcdD8gc3RhdGUuYXR0cnMuY2xhc3NOYW1lXG5cdFx0XHRcdDogbnVsbFxuXG5cdGlmIChoYXNDbGFzcykgYXR0cnMuY2xhc3MgPSBudWxsXG5cblx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpICYmIGtleSAhPT0gXCJrZXlcIikge1xuXHRcdFx0dm5vZGUuYXR0cnMgPSBhdHRyc1xuXHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gaHlwZXJzY3JpcHQoc2VsZWN0b3IpIHtcblx0aWYgKHNlbGVjdG9yID09IG51bGwgfHwgdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBzZWxlY3Rvci52aWV3ICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHR0aHJvdyBFcnJvcihcIlRoZSBzZWxlY3RvciBtdXN0IGJlIGVpdGhlciBhIHN0cmluZyBvciBhIGNvbXBvbmVudC5cIik7XG5cdH1cblxuXHR2YXIgdm5vZGUgPSBoeXBlcnNjcmlwdFZub2RlLmFwcGx5KDEsIGFyZ3VtZW50cylcblxuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG5cdFx0dm5vZGUuY2hpbGRyZW4gPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbih2bm9kZS5jaGlsZHJlbilcblx0XHRpZiAoc2VsZWN0b3IgIT09IFwiW1wiKSByZXR1cm4gZXhlY1NlbGVjdG9yKHNlbGVjdG9yQ2FjaGVbc2VsZWN0b3JdIHx8IGNvbXBpbGVTZWxlY3RvcihzZWxlY3RvciksIHZub2RlKVxuXHR9XG5cblx0dm5vZGUudGFnID0gc2VsZWN0b3Jcblx0cmV0dXJuIHZub2RlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwZXJzY3JpcHRcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcblxuLy8gQ2FsbCB2aWEgYGh5cGVyc2NyaXB0Vm5vZGUuYXBwbHkoc3RhcnRPZmZzZXQsIGFyZ3VtZW50cylgXG4vL1xuLy8gVGhlIHJlYXNvbiBJIGRvIGl0IHRoaXMgd2F5LCBmb3J3YXJkaW5nIHRoZSBhcmd1bWVudHMgYW5kIHBhc3NpbmcgdGhlIHN0YXJ0XG4vLyBvZmZzZXQgaW4gYHRoaXNgLCBpcyBzbyBJIGRvbid0IGhhdmUgdG8gY3JlYXRlIGEgdGVtcG9yYXJ5IGFycmF5IGluIGFcbi8vIHBlcmZvcm1hbmNlLWNyaXRpY2FsIHBhdGguXG4vL1xuLy8gSW4gbmF0aXZlIEVTNiwgSSdkIGluc3RlYWQgYWRkIGEgZmluYWwgYC4uLmFyZ3NgIHBhcmFtZXRlciB0byB0aGVcbi8vIGBoeXBlcnNjcmlwdGAgYW5kIGBmcmFnbWVudGAgZmFjdG9yaWVzIGFuZCBkZWZpbmUgdGhpcyBhc1xuLy8gYGh5cGVyc2NyaXB0Vm5vZGUoLi4uYXJncylgLCBzaW5jZSBtb2Rlcm4gZW5naW5lcyBkbyBvcHRpbWl6ZSB0aGF0IGF3YXkuIEJ1dFxuLy8gRVM1ICh3aGF0IE1pdGhyaWwuanMgcmVxdWlyZXMgdGhhbmtzIHRvIElFIHN1cHBvcnQpIGRvZXNuJ3QgZ2l2ZSBtZSB0aGF0IGx1eHVyeSxcbi8vIGFuZCBlbmdpbmVzIGFyZW4ndCBuZWFybHkgaW50ZWxsaWdlbnQgZW5vdWdoIHRvIGRvIGVpdGhlciBvZiB0aGVzZTpcbi8vXG4vLyAxLiBFbGlkZSB0aGUgYWxsb2NhdGlvbiBmb3IgYFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKWAgd2hlbiBpdCdzIHBhc3NlZCB0b1xuLy8gICAgYW5vdGhlciBmdW5jdGlvbiBvbmx5IHRvIGJlIGluZGV4ZWQuXG4vLyAyLiBFbGlkZSBhbiBgYXJndW1lbnRzYCBhbGxvY2F0aW9uIHdoZW4gaXQncyBwYXNzZWQgdG8gYW55IGZ1bmN0aW9uIG90aGVyXG4vLyAgICB0aGFuIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgIG9yIGBSZWZsZWN0LmFwcGx5YC5cbi8vXG4vLyBJbiBFUzYsIGl0J2QgcHJvYmFibHkgbG9vayBjbG9zZXIgdG8gdGhpcyAoSSdkIG5lZWQgdG8gcHJvZmlsZSBpdCwgdGhvdWdoKTpcbi8vIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXR0cnMsIC4uLmNoaWxkcmVuKSB7XG4vLyAgICAgaWYgKGF0dHJzID09IG51bGwgfHwgdHlwZW9mIGF0dHJzID09PSBcIm9iamVjdFwiICYmIGF0dHJzLnRhZyA9PSBudWxsICYmICFBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuLy8gICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW5bMF0pKSBjaGlsZHJlbiA9IGNoaWxkcmVuWzBdXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgQXJyYXkuaXNBcnJheShhdHRycykgPyBhdHRycyA6IFthdHRycywgLi4uY2hpbGRyZW5dXG4vLyAgICAgICAgIGF0dHJzID0gdW5kZWZpbmVkXG4vLyAgICAgfVxuLy9cbi8vICAgICBpZiAoYXR0cnMgPT0gbnVsbCkgYXR0cnMgPSB7fVxuLy8gICAgIHJldHVybiBWbm9kZShcIlwiLCBhdHRycy5rZXksIGF0dHJzLCBjaGlsZHJlbilcbi8vIH1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBhdHRycyA9IGFyZ3VtZW50c1t0aGlzXSwgc3RhcnQgPSB0aGlzICsgMSwgY2hpbGRyZW5cblxuXHRpZiAoYXR0cnMgPT0gbnVsbCkge1xuXHRcdGF0dHJzID0ge31cblx0fSBlbHNlIGlmICh0eXBlb2YgYXR0cnMgIT09IFwib2JqZWN0XCIgfHwgYXR0cnMudGFnICE9IG51bGwgfHwgQXJyYXkuaXNBcnJheShhdHRycykpIHtcblx0XHRhdHRycyA9IHt9XG5cdFx0c3RhcnQgPSB0aGlzXG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gc3RhcnQgKyAxKSB7XG5cdFx0Y2hpbGRyZW4gPSBhcmd1bWVudHNbc3RhcnRdXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgY2hpbGRyZW4gPSBbY2hpbGRyZW5dXG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4gPSBbXVxuXHRcdHdoaWxlIChzdGFydCA8IGFyZ3VtZW50cy5sZW5ndGgpIGNoaWxkcmVuLnB1c2goYXJndW1lbnRzW3N0YXJ0KytdKVxuXHR9XG5cblx0cmV0dXJuIFZub2RlKFwiXCIsIGF0dHJzLmtleSwgYXR0cnMsIGNoaWxkcmVuKVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR3aW5kb3cpIHtcblx0dmFyICRkb2MgPSAkd2luZG93ICYmICR3aW5kb3cuZG9jdW1lbnRcblx0dmFyIGN1cnJlbnRSZWRyYXdcblxuXHR2YXIgbmFtZVNwYWNlID0ge1xuXHRcdHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuXHRcdG1hdGg6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiXG5cdH1cblxuXHRmdW5jdGlvbiBnZXROYW1lU3BhY2Uodm5vZGUpIHtcblx0XHRyZXR1cm4gdm5vZGUuYXR0cnMgJiYgdm5vZGUuYXR0cnMueG1sbnMgfHwgbmFtZVNwYWNlW3Zub2RlLnRhZ11cblx0fVxuXG5cdC8vc2FuaXR5IGNoZWNrIHRvIGRpc2NvdXJhZ2UgcGVvcGxlIGZyb20gZG9pbmcgYHZub2RlLnN0YXRlID0gLi4uYFxuXHRmdW5jdGlvbiBjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbCkge1xuXHRcdGlmICh2bm9kZS5zdGF0ZSAhPT0gb3JpZ2luYWwpIHRocm93IG5ldyBFcnJvcihcIid2bm9kZS5zdGF0ZScgbXVzdCBub3QgYmUgbW9kaWZpZWQuXCIpXG5cdH1cblxuXHQvL05vdGU6IHRoZSBob29rIGlzIHBhc3NlZCBhcyB0aGUgYHRoaXNgIGFyZ3VtZW50IHRvIGFsbG93IHByb3h5aW5nIHRoZVxuXHQvL2FyZ3VtZW50cyB3aXRob3V0IHJlcXVpcmluZyBhIGZ1bGwgYXJyYXkgYWxsb2NhdGlvbiB0byBkbyBzby4gSXQgYWxzb1xuXHQvL3Rha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGUgY3VycmVudCBgdm5vZGVgIGlzIHRoZSBmaXJzdCBhcmd1bWVudCBpblxuXHQvL2FsbCBsaWZlY3ljbGUgbWV0aG9kcy5cblx0ZnVuY3Rpb24gY2FsbEhvb2sodm5vZGUpIHtcblx0XHR2YXIgb3JpZ2luYWwgPSB2bm9kZS5zdGF0ZVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hcHBseShvcmlnaW5hbCwgYXJndW1lbnRzKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbClcblx0XHR9XG5cdH1cblxuXHQvLyBJRTExIChhdCBsZWFzdCkgdGhyb3dzIGFuIFVuc3BlY2lmaWVkRXJyb3Igd2hlbiBhY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB3aGVuXG5cdC8vIGluc2lkZSBhbiBpZnJhbWUuIENhdGNoIGFuZCBzd2FsbG93IHRoaXMgZXJyb3IsIGFuZCBoZWF2eS1oYW5kaWRseSByZXR1cm4gbnVsbC5cblx0ZnVuY3Rpb24gYWN0aXZlRWxlbWVudCgpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuICRkb2MuYWN0aXZlRWxlbWVudFxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHR9XG5cdC8vY3JlYXRlXG5cdGZ1bmN0aW9uIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0aWYgKHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0ge31cblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRzd2l0Y2ggKHRhZykge1xuXHRcdFx0XHRjYXNlIFwiI1wiOiBjcmVhdGVUZXh0KHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0Y2FzZSBcIjxcIjogY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpOyBicmVha1xuXHRcdFx0XHRjYXNlIFwiW1wiOiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0ZGVmYXVsdDogY3JlYXRlRWxlbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGNyZWF0ZUNvbXBvbmVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZVRleHQocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHR2bm9kZS5kb20gPSAkZG9jLmNyZWF0ZVRleHROb2RlKHZub2RlLmNoaWxkcmVuKVxuXHRcdGluc2VydE5vZGUocGFyZW50LCB2bm9kZS5kb20sIG5leHRTaWJsaW5nKVxuXHR9XG5cdHZhciBwb3NzaWJsZVBhcmVudHMgPSB7Y2FwdGlvbjogXCJ0YWJsZVwiLCB0aGVhZDogXCJ0YWJsZVwiLCB0Ym9keTogXCJ0YWJsZVwiLCB0Zm9vdDogXCJ0YWJsZVwiLCB0cjogXCJ0Ym9keVwiLCB0aDogXCJ0clwiLCB0ZDogXCJ0clwiLCBjb2xncm91cDogXCJ0YWJsZVwiLCBjb2w6IFwiY29sZ3JvdXBcIn1cblx0ZnVuY3Rpb24gY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgbWF0Y2ggPSB2bm9kZS5jaGlsZHJlbi5tYXRjaCgvXlxccyo/PChcXHcrKS9pbSkgfHwgW11cblx0XHQvLyBub3QgdXNpbmcgdGhlIHByb3BlciBwYXJlbnQgbWFrZXMgdGhlIGNoaWxkIGVsZW1lbnQocykgdmFuaXNoLlxuXHRcdC8vICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXHRcdC8vICAgICBkaXYuaW5uZXJIVE1MID0gXCI8dGQ+aTwvdGQ+PHRkPmo8L3RkPlwiXG5cdFx0Ly8gICAgIGNvbnNvbGUubG9nKGRpdi5pbm5lckhUTUwpXG5cdFx0Ly8gLS0+IFwiaWpcIiwgbm8gPHRkPiBpbiBzaWdodC5cblx0XHR2YXIgdGVtcCA9ICRkb2MuY3JlYXRlRWxlbWVudChwb3NzaWJsZVBhcmVudHNbbWF0Y2hbMV1dIHx8IFwiZGl2XCIpXG5cdFx0aWYgKG5zID09PSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpIHtcblx0XHRcdHRlbXAuaW5uZXJIVE1MID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XCIgKyB2bm9kZS5jaGlsZHJlbiArIFwiPC9zdmc+XCJcblx0XHRcdHRlbXAgPSB0ZW1wLmZpcnN0Q2hpbGRcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGVtcC5pbm5lckhUTUwgPSB2bm9kZS5jaGlsZHJlblxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSB0ZW1wLmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gdGVtcC5jaGlsZE5vZGVzLmxlbmd0aFxuXHRcdC8vIENhcHR1cmUgbm9kZXMgdG8gcmVtb3ZlLCBzbyB3ZSBkb24ndCBjb25mdXNlIHRoZW0uXG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBbXVxuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0dmFyIGNoaWxkXG5cdFx0d2hpbGUgKGNoaWxkID0gdGVtcC5maXJzdENoaWxkKSB7XG5cdFx0XHR2bm9kZS5pbnN0YW5jZS5wdXNoKGNoaWxkKVxuXHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG5cdFx0fVxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnbWVudCwgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0aWYgKHZub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRjcmVhdGVOb2RlcyhmcmFnbWVudCwgY2hpbGRyZW4sIDAsIGNoaWxkcmVuLmxlbmd0aCwgaG9va3MsIG51bGwsIG5zKVxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBmcmFnbWVudC5maXJzdENoaWxkXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWdtZW50LCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0dmFyIGF0dHJzID0gdm5vZGUuYXR0cnNcblx0XHR2YXIgaXMgPSBhdHRycyAmJiBhdHRycy5pc1xuXG5cdFx0bnMgPSBnZXROYW1lU3BhY2Uodm5vZGUpIHx8IG5zXG5cblx0XHR2YXIgZWxlbWVudCA9IG5zID9cblx0XHRcdGlzID8gJGRvYy5jcmVhdGVFbGVtZW50TlMobnMsIHRhZywge2lzOiBpc30pIDogJGRvYy5jcmVhdGVFbGVtZW50TlMobnMsIHRhZykgOlxuXHRcdFx0aXMgPyAkZG9jLmNyZWF0ZUVsZW1lbnQodGFnLCB7aXM6IGlzfSkgOiAkZG9jLmNyZWF0ZUVsZW1lbnQodGFnKVxuXHRcdHZub2RlLmRvbSA9IGVsZW1lbnRcblxuXHRcdGlmIChhdHRycyAhPSBudWxsKSB7XG5cdFx0XHRzZXRBdHRycyh2bm9kZSwgYXR0cnMsIG5zKVxuXHRcdH1cblxuXHRcdGluc2VydE5vZGUocGFyZW50LCBlbGVtZW50LCBuZXh0U2libGluZylcblxuXHRcdGlmICghbWF5YmVTZXRDb250ZW50RWRpdGFibGUodm5vZGUpKSB7XG5cdFx0XHRpZiAodm5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0XHRjcmVhdGVOb2RlcyhlbGVtZW50LCBjaGlsZHJlbiwgMCwgY2hpbGRyZW4ubGVuZ3RoLCBob29rcywgbnVsbCwgbnMpXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIgJiYgYXR0cnMgIT0gbnVsbCkgc2V0TGF0ZVNlbGVjdEF0dHJzKHZub2RlLCBhdHRycylcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaW5pdENvbXBvbmVudCh2bm9kZSwgaG9va3MpIHtcblx0XHR2YXIgc2VudGluZWxcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZy52aWV3ID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0gT2JqZWN0LmNyZWF0ZSh2bm9kZS50YWcpXG5cdFx0XHRzZW50aW5lbCA9IHZub2RlLnN0YXRlLnZpZXdcblx0XHRcdGlmIChzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCAhPSBudWxsKSByZXR1cm5cblx0XHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gdHJ1ZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IHZvaWQgMFxuXHRcdFx0c2VudGluZWwgPSB2bm9kZS50YWdcblx0XHRcdGlmIChzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCAhPSBudWxsKSByZXR1cm5cblx0XHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gdHJ1ZVxuXHRcdFx0dm5vZGUuc3RhdGUgPSAodm5vZGUudGFnLnByb3RvdHlwZSAhPSBudWxsICYmIHR5cGVvZiB2bm9kZS50YWcucHJvdG90eXBlLnZpZXcgPT09IFwiZnVuY3Rpb25cIikgPyBuZXcgdm5vZGUudGFnKHZub2RlKSA6IHZub2RlLnRhZyh2bm9kZSlcblx0XHR9XG5cdFx0aW5pdExpZmVjeWNsZSh2bm9kZS5zdGF0ZSwgdm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBWbm9kZS5ub3JtYWxpemUoY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS52aWV3LCB2bm9kZSkpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlID09PSB2bm9kZSkgdGhyb3cgRXJyb3IoXCJBIHZpZXcgY2Fubm90IHJldHVybiB0aGUgdm5vZGUgaXQgcmVjZWl2ZWQgYXMgYXJndW1lbnRcIilcblx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IG51bGxcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5kb20gIT0gbnVsbCA/IHZub2RlLmluc3RhbmNlLmRvbVNpemUgOiAwXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IDBcblx0XHR9XG5cdH1cblxuXHQvL3VwZGF0ZVxuXHQvKipcblx0ICogQHBhcmFtIHtFbGVtZW50fEZyYWdtZW50fSBwYXJlbnQgLSB0aGUgcGFyZW50IGVsZW1lbnRcblx0ICogQHBhcmFtIHtWbm9kZVtdIHwgbnVsbH0gb2xkIC0gdGhlIGxpc3Qgb2Ygdm5vZGVzIG9mIHRoZSBsYXN0IGByZW5kZXIoKWAgY2FsbCBmb3Jcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyBwYXJ0IG9mIHRoZSB0cmVlXG5cdCAqIEBwYXJhbSB7Vm5vZGVbXSB8IG51bGx9IHZub2RlcyAtIGFzIGFib3ZlLCBidXQgZm9yIHRoZSBjdXJyZW50IGByZW5kZXIoKWAgY2FsbC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbltdfSBob29rcyAtIGFuIGFjY3VtdWxhdG9yIG9mIHBvc3QtcmVuZGVyIGhvb2tzIChvbmNyZWF0ZS9vbnVwZGF0ZSlcblx0ICogQHBhcmFtIHtFbGVtZW50IHwgbnVsbH0gbmV4dFNpYmxpbmcgLSB0aGUgbmV4dCBET00gbm9kZSBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IHRoYXQgaXMgbm90IHRoZSBsYXN0IGl0ZW0gaW4gaXRzXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50XG5cdCAqIEBwYXJhbSB7J3N2ZycgfCAnbWF0aCcgfCBTdHJpbmcgfCBudWxsfSBucykgLSB0aGUgY3VycmVudCBYTUwgbmFtZXNwYWNlLCBpZiBhbnlcblx0ICogQHJldHVybnMgdm9pZFxuXHQgKi9cblx0Ly8gVGhpcyBmdW5jdGlvbiBkaWZmcyBhbmQgcGF0Y2hlcyBsaXN0cyBvZiB2bm9kZXMsIGJvdGgga2V5ZWQgYW5kIHVua2V5ZWQuXG5cdC8vXG5cdC8vIFdlIHdpbGw6XG5cdC8vXG5cdC8vIDEuIGRlc2NyaWJlIGl0cyBnZW5lcmFsIHN0cnVjdHVyZVxuXHQvLyAyLiBmb2N1cyBvbiB0aGUgZGlmZiBhbGdvcml0aG0gb3B0aW1pemF0aW9uc1xuXHQvLyAzLiBkaXNjdXNzIERPTSBub2RlIG9wZXJhdGlvbnMuXG5cblx0Ly8gIyMgT3ZlcnZpZXc6XG5cdC8vXG5cdC8vIFRoZSB1cGRhdGVOb2RlcygpIGZ1bmN0aW9uOlxuXHQvLyAtIGRlYWxzIHdpdGggdHJpdmlhbCBjYXNlc1xuXHQvLyAtIGRldGVybWluZXMgd2hldGhlciB0aGUgbGlzdHMgYXJlIGtleWVkIG9yIHVua2V5ZWQgYmFzZWQgb24gdGhlIGZpcnN0IG5vbi1udWxsIG5vZGVcblx0Ly8gICBvZiBlYWNoIGxpc3QuXG5cdC8vIC0gZGlmZnMgdGhlbSBhbmQgcGF0Y2hlcyB0aGUgRE9NIGlmIG5lZWRlZCAodGhhdCdzIHRoZSBicnVudCBvZiB0aGUgY29kZSlcblx0Ly8gLSBtYW5hZ2VzIHRoZSBsZWZ0b3ZlcnM6IGFmdGVyIGRpZmZpbmcsIGFyZSB0aGVyZTpcblx0Ly8gICAtIG9sZCBub2RlcyBsZWZ0IHRvIHJlbW92ZT9cblx0Ly8gXHQgLSBuZXcgbm9kZXMgdG8gaW5zZXJ0P1xuXHQvLyBcdCBkZWFsIHdpdGggdGhlbSFcblx0Ly9cblx0Ly8gVGhlIGxpc3RzIGFyZSBvbmx5IGl0ZXJhdGVkIG92ZXIgb25jZSwgd2l0aCBhbiBleGNlcHRpb24gZm9yIHRoZSBub2RlcyBpbiBgb2xkYCB0aGF0XG5cdC8vIGFyZSB2aXNpdGVkIGluIHRoZSBmb3VydGggcGFydCBvZiB0aGUgZGlmZiBhbmQgaW4gdGhlIGByZW1vdmVOb2Rlc2AgbG9vcC5cblxuXHQvLyAjIyBEaWZmaW5nXG5cdC8vXG5cdC8vIFJlYWRpbmcgaHR0cHM6Ly9naXRodWIuY29tL2xvY2Fsdm9pZC9pdmkvYmxvYi9kZGMwOWQwNmFiYWVmNDUyNDhlNjEzM2Y3MDQwZDAwZDNjNmJlODUzL3BhY2thZ2VzL2l2aS9zcmMvdmRvbS9pbXBsZW1lbnRhdGlvbi50cyNMNjE3LUw4Mzdcblx0Ly8gbWF5IGJlIGdvb2QgZm9yIGNvbnRleHQgb24gbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLWJhc2VkIGxvZ2ljIGZvciBtb3Zpbmcgbm9kZXMuXG5cdC8vXG5cdC8vIEluIG9yZGVyIHRvIGRpZmYga2V5ZWQgbGlzdHMsIG9uZSBoYXMgdG9cblx0Ly9cblx0Ly8gMSkgbWF0Y2ggbm9kZXMgaW4gYm90aCBsaXN0cywgcGVyIGtleSwgYW5kIHVwZGF0ZSB0aGVtIGFjY29yZGluZ2x5XG5cdC8vIDIpIGNyZWF0ZSB0aGUgbm9kZXMgcHJlc2VudCBpbiB0aGUgbmV3IGxpc3QsIGJ1dCBhYnNlbnQgaW4gdGhlIG9sZCBvbmVcblx0Ly8gMykgcmVtb3ZlIHRoZSBub2RlcyBwcmVzZW50IGluIHRoZSBvbGQgbGlzdCwgYnV0IGFic2VudCBpbiB0aGUgbmV3IG9uZVxuXHQvLyA0KSBmaWd1cmUgb3V0IHdoYXQgbm9kZXMgaW4gMSkgdG8gbW92ZSBpbiBvcmRlciB0byBtaW5pbWl6ZSB0aGUgRE9NIG9wZXJhdGlvbnMuXG5cdC8vXG5cdC8vIFRvIGFjaGlldmUgMSkgb25lIGNhbiBjcmVhdGUgYSBkaWN0aW9uYXJ5IG9mIGtleXMgPT4gaW5kZXggKGZvciB0aGUgb2xkIGxpc3QpLCB0aGVuIGl0ZXJhdGVcblx0Ly8gb3ZlciB0aGUgbmV3IGxpc3QgYW5kIGZvciBlYWNoIG5ldyB2bm9kZSwgZmluZCB0aGUgY29ycmVzcG9uZGluZyB2bm9kZSBpbiB0aGUgb2xkIGxpc3QgdXNpbmdcblx0Ly8gdGhlIG1hcC5cblx0Ly8gMikgaXMgYWNoaWV2ZWQgaW4gdGhlIHNhbWUgc3RlcDogaWYgYSBuZXcgbm9kZSBoYXMgbm8gY29ycmVzcG9uZGluZyBlbnRyeSBpbiB0aGUgbWFwLCBpdCBpcyBuZXdcblx0Ly8gYW5kIG11c3QgYmUgY3JlYXRlZC5cblx0Ly8gRm9yIHRoZSByZW1vdmFscywgd2UgYWN0dWFsbHkgcmVtb3ZlIHRoZSBub2RlcyB0aGF0IGhhdmUgYmVlbiB1cGRhdGVkIGZyb20gdGhlIG9sZCBsaXN0LlxuXHQvLyBUaGUgbm9kZXMgdGhhdCByZW1haW4gaW4gdGhhdCBsaXN0IGFmdGVyIDEpIGFuZCAyKSBoYXZlIGJlZW4gcGVyZm9ybWVkIGNhbiBiZSBzYWZlbHkgcmVtb3ZlZC5cblx0Ly8gVGhlIGZvdXJ0aCBzdGVwIGlzIGEgYml0IG1vcmUgY29tcGxleCBhbmQgcmVsaWVzIG9uIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UgKExJUylcblx0Ly8gYWxnb3JpdGhtLlxuXHQvL1xuXHQvLyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIGlzIHRoZSBsaXN0IG9mIG5vZGVzIHRoYXQgY2FuIHJlbWFpbiBpbiBwbGFjZS4gSW1hZ2luZSBnb2luZ1xuXHQvLyBmcm9tIGAxLDIsMyw0LDVgIHRvIGA0LDUsMSwyLDNgIHdoZXJlIHRoZSBudW1iZXJzIGFyZSBub3QgbmVjZXNzYXJpbHkgdGhlIGtleXMsIGJ1dCB0aGUgaW5kaWNlc1xuXHQvLyBjb3JyZXNwb25kaW5nIHRvIHRoZSBrZXllZCBub2RlcyBpbiB0aGUgb2xkIGxpc3QgKGtleWVkIG5vZGVzIGBlLGQsYyxiLGFgID0+IGBiLGEsZSxkLGNgIHdvdWxkXG5cdC8vICBtYXRjaCB0aGUgYWJvdmUgbGlzdHMsIGZvciBleGFtcGxlKS5cblx0Ly9cblx0Ly8gSW4gdGhlcmUgYXJlIHR3byBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlczogYDQsNWAgYW5kIGAxLDIsM2AsIHRoZSBsYXR0ZXIgYmVpbmcgdGhlIGxvbmdlc3QuIFdlXG5cdC8vIGNhbiB1cGRhdGUgdGhvc2Ugbm9kZXMgd2l0aG91dCBtb3ZpbmcgdGhlbSwgYW5kIG9ubHkgY2FsbCBgaW5zZXJ0Tm9kZWAgb24gYDRgIGFuZCBgNWAuXG5cdC8vXG5cdC8vIEBsb2NhbHZvaWQgYWRhcHRlZCB0aGUgYWxnbyB0byBhbHNvIHN1cHBvcnQgbm9kZSBkZWxldGlvbnMgYW5kIGluc2VydGlvbnMgKHRoZSBgbGlzYCBpcyBhY3R1YWxseVxuXHQvLyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlICpvZiBvbGQgbm9kZXMgc3RpbGwgcHJlc2VudCBpbiB0aGUgbmV3IGxpc3QqKS5cblx0Ly9cblx0Ly8gSXQgaXMgYSBnZW5lcmFsIGFsZ29yaXRobSB0aGF0IGlzIGZpcmVwcm9vZiBpbiBhbGwgY2lyY3Vtc3RhbmNlcywgYnV0IGl0IHJlcXVpcmVzIHRoZSBhbGxvY2F0aW9uXG5cdC8vIGFuZCB0aGUgY29uc3RydWN0aW9uIG9mIGEgYGtleSA9PiBvbGRJbmRleGAgbWFwLCBhbmQgdGhyZWUgYXJyYXlzIChvbmUgd2l0aCBgbmV3SW5kZXggPT4gb2xkSW5kZXhgLFxuXHQvLyB0aGUgYExJU2AgYW5kIGEgdGVtcG9yYXJ5IG9uZSB0byBjcmVhdGUgdGhlIExJUykuXG5cdC8vXG5cdC8vIFNvIHdlIGNoZWF0IHdoZXJlIHdlIGNhbjogaWYgdGhlIHRhaWxzIG9mIHRoZSBsaXN0cyBhcmUgaWRlbnRpY2FsLCB0aGV5IGFyZSBndWFyYW50ZWVkIHRvIGJlIHBhcnQgb2Zcblx0Ly8gdGhlIExJUyBhbmQgY2FuIGJlIHVwZGF0ZWQgd2l0aG91dCBtb3ZpbmcgdGhlbS5cblx0Ly9cblx0Ly8gSWYgdHdvIG5vZGVzIGFyZSBzd2FwcGVkLCB0aGV5IGFyZSBndWFyYW50ZWVkIG5vdCB0byBiZSBwYXJ0IG9mIHRoZSBMSVMsIGFuZCBtdXN0IGJlIG1vdmVkICh3aXRoXG5cdC8vIHRoZSBleGNlcHRpb24gb2YgdGhlIGxhc3Qgbm9kZSBpZiB0aGUgbGlzdCBpcyBmdWxseSByZXZlcnNlZCkuXG5cdC8vXG5cdC8vICMjIEZpbmRpbmcgdGhlIG5leHQgc2libGluZy5cblx0Ly9cblx0Ly8gYHVwZGF0ZU5vZGUoKWAgYW5kIGBjcmVhdGVOb2RlKClgIGV4cGVjdCBhIG5leHRTaWJsaW5nIHBhcmFtZXRlciB0byBwZXJmb3JtIERPTSBvcGVyYXRpb25zLlxuXHQvLyBXaGVuIHRoZSBsaXN0IGlzIGJlaW5nIHRyYXZlcnNlZCB0b3AtZG93biwgYXQgYW55IGluZGV4LCB0aGUgRE9NIG5vZGVzIHVwIHRvIHRoZSBwcmV2aW91c1xuXHQvLyB2bm9kZSByZWZsZWN0IHRoZSBjb250ZW50IG9mIHRoZSBuZXcgbGlzdCwgd2hlcmVhcyB0aGUgcmVzdCBvZiB0aGUgRE9NIG5vZGVzIHJlZmxlY3QgdGhlIG9sZFxuXHQvLyBsaXN0LiBUaGUgbmV4dCBzaWJsaW5nIG11c3QgYmUgbG9va2VkIGZvciBpbiB0aGUgb2xkIGxpc3QgdXNpbmcgYGdldE5leHRTaWJsaW5nKC4uLiBvbGRTdGFydCArIDEgLi4uKWAuXG5cdC8vXG5cdC8vIEluIHRoZSBvdGhlciBzY2VuYXJpb3MgKHN3YXBzLCB1cHdhcmRzIHRyYXZlcnNhbCwgbWFwLWJhc2VkIGRpZmYpLFxuXHQvLyB0aGUgbmV3IHZub2RlcyBsaXN0IGlzIHRyYXZlcnNlZCB1cHdhcmRzLiBUaGUgRE9NIG5vZGVzIGF0IHRoZSBib3R0b20gb2YgdGhlIGxpc3QgcmVmbGVjdCB0aGVcblx0Ly8gYm90dG9tIHBhcnQgb2YgdGhlIG5ldyB2bm9kZXMgbGlzdCwgYW5kIHdlIGNhbiB1c2UgdGhlIGB2LmRvbWAgIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBub2RlXG5cdC8vIGFzIHRoZSBuZXh0IHNpYmxpbmcgKGNhY2hlZCBpbiB0aGUgYG5leHRTaWJsaW5nYCB2YXJpYWJsZSkuXG5cblxuXHQvLyAjIyBET00gbm9kZSBtb3Zlc1xuXHQvL1xuXHQvLyBJbiBtb3N0IHNjZW5hcmlvcyBgdXBkYXRlTm9kZSgpYCBhbmQgYGNyZWF0ZU5vZGUoKWAgcGVyZm9ybSB0aGUgRE9NIG9wZXJhdGlvbnMuIEhvd2V2ZXIsXG5cdC8vIHRoaXMgaXMgbm90IHRoZSBjYXNlIGlmIHRoZSBub2RlIG1vdmVkIChzZWNvbmQgYW5kIGZvdXJ0aCBwYXJ0IG9mIHRoZSBkaWZmIGFsZ28pLiBXZSBtb3ZlXG5cdC8vIHRoZSBvbGQgRE9NIG5vZGVzIGJlZm9yZSB1cGRhdGVOb2RlIHJ1bnMgYmVjYXVzZSBpdCBlbmFibGVzIHVzIHRvIHVzZSB0aGUgY2FjaGVkIGBuZXh0U2libGluZ2Bcblx0Ly8gdmFyaWFibGUgcmF0aGVyIHRoYW4gZmV0Y2hpbmcgaXQgdXNpbmcgYGdldE5leHRTaWJsaW5nKClgLlxuXHQvL1xuXHQvLyBUaGUgZm91cnRoIHBhcnQgb2YgdGhlIGRpZmYgY3VycmVudGx5IGluc2VydHMgbm9kZXMgdW5jb25kaXRpb25hbGx5LCBsZWFkaW5nIHRvIGlzc3Vlc1xuXHQvLyBsaWtlICMxNzkxIGFuZCAjMTk5OS4gV2UgbmVlZCB0byBiZSBzbWFydGVyIGFib3V0IHRob3NlIHNpdHVhdGlvbnMgd2hlcmUgYWRqYXNjZW50IG9sZFxuXHQvLyBub2RlcyByZW1haW4gdG9nZXRoZXIgaW4gdGhlIG5ldyBsaXN0IGluIGEgd2F5IHRoYXQgaXNuJ3QgY292ZXJlZCBieSBwYXJ0cyBvbmUgYW5kXG5cdC8vIHRocmVlIG9mIHRoZSBkaWZmIGFsZ28uXG5cblx0ZnVuY3Rpb24gdXBkYXRlTm9kZXMocGFyZW50LCBvbGQsIHZub2RlcywgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdGlmIChvbGQgPT09IHZub2RlcyB8fCBvbGQgPT0gbnVsbCAmJiB2bm9kZXMgPT0gbnVsbCkgcmV0dXJuXG5cdFx0ZWxzZSBpZiAob2xkID09IG51bGwgfHwgb2xkLmxlbmd0aCA9PT0gMCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIDAsIHZub2Rlcy5sZW5ndGgsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0ZWxzZSBpZiAodm5vZGVzID09IG51bGwgfHwgdm5vZGVzLmxlbmd0aCA9PT0gMCkgcmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIDAsIG9sZC5sZW5ndGgpXG5cdFx0ZWxzZSB7XG5cdFx0XHR2YXIgaXNPbGRLZXllZCA9IG9sZFswXSAhPSBudWxsICYmIG9sZFswXS5rZXkgIT0gbnVsbFxuXHRcdFx0dmFyIGlzS2V5ZWQgPSB2bm9kZXNbMF0gIT0gbnVsbCAmJiB2bm9kZXNbMF0ua2V5ICE9IG51bGxcblx0XHRcdHZhciBzdGFydCA9IDAsIG9sZFN0YXJ0ID0gMFxuXHRcdFx0aWYgKCFpc09sZEtleWVkKSB3aGlsZSAob2xkU3RhcnQgPCBvbGQubGVuZ3RoICYmIG9sZFtvbGRTdGFydF0gPT0gbnVsbCkgb2xkU3RhcnQrK1xuXHRcdFx0aWYgKCFpc0tleWVkKSB3aGlsZSAoc3RhcnQgPCB2bm9kZXMubGVuZ3RoICYmIHZub2Rlc1tzdGFydF0gPT0gbnVsbCkgc3RhcnQrK1xuXHRcdFx0aWYgKGlzT2xkS2V5ZWQgIT09IGlzS2V5ZWQpIHtcblx0XHRcdFx0cmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIG9sZFN0YXJ0LCBvbGQubGVuZ3RoKVxuXHRcdFx0XHRjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIHZub2Rlcy5sZW5ndGgsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHR9IGVsc2UgaWYgKCFpc0tleWVkKSB7XG5cdFx0XHRcdC8vIERvbid0IGluZGV4IHBhc3QgdGhlIGVuZCBvZiBlaXRoZXIgbGlzdCAoY2F1c2VzIGRlb3B0cykuXG5cdFx0XHRcdHZhciBjb21tb25MZW5ndGggPSBvbGQubGVuZ3RoIDwgdm5vZGVzLmxlbmd0aCA/IG9sZC5sZW5ndGggOiB2bm9kZXMubGVuZ3RoXG5cdFx0XHRcdC8vIFJld2luZCBpZiBuZWNlc3NhcnkgdG8gdGhlIGZpcnN0IG5vbi1udWxsIGluZGV4IG9uIGVpdGhlciBzaWRlLlxuXHRcdFx0XHQvLyBXZSBjb3VsZCBhbHRlcm5hdGl2ZWx5IGVpdGhlciBleHBsaWNpdGx5IGNyZWF0ZSBvciByZW1vdmUgbm9kZXMgd2hlbiBgc3RhcnQgIT09IG9sZFN0YXJ0YFxuXHRcdFx0XHQvLyBidXQgdGhhdCB3b3VsZCBiZSBvcHRpbWl6aW5nIGZvciBzcGFyc2UgbGlzdHMgd2hpY2ggYXJlIG1vcmUgcmFyZSB0aGFuIGRlbnNlIG9uZXMuXG5cdFx0XHRcdHN0YXJ0ID0gc3RhcnQgPCBvbGRTdGFydCA/IHN0YXJ0IDogb2xkU3RhcnRcblx0XHRcdFx0Zm9yICg7IHN0YXJ0IDwgY29tbW9uTGVuZ3RoOyBzdGFydCsrKSB7XG5cdFx0XHRcdFx0byA9IG9sZFtzdGFydF1cblx0XHRcdFx0XHR2ID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0XHRcdGlmIChvID09PSB2IHx8IG8gPT0gbnVsbCAmJiB2ID09IG51bGwpIGNvbnRpbnVlXG5cdFx0XHRcdFx0ZWxzZSBpZiAobyA9PSBudWxsKSBjcmVhdGVOb2RlKHBhcmVudCwgdiwgaG9va3MsIG5zLCBnZXROZXh0U2libGluZyhvbGQsIHN0YXJ0ICsgMSwgbmV4dFNpYmxpbmcpKVxuXHRcdFx0XHRcdGVsc2UgaWYgKHYgPT0gbnVsbCkgcmVtb3ZlTm9kZShwYXJlbnQsIG8pXG5cdFx0XHRcdFx0ZWxzZSB1cGRhdGVOb2RlKHBhcmVudCwgbywgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgc3RhcnQgKyAxLCBuZXh0U2libGluZyksIG5zKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvbGQubGVuZ3RoID4gY29tbW9uTGVuZ3RoKSByZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgc3RhcnQsIG9sZC5sZW5ndGgpXG5cdFx0XHRcdGlmICh2bm9kZXMubGVuZ3RoID4gY29tbW9uTGVuZ3RoKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIHZub2Rlcy5sZW5ndGgsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBrZXllZCBkaWZmXG5cdFx0XHRcdHZhciBvbGRFbmQgPSBvbGQubGVuZ3RoIC0gMSwgZW5kID0gdm5vZGVzLmxlbmd0aCAtIDEsIG1hcCwgbywgdiwgb2UsIHZlLCB0b3BTaWJsaW5nXG5cblx0XHRcdFx0Ly8gYm90dG9tLXVwXG5cdFx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdFx0b2UgPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHRcdHZlID0gdm5vZGVzW2VuZF1cblx0XHRcdFx0XHRpZiAob2Uua2V5ICE9PSB2ZS5rZXkpIGJyZWFrXG5cdFx0XHRcdFx0aWYgKG9lICE9PSB2ZSkgdXBkYXRlTm9kZShwYXJlbnQsIG9lLCB2ZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRpZiAodmUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdmUuZG9tXG5cdFx0XHRcdFx0b2xkRW5kLS0sIGVuZC0tXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gdG9wLWRvd25cblx0XHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0XHRvID0gb2xkW29sZFN0YXJ0XVxuXHRcdFx0XHRcdHYgPSB2bm9kZXNbc3RhcnRdXG5cdFx0XHRcdFx0aWYgKG8ua2V5ICE9PSB2LmtleSkgYnJlYWtcblx0XHRcdFx0XHRvbGRTdGFydCsrLCBzdGFydCsrXG5cdFx0XHRcdFx0aWYgKG8gIT09IHYpIHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRTdGFydCwgbmV4dFNpYmxpbmcpLCBucylcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBzd2FwcyBhbmQgbGlzdCByZXZlcnNhbHNcblx0XHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAoc3RhcnQgPT09IGVuZCkgYnJlYWtcblx0XHRcdFx0XHRpZiAoby5rZXkgIT09IHZlLmtleSB8fCBvZS5rZXkgIT09IHYua2V5KSBicmVha1xuXHRcdFx0XHRcdHRvcFNpYmxpbmcgPSBnZXROZXh0U2libGluZyhvbGQsIG9sZFN0YXJ0LCBuZXh0U2libGluZylcblx0XHRcdFx0XHRtb3ZlTm9kZXMocGFyZW50LCBvZSwgdG9wU2libGluZylcblx0XHRcdFx0XHRpZiAob2UgIT09IHYpIHVwZGF0ZU5vZGUocGFyZW50LCBvZSwgdiwgaG9va3MsIHRvcFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGlmICgrK3N0YXJ0IDw9IC0tZW5kKSBtb3ZlTm9kZXMocGFyZW50LCBvLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRpZiAobyAhPT0gdmUpIHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2ZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRpZiAodmUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdmUuZG9tXG5cdFx0XHRcdFx0b2xkU3RhcnQrKzsgb2xkRW5kLS1cblx0XHRcdFx0XHRvZSA9IG9sZFtvbGRFbmRdXG5cdFx0XHRcdFx0dmUgPSB2bm9kZXNbZW5kXVxuXHRcdFx0XHRcdG8gPSBvbGRbb2xkU3RhcnRdXG5cdFx0XHRcdFx0diA9IHZub2Rlc1tzdGFydF1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBib3R0b20gdXAgb25jZSBhZ2FpblxuXHRcdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChvZS5rZXkgIT09IHZlLmtleSkgYnJlYWtcblx0XHRcdFx0XHRpZiAob2UgIT09IHZlKSB1cGRhdGVOb2RlKHBhcmVudCwgb2UsIHZlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGlmICh2ZS5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2ZS5kb21cblx0XHRcdFx0XHRvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0XHRvZSA9IG9sZFtvbGRFbmRdXG5cdFx0XHRcdFx0dmUgPSB2bm9kZXNbZW5kXVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGFydCA+IGVuZCkgcmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIG9sZFN0YXJ0LCBvbGRFbmQgKyAxKVxuXHRcdFx0XHRlbHNlIGlmIChvbGRTdGFydCA+IG9sZEVuZCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQgKyAxLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHQvLyBpbnNwaXJlZCBieSBpdmkgaHR0cHM6Ly9naXRodWIuY29tL2l2aWpzL2l2aS8gYnkgQm9yaXMgS2F1bFxuXHRcdFx0XHRcdHZhciBvcmlnaW5hbE5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcsIHZub2Rlc0xlbmd0aCA9IGVuZCAtIHN0YXJ0ICsgMSwgb2xkSW5kaWNlcyA9IG5ldyBBcnJheSh2bm9kZXNMZW5ndGgpLCBsaT0wLCBpPTAsIHBvcyA9IDIxNDc0ODM2NDcsIG1hdGNoZWQgPSAwLCBtYXAsIGxpc0luZGljZXNcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdm5vZGVzTGVuZ3RoOyBpKyspIG9sZEluZGljZXNbaV0gPSAtMVxuXHRcdFx0XHRcdGZvciAoaSA9IGVuZDsgaSA+PSBzdGFydDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRpZiAobWFwID09IG51bGwpIG1hcCA9IGdldEtleU1hcChvbGQsIG9sZFN0YXJ0LCBvbGRFbmQgKyAxKVxuXHRcdFx0XHRcdFx0dmUgPSB2bm9kZXNbaV1cblx0XHRcdFx0XHRcdHZhciBvbGRJbmRleCA9IG1hcFt2ZS5rZXldXG5cdFx0XHRcdFx0XHRpZiAob2xkSW5kZXggIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRwb3MgPSAob2xkSW5kZXggPCBwb3MpID8gb2xkSW5kZXggOiAtMSAvLyBiZWNvbWVzIC0xIGlmIG5vZGVzIHdlcmUgcmUtb3JkZXJlZFxuXHRcdFx0XHRcdFx0XHRvbGRJbmRpY2VzW2ktc3RhcnRdID0gb2xkSW5kZXhcblx0XHRcdFx0XHRcdFx0b2UgPSBvbGRbb2xkSW5kZXhdXG5cdFx0XHRcdFx0XHRcdG9sZFtvbGRJbmRleF0gPSBudWxsXG5cdFx0XHRcdFx0XHRcdGlmIChvZSAhPT0gdmUpIHVwZGF0ZU5vZGUocGFyZW50LCBvZSwgdmUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0XHRcdGlmICh2ZS5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2ZS5kb21cblx0XHRcdFx0XHRcdFx0bWF0Y2hlZCsrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5leHRTaWJsaW5nID0gb3JpZ2luYWxOZXh0U2libGluZ1xuXHRcdFx0XHRcdGlmIChtYXRjaGVkICE9PSBvbGRFbmQgLSBvbGRTdGFydCArIDEpIHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCBvbGRTdGFydCwgb2xkRW5kICsgMSlcblx0XHRcdFx0XHRpZiAobWF0Y2hlZCA9PT0gMCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQgKyAxLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHBvcyA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0Ly8gdGhlIGluZGljZXMgb2YgdGhlIGluZGljZXMgb2YgdGhlIGl0ZW1zIHRoYXQgYXJlIHBhcnQgb2YgdGhlXG5cdFx0XHRcdFx0XHRcdC8vIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBpbiB0aGUgb2xkSW5kaWNlcyBsaXN0XG5cdFx0XHRcdFx0XHRcdGxpc0luZGljZXMgPSBtYWtlTGlzSW5kaWNlcyhvbGRJbmRpY2VzKVxuXHRcdFx0XHRcdFx0XHRsaSA9IGxpc0luZGljZXMubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRmb3IgKGkgPSBlbmQ7IGkgPj0gc3RhcnQ7IGktLSkge1xuXHRcdFx0XHRcdFx0XHRcdHYgPSB2bm9kZXNbaV1cblx0XHRcdFx0XHRcdFx0XHRpZiAob2xkSW5kaWNlc1tpLXN0YXJ0XSA9PT0gLTEpIGNyZWF0ZU5vZGUocGFyZW50LCB2LCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGxpc0luZGljZXNbbGldID09PSBpIC0gc3RhcnQpIGxpLS1cblx0XHRcdFx0XHRcdFx0XHRcdGVsc2UgbW92ZU5vZGVzKHBhcmVudCwgdiwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGlmICh2LmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZub2Rlc1tpXS5kb21cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gZW5kOyBpID49IHN0YXJ0OyBpLS0pIHtcblx0XHRcdFx0XHRcdFx0XHR2ID0gdm5vZGVzW2ldXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9sZEluZGljZXNbaS1zdGFydF0gPT09IC0xKSBjcmVhdGVOb2RlKHBhcmVudCwgdiwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRcdFx0XHRpZiAodi5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2bm9kZXNbaV0uZG9tXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTm9kZShwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHR2YXIgb2xkVGFnID0gb2xkLnRhZywgdGFnID0gdm5vZGUudGFnXG5cdFx0aWYgKG9sZFRhZyA9PT0gdGFnKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IG9sZC5zdGF0ZVxuXHRcdFx0dm5vZGUuZXZlbnRzID0gb2xkLmV2ZW50c1xuXHRcdFx0aWYgKHNob3VsZE5vdFVwZGF0ZSh2bm9kZSwgb2xkKSkgcmV0dXJuXG5cdFx0XHRpZiAodHlwZW9mIG9sZFRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0XHRcdHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN3aXRjaCAob2xkVGFnKSB7XG5cdFx0XHRcdFx0Y2FzZSBcIiNcIjogdXBkYXRlVGV4dChvbGQsIHZub2RlKTsgYnJlYWtcblx0XHRcdFx0XHRjYXNlIFwiPFwiOiB1cGRhdGVIVE1MKHBhcmVudCwgb2xkLCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0XHRjYXNlIFwiW1wiOiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpOyBicmVha1xuXHRcdFx0XHRcdGRlZmF1bHQ6IHVwZGF0ZUVsZW1lbnQob2xkLCB2bm9kZSwgaG9va3MsIG5zKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHVwZGF0ZUNvbXBvbmVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmVtb3ZlTm9kZShwYXJlbnQsIG9sZClcblx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlVGV4dChvbGQsIHZub2RlKSB7XG5cdFx0aWYgKG9sZC5jaGlsZHJlbi50b1N0cmluZygpICE9PSB2bm9kZS5jaGlsZHJlbi50b1N0cmluZygpKSB7XG5cdFx0XHRvbGQuZG9tLm5vZGVWYWx1ZSA9IHZub2RlLmNoaWxkcmVuXG5cdFx0fVxuXHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVIVE1MKHBhcmVudCwgb2xkLCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0aWYgKG9sZC5jaGlsZHJlbiAhPT0gdm5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdHJlbW92ZUhUTUwocGFyZW50LCBvbGQpXG5cdFx0XHRjcmVhdGVIVE1MKHBhcmVudCwgdm5vZGUsIG5zLCBuZXh0U2libGluZylcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0XHRcdHZub2RlLmluc3RhbmNlID0gb2xkLmluc3RhbmNlXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUZyYWdtZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHVwZGF0ZU5vZGVzKHBhcmVudCwgb2xkLmNoaWxkcmVuLCB2bm9kZS5jaGlsZHJlbiwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHR2YXIgZG9tU2l6ZSA9IDAsIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHR2bm9kZS5kb20gPSBudWxsXG5cdFx0aWYgKGNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwgJiYgY2hpbGQuZG9tICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAodm5vZGUuZG9tID09IG51bGwpIHZub2RlLmRvbSA9IGNoaWxkLmRvbVxuXHRcdFx0XHRcdGRvbVNpemUgKz0gY2hpbGQuZG9tU2l6ZSB8fCAxXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb21TaXplICE9PSAxKSB2bm9kZS5kb21TaXplID0gZG9tU2l6ZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG9sZCwgdm5vZGUsIGhvb2tzLCBucykge1xuXHRcdHZhciBlbGVtZW50ID0gdm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdG5zID0gZ2V0TmFtZVNwYWNlKHZub2RlKSB8fCBuc1xuXG5cdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgPT0gbnVsbCkgdm5vZGUuYXR0cnMgPSB7fVxuXHRcdH1cblx0XHR1cGRhdGVBdHRycyh2bm9kZSwgb2xkLmF0dHJzLCB2bm9kZS5hdHRycywgbnMpXG5cdFx0aWYgKCFtYXliZVNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSkpIHtcblx0XHRcdHVwZGF0ZU5vZGVzKGVsZW1lbnQsIG9sZC5jaGlsZHJlbiwgdm5vZGUuY2hpbGRyZW4sIGhvb2tzLCBudWxsLCBucylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHZub2RlLmluc3RhbmNlID0gVm5vZGUubm9ybWFsaXplKGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUudmlldywgdm5vZGUpKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSA9PT0gdm5vZGUpIHRocm93IEVycm9yKFwiQSB2aWV3IGNhbm5vdCByZXR1cm4gdGhlIHZub2RlIGl0IHJlY2VpdmVkIGFzIGFyZ3VtZW50XCIpXG5cdFx0dXBkYXRlTGlmZWN5Y2xlKHZub2RlLnN0YXRlLCB2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAob2xkLmluc3RhbmNlID09IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG9sZC5pbnN0YW5jZSwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5pbnN0YW5jZS5kb21TaXplXG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9sZC5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRyZW1vdmVOb2RlKHBhcmVudCwgb2xkLmluc3RhbmNlKVxuXHRcdFx0dm5vZGUuZG9tID0gdW5kZWZpbmVkXG5cdFx0XHR2bm9kZS5kb21TaXplID0gMFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBnZXRLZXlNYXAodm5vZGVzLCBzdGFydCwgZW5kKSB7XG5cdFx0dmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0XHRmb3IgKDsgc3RhcnQgPCBlbmQ7IHN0YXJ0KyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tzdGFydF1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBrZXkgPSB2bm9kZS5rZXlcblx0XHRcdFx0aWYgKGtleSAhPSBudWxsKSBtYXBba2V5XSA9IHN0YXJ0XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBtYXBcblx0fVxuXHQvLyBMaWZ0ZWQgZnJvbSBpdmkgaHR0cHM6Ly9naXRodWIuY29tL2l2aWpzL2l2aS9cblx0Ly8gdGFrZXMgYSBsaXN0IG9mIHVuaXF1ZSBudW1iZXJzICgtMSBpcyBzcGVjaWFsIGFuZCBjYW5cblx0Ly8gb2NjdXIgbXVsdGlwbGUgdGltZXMpIGFuZCByZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIGluZGljZXNcblx0Ly8gb2YgdGhlIGl0ZW1zIHRoYXQgYXJlIHBhcnQgb2YgdGhlIGxvbmdlc3QgaW5jcmVhc2luZ1xuXHQvLyBzdWJzZXF1ZW5jZVxuXHR2YXIgbGlzVGVtcCA9IFtdXG5cdGZ1bmN0aW9uIG1ha2VMaXNJbmRpY2VzKGEpIHtcblx0XHR2YXIgcmVzdWx0ID0gWzBdXG5cdFx0dmFyIHUgPSAwLCB2ID0gMCwgaSA9IDBcblx0XHR2YXIgaWwgPSBsaXNUZW1wLmxlbmd0aCA9IGEubGVuZ3RoXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbDsgaSsrKSBsaXNUZW1wW2ldID0gYVtpXVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaWw7ICsraSkge1xuXHRcdFx0aWYgKGFbaV0gPT09IC0xKSBjb250aW51ZVxuXHRcdFx0dmFyIGogPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdXG5cdFx0XHRpZiAoYVtqXSA8IGFbaV0pIHtcblx0XHRcdFx0bGlzVGVtcFtpXSA9IGpcblx0XHRcdFx0cmVzdWx0LnB1c2goaSlcblx0XHRcdFx0Y29udGludWVcblx0XHRcdH1cblx0XHRcdHUgPSAwXG5cdFx0XHR2ID0gcmVzdWx0Lmxlbmd0aCAtIDFcblx0XHRcdHdoaWxlICh1IDwgdikge1xuXHRcdFx0XHQvLyBGYXN0IGludGVnZXIgYXZlcmFnZSB3aXRob3V0IG92ZXJmbG93LlxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHR2YXIgYyA9ICh1ID4+PiAxKSArICh2ID4+PiAxKSArICh1ICYgdiAmIDEpXG5cdFx0XHRcdGlmIChhW3Jlc3VsdFtjXV0gPCBhW2ldKSB7XG5cdFx0XHRcdFx0dSA9IGMgKyAxXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0diA9IGNcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFbaV0gPCBhW3Jlc3VsdFt1XV0pIHtcblx0XHRcdFx0aWYgKHUgPiAwKSBsaXNUZW1wW2ldID0gcmVzdWx0W3UgLSAxXVxuXHRcdFx0XHRyZXN1bHRbdV0gPSBpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHUgPSByZXN1bHQubGVuZ3RoXG5cdFx0diA9IHJlc3VsdFt1IC0gMV1cblx0XHR3aGlsZSAodS0tID4gMCkge1xuXHRcdFx0cmVzdWx0W3VdID0gdlxuXHRcdFx0diA9IGxpc1RlbXBbdl1cblx0XHR9XG5cdFx0bGlzVGVtcC5sZW5ndGggPSAwXG5cdFx0cmV0dXJuIHJlc3VsdFxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmcodm5vZGVzLCBpLCBuZXh0U2libGluZykge1xuXHRcdGZvciAoOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodm5vZGVzW2ldICE9IG51bGwgJiYgdm5vZGVzW2ldLmRvbSAhPSBudWxsKSByZXR1cm4gdm5vZGVzW2ldLmRvbVxuXHRcdH1cblx0XHRyZXR1cm4gbmV4dFNpYmxpbmdcblx0fVxuXG5cdC8vIFRoaXMgY292ZXJzIGEgcmVhbGx5IHNwZWNpZmljIGVkZ2UgY2FzZTpcblx0Ly8gLSBQYXJlbnQgbm9kZSBpcyBrZXllZCBhbmQgY29udGFpbnMgY2hpbGRcblx0Ly8gLSBDaGlsZCBpcyByZW1vdmVkLCByZXR1cm5zIHVucmVzb2x2ZWQgcHJvbWlzZSBpbiBgb25iZWZvcmVyZW1vdmVgXG5cdC8vIC0gUGFyZW50IG5vZGUgaXMgbW92ZWQgaW4ga2V5ZWQgZGlmZlxuXHQvLyAtIFJlbWFpbmluZyBjaGlsZHJlbiBzdGlsbCBuZWVkIG1vdmVkIGFwcHJvcHJpYXRlbHlcblx0Ly9cblx0Ly8gSWRlYWxseSwgSSdkIHRyYWNrIHJlbW92ZWQgbm9kZXMgYXMgd2VsbCwgYnV0IHRoYXQgaW50cm9kdWNlcyBhIGxvdCBtb3JlXG5cdC8vIGNvbXBsZXhpdHkgYW5kIEknbSBub3QgZXhhY3RseSBpbnRlcmVzdGVkIGluIGRvaW5nIHRoYXQuXG5cdGZ1bmN0aW9uIG1vdmVOb2RlcyhwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZykge1xuXHRcdHZhciBmcmFnID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRtb3ZlQ2hpbGRUb0ZyYWcocGFyZW50LCBmcmFnLCB2bm9kZSlcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZnJhZywgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gbW92ZUNoaWxkVG9GcmFnKHBhcmVudCwgZnJhZywgdm5vZGUpIHtcblx0XHQvLyBEb2RnZSB0aGUgcmVjdXJzaW9uIG92ZXJoZWFkIGluIGEgZmV3IG9mIHRoZSBtb3N0IGNvbW1vbiBjYXNlcy5cblx0XHR3aGlsZSAodm5vZGUuZG9tICE9IG51bGwgJiYgdm5vZGUuZG9tLnBhcmVudE5vZGUgPT09IHBhcmVudCkge1xuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0dm5vZGUgPSB2bm9kZS5pbnN0YW5jZVxuXHRcdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgY29udGludWVcblx0XHRcdH0gZWxzZSBpZiAodm5vZGUudGFnID09PSBcIjxcIikge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZub2RlLmluc3RhbmNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0ZnJhZy5hcHBlbmRDaGlsZCh2bm9kZS5pbnN0YW5jZVtpXSlcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh2bm9kZS50YWcgIT09IFwiW1wiKSB7XG5cdFx0XHRcdC8vIERvbid0IHJlY3Vyc2UgZm9yIHRleHQgbm9kZXMgKm9yKiBlbGVtZW50cywganVzdCBmcmFnbWVudHNcblx0XHRcdFx0ZnJhZy5hcHBlbmRDaGlsZCh2bm9kZS5kb20pXG5cdFx0XHR9IGVsc2UgaWYgKHZub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHR2bm9kZSA9IHZub2RlLmNoaWxkcmVuWzBdXG5cdFx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSBjb250aW51ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldXG5cdFx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwpIG1vdmVDaGlsZFRvRnJhZyhwYXJlbnQsIGZyYWcsIGNoaWxkKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGluc2VydE5vZGUocGFyZW50LCBkb20sIG5leHRTaWJsaW5nKSB7XG5cdFx0aWYgKG5leHRTaWJsaW5nICE9IG51bGwpIHBhcmVudC5pbnNlcnRCZWZvcmUoZG9tLCBuZXh0U2libGluZylcblx0XHRlbHNlIHBhcmVudC5hcHBlbmRDaGlsZChkb20pXG5cdH1cblxuXHRmdW5jdGlvbiBtYXliZVNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5hdHRycyA9PSBudWxsIHx8IChcblx0XHRcdHZub2RlLmF0dHJzLmNvbnRlbnRlZGl0YWJsZSA9PSBudWxsICYmIC8vIGF0dHJpYnV0ZVxuXHRcdFx0dm5vZGUuYXR0cnMuY29udGVudEVkaXRhYmxlID09IG51bGwgLy8gcHJvcGVydHlcblx0XHQpKSByZXR1cm4gZmFsc2Vcblx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdGlmIChjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlblswXS50YWcgPT09IFwiPFwiKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuXG5cdFx0XHRpZiAodm5vZGUuZG9tLmlubmVySFRNTCAhPT0gY29udGVudCkgdm5vZGUuZG9tLmlubmVySFRNTCA9IGNvbnRlbnRcblx0XHR9XG5cdFx0ZWxzZSBpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDApIHRocm93IG5ldyBFcnJvcihcIkNoaWxkIG5vZGUgb2YgYSBjb250ZW50ZWRpdGFibGUgbXVzdCBiZSB0cnVzdGVkLlwiKVxuXHRcdHJldHVybiB0cnVlXG5cdH1cblxuXHQvL3JlbW92ZVxuXHRmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCkge1xuXHRcdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSByZW1vdmVOb2RlKHBhcmVudCwgdm5vZGUpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGUocGFyZW50LCB2bm9kZSkge1xuXHRcdHZhciBtYXNrID0gMFxuXHRcdHZhciBvcmlnaW5hbCA9IHZub2RlLnN0YXRlXG5cdFx0dmFyIHN0YXRlUmVzdWx0LCBhdHRyc1Jlc3VsdFxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5zdGF0ZS5vbmJlZm9yZXJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS5vbmJlZm9yZXJlbW92ZSwgdm5vZGUpXG5cdFx0XHRpZiAocmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0bWFzayA9IDFcblx0XHRcdFx0c3RhdGVSZXN1bHQgPSByZXN1bHRcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZub2RlLmF0dHJzICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbmJlZm9yZXJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gY2FsbEhvb2suY2FsbCh2bm9kZS5hdHRycy5vbmJlZm9yZXJlbW92ZSwgdm5vZGUpXG5cdFx0XHRpZiAocmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0bWFzayB8PSAyXG5cdFx0XHRcdGF0dHJzUmVzdWx0ID0gcmVzdWx0XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNoZWNrU3RhdGUodm5vZGUsIG9yaWdpbmFsKVxuXG5cdFx0Ly8gSWYgd2UgY2FuLCB0cnkgdG8gZmFzdC1wYXRoIGl0IGFuZCBhdm9pZCBhbGwgdGhlIG92ZXJoZWFkIG9mIGF3YWl0aW5nXG5cdFx0aWYgKCFtYXNrKSB7XG5cdFx0XHRvbnJlbW92ZSh2bm9kZSlcblx0XHRcdHJlbW92ZUNoaWxkKHBhcmVudCwgdm5vZGUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChzdGF0ZVJlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBuZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0XHRcdFx0aWYgKG1hc2sgJiAxKSB7IG1hc2sgJj0gMjsgaWYgKCFtYXNrKSByZWFsbHlSZW1vdmUoKSB9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhdGVSZXN1bHQudGhlbihuZXh0LCBuZXh0KVxuXHRcdFx0fVxuXHRcdFx0aWYgKGF0dHJzUmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0XHRpZiAobWFzayAmIDIpIHsgbWFzayAmPSAxOyBpZiAoIW1hc2spIHJlYWxseVJlbW92ZSgpIH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhdHRyc1Jlc3VsdC50aGVuKG5leHQsIG5leHQpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcmVhbGx5UmVtb3ZlKCkge1xuXHRcdFx0Y2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpXG5cdFx0XHRvbnJlbW92ZSh2bm9kZSlcblx0XHRcdHJlbW92ZUNoaWxkKHBhcmVudCwgdm5vZGUpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUhUTUwocGFyZW50LCB2bm9kZSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGUuaW5zdGFuY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZCh2bm9kZS5pbnN0YW5jZVtpXSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50LCB2bm9kZSkge1xuXHRcdC8vIERvZGdlIHRoZSByZWN1cnNpb24gb3ZlcmhlYWQgaW4gYSBmZXcgb2YgdGhlIG1vc3QgY29tbW9uIGNhc2VzLlxuXHRcdHdoaWxlICh2bm9kZS5kb20gIT0gbnVsbCAmJiB2bm9kZS5kb20ucGFyZW50Tm9kZSA9PT0gcGFyZW50KSB7XG5cdFx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHR2bm9kZSA9IHZub2RlLmluc3RhbmNlXG5cdFx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSBjb250aW51ZVxuXHRcdFx0fSBlbHNlIGlmICh2bm9kZS50YWcgPT09IFwiPFwiKSB7XG5cdFx0XHRcdHJlbW92ZUhUTUwocGFyZW50LCB2bm9kZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh2bm9kZS50YWcgIT09IFwiW1wiKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHZub2RlLmRvbSlcblx0XHRcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkodm5vZGUuY2hpbGRyZW4pKSBicmVha1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2bm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHR2bm9kZSA9IHZub2RlLmNoaWxkcmVuWzBdXG5cdFx0XHRcdFx0aWYgKHZub2RlICE9IG51bGwpIGNvbnRpbnVlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV1cblx0XHRcdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsKSByZW1vdmVDaGlsZChwYXJlbnQsIGNoaWxkKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gb25yZW1vdmUodm5vZGUpIHtcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygdm5vZGUuc3RhdGUub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS5vbnJlbW92ZSwgdm5vZGUpXG5cdFx0aWYgKHZub2RlLmF0dHJzICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbnJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSBjYWxsSG9vay5jYWxsKHZub2RlLmF0dHJzLm9ucmVtb3ZlLCB2bm9kZSlcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIG9ucmVtb3ZlKHZub2RlLmluc3RhbmNlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXHRcdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsKSBvbnJlbW92ZShjaGlsZClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vYXR0cnNcblx0ZnVuY3Rpb24gc2V0QXR0cnModm5vZGUsIGF0dHJzLCBucykge1xuXHRcdC8vIElmIHlvdSBhc3NpZ24gYW4gaW5wdXQgdHlwZSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUgMTEgd2l0aCBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24sIGFuIGVycm9yIHdpbGwgb2NjdXIuXG5cdFx0Ly9cblx0XHQvLyBBbHNvLCB0aGUgRE9NIGRvZXMgdGhpbmdzIHRvIGlucHV0cyBiYXNlZCBvbiB0aGUgdmFsdWUsIHNvIGl0IG5lZWRzIHNldCBmaXJzdC5cblx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaXRocmlsSlMvbWl0aHJpbC5qcy9pc3N1ZXMvMjYyMlxuXHRcdGlmICh2bm9kZS50YWcgPT09IFwiaW5wdXRcIiAmJiBhdHRycy50eXBlICE9IG51bGwpIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGF0dHJzLnR5cGUpXG5cdFx0dmFyIGlzRmlsZUlucHV0ID0gYXR0cnMgIT0gbnVsbCAmJiB2bm9kZS50YWcgPT09IFwiaW5wdXRcIiAmJiBhdHRycy50eXBlID09PSBcImZpbGVcIlxuXHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0c2V0QXR0cih2bm9kZSwga2V5LCBudWxsLCBhdHRyc1trZXldLCBucywgaXNGaWxlSW5wdXQpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldEF0dHIodm5vZGUsIGtleSwgb2xkLCB2YWx1ZSwgbnMsIGlzRmlsZUlucHV0KSB7XG5cdFx0aWYgKGtleSA9PT0gXCJrZXlcIiB8fCBrZXkgPT09IFwiaXNcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IGlzTGlmZWN5Y2xlTWV0aG9kKGtleSkgfHwgKG9sZCA9PT0gdmFsdWUgJiYgIWlzRm9ybUF0dHJpYnV0ZSh2bm9kZSwga2V5KSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IGtleSA9PT0gXCJ0eXBlXCIgJiYgdm5vZGUudGFnID09PSBcImlucHV0XCIpIHJldHVyblxuXHRcdGlmIChrZXlbMF0gPT09IFwib1wiICYmIGtleVsxXSA9PT0gXCJuXCIpIHJldHVybiB1cGRhdGVFdmVudCh2bm9kZSwga2V5LCB2YWx1ZSlcblx0XHRpZiAoa2V5LnNsaWNlKDAsIDYpID09PSBcInhsaW5rOlwiKSB2bm9kZS5kb20uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIGtleS5zbGljZSg2KSwgdmFsdWUpXG5cdFx0ZWxzZSBpZiAoa2V5ID09PSBcInN0eWxlXCIpIHVwZGF0ZVN0eWxlKHZub2RlLmRvbSwgb2xkLCB2YWx1ZSlcblx0XHRlbHNlIGlmIChoYXNQcm9wZXJ0eUtleSh2bm9kZSwga2V5LCBucykpIHtcblx0XHRcdGlmIChrZXkgPT09IFwidmFsdWVcIikge1xuXHRcdFx0XHQvLyBPbmx5IGRvIHRoZSBjb2VyY2lvbiBpZiB3ZSdyZSBhY3R1YWxseSBnb2luZyB0byBjaGVjayB0aGUgdmFsdWUuXG5cdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uICovXG5cdFx0XHRcdC8vc2V0dGluZyBpbnB1dFt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSBieSB0eXBpbmcgb24gZm9jdXNlZCBlbGVtZW50IG1vdmVzIGN1cnNvciB0byBlbmQgaW4gQ2hyb21lXG5cdFx0XHRcdC8vc2V0dGluZyBpbnB1dFt0eXBlPWZpbGVdW3ZhbHVlXSB0byBzYW1lIHZhbHVlIGNhdXNlcyBhbiBlcnJvciB0byBiZSBnZW5lcmF0ZWQgaWYgaXQncyBub24tZW1wdHlcblx0XHRcdFx0aWYgKCh2bm9kZS50YWcgPT09IFwiaW5wdXRcIiB8fCB2bm9kZS50YWcgPT09IFwidGV4dGFyZWFcIikgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBcIlwiICsgdmFsdWUgJiYgKGlzRmlsZUlucHV0IHx8IHZub2RlLmRvbSA9PT0gYWN0aXZlRWxlbWVudCgpKSkgcmV0dXJuXG5cdFx0XHRcdC8vc2V0dGluZyBzZWxlY3RbdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIgJiYgb2xkICE9PSBudWxsICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gXCJcIiArIHZhbHVlKSByZXR1cm5cblx0XHRcdFx0Ly9zZXR0aW5nIG9wdGlvblt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSB3aGlsZSBoYXZpbmcgc2VsZWN0IG9wZW4gYmxpbmtzIHNlbGVjdCBkcm9wZG93biBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJvcHRpb25cIiAmJiBvbGQgIT09IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBcIlwiICsgdmFsdWUpIHJldHVyblxuXHRcdFx0XHQvL3NldHRpbmcgaW5wdXRbdHlwZT1maWxlXVt2YWx1ZV0gdG8gZGlmZmVyZW50IHZhbHVlIGlzIGFuIGVycm9yIGlmIGl0J3Mgbm9uLWVtcHR5XG5cdFx0XHRcdC8vIE5vdCBpZGVhbCwgYnV0IGl0IGF0IGxlYXN0IHdvcmtzIGFyb3VuZCB0aGUgbW9zdCBjb21tb24gc291cmNlIG9mIHVuY2F1Z2h0IGV4Y2VwdGlvbnMgZm9yIG5vdy5cblx0XHRcdFx0aWYgKGlzRmlsZUlucHV0ICYmIFwiXCIgKyB2YWx1ZSAhPT0gXCJcIikgeyBjb25zb2xlLmVycm9yKFwiYHZhbHVlYCBpcyByZWFkLW9ubHkgb24gZmlsZSBpbnB1dHMhXCIpOyByZXR1cm4gfVxuXHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uICovXG5cdFx0XHR9XG5cdFx0XHR2bm9kZS5kb21ba2V5XSA9IHZhbHVlXG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSkgdm5vZGUuZG9tLnNldEF0dHJpYnV0ZShrZXksIFwiXCIpXG5cdFx0XHRcdGVsc2Ugdm5vZGUuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGUoa2V5ID09PSBcImNsYXNzTmFtZVwiID8gXCJjbGFzc1wiIDoga2V5LCB2YWx1ZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlQXR0cih2bm9kZSwga2V5LCBvbGQsIG5zKSB7XG5cdFx0aWYgKGtleSA9PT0gXCJrZXlcIiB8fCBrZXkgPT09IFwiaXNcIiB8fCBvbGQgPT0gbnVsbCB8fCBpc0xpZmVjeWNsZU1ldGhvZChrZXkpKSByZXR1cm5cblx0XHRpZiAoa2V5WzBdID09PSBcIm9cIiAmJiBrZXlbMV0gPT09IFwiblwiKSB1cGRhdGVFdmVudCh2bm9kZSwga2V5LCB1bmRlZmluZWQpXG5cdFx0ZWxzZSBpZiAoa2V5ID09PSBcInN0eWxlXCIpIHVwZGF0ZVN0eWxlKHZub2RlLmRvbSwgb2xkLCBudWxsKVxuXHRcdGVsc2UgaWYgKFxuXHRcdFx0aGFzUHJvcGVydHlLZXkodm5vZGUsIGtleSwgbnMpXG5cdFx0XHQmJiBrZXkgIT09IFwiY2xhc3NOYW1lXCJcblx0XHRcdCYmIGtleSAhPT0gXCJ0aXRsZVwiIC8vIGNyZWF0ZXMgXCJudWxsXCIgYXMgdGl0bGVcblx0XHRcdCYmICEoa2V5ID09PSBcInZhbHVlXCIgJiYgKFxuXHRcdFx0XHR2bm9kZS50YWcgPT09IFwib3B0aW9uXCJcblx0XHRcdFx0fHwgdm5vZGUudGFnID09PSBcInNlbGVjdFwiICYmIHZub2RlLmRvbS5zZWxlY3RlZEluZGV4ID09PSAtMSAmJiB2bm9kZS5kb20gPT09IGFjdGl2ZUVsZW1lbnQoKVxuXHRcdFx0KSlcblx0XHRcdCYmICEodm5vZGUudGFnID09PSBcImlucHV0XCIgJiYga2V5ID09PSBcInR5cGVcIilcblx0XHQpIHtcblx0XHRcdHZub2RlLmRvbVtrZXldID0gbnVsbFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbnNMYXN0SW5kZXggPSBrZXkuaW5kZXhPZihcIjpcIilcblx0XHRcdGlmIChuc0xhc3RJbmRleCAhPT0gLTEpIGtleSA9IGtleS5zbGljZShuc0xhc3RJbmRleCArIDEpXG5cdFx0XHRpZiAob2xkICE9PSBmYWxzZSkgdm5vZGUuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkgPT09IFwiY2xhc3NOYW1lXCIgPyBcImNsYXNzXCIgOiBrZXkpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldExhdGVTZWxlY3RBdHRycyh2bm9kZSwgYXR0cnMpIHtcblx0XHRpZiAoXCJ2YWx1ZVwiIGluIGF0dHJzKSB7XG5cdFx0XHRpZihhdHRycy52YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodm5vZGUuZG9tLnNlbGVjdGVkSW5kZXggIT09IC0xKSB2bm9kZS5kb20udmFsdWUgPSBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbm9ybWFsaXplZCA9IFwiXCIgKyBhdHRycy52YWx1ZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdFx0XHRcdGlmICh2bm9kZS5kb20udmFsdWUgIT09IG5vcm1hbGl6ZWQgfHwgdm5vZGUuZG9tLnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG5cdFx0XHRcdFx0dm5vZGUuZG9tLnZhbHVlID0gbm9ybWFsaXplZFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChcInNlbGVjdGVkSW5kZXhcIiBpbiBhdHRycykgc2V0QXR0cih2bm9kZSwgXCJzZWxlY3RlZEluZGV4XCIsIG51bGwsIGF0dHJzLnNlbGVjdGVkSW5kZXgsIHVuZGVmaW5lZClcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVBdHRycyh2bm9kZSwgb2xkLCBhdHRycywgbnMpIHtcblx0XHRpZiAob2xkICYmIG9sZCA9PT0gYXR0cnMpIHtcblx0XHRcdGNvbnNvbGUud2FybihcIkRvbid0IHJldXNlIGF0dHJzIG9iamVjdCwgdXNlIG5ldyBvYmplY3QgZm9yIGV2ZXJ5IHJlZHJhdywgdGhpcyB3aWxsIHRocm93IGluIG5leHQgbWFqb3JcIilcblx0XHR9XG5cdFx0aWYgKGF0dHJzICE9IG51bGwpIHtcblx0XHRcdC8vIElmIHlvdSBhc3NpZ24gYW4gaW5wdXQgdHlwZSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUgMTEgd2l0aCBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24sIGFuIGVycm9yIHdpbGwgb2NjdXIuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gQWxzbywgdGhlIERPTSBkb2VzIHRoaW5ncyB0byBpbnB1dHMgYmFzZWQgb24gdGhlIHZhbHVlLCBzbyBpdCBuZWVkcyBzZXQgZmlyc3QuXG5cdFx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaXRocmlsSlMvbWl0aHJpbC5qcy9pc3N1ZXMvMjYyMlxuXHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiICYmIGF0dHJzLnR5cGUgIT0gbnVsbCkgdm5vZGUuZG9tLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgYXR0cnMudHlwZSlcblx0XHRcdHZhciBpc0ZpbGVJbnB1dCA9IHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiICYmIGF0dHJzLnR5cGUgPT09IFwiZmlsZVwiXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdFx0c2V0QXR0cih2bm9kZSwga2V5LCBvbGQgJiYgb2xkW2tleV0sIGF0dHJzW2tleV0sIG5zLCBpc0ZpbGVJbnB1dClcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIHZhbFxuXHRcdGlmIChvbGQgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG9sZCkge1xuXHRcdFx0XHRpZiAoKCh2YWwgPSBvbGRba2V5XSkgIT0gbnVsbCkgJiYgKGF0dHJzID09IG51bGwgfHwgYXR0cnNba2V5XSA9PSBudWxsKSkge1xuXHRcdFx0XHRcdHJlbW92ZUF0dHIodm5vZGUsIGtleSwgdmFsLCBucylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpc0Zvcm1BdHRyaWJ1dGUodm5vZGUsIGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJ2YWx1ZVwiIHx8IGF0dHIgPT09IFwiY2hlY2tlZFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRJbmRleFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRcIiAmJiB2bm9kZS5kb20gPT09IGFjdGl2ZUVsZW1lbnQoKSB8fCB2bm9kZS50YWcgPT09IFwib3B0aW9uXCIgJiYgdm5vZGUuZG9tLnBhcmVudE5vZGUgPT09ICRkb2MuYWN0aXZlRWxlbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGlzTGlmZWN5Y2xlTWV0aG9kKGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJvbmluaXRcIiB8fCBhdHRyID09PSBcIm9uY3JlYXRlXCIgfHwgYXR0ciA9PT0gXCJvbnVwZGF0ZVwiIHx8IGF0dHIgPT09IFwib25yZW1vdmVcIiB8fCBhdHRyID09PSBcIm9uYmVmb3JlcmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXVwZGF0ZVwiXG5cdH1cblx0ZnVuY3Rpb24gaGFzUHJvcGVydHlLZXkodm5vZGUsIGtleSwgbnMpIHtcblx0XHQvLyBGaWx0ZXIgb3V0IG5hbWVzcGFjZWQga2V5c1xuXHRcdHJldHVybiBucyA9PT0gdW5kZWZpbmVkICYmIChcblx0XHRcdC8vIElmIGl0J3MgYSBjdXN0b20gZWxlbWVudCwganVzdCBrZWVwIGl0LlxuXHRcdFx0dm5vZGUudGFnLmluZGV4T2YoXCItXCIpID4gLTEgfHwgdm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB2bm9kZS5hdHRycy5pcyB8fFxuXHRcdFx0Ly8gSWYgaXQncyBhIG5vcm1hbCBlbGVtZW50LCBsZXQncyB0cnkgdG8gYXZvaWQgYSBmZXcgYnJvd3NlciBidWdzLlxuXHRcdFx0a2V5ICE9PSBcImhyZWZcIiAmJiBrZXkgIT09IFwibGlzdFwiICYmIGtleSAhPT0gXCJmb3JtXCIgJiYga2V5ICE9PSBcIndpZHRoXCIgJiYga2V5ICE9PSBcImhlaWdodFwiLy8gJiYga2V5ICE9PSBcInR5cGVcIlxuXHRcdFx0Ly8gRGVmZXIgdGhlIHByb3BlcnR5IGNoZWNrIHVudGlsICphZnRlciogd2UgY2hlY2sgZXZlcnl0aGluZy5cblx0XHQpICYmIGtleSBpbiB2bm9kZS5kb21cblx0fVxuXG5cdC8vc3R5bGVcblx0dmFyIHVwcGVyY2FzZVJlZ2V4ID0gL1tBLVpdL2dcblx0ZnVuY3Rpb24gdG9Mb3dlckNhc2UoY2FwaXRhbCkgeyByZXR1cm4gXCItXCIgKyBjYXBpdGFsLnRvTG93ZXJDYXNlKCkgfVxuXHRmdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG5cdFx0cmV0dXJuIGtleVswXSA9PT0gXCItXCIgJiYga2V5WzFdID09PSBcIi1cIiA/IGtleSA6XG5cdFx0XHRrZXkgPT09IFwiY3NzRmxvYXRcIiA/IFwiZmxvYXRcIiA6XG5cdFx0XHRcdGtleS5yZXBsYWNlKHVwcGVyY2FzZVJlZ2V4LCB0b0xvd2VyQ2FzZSlcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVTdHlsZShlbGVtZW50LCBvbGQsIHN0eWxlKSB7XG5cdFx0aWYgKG9sZCA9PT0gc3R5bGUpIHtcblx0XHRcdC8vIFN0eWxlcyBhcmUgZXF1aXZhbGVudCwgZG8gbm90aGluZy5cblx0XHR9IGVsc2UgaWYgKHN0eWxlID09IG51bGwpIHtcblx0XHRcdC8vIE5ldyBzdHlsZSBpcyBtaXNzaW5nLCBqdXN0IGNsZWFyIGl0LlxuXHRcdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHN0eWxlICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHQvLyBOZXcgc3R5bGUgaXMgYSBzdHJpbmcsIGxldCBlbmdpbmUgZGVhbCB3aXRoIHBhdGNoaW5nLlxuXHRcdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcblx0XHR9IGVsc2UgaWYgKG9sZCA9PSBudWxsIHx8IHR5cGVvZiBvbGQgIT09IFwib2JqZWN0XCIpIHtcblx0XHRcdC8vIGBvbGRgIGlzIG1pc3Npbmcgb3IgYSBzdHJpbmcsIGBzdHlsZWAgaXMgYW4gb2JqZWN0LlxuXHRcdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdFx0Ly8gQWRkIG5ldyBzdHlsZSBwcm9wZXJ0aWVzXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gc3R5bGVba2V5XVxuXHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCkgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShub3JtYWxpemVLZXkoa2V5KSwgU3RyaW5nKHZhbHVlKSlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQm90aCBvbGQgJiBuZXcgYXJlIChkaWZmZXJlbnQpIG9iamVjdHMuXG5cdFx0XHQvLyBVcGRhdGUgc3R5bGUgcHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZFxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHN0eWxlW2tleV1cblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwgJiYgKHZhbHVlID0gU3RyaW5nKHZhbHVlKSkgIT09IFN0cmluZyhvbGRba2V5XSkpIHtcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KG5vcm1hbGl6ZUtleShrZXkpLCB2YWx1ZSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIHN0eWxlIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3Rcblx0XHRcdGZvciAodmFyIGtleSBpbiBvbGQpIHtcblx0XHRcdFx0aWYgKG9sZFtrZXldICE9IG51bGwgJiYgc3R5bGVba2V5XSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShub3JtYWxpemVLZXkoa2V5KSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEhlcmUncyBhbiBleHBsYW5hdGlvbiBvZiBob3cgdGhpcyB3b3Jrczpcblx0Ly8gMS4gVGhlIGV2ZW50IG5hbWVzIGFyZSBhbHdheXMgKGJ5IGRlc2lnbikgcHJlZml4ZWQgYnkgYG9uYC5cblx0Ly8gMi4gVGhlIEV2ZW50TGlzdGVuZXIgaW50ZXJmYWNlIGFjY2VwdHMgZWl0aGVyIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0XG5cdC8vICAgIHdpdGggYSBgaGFuZGxlRXZlbnRgIG1ldGhvZC5cblx0Ly8gMy4gVGhlIG9iamVjdCBkb2VzIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLCB0byBhdm9pZFxuXHQvLyAgICBhbnkgcG90ZW50aWFsIGludGVyZmVyZW5jZSB3aXRoIHRoYXQgKGUuZy4gc2V0dGVycykuXG5cdC8vIDQuIFRoZSBldmVudCBuYW1lIGlzIHJlbWFwcGVkIHRvIHRoZSBoYW5kbGVyIGJlZm9yZSBjYWxsaW5nIGl0LlxuXHQvLyA1LiBJbiBmdW5jdGlvbi1iYXNlZCBldmVudCBoYW5kbGVycywgYGV2LnRhcmdldCA9PT0gdGhpc2AuIFdlIHJlcGxpY2F0ZVxuXHQvLyAgICB0aGF0IGJlbG93LlxuXHQvLyA2LiBJbiBmdW5jdGlvbi1iYXNlZCBldmVudCBoYW5kbGVycywgYHJldHVybiBmYWxzZWAgcHJldmVudHMgdGhlIGRlZmF1bHRcblx0Ly8gICAgYWN0aW9uIGFuZCBzdG9wcyBldmVudCBwcm9wYWdhdGlvbi4gV2UgcmVwbGljYXRlIHRoYXQgYmVsb3cuXG5cdGZ1bmN0aW9uIEV2ZW50RGljdCgpIHtcblx0XHQvLyBTYXZlIHRoaXMsIHNvIHRoZSBjdXJyZW50IHJlZHJhdyBpcyBjb3JyZWN0bHkgdHJhY2tlZC5cblx0XHR0aGlzLl8gPSBjdXJyZW50UmVkcmF3XG5cdH1cblx0RXZlbnREaWN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0RXZlbnREaWN0LnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldikge1xuXHRcdHZhciBoYW5kbGVyID0gdGhpc1tcIm9uXCIgKyBldi50eXBlXVxuXHRcdHZhciByZXN1bHRcblx0XHRpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikgcmVzdWx0ID0gaGFuZGxlci5jYWxsKGV2LmN1cnJlbnRUYXJnZXQsIGV2KVxuXHRcdGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyLmhhbmRsZUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIGhhbmRsZXIuaGFuZGxlRXZlbnQoZXYpXG5cdFx0aWYgKHRoaXMuXyAmJiBldi5yZWRyYXcgIT09IGZhbHNlKSAoMCwgdGhpcy5fKSgpXG5cdFx0aWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcblx0XHRcdGV2LnByZXZlbnREZWZhdWx0KClcblx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0fVxuXHR9XG5cblx0Ly9ldmVudFxuXHRmdW5jdGlvbiB1cGRhdGVFdmVudCh2bm9kZSwga2V5LCB2YWx1ZSkge1xuXHRcdGlmICh2bm9kZS5ldmVudHMgIT0gbnVsbCkge1xuXHRcdFx0dm5vZGUuZXZlbnRzLl8gPSBjdXJyZW50UmVkcmF3XG5cdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleV0gPT09IHZhbHVlKSByZXR1cm5cblx0XHRcdGlmICh2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5XSA9PSBudWxsKSB2bm9kZS5kb20uYWRkRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMiksIHZub2RlLmV2ZW50cywgZmFsc2UpXG5cdFx0XHRcdHZub2RlLmV2ZW50c1trZXldID0gdmFsdWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5XSAhPSBudWxsKSB2bm9kZS5kb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMiksIHZub2RlLmV2ZW50cywgZmFsc2UpXG5cdFx0XHRcdHZub2RlLmV2ZW50c1trZXldID0gdW5kZWZpbmVkXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpKSB7XG5cdFx0XHR2bm9kZS5ldmVudHMgPSBuZXcgRXZlbnREaWN0KClcblx0XHRcdHZub2RlLmRvbS5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdHZub2RlLmV2ZW50c1trZXldID0gdmFsdWVcblx0XHR9XG5cdH1cblxuXHQvL2xpZmVjeWNsZVxuXHRmdW5jdGlvbiBpbml0TGlmZWN5Y2xlKHNvdXJjZSwgdm5vZGUsIGhvb2tzKSB7XG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub25pbml0ID09PSBcImZ1bmN0aW9uXCIpIGNhbGxIb29rLmNhbGwoc291cmNlLm9uaW5pdCwgdm5vZGUpXG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub25jcmVhdGUgPT09IFwiZnVuY3Rpb25cIikgaG9va3MucHVzaChjYWxsSG9vay5iaW5kKHNvdXJjZS5vbmNyZWF0ZSwgdm5vZGUpKVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUxpZmVjeWNsZShzb3VyY2UsIHZub2RlLCBob29rcykge1xuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9udXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIGhvb2tzLnB1c2goY2FsbEhvb2suYmluZChzb3VyY2Uub251cGRhdGUsIHZub2RlKSlcblx0fVxuXHRmdW5jdGlvbiBzaG91bGROb3RVcGRhdGUodm5vZGUsIG9sZCkge1xuXHRcdGRvIHtcblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbmJlZm9yZXVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHZhciBmb3JjZSA9IGNhbGxIb29rLmNhbGwodm5vZGUuYXR0cnMub25iZWZvcmV1cGRhdGUsIHZub2RlLCBvbGQpXG5cdFx0XHRcdGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkICYmICFmb3JjZSkgYnJlYWtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5zdGF0ZS5vbmJlZm9yZXVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHZhciBmb3JjZSA9IGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUub25iZWZvcmV1cGRhdGUsIHZub2RlLCBvbGQpXG5cdFx0XHRcdGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkICYmICFmb3JjZSkgYnJlYWtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdH0gd2hpbGUgKGZhbHNlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cblx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBvbGQuaW5zdGFuY2Vcblx0XHQvLyBPbmUgd291bGQgdGhpbmsgaGF2aW5nIHRoZSBhY3R1YWwgbGF0ZXN0IGF0dHJpYnV0ZXMgd291bGQgYmUgaWRlYWwsXG5cdFx0Ly8gYnV0IGl0IGRvZXNuJ3QgbGV0IHVzIHByb3Blcmx5IGRpZmYgYmFzZWQgb24gb3VyIGN1cnJlbnQgaW50ZXJuYWxcblx0XHQvLyByZXByZXNlbnRhdGlvbi4gV2UgaGF2ZSB0byBzYXZlIG5vdCBvbmx5IHRoZSBvbGQgRE9NIGluZm8sIGJ1dCBhbHNvXG5cdFx0Ly8gdGhlIGF0dHJpYnV0ZXMgdXNlZCB0byBjcmVhdGUgaXQsIGFzIHdlIGRpZmYgKnRoYXQqLCBub3QgYWdhaW5zdCB0aGVcblx0XHQvLyBET00gZGlyZWN0bHkgKHdpdGggYSBmZXcgZXhjZXB0aW9ucyBpbiBgc2V0QXR0cmApLiBBbmQsIG9mIGNvdXJzZSwgd2Vcblx0XHQvLyBuZWVkIHRvIHNhdmUgdGhlIGNoaWxkcmVuIGFuZCB0ZXh0IGFzIHRoZXkgYXJlIGNvbmNlcHR1YWxseSBub3Rcblx0XHQvLyB1bmxpa2Ugc3BlY2lhbCBcImF0dHJpYnV0ZXNcIiBpbnRlcm5hbGx5LlxuXHRcdHZub2RlLmF0dHJzID0gb2xkLmF0dHJzXG5cdFx0dm5vZGUuY2hpbGRyZW4gPSBvbGQuY2hpbGRyZW5cblx0XHR2bm9kZS50ZXh0ID0gb2xkLnRleHRcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG5cblx0dmFyIGN1cnJlbnRET01cblxuXHRyZXR1cm4gZnVuY3Rpb24oZG9tLCB2bm9kZXMsIHJlZHJhdykge1xuXHRcdGlmICghZG9tKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRE9NIGVsZW1lbnQgYmVpbmcgcmVuZGVyZWQgdG8gZG9lcyBub3QgZXhpc3QuXCIpXG5cdFx0aWYgKGN1cnJlbnRET00gIT0gbnVsbCAmJiBkb20uY29udGFpbnMoY3VycmVudERPTSkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJOb2RlIGlzIGN1cnJlbnRseSBiZWluZyByZW5kZXJlZCB0byBhbmQgdGh1cyBpcyBsb2NrZWQuXCIpXG5cdFx0fVxuXHRcdHZhciBwcmV2UmVkcmF3ID0gY3VycmVudFJlZHJhd1xuXHRcdHZhciBwcmV2RE9NID0gY3VycmVudERPTVxuXHRcdHZhciBob29rcyA9IFtdXG5cdFx0dmFyIGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnQoKVxuXHRcdHZhciBuYW1lc3BhY2UgPSBkb20ubmFtZXNwYWNlVVJJXG5cblx0XHRjdXJyZW50RE9NID0gZG9tXG5cdFx0Y3VycmVudFJlZHJhdyA9IHR5cGVvZiByZWRyYXcgPT09IFwiZnVuY3Rpb25cIiA/IHJlZHJhdyA6IHVuZGVmaW5lZFxuXHRcdHRyeSB7XG5cdFx0XHQvLyBGaXJzdCB0aW1lIHJlbmRlcmluZyBpbnRvIGEgbm9kZSBjbGVhcnMgaXQgb3V0XG5cdFx0XHRpZiAoZG9tLnZub2RlcyA9PSBudWxsKSBkb20udGV4dENvbnRlbnQgPSBcIlwiXG5cdFx0XHR2bm9kZXMgPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihBcnJheS5pc0FycmF5KHZub2RlcykgPyB2bm9kZXMgOiBbdm5vZGVzXSlcblx0XHRcdHVwZGF0ZU5vZGVzKGRvbSwgZG9tLnZub2Rlcywgdm5vZGVzLCBob29rcywgbnVsbCwgbmFtZXNwYWNlID09PSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiA/IHVuZGVmaW5lZCA6IG5hbWVzcGFjZSlcblx0XHRcdGRvbS52bm9kZXMgPSB2bm9kZXNcblx0XHRcdC8vIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBjYW4gcmV0dXJuIG51bGw6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjZG9tLWRvY3VtZW50LWFjdGl2ZWVsZW1lbnRcblx0XHRcdGlmIChhY3RpdmUgIT0gbnVsbCAmJiBhY3RpdmVFbGVtZW50KCkgIT09IGFjdGl2ZSAmJiB0eXBlb2YgYWN0aXZlLmZvY3VzID09PSBcImZ1bmN0aW9uXCIpIGFjdGl2ZS5mb2N1cygpXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSBob29rc1tpXSgpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGN1cnJlbnRSZWRyYXcgPSBwcmV2UmVkcmF3XG5cdFx0XHRjdXJyZW50RE9NID0gcHJldkRPTVxuXHRcdH1cblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGh0bWwpIHtcblx0aWYgKGh0bWwgPT0gbnVsbCkgaHRtbCA9IFwiXCJcblx0cmV0dXJuIFZub2RlKFwiPFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaHRtbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiBWbm9kZSh0YWcsIGtleSwgYXR0cnMsIGNoaWxkcmVuLCB0ZXh0LCBkb20pIHtcblx0cmV0dXJuIHt0YWc6IHRhZywga2V5OiBrZXksIGF0dHJzOiBhdHRycywgY2hpbGRyZW46IGNoaWxkcmVuLCB0ZXh0OiB0ZXh0LCBkb206IGRvbSwgZG9tU2l6ZTogdW5kZWZpbmVkLCBzdGF0ZTogdW5kZWZpbmVkLCBldmVudHM6IHVuZGVmaW5lZCwgaW5zdGFuY2U6IHVuZGVmaW5lZH1cbn1cblZub2RlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHJldHVybiBWbm9kZShcIltcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKG5vZGUpLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcblx0aWYgKG5vZGUgPT0gbnVsbCB8fCB0eXBlb2Ygbm9kZSA9PT0gXCJib29sZWFuXCIpIHJldHVybiBudWxsXG5cdGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIG5vZGVcblx0cmV0dXJuIFZub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKG5vZGUpLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbn1cblZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0dmFyIGNoaWxkcmVuID0gW11cblx0aWYgKGlucHV0Lmxlbmd0aCkge1xuXHRcdHZhciBpc0tleWVkID0gaW5wdXRbMF0gIT0gbnVsbCAmJiBpbnB1dFswXS5rZXkgIT0gbnVsbFxuXHRcdC8vIE5vdGU6IHRoaXMgaXMgYSAqdmVyeSogcGVyZi1zZW5zaXRpdmUgY2hlY2suXG5cdFx0Ly8gRnVuIGZhY3Q6IG1lcmdpbmcgdGhlIGxvb3AgbGlrZSB0aGlzIGlzIHNvbWVob3cgZmFzdGVyIHRoYW4gc3BsaXR0aW5nXG5cdFx0Ly8gaXQsIG5vdGljZWFibHkgc28uXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKChpbnB1dFtpXSAhPSBudWxsICYmIGlucHV0W2ldLmtleSAhPSBudWxsKSAhPT0gaXNLZXllZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0XHRcdGlzS2V5ZWQgJiYgKGlucHV0W2ldICE9IG51bGwgfHwgdHlwZW9mIGlucHV0W2ldID09PSBcImJvb2xlYW5cIilcblx0XHRcdFx0XHRcdD8gXCJJbiBmcmFnbWVudHMsIHZub2RlcyBtdXN0IGVpdGhlciBhbGwgaGF2ZSBrZXlzIG9yIG5vbmUgaGF2ZSBrZXlzLiBZb3UgbWF5IHdpc2ggdG8gY29uc2lkZXIgdXNpbmcgYW4gZXhwbGljaXQga2V5ZWQgZW1wdHkgZnJhZ21lbnQsIG0uZnJhZ21lbnQoe2tleTogLi4ufSksIGluc3RlYWQgb2YgYSBob2xlLlwiXG5cdFx0XHRcdFx0XHQ6IFwiSW4gZnJhZ21lbnRzLCB2bm9kZXMgbXVzdCBlaXRoZXIgYWxsIGhhdmUga2V5cyBvciBub25lIGhhdmUga2V5cy5cIlxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoaWxkcmVuW2ldID0gVm5vZGUubm9ybWFsaXplKGlucHV0W2ldKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hpbGRyZW5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWbm9kZVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFByb21pc2VQb2x5ZmlsbCA9IHJlcXVpcmUoXCIuL3Byb21pc2UvcHJvbWlzZVwiKVxudmFyIG1vdW50UmVkcmF3ID0gcmVxdWlyZShcIi4vbW91bnQtcmVkcmF3XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcmVxdWVzdC9yZXF1ZXN0XCIpKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBudWxsLCBQcm9taXNlUG9seWZpbGwsIG1vdW50UmVkcmF3LnJlZHJhdylcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBidWlsZFBhdGhuYW1lID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL2J1aWxkXCIpXG52YXIgaGFzT3duID0gcmVxdWlyZShcIi4uL3V0aWwvaGFzT3duXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHdpbmRvdywgUHJvbWlzZSwgb25jb21wbGV0aW9uKSB7XG5cdHZhciBjYWxsYmFja0NvdW50ID0gMFxuXG5cdGZ1bmN0aW9uIFByb21pc2VQcm94eShleGVjdXRvcikge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcilcblx0fVxuXG5cdC8vIEluIGNhc2UgdGhlIGdsb2JhbCBQcm9taXNlIGlzIHNvbWUgdXNlcmxhbmQgbGlicmFyeSdzIHdoZXJlIHRoZXkgcmVseSBvblxuXHQvLyBgZm9vIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvcmAsIGB0aGlzLmNvbnN0cnVjdG9yLnJlc29sdmUodmFsdWUpYCwgb3Jcblx0Ly8gc2ltaWxhci4gTGV0J3MgKm5vdCogYnJlYWsgdGhlbS5cblx0UHJvbWlzZVByb3h5LnByb3RvdHlwZSA9IFByb21pc2UucHJvdG90eXBlXG5cdFByb21pc2VQcm94eS5fX3Byb3RvX18gPSBQcm9taXNlIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxuXHRmdW5jdGlvbiBtYWtlUmVxdWVzdChmYWN0b3J5KSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKHVybCwgYXJncykge1xuXHRcdFx0aWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHsgYXJncyA9IHVybDsgdXJsID0gdXJsLnVybCB9XG5cdFx0XHRlbHNlIGlmIChhcmdzID09IG51bGwpIGFyZ3MgPSB7fVxuXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdFx0ZmFjdG9yeShidWlsZFBhdGhuYW1lKHVybCwgYXJncy5wYXJhbXMpLCBhcmdzLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgYXJncy50eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdGRhdGFbaV0gPSBuZXcgYXJncy50eXBlKGRhdGFbaV0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgZGF0YSA9IG5ldyBhcmdzLnR5cGUoZGF0YSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzb2x2ZShkYXRhKVxuXHRcdFx0XHR9LCByZWplY3QpXG5cdFx0XHR9KVxuXHRcdFx0aWYgKGFyZ3MuYmFja2dyb3VuZCA9PT0gdHJ1ZSkgcmV0dXJuIHByb21pc2Vcblx0XHRcdHZhciBjb3VudCA9IDBcblx0XHRcdGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHRcdFx0XHRpZiAoLS1jb3VudCA9PT0gMCAmJiB0eXBlb2Ygb25jb21wbGV0aW9uID09PSBcImZ1bmN0aW9uXCIpIG9uY29tcGxldGlvbigpXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB3cmFwKHByb21pc2UpXG5cblx0XHRcdGZ1bmN0aW9uIHdyYXAocHJvbWlzZSkge1xuXHRcdFx0XHR2YXIgdGhlbiA9IHByb21pc2UudGhlblxuXHRcdFx0XHQvLyBTZXQgdGhlIGNvbnN0cnVjdG9yLCBzbyBlbmdpbmVzIGtub3cgdG8gbm90IGF3YWl0IG9yIHJlc29sdmVcblx0XHRcdFx0Ly8gdGhpcyBhcyBhIG5hdGl2ZSBwcm9taXNlLiBBdCB0aGUgdGltZSBvZiB3cml0aW5nLCB0aGlzIGlzXG5cdFx0XHRcdC8vIG9ubHkgbmVjZXNzYXJ5IGZvciBWOCwgYnV0IHRoZWlyIGJlaGF2aW9yIGlzIHRoZSBjb3JyZWN0XG5cdFx0XHRcdC8vIGJlaGF2aW9yIHBlciBzcGVjLiBTZWUgdGhpcyBzcGVjIGlzc3VlIGZvciBtb3JlIGRldGFpbHM6XG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L2VjbWEyNjIvaXNzdWVzLzE1NzcuIEFsc28sIHNlZSB0aGVcblx0XHRcdFx0Ly8gY29ycmVzcG9uZGluZyBjb21tZW50IGluIGByZXF1ZXN0L3Rlc3RzL3Rlc3QtcmVxdWVzdC5qc2AgZm9yXG5cdFx0XHRcdC8vIGEgYml0IG1vcmUgYmFja2dyb3VuZCBvbiB0aGUgaXNzdWUgYXQgaGFuZC5cblx0XHRcdFx0cHJvbWlzZS5jb25zdHJ1Y3RvciA9IFByb21pc2VQcm94eVxuXHRcdFx0XHRwcm9taXNlLnRoZW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb3VudCsrXG5cdFx0XHRcdFx0dmFyIG5leHQgPSB0aGVuLmFwcGx5KHByb21pc2UsIGFyZ3VtZW50cylcblx0XHRcdFx0XHRuZXh0LnRoZW4oY29tcGxldGUsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGNvbXBsZXRlKClcblx0XHRcdFx0XHRcdGlmIChjb3VudCA9PT0gMCkgdGhyb3cgZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmV0dXJuIHdyYXAobmV4dClcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhhc0hlYWRlcihhcmdzLCBuYW1lKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIGFyZ3MuaGVhZGVycykge1xuXHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZ3MuaGVhZGVycywga2V5KSAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHJlcXVlc3Q6IG1ha2VSZXF1ZXN0KGZ1bmN0aW9uKHVybCwgYXJncywgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgbWV0aG9kID0gYXJncy5tZXRob2QgIT0gbnVsbCA/IGFyZ3MubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiBcIkdFVFwiXG5cdFx0XHR2YXIgYm9keSA9IGFyZ3MuYm9keVxuXHRcdFx0dmFyIGFzc3VtZUpTT04gPSAoYXJncy5zZXJpYWxpemUgPT0gbnVsbCB8fCBhcmdzLnNlcmlhbGl6ZSA9PT0gSlNPTi5zZXJpYWxpemUpICYmICEoYm9keSBpbnN0YW5jZW9mICR3aW5kb3cuRm9ybURhdGEgfHwgYm9keSBpbnN0YW5jZW9mICR3aW5kb3cuVVJMU2VhcmNoUGFyYW1zKVxuXHRcdFx0dmFyIHJlc3BvbnNlVHlwZSA9IGFyZ3MucmVzcG9uc2VUeXBlIHx8ICh0eXBlb2YgYXJncy5leHRyYWN0ID09PSBcImZ1bmN0aW9uXCIgPyBcIlwiIDogXCJqc29uXCIpXG5cblx0XHRcdHZhciB4aHIgPSBuZXcgJHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpLCBhYm9ydGVkID0gZmFsc2UsIGlzVGltZW91dCA9IGZhbHNlXG5cdFx0XHR2YXIgb3JpZ2luYWwgPSB4aHIsIHJlcGxhY2VkQWJvcnRcblx0XHRcdHZhciBhYm9ydCA9IHhoci5hYm9ydFxuXG5cdFx0XHR4aHIuYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0YWJvcnRlZCA9IHRydWVcblx0XHRcdFx0YWJvcnQuY2FsbCh0aGlzKVxuXHRcdFx0fVxuXG5cdFx0XHR4aHIub3BlbihtZXRob2QsIHVybCwgYXJncy5hc3luYyAhPT0gZmFsc2UsIHR5cGVvZiBhcmdzLnVzZXIgPT09IFwic3RyaW5nXCIgPyBhcmdzLnVzZXIgOiB1bmRlZmluZWQsIHR5cGVvZiBhcmdzLnBhc3N3b3JkID09PSBcInN0cmluZ1wiID8gYXJncy5wYXNzd29yZCA6IHVuZGVmaW5lZClcblxuXHRcdFx0aWYgKGFzc3VtZUpTT04gJiYgYm9keSAhPSBudWxsICYmICFoYXNIZWFkZXIoYXJncywgXCJjb250ZW50LXR5cGVcIikpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuZGVzZXJpYWxpemUgIT09IFwiZnVuY3Rpb25cIiAmJiAhaGFzSGVhZGVyKGFyZ3MsIFwiYWNjZXB0XCIpKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC8qXCIpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy53aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSBhcmdzLndpdGhDcmVkZW50aWFsc1xuXHRcdFx0aWYgKGFyZ3MudGltZW91dCkgeGhyLnRpbWVvdXQgPSBhcmdzLnRpbWVvdXRcblx0XHRcdHhoci5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGVcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3MuaGVhZGVycykge1xuXHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJncy5oZWFkZXJzLCBrZXkpKSB7XG5cdFx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBhcmdzLmhlYWRlcnNba2V5XSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oZXYpIHtcblx0XHRcdFx0Ly8gRG9uJ3QgdGhyb3cgZXJyb3JzIG9uIHhoci5hYm9ydCgpLlxuXHRcdFx0XHRpZiAoYWJvcnRlZCkgcmV0dXJuXG5cblx0XHRcdFx0aWYgKGV2LnRhcmdldC5yZWFkeVN0YXRlID09PSA0KSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHZhciBzdWNjZXNzID0gKGV2LnRhcmdldC5zdGF0dXMgPj0gMjAwICYmIGV2LnRhcmdldC5zdGF0dXMgPCAzMDApIHx8IGV2LnRhcmdldC5zdGF0dXMgPT09IDMwNCB8fCAoL15maWxlOlxcL1xcLy9pKS50ZXN0KHVybClcblx0XHRcdFx0XHRcdC8vIFdoZW4gdGhlIHJlc3BvbnNlIHR5cGUgaXNuJ3QgXCJcIiBvciBcInRleHRcIixcblx0XHRcdFx0XHRcdC8vIGB4aHIucmVzcG9uc2VUZXh0YCBpcyB0aGUgd3JvbmcgdGhpbmcgdG8gdXNlLlxuXHRcdFx0XHRcdFx0Ly8gQnJvd3NlcnMgZG8gdGhlIHJpZ2h0IHRoaW5nIGFuZCB0aHJvdyBoZXJlLCBhbmQgd2Vcblx0XHRcdFx0XHRcdC8vIHNob3VsZCBob25vciB0aGF0IGFuZCBkbyB0aGUgcmlnaHQgdGhpbmcgYnlcblx0XHRcdFx0XHRcdC8vIHByZWZlcnJpbmcgYHhoci5yZXNwb25zZWAgd2hlcmUgcG9zc2libGUvcHJhY3RpY2FsLlxuXHRcdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0gZXYudGFyZ2V0LnJlc3BvbnNlLCBtZXNzYWdlXG5cblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZVR5cGUgPT09IFwianNvblwiKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEZvciBJRSBhbmQgRWRnZSwgd2hpY2ggZG9uJ3QgaW1wbGVtZW50XG5cdFx0XHRcdFx0XHRcdC8vIGByZXNwb25zZVR5cGU6IFwianNvblwiYC5cblx0XHRcdFx0XHRcdFx0aWYgKCFldi50YXJnZXQucmVzcG9uc2VUeXBlICYmIHR5cGVvZiBhcmdzLmV4dHJhY3QgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBuby1jb250ZW50IHdoaWNoIHdpbGwgbm90IHBhcnNlLlxuXHRcdFx0XHRcdFx0XHRcdHRyeSB7IHJlc3BvbnNlID0gSlNPTi5wYXJzZShldi50YXJnZXQucmVzcG9uc2VUZXh0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Y2F0Y2ggKGUpIHsgcmVzcG9uc2UgPSBudWxsIH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICghcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcblx0XHRcdFx0XHRcdFx0Ly8gT25seSB1c2UgdGhpcyBkZWZhdWx0IGlmIGl0J3MgdGV4dC4gSWYgYSBwYXJzZWRcblx0XHRcdFx0XHRcdFx0Ly8gZG9jdW1lbnQgaXMgbmVlZGVkIG9uIG9sZCBJRSBhbmQgZnJpZW5kcyAoYWxsXG5cdFx0XHRcdFx0XHRcdC8vIHVuc3VwcG9ydGVkKSwgdGhlIHVzZXIgc2hvdWxkIHVzZSBhIGN1c3RvbVxuXHRcdFx0XHRcdFx0XHQvLyBgY29uZmlnYCBpbnN0ZWFkLiBUaGV5J3JlIGFscmVhZHkgdXNpbmcgdGhpcyBhdFxuXHRcdFx0XHRcdFx0XHQvLyB0aGVpciBvd24gcmlzay5cblx0XHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlID09IG51bGwpIHJlc3BvbnNlID0gZXYudGFyZ2V0LnJlc3BvbnNlVGV4dFxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGFyZ3MuZXh0cmFjdCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gYXJncy5leHRyYWN0KGV2LnRhcmdldCwgYXJncylcblx0XHRcdFx0XHRcdFx0c3VjY2VzcyA9IHRydWVcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZ3MuZGVzZXJpYWxpemUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IGFyZ3MuZGVzZXJpYWxpemUocmVzcG9uc2UpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoc3VjY2VzcykgcmVzb2x2ZShyZXNwb25zZSlcblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgY29tcGxldGVFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJ5IHsgbWVzc2FnZSA9IGV2LnRhcmdldC5yZXNwb25zZVRleHQgfVxuXHRcdFx0XHRcdFx0XHRcdGNhdGNoIChlKSB7IG1lc3NhZ2UgPSByZXNwb25zZSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IuY29kZSA9IGV2LnRhcmdldC5zdGF0dXNcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlXG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBVc2Ugc2V0VGltZW91dCB0byBwdXNoIHRoaXMgY29kZSBibG9jayBvbnRvIHRoZSBldmVudCBxdWV1ZVxuXHRcdFx0XHRcdFx0XHRcdC8vIFRoaXMgYWxsb3dzIGB4aHIub250aW1lb3V0YCB0byBydW4gaW4gdGhlIGNhc2UgdGhhdCB0aGVyZSBpcyBhIHRpbWVvdXRcblx0XHRcdFx0XHRcdFx0XHQvLyBXaXRob3V0IHRoaXMgc2V0VGltZW91dCwgYHhoci5vbnRpbWVvdXRgIGRvZXNuJ3QgaGF2ZSBhIGNoYW5jZSB0byByZWplY3Rcblx0XHRcdFx0XHRcdFx0XHQvLyBhcyBgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZWAgd2lsbCBydW4gYmVmb3JlIGl0XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpc1RpbWVvdXQpIHJldHVyblxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGVFcnJvclJlc3BvbnNlKClcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgY29tcGxldGVFcnJvclJlc3BvbnNlKClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHJlamVjdChlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKGV2KSB7XG5cdFx0XHRcdGlzVGltZW91dCA9IHRydWVcblx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKFwiUmVxdWVzdCB0aW1lZCBvdXRcIilcblx0XHRcdFx0ZXJyb3IuY29kZSA9IGV2LnRhcmdldC5zdGF0dXNcblx0XHRcdFx0cmVqZWN0KGVycm9yKVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuY29uZmlnID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0eGhyID0gYXJncy5jb25maWcoeGhyLCBhcmdzLCB1cmwpIHx8IHhoclxuXG5cdFx0XHRcdC8vIFByb3BhZ2F0ZSB0aGUgYGFib3J0YCB0byBhbnkgcmVwbGFjZW1lbnQgWEhSIGFzIHdlbGwuXG5cdFx0XHRcdGlmICh4aHIgIT09IG9yaWdpbmFsKSB7XG5cdFx0XHRcdFx0cmVwbGFjZWRBYm9ydCA9IHhoci5hYm9ydFxuXHRcdFx0XHRcdHhoci5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YWJvcnRlZCA9IHRydWVcblx0XHRcdFx0XHRcdHJlcGxhY2VkQWJvcnQuY2FsbCh0aGlzKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYm9keSA9PSBudWxsKSB4aHIuc2VuZCgpXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJncy5zZXJpYWxpemUgPT09IFwiZnVuY3Rpb25cIikgeGhyLnNlbmQoYXJncy5zZXJpYWxpemUoYm9keSkpXG5cdFx0XHRlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgJHdpbmRvdy5Gb3JtRGF0YSB8fCBib2R5IGluc3RhbmNlb2YgJHdpbmRvdy5VUkxTZWFyY2hQYXJhbXMpIHhoci5zZW5kKGJvZHkpXG5cdFx0XHRlbHNlIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuXHRcdH0pLFxuXHRcdGpzb25wOiBtYWtlUmVxdWVzdChmdW5jdGlvbih1cmwsIGFyZ3MsIHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIGNhbGxiYWNrTmFtZSA9IGFyZ3MuY2FsbGJhY2tOYW1lIHx8IFwiX21pdGhyaWxfXCIgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE2KSArIFwiX1wiICsgY2FsbGJhY2tDb3VudCsrXG5cdFx0XHR2YXIgc2NyaXB0ID0gJHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXG5cdFx0XHQkd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdGRlbGV0ZSAkd2luZG93W2NhbGxiYWNrTmFtZV1cblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZXNvbHZlKGRhdGEpXG5cdFx0XHR9XG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWxldGUgJHdpbmRvd1tjYWxsYmFja05hbWVdXG5cdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdClcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIkpTT05QIHJlcXVlc3QgZmFpbGVkXCIpKVxuXHRcdFx0fVxuXHRcdFx0c2NyaXB0LnNyYyA9IHVybCArICh1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIikgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoYXJncy5jYWxsYmFja0tleSB8fCBcImNhbGxiYWNrXCIpICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tOYW1lKVxuXHRcdFx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXHRcdH0pLFxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgbW91bnRSZWRyYXcgPSByZXF1aXJlKFwiLi9tb3VudC1yZWRyYXdcIilcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9hcGkvcm91dGVyXCIpKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBudWxsLCBtb3VudFJlZHJhdylcbiIsIi8vIFRoaXMgZXhpc3RzIHNvIEknbSBvbmx5IHNhdmluZyBpdCBvbmNlLlxuXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGhhc093biA9IHJlcXVpcmUoXCIuL2hhc093blwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UpIHtcblx0Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXHRcdGlmIChoYXNPd24uY2FsbChzb3VyY2UsIGtleSkpIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuLy8gTm90ZTogdGhpcyBpcyBtaWxkbHkgcGVyZi1zZW5zaXRpdmUuXG4vL1xuLy8gSXQgZG9lcyAqbm90KiB1c2UgYGRlbGV0ZWAgLSBkeW5hbWljIGBkZWxldGVgcyB1c3VhbGx5IGNhdXNlIG9iamVjdHMgdG8gYmFpbFxuLy8gb3V0IGludG8gZGljdGlvbmFyeSBtb2RlIGFuZCBqdXN0IGdlbmVyYWxseSBjYXVzZSBhIGJ1bmNoIG9mIG9wdGltaXphdGlvblxuLy8gaXNzdWVzIHdpdGhpbiBlbmdpbmVzLlxuLy9cbi8vIElkZWFsbHksIEkgd291bGQndmUgcHJlZmVycmVkIHRvIGRvIHRoaXMsIGlmIGl0IHdlcmVuJ3QgZm9yIHRoZSBvcHRpbWl6YXRpb25cbi8vIGlzc3Vlczpcbi8vXG4vLyBgYGBqc1xuLy8gY29uc3QgaGFzT3duID0gcmVxdWlyZShcIi4vaGFzT3duXCIpXG4vLyBjb25zdCBtYWdpYyA9IFtcbi8vICAgICBcImtleVwiLCBcIm9uaW5pdFwiLCBcIm9uY3JlYXRlXCIsIFwib25iZWZvcmV1cGRhdGVcIiwgXCJvbnVwZGF0ZVwiLFxuLy8gICAgIFwib25iZWZvcmVyZW1vdmVcIiwgXCJvbnJlbW92ZVwiLFxuLy8gXVxuLy8gbW9kdWxlLmV4cG9ydHMgPSAoYXR0cnMsIGV4dHJhcykgPT4ge1xuLy8gICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgYXR0cnMpXG4vLyAgICAgZm9yIChjb25zdCBrZXkgb2YgbWFnaWMpIGRlbGV0ZSByZXN1bHRba2V5XVxuLy8gICAgIGlmIChleHRyYXMgIT0gbnVsbCkgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFzKSBkZWxldGUgcmVzdWx0W2tleV1cbi8vICAgICByZXR1cm4gcmVzdWx0XG4vLyB9XG4vLyBgYGBcblxudmFyIGhhc093biA9IHJlcXVpcmUoXCIuL2hhc093blwiKVxuLy8gV29yZHMgaW4gUmVnRXhwIGxpdGVyYWxzIGFyZSBzb21ldGltZXMgbWFuZ2xlZCBpbmNvcnJlY3RseSBieSB0aGUgaW50ZXJuYWwgYnVuZGxlciwgc28gdXNlIFJlZ0V4cCgpLlxudmFyIG1hZ2ljID0gbmV3IFJlZ0V4cChcIl4oPzprZXl8b25pbml0fG9uY3JlYXRlfG9uYmVmb3JldXBkYXRlfG9udXBkYXRlfG9uYmVmb3JlcmVtb3ZlfG9ucmVtb3ZlKSRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhdHRycywgZXh0cmFzKSB7XG5cdHZhciByZXN1bHQgPSB7fVxuXG5cdGlmIChleHRyYXMgIT0gbnVsbCkge1xuXHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpICYmICFtYWdpYy50ZXN0KGtleSkgJiYgZXh0cmFzLmluZGV4T2Yoa2V5KSA8IDApIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSBhdHRyc1trZXldXG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpICYmICFtYWdpYy50ZXN0KGtleSkpIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSBhdHRyc1trZXldXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdFxufVxuIiwiLy8gVGhpcyBleGlzdHMgc28gSSdtIG9ubHkgc2F2aW5nIGl0IG9uY2UuXG5cInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IHt9Lmhhc093blByb3BlcnR5XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcm91dGUgZnJvbSBcIm1pdGhyaWwvcm91dGVcIlxyXG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIi4vcm91dGVzXCI7XHJcbmltcG9ydCB7QXBpU2V0dGluZ3N9IGZyb20gXCIuL2FwaS9BcGlTZXR0aW5nc1wiO1xyXG5cclxuQXBpU2V0dGluZ3Muc3RhcnRWYWxpZGF0aW9uKCgpID0+IHt9LCAoKSA9PiB7fSk7XHJcbi8vIEFwaVNldHRpbmdzLnJ1bkxpdmVWYWxpZGF0aW9ucygxMCwgKCkgPT4ge30sICgpID0+IHt9KTtcclxuXHJcbnJvdXRlKGRvY3VtZW50LmJvZHksIFwiL3ByZXNlbnRhdGlvblwiLCBSb3V0ZXMpIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJhcGlTdGF0ZSIsIkFwaSIsInF1ZXJ5Iiwic2NoZW1hIiwic3VjY2VzcyIsImZhaWxlZCIsInF1ZXJ5VXJsIiwiaGVhZGVycyIsImJvZHkiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJpc2UiLCJjYXRjaCIsInRlc3RBcGkiLCJhcGkiLCJzdG9yYWdlIiwicmVkcmF3IiwiQXBpU2V0dGluZ3MiLCJ2YWxpZGF0aW9uU3VjY2VzcyIsInZhbGlkYXRpb24iLCJpc1ZhbGlkYXRpbmciLCJ2YWxpZGF0aW9uRmFpbGVkIiwiZXJyb3IiLCJzdGFydFZhbGlkYXRpb24iLCJlIiwicnVuTGl2ZVZhbGlkYXRpb25zIiwic2Vjb25kcyIsInNldEludGVydmFsIiwidXBkYXRlUXVlcnlVcmxJblN0YXRlIiwidXBkYXRlUXVlcnlVcmwiLCJzYXZlUXVlcnlVcmwiLCJhcGlTZXR0aW5ncyIsInJvdXRlIiwiTmF2aWdhdGlvbiIsImFwaU9wdGlvbnMiLCJzZXQiLCJhcGlEb3dubG9hZCIsIm5hdmlnYXRpb24iLCJXZWxjb21lIiwiU3FsQmFzaWNzIiwiQXBpT3B0aW9ucyIsIkhpc3RvcnkiLCJBcGlEb3dubG9hZCIsIlByZXNlbnRhdGlvbiIsIlJvdXRlcyIsIkFwaU9wdGlvbnNTdGF0ZSIsImFwaU9wdGlvbnNTdGF0ZSIsIkFwaVN0YXRlIiwiY29uc3RydWN0b3IiLCJnZXRRdWVyeVVybCIsIlN0b3JhZ2UiLCJxdWVyeVVybEtleSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicmVtb3ZlUXVlcnlVcmwiLCJyZW1vdmVJdGVtIiwibGF5b3V0IiwidmlldyIsImZyZWUiLCJtIiwiQXBpT3B0aW9uc19BcGlTdGF0ZSIsInF1ZXJ5VXJsSW5wdXQiLCJzYXZlQnV0dG9uIiwiZG93bmxvYWRBcGkiLCJkb3dubG9hZENsaWNrZWQiLCJvbmNsaWNrIiwidmFsdWUiLCJzYXZlQnV0dG9uQ2xpY2tlZCIsIm5ld1VybCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNhYmxlZCIsInJlbmRlckxhYmVsIiwicmVuZGVyQ3VycmVudFN0YXRlIiwiY2hhcHRlciIsImNoYXB0ZXJTZWN0aW9uIiwic2VjdGlvbl9jb1RvSmVzdERvQ3plZ29TbHV6eSIsInNlY3Rpb25fa2F0ZWdvcmllU3FsIiwiZWxlbWVudCIsInNlY3Rpb25fc2VxdWVsIiwic2VjdGlvbl9kaWFsZWt0eSIsIlNxbFVzYWdlIiwic2VjdGlvbl96YXN0b3Nvd2FuaWUiLCJzY2hlbWFCdXR0b25zRnJvbSIsIlNxbENvbnNvbGUiLCJwcmVzZXRzIiwidGV4dCIsImdyb3VwQnlfU3FsQ29uc29sZVN0YXRlIiwid2l0aFJlc2V0QnV0dG9uIiwiaWQiLCJyZXN1bHQiLCJpc1dvcmtpbmciLCJzY2hlbWFCdXR0b25zIiwiaXNBY3RpdmUiLCJHcm91cEJ5IiwiTmF2YmFyIiwiTGF5b3V0Iiwibm9kZSIsIk5hdmJhcl9BcGlTdGF0ZSIsInJlbmRlckN1cnJlbnRTdGF0dXMiLCJyZW5kZXJTZXR0aW5nc0J1dHRvbiIsIm5hdmlnYXRlVG9PcHRpb25zIiwicmVuZGVyTm9VcmwiLCJyZW5kZXJQZW5kaW5nVmFsaWRhdGlvbiIsInJlbmRlclRlc3RGYWlsZWQiLCJyZW5kZXJPayIsInJlbmRlck5vVmFsaWRhdGlvbiIsIlNxbEZldGNoIiwiV2hlcmVDbGF1c2UiLCJQcmVzZW50YXRpb25fRW5kaW5nIiwic2NoZW1hQnV0dG9uRm9yIiwidFN0YXRlIiwiY2xpY2tlZCIsInByZXNldCIsIm1hcCIsIngiLCJ2IiwicmVuZGVyU3FsQ29uc29sZSIsImF0dHJzIiwic3RhdGUiLCJnZXRTY2hlbWFUZXh0QXJlYUlkIiwiZ2V0UXVlcnlUZXh0QXJlYUlkIiwicmVhZFF1ZXJ5IiwicmVhZFNjaGVtYSIsInJlbmRlckVycm9yIiwiZXJyIiwicmVuZGVyRXhlY3V0ZUJ1dHRvbiIsImV4ZWN1dGVTdWNjZXNzIiwicXIiLCJleGVjdXRlRmFpbGVkIiwiZXhlY3V0ZVF1ZXJ5QnV0dG9uQ2xpY2tlZCIsInJvbGUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyVGFibGUiLCJyZW5kZXJIZWFkZXJzTGlzdCIsInJlbmRlclRoZWFkIiwicmVuZGVyUm93Iiwicm93IiwicmVuZGVyUm93cyIsInJvd3MiLCJyIiwicmVuZGVyVGJvZHkiLCJyZW5kZXJSZXNldEJ1dHRvbiIsInJlc2V0QnV0dG9uQ2xpY2tlZCIsInJlbmRlclJlc3VsdCIsInJlbmRlclNjaGVtYVRleHRBcmVhIiwic2NoZW1hVGV4dEFyZWFJZCIsInRleHRBcmVhRm9yIiwicmVuZGVyUXVlcnlUZXh0QXJlYSIsInF1ZXJ5VGV4dEFyZWFJZCIsInJlbmRlckNvbnNvbGUiLCJyZW5kZXJBY3RpdmVCdXR0b24iLCJhY3RpdmVCdXR0b25DbGlja2VkIiwicmVuZGVyQXBpRGlzYWJsZWQiLCJzcWxGZXRjaF9TcWxDb25zb2xlU3RhdGUiLCJkZWZhdWx0Q2hhcHRlclNlY3Rpb25IZWFkZXIiLCJoZWFkZXIiLCJoZWFkZXJFbGVtZW50IiwiZGVmYXVsdENoYXB0ZXJIZWFkZXIiLCJnZXRDaGFwdGVySGVhZGVyIiwidm5vZGUiLCJ3aGVyZUNsYXVzZV9TcWxDb25zb2xlU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9