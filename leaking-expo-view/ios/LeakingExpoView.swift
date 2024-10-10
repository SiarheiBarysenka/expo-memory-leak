import ExpoModulesCore

class LeakingExpoView: ExpoView {
  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    self.backgroundColor = .red
  }
}
