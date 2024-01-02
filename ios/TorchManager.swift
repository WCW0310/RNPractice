import Foundation
import AVFoundation

@objc(TorchManager)
class TorchManager: NSObject {

 @objc func toggleTorch(_ enabled: Bool) {
   guard let device = AVCaptureDevice.default(for: .video), device.hasTorch else { return }
       try? device.lockForConfiguration()
       device.torchMode = enabled ? .on : .off
       device.unlockForConfiguration()
 }

  @objc static func requiresMainQueueSetup() -> Bool {
      return true
  }
}
