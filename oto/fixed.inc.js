$packages["oto_fixed"] = (function() {
	var $pkg = {}
	$pkg.$initLinknames = function() {
		var org, fix, $orginit, $fixinit;
		org = $packages["github.com/hajimehoshi/oto/v2"]
		fix = $packages["github.com/visualfc/gopherjs-fixed/oto/oto"]
		$orginit = org.$init;
		$fixinit = fix.$init;
		org.$init = function() {
			$orginit();
			$fixinit();
			fix.$init = function(){};
			org.NewContext = fix.NewContext
		}
	};
	return $pkg;
})();