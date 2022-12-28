/* @refresh reload */

import { render } from 'solid-js/web';
import LoginScreen from './components/LoginScreen'
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import 'virtual:windi.css';
import './index.css';

setTheme("sap_horizon_dark");
render(() => <LoginScreen/>, document.getElementById('root'));

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     // dark mode
// }
// // To watch for system theme changes:
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//     const newColorScheme = event.matches ? "dark" : "light";
// });

// localStorage.setItem('kanaEduTheme', isDarkMode ? 'dark' : 'light');