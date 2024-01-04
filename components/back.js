import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={24}
        fill="none"
        {...props}
    >
        <Path stroke="#000" strokeWidth={4.286} d="M15.429 2 4 12l11.429 10" />
    </Svg>
)
export default SvgComponent
