'use strict'

import { Marky } from './modules/Marky'
if (process.env.NODE_ENV === 'build') require('../styles/marky-marked.css')

const marky = Object.create(Marky)
marky.init()

export default marky
