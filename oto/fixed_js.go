//go:build js && !wasm
// +build js,!wasm

package oto

import (
	"github.com/visualfc/gopherjs-fixed/oto/oto"
)

func init() {
	_ = oto.NewContext
}
