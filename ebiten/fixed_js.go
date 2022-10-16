//go:build js && !wasm
// +build js,!wasm

package ebiten

import (
	"github.com/visualfc/gopherjs-fixed/ebiten/jsutil"
)

func init() {
	_ = jsutil.TemporaryUint8ArrayFromUint8Slice
	_ = jsutil.TemporaryUint8ArrayFromUint16Slice
	_ = jsutil.TemporaryUint8ArrayFromFloat32Slice
	_ = jsutil.TemporaryFloat32Array
}
