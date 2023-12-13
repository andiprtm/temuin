import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Alis = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={75}
        height={11}
        fill="none"
        {...props}
    >
        <Path
            stroke="#FED44A"
            strokeWidth={4}
            d="M1.5 8.5c9.5-3.667 37.4-9.4 73-3"
        />
    </Svg>
)
export default Alis
