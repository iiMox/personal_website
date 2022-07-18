import React from "react";
import axios from "axios";
import { deleteImage } from "../../actions/image";
import "./DeleteWidget.css";

const DeleteWidget = ({ reference, endPoint, _id, image }) => {
    const deleteOperation = async () => {
        deleteImage(image);
        const res = await axios.delete(
            `/${endPoint.slice(0, endPoint.length - 1)}/${_id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        reference.current.style.display = "none";

        console.log(res.data);
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
