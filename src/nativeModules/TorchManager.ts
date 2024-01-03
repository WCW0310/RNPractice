import { NativeModules } from 'react-native'
const { TorchManager } = NativeModules
interface TorchInterface {
  toggleTorch(enabled: boolean): void
}
export default TorchManager as TorchInterface
