import axios from "axios";

export const uploadImage = async (image) => {
    const formData = new FormData();

    formData.append("image", image);

    try {
        const res = await axios.post("/image", formData);

        return res.data;
    } catch (e) {}
};

export const deleteImage = async (url) => {
    const publicId = url
        .slice(url.indexOf("."), url.length - 1)
        .slice(url.lastIndexOf("/", url.length - 1));
    try {
        const res = await axios.delete("/image", publicId);

        console.log(publicId);

        return publicId;
    } catch (e) {}
};
