/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Web3Provider.tsx":
/*!*************************************!*\
  !*** ./components/Web3Provider.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3Provider\": () => (/* binding */ Web3Provider),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n\"use client\";\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    provider: null,\n    signer: null,\n    address: null,\n    isConnected: false,\n    isConnecting: false,\n    connectWallet: async ()=>{},\n    disconnect: ()=>{}\n});\nfunction Web3Provider({ children  }) {\n    const { 0: provider , 1: setProvider  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: signer , 1: setSigner  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: isConnecting , 1: setIsConnecting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const connectWallet = async ()=>{\n        setIsConnecting(true);\n        try {\n            // Check if MetaMask is installed\n            if (false) {} else {\n                alert(\"Please install MetaMask or another Web3 wallet!\");\n            }\n        } catch (error) {\n            console.error(\"Error connecting wallet:\", error);\n            // Handle user rejection\n            if (error.code === 4001) {\n                alert(\"Connection request rejected. Please try again.\");\n            } else {\n                alert(\"Failed to connect wallet. Please try again.\");\n            }\n        } finally{\n            setIsConnecting(false);\n        }\n    };\n    const disconnect = ()=>{\n        setProvider(null);\n        setSigner(null);\n        setAddress(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: {\n            provider,\n            signer,\n            address,\n            isConnected: !!address,\n            isConnecting,\n            connectWallet,\n            disconnect\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/data/data/com.termux/files/home/dustsweep/components/Web3Provider.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\nconst useWeb3 = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dlYjNQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxZQUFZOztBQUUwRDtBQUN2QztBQVkvQixNQUFNSSxXQUFXLGlCQUFHSixvREFBYSxDQUFrQjtJQUNqREssUUFBUSxFQUFFLElBQUk7SUFDZEMsTUFBTSxFQUFFLElBQUk7SUFDWkMsT0FBTyxFQUFFLElBQUk7SUFDYkMsV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFlBQVksRUFBRSxLQUFLO0lBQ25CQyxhQUFhLEVBQUUsVUFBWSxDQUFDLENBQUM7SUFDN0JDLFVBQVUsRUFBRSxJQUFNLENBQUMsQ0FBQztDQUNyQixDQUFDO0FBRUssU0FBU0MsWUFBWSxDQUFDLEVBQUVDLFFBQVEsR0FBMkIsRUFBRTtJQUNsRSxNQUFNLEtBQUNSLFFBQVEsTUFBRVMsV0FBVyxNQUFJWiwrQ0FBUSxDQUF1QyxJQUFJLENBQUM7SUFDcEYsTUFBTSxLQUFDSSxNQUFNLE1BQUVTLFNBQVMsTUFBSWIsK0NBQVEsQ0FBdUIsSUFBSSxDQUFDO0lBQ2hFLE1BQU0sS0FBQ0ssT0FBTyxNQUFFUyxVQUFVLE1BQUlkLCtDQUFRLENBQWdCLElBQUksQ0FBQztJQUMzRCxNQUFNLEtBQUNPLFlBQVksTUFBRVEsZUFBZSxNQUFJZiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUV2RCxNQUFNUSxhQUFhLEdBQUcsVUFBWTtRQUNoQ08sZUFBZSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJO1lBQ0YsaUNBQWlDO1lBQ2pDLElBQUksS0FBeUQsRUFBRSxFQWtCOUQsTUFBTTtnQkFDTGUsS0FBSyxDQUFDLGlEQUFpRCxDQUFDO1lBQzFELENBQUM7UUFDSCxFQUFFLE9BQU9DLEtBQUssRUFBTztZQUNuQkgsT0FBTyxDQUFDRyxLQUFLLENBQUMsMEJBQTBCLEVBQUVBLEtBQUssQ0FBQztZQUVoRCx3QkFBd0I7WUFDeEIsSUFBSUEsS0FBSyxDQUFDQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUN2QkYsS0FBSyxDQUFDLGdEQUFnRCxDQUFDO1lBQ3pELE9BQU87Z0JBQ0xBLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQztZQUN0RCxDQUFDO1FBQ0gsQ0FBQyxRQUFTO1lBQ1JmLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNTixVQUFVLEdBQUcsSUFBTTtRQUN2QkcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNqQkMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNmQyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxxQkFDRSw4REFBQ1osV0FBVyxDQUFDK0IsUUFBUTtRQUNuQkMsS0FBSyxFQUFFO1lBQ0wvQixRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxXQUFXLEVBQUUsQ0FBQyxDQUFDRCxPQUFPO1lBQ3RCRSxZQUFZO1lBQ1pDLGFBQWE7WUFDYkMsVUFBVTtTQUNYO2tCQUVBRSxRQUFROzs7OztZQUNZLENBQ3hCO0FBQ0gsQ0FBQztBQUVNLE1BQU13QixPQUFPLEdBQUcsSUFBTXBDLGlEQUFVLENBQUNHLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2R1c3Rzd2VlcC8uL2NvbXBvbmVudHMvV2ViM1Byb3ZpZGVyLnRzeD9mMTU2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBSZWFjdE5vZGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5cbmludGVyZmFjZSBXZWIzQ29udGV4dFR5cGUge1xuICBwcm92aWRlcjogZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIgfCBudWxsXG4gIHNpZ25lcjogZXRoZXJzLlNpZ25lciB8IG51bGxcbiAgYWRkcmVzczogc3RyaW5nIHwgbnVsbFxuICBpc0Nvbm5lY3RlZDogYm9vbGVhblxuICBpc0Nvbm5lY3Rpbmc6IGJvb2xlYW5cbiAgY29ubmVjdFdhbGxldDogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICBkaXNjb25uZWN0OiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IFdlYjNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxXZWIzQ29udGV4dFR5cGU+KHtcbiAgcHJvdmlkZXI6IG51bGwsXG4gIHNpZ25lcjogbnVsbCxcbiAgYWRkcmVzczogbnVsbCxcbiAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICBpc0Nvbm5lY3Rpbmc6IGZhbHNlLFxuICBjb25uZWN0V2FsbGV0OiBhc3luYyAoKSA9PiB7fSxcbiAgZGlzY29ubmVjdDogKCkgPT4ge30sXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gV2ViM1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZTxldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlciB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtzaWduZXIsIHNldFNpZ25lcl0gPSB1c2VTdGF0ZTxldGhlcnMuU2lnbmVyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2lzQ29ubmVjdGluZywgc2V0SXNDb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNDb25uZWN0aW5nKHRydWUpXG4gICAgdHJ5IHtcbiAgICAgIC8vIENoZWNrIGlmIE1ldGFNYXNrIGlzIGluc3RhbGxlZFxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bSkge1xuICAgICAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtKVxuICAgICAgICBcbiAgICAgICAgLy8gUmVxdWVzdCBhY2NvdW50IGFjY2Vzc1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0ICh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bS5yZXF1ZXN0KHsgXG4gICAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHdlYjNTaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgICAgICBjb25zdCB1c2VyQWRkcmVzcyA9IGF3YWl0IHdlYjNTaWduZXIuZ2V0QWRkcmVzcygpXG4gICAgICAgICAgXG4gICAgICAgICAgc2V0UHJvdmlkZXIod2ViM1Byb3ZpZGVyKVxuICAgICAgICAgIHNldFNpZ25lcih3ZWIzU2lnbmVyKVxuICAgICAgICAgIHNldEFkZHJlc3ModXNlckFkZHJlc3MpXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coJ1dhbGxldCBjb25uZWN0ZWQ6JywgdXNlckFkZHJlc3MpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBNZXRhTWFzayBvciBhbm90aGVyIFdlYjMgd2FsbGV0IScpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29ubmVjdGluZyB3YWxsZXQ6JywgZXJyb3IpXG4gICAgICBcbiAgICAgIC8vIEhhbmRsZSB1c2VyIHJlamVjdGlvblxuICAgICAgaWYgKGVycm9yLmNvZGUgPT09IDQwMDEpIHtcbiAgICAgICAgYWxlcnQoJ0Nvbm5lY3Rpb24gcmVxdWVzdCByZWplY3RlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBjb25uZWN0IHdhbGxldC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0Nvbm5lY3RpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzY29ubmVjdCA9ICgpID0+IHtcbiAgICBzZXRQcm92aWRlcihudWxsKVxuICAgIHNldFNpZ25lcihudWxsKVxuICAgIHNldEFkZHJlc3MobnVsbClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdlYjNDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBwcm92aWRlcixcbiAgICAgICAgc2lnbmVyLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICBpc0Nvbm5lY3RlZDogISFhZGRyZXNzLFxuICAgICAgICBpc0Nvbm5lY3RpbmcsXG4gICAgICAgIGNvbm5lY3RXYWxsZXQsXG4gICAgICAgIGRpc2Nvbm5lY3QsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1dlYjNDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VXZWIzID0gKCkgPT4gdXNlQ29udGV4dChXZWIzQ29udGV4dClcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiV2ViM0NvbnRleHQiLCJwcm92aWRlciIsInNpZ25lciIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsImlzQ29ubmVjdGluZyIsImNvbm5lY3RXYWxsZXQiLCJkaXNjb25uZWN0IiwiV2ViM1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRQcm92aWRlciIsInNldFNpZ25lciIsInNldEFkZHJlc3MiLCJzZXRJc0Nvbm5lY3RpbmciLCJ3aW5kb3ciLCJldGhlcmV1bSIsIndlYjNQcm92aWRlciIsInByb3ZpZGVycyIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsIndlYjNTaWduZXIiLCJnZXRTaWduZXIiLCJ1c2VyQWRkcmVzcyIsImdldEFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJlcnJvciIsImNvZGUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlV2ViMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Web3Provider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Web3Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Web3Provider */ \"./components/Web3Provider.tsx\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Web3Provider__WEBPACK_IMPORTED_MODULE_1__.Web3Provider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"font-sans dark\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/dustsweep/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/data/data/com.termux/files/home/dustsweep/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/data/data/com.termux/files/home/dustsweep/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUN3RDtBQUM3QjtBQUVaLFNBQVNDLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQzlELHFCQUNFLDhEQUFDSCxrRUFBWTtrQkFDWCw0RUFBQ0ksS0FBRztZQUFDQyxTQUFTLEVBQUMsZ0JBQWdCO3NCQUM3Qiw0RUFBQ0gsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ3hCOzs7OztZQUNPLENBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2R1c3Rzd2VlcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1dlYjNQcm92aWRlclwiXG5pbXBvcnQgXCIuLi9hcHAvZ2xvYmFscy5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXZWIzUHJvdmlkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyBkYXJrXCI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvV2ViM1Byb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiV2ViM1Byb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();