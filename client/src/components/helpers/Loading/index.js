import React from "react";
import "./Loading.css";

const Loading = ({ col }) => {
    return (
        <tr style={{ backgroundColor: "#fff" }}>
            <td
                className='loading'
                style={{ display: "revert", padding: "0" }}
                colSpan={col}
            >
                <div className='box'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </td>
        </tr>
    );
};

export default Loading;
