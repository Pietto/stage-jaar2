(function () {
'use strict';

let venueIcons = {};

venueIcons['actief'] = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.58 36.33" width="30" height="30"><defs><style>.cls-1{fill:url(#radial-gradient);}.cls-2{fill:#b11f8e;}.cls-3{fill:#fff;}.cls-4{fill:none;stroke:#78005f;stroke-miterlimit:10;}</style><radialGradient id="radial-gradient" cx="-101.92" cy="31.51" r="8.34" gradientTransform="translate(173.29 20.69) scale(1.54 0.39)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" stop-opacity="0"/></radialGradient></defs><title>arts-shadow</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><ellipse class="cls-1" cx="16.51" cy="33.06" rx="12.83" ry="3.27"/><circle class="cls-2" cx="17.29" cy="17.29" r="16.79"/><path class="cls-3" d="M18,7.68a9.59,9.59,0,0,1,5.16,1.37,6.65,6.65,0,0,1,3.4,6.16,10.71,10.71,0,0,1-.65,3.45A3.22,3.22,0,0,1,22.19,21c-.72-.08-1.43-.19-2.15-.26a4.8,4.8,0,0,0-.91,0,2.13,2.13,0,0,0-1.73,1.42,3.73,3.73,0,0,0-.19,2.46c.12.58.28,1.15.4,1.73.23,1.15-.11,1.6-1.38,1.69a4.33,4.33,0,0,1-2.09-.49,9.79,9.79,0,0,1-4.51-4.32A11.89,11.89,0,0,1,8,17.1,9.53,9.53,0,0,1,11,10a7.67,7.67,0,0,1,3.07-1.74A13.26,13.26,0,0,1,18,7.68ZM13.42,20.06a1.73,1.73,0,1,0-1.71,1.71A1.73,1.73,0,0,0,13.42,20.06ZM10.05,15a1.72,1.72,0,0,0,1.72,1.74,1.73,1.73,0,0,0,0-3.47A1.72,1.72,0,0,0,10.05,15Zm12.59-3.72a1.73,1.73,0,1,0-3.47,0,1.73,1.73,0,0,0,3.47,0Zm-7,1.38a1.72,1.72,0,0,0,1.73-1.7,1.73,1.73,0,1,0-3.46,0A1.7,1.7,0,0,0,15.6,12.62Z"/><circle class="cls-4" cx="17.29" cy="17.29" r="16.79"/></g></g></svg>`;
venueIcons['geactiveerd'] = `<svg id="svg" version="1.1" width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g id="svgg"><path id="path0" d="M193.056 136.642 C 191.755 137.049,190.475 137.886,189.186 139.176 C 185.899 142.463,185.999 141.420,186.005 172.173 C 186.008 186.928,185.796 204.524,185.534 211.276 C 184.899 227.671,185.830 230.330,192.962 232.501 C 195.930 233.405,222.851 233.191,225.577 232.242 C 228.370 231.270,231.197 228.510,232.191 225.786 C 233.818 221.324,234.151 145.808,232.559 142.400 C 231.445 140.017,229.876 138.506,227.200 137.241 L 225.000 136.200 210.000 136.117 C 197.524 136.047,194.673 136.136,193.056 136.642 M194.294 269.624 C 187.897 271.180,185.460 275.624,185.421 285.800 C 185.392 293.475,186.935 296.478,191.931 298.471 C 194.647 299.553,217.615 300.098,222.763 299.201 C 230.176 297.910,232.913 293.817,232.927 284.000 C 232.939 275.762,231.126 272.053,226.173 270.178 C 223.955 269.338,197.368 268.876,194.294 269.624 " stroke="none" fill="#fcfcfc" fill-rule="evenodd"></path><path id="path1" d="M192.939 19.214 C 181.602 19.922,177.540 21.319,169.622 27.232 C 161.135 33.570,154.861 41.676,153.182 48.475 C 152.178 52.537,151.387 53.748,149.294 54.426 C 141.363 56.993,138.529 61.007,136.602 72.400 C 135.638 78.101,134.403 80.374,129.538 85.405 C 122.842 92.330,121.711 94.342,120.170 102.069 C 119.074 107.565,118.624 108.568,116.314 110.653 C 109.739 116.588,105.378 124.232,103.374 133.338 C 102.228 138.545,101.810 139.231,98.401 141.492 C 92.035 145.715,88.651 152.589,86.568 165.536 C 85.678 171.067,85.241 171.720,80.905 173.996 C 74.677 177.266,71.820 183.260,69.758 197.384 C 68.848 203.622,68.542 204.099,64.086 206.242 C 57.022 209.639,54.921 213.996,52.884 229.465 C 51.964 236.449,51.827 236.673,47.074 238.954 C 40.950 241.894,38.804 245.110,37.038 254.000 C 35.350 262.495,35.214 262.744,28.420 269.816 C 20.125 278.448,19.363 281.440,18.939 307.000 C 18.617 326.448,19.533 338.127,22.210 348.681 C 24.324 357.014,26.051 358.870,36.998 364.577 C 39.417 365.838,41.487 366.989,41.598 367.135 C 41.904 367.537,43.312 368.394,44.100 368.658 C 44.485 368.788,44.800 369.033,44.800 369.203 C 44.800 369.374,45.250 369.626,45.800 369.764 C 46.350 369.902,46.800 370.192,46.800 370.408 C 46.800 370.623,47.088 370.800,47.440 370.800 C 47.791 370.800,48.646 371.045,49.340 371.344 C 50.033 371.643,51.680 372.202,53.000 372.586 C 58.447 374.170,68.499 378.715,70.332 380.423 C 70.791 380.850,71.354 381.200,71.583 381.200 C 71.812 381.200,72.000 381.470,72.000 381.800 C 72.000 382.173,72.378 382.400,73.000 382.400 C 73.550 382.400,74.000 382.580,74.000 382.800 C 74.000 383.020,74.270 383.200,74.600 383.200 C 74.930 383.200,75.200 383.470,75.200 383.800 C 75.200 384.219,75.622 384.400,76.600 384.400 C 77.578 384.400,78.000 384.581,78.000 385.000 C 78.000 385.433,78.444 385.600,79.600 385.600 C 80.480 385.600,81.200 385.755,81.200 385.944 C 81.200 386.134,82.131 386.399,83.270 386.534 C 84.408 386.669,85.443 386.937,85.570 387.129 C 85.696 387.322,86.790 387.589,88.000 387.722 C 89.210 387.855,93.350 388.427,97.200 388.992 C 111.071 391.027,128.917 392.318,147.000 392.593 C 154.920 392.714,165.180 392.979,169.800 393.182 C 180.740 393.663,237.421 393.662,248.000 393.181 C 252.510 392.976,262.770 392.711,270.800 392.591 C 289.199 392.318,306.108 391.087,320.454 388.978 C 324.274 388.416,328.480 387.850,329.800 387.719 C 331.120 387.589,332.313 387.309,332.451 387.098 C 332.588 386.886,333.533 386.619,334.551 386.504 C 335.568 386.390,336.400 386.139,336.400 385.948 C 336.400 385.757,337.120 385.600,338.000 385.600 C 339.156 385.600,339.600 385.433,339.600 385.000 C 339.600 384.567,340.044 384.400,341.200 384.400 C 342.080 384.400,342.800 384.207,342.800 383.971 C 342.800 383.208,343.917 382.400,344.971 382.400 C 345.537 382.400,346.000 382.207,346.000 381.971 C 346.000 381.418,347.018 380.400,347.571 380.400 C 347.807 380.400,348.000 380.234,348.000 380.031 C 348.000 379.178,360.300 373.775,365.400 372.388 C 366.500 372.089,367.850 371.610,368.400 371.324 C 368.950 371.039,369.715 370.804,370.100 370.802 C 370.485 370.801,370.800 370.623,370.800 370.408 C 370.800 370.192,371.250 369.902,371.800 369.764 C 372.350 369.626,372.800 369.353,372.800 369.157 C 372.800 368.960,372.982 368.800,373.204 368.800 C 373.427 368.800,375.024 367.913,376.753 366.829 C 378.483 365.745,381.747 363.930,384.008 362.796 C 393.044 358.261,395.043 354.593,397.628 337.800 C 399.388 326.368,399.137 292.652,397.222 283.308 C 396.004 277.363,395.124 275.925,388.439 268.952 C 383.412 263.708,382.358 261.859,381.374 256.562 C 379.192 244.805,376.928 241.193,369.985 238.394 C 365.951 236.768,365.693 236.374,364.965 230.732 C 362.786 213.837,360.743 209.554,353.123 205.913 C 349.174 204.026,349.013 203.739,347.773 196.392 C 345.237 181.370,343.069 177.102,336.210 173.621 C 333.308 172.148,332.177 170.820,331.762 168.400 C 330.178 159.155,327.492 150.327,325.237 146.952 C 323.686 144.631,322.502 143.580,318.618 141.077 C 316.030 139.409,315.297 138.052,314.192 132.884 C 312.532 125.117,308.469 117.559,303.181 112.400 C 299.005 108.326,298.736 107.834,297.599 102.200 C 296.003 94.290,295.161 92.778,288.439 85.750 C 283.330 80.408,282.380 78.561,280.977 71.235 C 279.008 60.959,276.380 57.111,269.860 54.957 C 266.052 53.700,265.806 53.380,264.411 47.874 C 261.896 37.943,247.179 23.746,236.387 20.841 C 230.288 19.200,207.072 18.330,192.939 19.214 M227.200 137.241 C 229.876 138.506,231.445 140.017,232.559 142.400 C 234.151 145.808,233.818 221.324,232.191 225.786 C 231.197 228.510,228.370 231.270,225.577 232.242 C 222.851 233.191,195.930 233.405,192.962 232.501 C 185.830 230.330,184.899 227.671,185.534 211.276 C 185.796 204.524,186.008 186.928,186.005 172.173 C 185.999 141.420,185.899 142.463,189.186 139.176 C 192.299 136.063,192.594 136.020,210.000 136.117 L 225.000 136.200 227.200 137.241 M226.173 270.178 C 235.044 273.536,235.856 293.050,227.319 297.696 C 223.167 299.957,197.088 300.527,191.931 298.471 C 186.935 296.478,185.392 293.475,185.421 285.800 C 185.460 275.624,187.897 271.180,194.294 269.624 C 197.368 268.876,223.955 269.338,226.173 270.178 " stroke="none" fill="#fc3c44" fill-rule="evenodd"></path></g></svg>`;

venueIcons['blauw_user'] = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="16" height="16"><circle cx="8" cy="8" r="7" stroke="gray" stroke-width="1" fill="#007bff" /></svg> `;
venueIcons['rood_user'] = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="32" height="32"><circle cx="16" cy="16" r="14" stroke="gray" stroke-width="1" fill="#dc3545" /></svg> `;

venueIcons['diagram_0_5'] = `<svg width="503" height="500" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_2" height="100" width="250" y="300" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_3" height="100" width="250" y="200" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_3" height="100" width="250" y="100" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_3" height="100" width="250" y="000" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_1_4'] = `<svg width="503" height="500" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_2" height="100" width="250" y="300" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_3" height="100" width="250" y="200" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_3" height="100" width="250" y="100" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;



venueIcons['diagram_2_3'] = `<svg width="503" height="500" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="300" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_2" height="100" width="250" y="300" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_3" height="100" width="250" y="200" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_3_2'] = `<svg width="503" height="500" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="300" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_2" height="100" width="250" y="300" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_3" height="100" width="250" y="200" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_4_1'] = `<svg width="503" height="500" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="300" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="200" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="100" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_5_0'] = `<svg width="503" height="500" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="300" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="200" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="100" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="000" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
 </g>
</svg>`;













venueIcons['diagram_0_10'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="800" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="700" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="600" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="500" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="300" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="200" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="100" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="000" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;


venueIcons['diagram_1_9'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="800" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="700" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="600" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="500" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="300" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="200" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="100" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_2_8'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="800" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="800" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="700" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="600" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="500" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="300" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="200" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_3_7'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="800" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="700" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="800" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="700" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="600" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="500" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="300" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_4_6'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="800" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="700" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="600" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="800" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="700" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="600" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="500" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="400" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_5_5'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="800" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="700" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="600" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="500" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="800" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="700" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="600" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="500" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_6_4'] = `<svg  width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="800" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="700" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="600" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="500" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="800" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="700" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="600" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_7_3'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="800" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="700" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="600" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="500" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="300" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="800" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="700" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_8_2'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="800" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="700" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="600" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="500" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="300" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="200" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
  <rect id="svg_1" height="100" width="250" y="800" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_9_1'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="800" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="700" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="600" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="500" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="300" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="200" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="100" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
  <rect id="svg_1" height="100" width="250" y="900" x="251.5" stroke-width="5" stroke="#000" fill="#ADFF2F"/>
 </g>
</svg>`;

venueIcons['diagram_10_0'] = `<svg width="503" height="1000" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>links</title>
  <rect id="svg_1" height="100" width="250" y="900" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="800" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="700" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="600" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="500" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="400" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="300" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="200" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="100" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
  <rect id="svg_1" height="100" width="250" y="000" x="1.5" stroke-width="5" stroke="#000" fill="#FF6347"/>
 </g>
 <g>
  <title>rechts</title>
 </g>
</svg>`;


Object.assign(window, {venueIcons});

}());
