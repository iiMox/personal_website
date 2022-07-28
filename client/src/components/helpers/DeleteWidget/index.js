import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSkill } from "../../actions/skill";
import { deleteService } from "../../actions/service";
import { deleteProject } from "../../actions/project";
import { deleteMessage } from "../../actions/message";
import "./DeleteWidget.css";

const DeleteWidget = ({ reference }) => {
    const row = useSelector((state) => state.row);

    const dispatch = useDispatch();

    const deleteOperation = async () => {
        if (row.type === "skill") {
            dispatch(deleteSkill(row._id, row.icon));
        } else if (row.type === "service") {
            dispatch(deleteService(row._id, row.icon));
        } else if (row.type === "project") {
            dispatch(deleteProject(row._id, row.preview));
        } else {
            dispatch(deleteMessage(row._id));
        }
        reference.current.style.display = "none";
    };

    return (
        <div className='delete-widget' ref={reference}>
            <div className='wrapper'>
                <h3>Proceed With Operation</h3>
                <div className='buttons'>
                    <button
                        className='true'
                        onClick={(e) => {
                            e.preventDefault();
                            deleteOperation();
                        }}
                    >
                        True
                    </button>
                    <button
                        className='false'
                        onClick={(e) => {
                            e.preventDefault();
                            reference.current.style.display = "none";
                        }}
                    >
                        False
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteWidget;
