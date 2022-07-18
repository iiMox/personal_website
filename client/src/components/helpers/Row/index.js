import React from "react";
import { useDispatch } from "react-redux";
import { setRow } from "../../actions/row";
import "./Row.css";

import editIcon from "../../../images/edit.webp";
import deleteIcon from "../../../images/delete.webp";

const Row = ({ editable, data, editRef, deleteRef, _id, type }) => {
    const dispatch = useDispatch();

    const setCurrent = () => {
        let row = { type, _id };

        if (type === "skill") {
            row = {
                ...row,
                icon: data[1],
                skill: data[2],
                position: data[3],
                visibility: data[4],
            };
        } else if (type === "service") {
            row = {
                ...row,
                icon: data[1],
                service: data[2],
                description: data[3],
                position: data[4],
                visibility: data[5],
            };
        } else if (type === "project") {
            row = {
                ...row,
                preview: data[1],
                title: data[2],
                link: data[3],
                position: data[4],
            };
        } else {
            row = {
                ...row,
                sender: data[1],
                email: data[2],
                content: data[3],
                date: data[4],
            };
        }
        dispatch(setRow(row));
    };

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
                            setCurrent();
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
                        setCurrent();
                        deleteRef.current.style.display = "flex";
                    }}
                />
            </td>
        </tr>
    );
};

export default Row;
