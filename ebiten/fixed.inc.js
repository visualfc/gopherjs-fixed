$packages["ebiten_jsutil_fixed"] = (function() {
	var $pkg = {}
	$pkg.$initLinknames = function() {
		var org, fix, $orginit, $fixinit;
		org = $packages["github.com/hajimehoshi/ebiten/v2/internal/jsutil"]
		fix = $packages["github.com/visualfc/gopherjs-fixed/ebiten/jsutil"]
		$orginit = org.$init;
		$fixinit = fix.$init;
		org.$init = function() {
			$orginit();
			$fixinit();
			fix.$init = function(){};
			for(var fn in org) {
				org[fn] = fix[fn]
			}
		}
	};
	return $pkg;
})();