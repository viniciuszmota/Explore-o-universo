import { Router } from "./router.js"

const router = new Router()
router.add("/", "/index.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/error", "/pages/error.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
