import React from 'react'
import { render } from 'react-snapshot'
import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'
import App from './App'
import registerServiceWorker, { unregister } from './registerServiceWorker'
import data from './data.json'
/*
// This form is setup to use Netlify's form handling:the form action is set to the current absolute url: action: '/contact/'a name attribute is sent with the form's data 'form-name': 'Contact'netlify data attributes are added to the form data-netlify data-netlify-honeypotFind out more in the Netlify Docs.
*/
const rootEl = document.getElementById('root')
render(<App />, rootEl)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, rootEl)
  })
}

if (process.env.REACT_APP_SITE_URL && 'localStorage' in window) {
  window.localStorage.setItem('netlifySiteURL', process.env.REACT_APP_SITE_URL)
}

const globalSettings =
  data.settings && data.settings.filter(doc => doc.name === 'global')[0]

if (globalSettings) {
  globalSettings.enableServiceWorker ? registerServiceWorker() : unregister()
}
