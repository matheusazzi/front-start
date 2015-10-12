import $ from 'vendor/jquery/dist/jquery'
import Home from './modules/home'
import './components/back-to-top'

const HomeView = new Home()
HomeView.initialize()

$('[data-component="backToTop"]').backToTop()
