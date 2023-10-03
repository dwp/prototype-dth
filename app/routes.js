// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
const utils = require('../lib/utils')
const config = require('./config.json')

var useViewVersioning = (config.useViewVersioning === true)

// Import version-specific routes
const cxpRoutes = require('./routes/cxp')
const authRoutes = require('./routes/auth')
const idvRoutes = require('./routes/idv')
const kbvRoutes = require('./routes/kbv-uplift')

router.use('/', cxpRoutes)
router.use('/', authRoutes)
router.use('/', idvRoutes)
router.use('/', kbvRoutes)

if (useViewVersioning) {
  router.get('/*/default/*', utils.redirectToVersion, function (req, res, next) {
    next()
  })
}

if (useViewVersioning) {
  router.get('/*/v*/*', utils.checkVersion, function (req, res, next) {
    next()
  })
}

// Prototype-wide routing
router.post('/prototype-submit', (req, res, next) => {
  const currentUrl = req.protocol + '://' + req.get('host')
  // Get journey start and service name from journey-start value
  const journeyDetails = req.session.data['journey-start']
  const journeyDetailsArr = journeyDetails.split(',')
  const journeyStart = journeyDetailsArr[0]
  const serviceName = req.session.data[
    journeyDetailsArr[1] === 'carers' ? 'carers-service-name': 'dss-service-name'
  ]
  req.session.data['service-name'] = serviceName

  // Other variables
  const citizenName = req.session.data['citizen-name']
  const citizenBenefits = req.session.data['citizen-benefits']
  const cxp = req.session.data['cxp']
  const esaStatus = req.session.data['esa-status']
  const pipStatus = req.session.data['pip-status']
  const auth = req.session.data['auth']
  const idv = req.session.data['idv']
  const idvHappy = req.session.data['idvHappy']
  req.session.data['generated-link'] = currentUrl + journeyStart + '?' + 
    'citizen-name=' + citizenName + '&' + 
    'service-name=' + serviceName + '&' + 
    'citizen-benefits=' + citizenBenefits + '&' + 
    'cxp=' + cxp  + '&' + 
    'esa-status=' + esaStatus  + '&' + 
    'pip-status=' + pipStatus  + '&' + 
    'auth=' + auth  + '&' + 
    'idv=' + idv  + '&' + 
    'idvHappy=' + idvHappy 
  const action = req.session.data['action']
  if (action === 'generateLink') {
    res.redirect('/generate-link')
  } else {
    res.redirect(journeyStart)
  }
})
