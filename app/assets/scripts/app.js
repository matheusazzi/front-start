import $ from 'jquery'
import Home from './modules/home'
import './components/back-to-top'

const HomeView = new Home()
HomeView.initialize()

$('[data-component="backToTop"]').backToTop()
