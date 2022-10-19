$packages["ebiten_audio_fixed"] = (function() {
	var $pkg = {}
	$pkg.$initLinknames = function() {
		var org, fix, $orginit;
		org = $packages["github.com/hajimehoshi/ebiten/v2/audio"]
		$orginit = org.$init;
		org.$init = function() {
			$orginit();
			var NewContext = org.NewContext
			org.NewContext = function(s) {
				return NewContext(11025)
			}
		}
	};
	return $pkg;
})();