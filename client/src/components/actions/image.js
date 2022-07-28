import axios from "axios";

export const uploadImage = async (image) => {
    const formData = new FormData();

    formData.append("image", image);

    try {
        const res = await axios.post("/api/image", formData);

        return res.data;
    } catch (e) {}
};

export const deleteImage = async (url) => {
    try {
        const publicId = url.slice(
            url.lastIndexOf("/") + 1,
            url.lastIndexOf(".")
        );

        await axios.delete(`/image/${publicId}`);
    } catch (e) {}
};
