import WifiManager from "react-native-wifi-reborn";
import {socket} from "./socket";

export const refreshPosition = (name) => {
  setTimeout(() => {
    refreshPosition(name)
    getClosestAccessPoint()
        .then(r => {
          socket.emit('refresh-position', {
            name,
            ssid: r.SSID,
            mac: r.BSSID.toUpperCase()
          })
        })
        .catch(e => alert(e.toString()))
  }, 35000)
}

export const getClosestAccessPoint = async () => {
  try {
    let accessPoints = await WifiManager.reScanAndLoadWifiList()
    if (accessPoints.includes('only allowed to scan 4 times per 2 minuts in a foreground app.')){
      accessPoints = await WifiManager.loadWifiList();
    }
    const matchSSID = accessPoints.filter(item => item.SSID === 'ITTelkom_Surabaya')
    if (matchSSID.length === 0) {
      return {
        SSID: '',
        BSSID: '00:00:00:00:00:00'
      }
    }
    const sortStrength = matchSSID.sort((a, b) => b.level - a.level)
    return sortStrength[0]
  } catch (e) {
    console.log(e)
    console.log(typeof e)
  }
}
