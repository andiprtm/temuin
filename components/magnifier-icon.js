import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MagnifierIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
      <Path
          fill="#2A1E5A"
          d="M2.357 13.737a8.03 8.03 0 0 0 10.619.659l5.318 5.318a1 1 0 0 0 1.414-1.414l-5.318-5.318A8.04 8.04 0 0 0 2.357 2.36a8.042 8.042 0 0 0 0 11.376Zm1.414-9.96A6.043 6.043 0 1 1 2 8.05a6 6 0 0 1 1.77-4.276v.002Z"
      />
    </Svg>
)
export default MagnifierIcon
