import Foundation
import AVFoundation

@objc(TorchManager)
class CalendarManager: NSObject {

 @objc func toggleTorch() {
   guard let device = AVCaptureDevice.default(for: .video), device.hasTorch else { return }
       try? device.lockForConfiguration()
       device.torchMode = device.torchMode == .off ? .on : .off
       device.unlockForConfiguration()
 }

  @objc static func requiresMainQueueSetup() -> Bool {
      return true
  }
}
