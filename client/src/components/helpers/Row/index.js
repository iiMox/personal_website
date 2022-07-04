import React from "react";
import "./Row.css";

import editIcon from "../../../images/edit.webp";
import deleteIcon from "../../../images/delete.webp";

const Row = ({ editable, data, editRef, deleteRef }) => {
    return (
        <tr>
            {data.map((col) => {
                return <td>{col}</td>;
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
