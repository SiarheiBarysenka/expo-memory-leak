import ExpoModulesCore

public class LeakingExpoViewModule: Module {
  public func definition() -> ModuleDefinition {
    Name("LeakingExpoView")

    View(LeakingExpoView.self) {}
  }
}