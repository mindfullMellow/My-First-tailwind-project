"use strict";

import "tailwindcss/tailwind.css";

//code to get year
const year = new Date().getFullYear();
const html = document.querySelector(".fullYear");
html.textContent = year;
