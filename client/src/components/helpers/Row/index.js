import React from "react";
import "./Row.css";

import editIcon from "../../../images/edit.webp";
import deleteIcon from "../../../images/delete.webp";

const Row = ({ editable, data, editRef, deleteRef }) => {
    return (
        <tr>
            {data.map((col, index) => {
                return (
                    <td key={index}>
                        {typeof col === "object" ? (
                            <img
                                src={`data:image/png;base64,${btoa(
                                    String.fromCharCode(...new Uint8Array(col))
                                )}`}
                                alt='Icon'
                            />
                        ) : (
                            String(col).charAt(0).toUpperCase() +
                            String(col).slice(1)
                        )}
                    </td>
                );
            })}
            <td>
                {editable ? (
                    <img
                        src={editIcon}
                        alt='Edit'
                        onClick={(e) => {
                            editRef.current.style.display = "flex";
                        }}
                    />
                ) : (
                    ""
                )}
                <img
                    src={deleteIcon}
                    alt='delete'
                    onClick={(e) => {
                        deleteRef.current.style.display = "flex";
                    }}
                />
            </td>
        </tr>
    );
};

export default Row;
