import {
  IoMdVolumeHigh,
  IoIosPlayCircle,
  IoIosPause,
  IoIosVolumeMute
} from 'react-icons/io'

export default {
  play: <IoIosPlayCircle size={40} color="#fff" style={{ marginBottom: 4 }} />,
  pause: <IoIosPause size={32} color="#fff" style={{ marginBottom: 8 }} />,
  rewind: <></>,
  forward: <></>,
  loop: <></>,
  loopOff: <></>,
  volume: <IoMdVolumeHigh size={28} color="#fff" />,
  volumeMute: <IoIosVolumeMute size={28} color="#fff" />
}
