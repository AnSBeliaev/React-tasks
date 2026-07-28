import React, {memo} from "react";

function CustomButton({onClick}) {
    return (
        <button onClick={onClick}>Counter</button>
    )
}

export default memo(CustomButton)