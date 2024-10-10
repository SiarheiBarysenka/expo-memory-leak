package expo.modules.leakingexpoview

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class LeakingExpoViewModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("LeakingExpoView")

    View(LeakingExpoView::class) {}
  }
}