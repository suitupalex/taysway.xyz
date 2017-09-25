'use strict'

const CtrlEnv = require('ctrl-env')

const ctrlEnv = new CtrlEnv([
  ['NODE_ENV'],
])

ctrlEnv.assert()

module.exports = ctrlEnv
