export const hsvToRgb = (h, s, v) => {
	var r, g, b;
	var golden_ratio_conjugate = 0.618033988749895;
	
	if(h === 0) {
		h = Math.random();
	}

	h += golden_ratio_conjugate;
	h %= 1;

	var i = Math.floor(h * 6);
	var f = h * 6 - i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);
  
	switch (i % 6) {
		case 0: r = v; g = t; b = p; break;
		case 1: r = q; g = v; b = p; break;
		case 2: r = p; g = v; b = t; break;
		case 3: r = p; g = q; b = v; break;
		case 4: r = t; g = p; b = v; break;
		case 5: r = v; g = p; b = q; break;
	}
  
	return [ Math.round(r * 255) +',' + Math.round(g * 255) + ',' + Math.round(b * 255) ];
}