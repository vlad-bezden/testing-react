import jsdom from 'jsdom'
import { expect } from 'chai'

const doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win
global.expect = expect

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})