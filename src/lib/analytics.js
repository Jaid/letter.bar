import ReactGoogleAnalytics from "react-ga"

if (GOOGLE_ANALYTICS_TRACKING_ID) {
  ReactGoogleAnalytics.initialize(GOOGLE_ANALYTICS_TRACKING_ID, {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
    gaAddress: "https://example.com/ga.js",
    debug: true,
    testMode: true,
  })
  ReactGoogleAnalytics.pageview(window.location.pathname + window.location.search)
  // history.listen(location => {
  //   ReactGoogleAnalytics.set({page: location.pathname})
  //   ReactGoogleAnalytics.pageview(location.pathname)
  // })
}

export default ReactGoogleAnalytics