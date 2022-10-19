# gopherjs-fixed
fixed pkg build for gopherjs

```
//go:build js && !wasm
// +build js,!wasm

import (
	_ "github.com/visualfc/gopherjs-fixed/audio"
	_ "github.com/visualfc/gopherjs-fixed/ebiten"
	_ "github.com/visualfc/gopherjs-fixed/oto"
)
```