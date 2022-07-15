import React from "react";
import "./Row.css";

import editIcon from "../../../images/edit.webp";
import deleteIcon from "../../../images/delete.webp";

const Row = ({ editable, data, editRef, deleteRef, _id, changeId }) => {
    return (
        <tr>
            {data.map((col, index) => {
                return (
                    <td key={index}>
                        {index === 1 ? (
                            <img
                                src={col}
                                alt='Icon'
                                style={{ display: "block", margin: "0 auto" }}
                            />
                        ) : (
                            String(col).charAt(0).toUpperCase() +
                            String(col).slice(1)
                        )}
                    </td>
                );
            })}
            <td className='actions'>
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
                        changeId(_id);
                    }}
                />
            </td>
        </tr>
    );
};

export default Row;
