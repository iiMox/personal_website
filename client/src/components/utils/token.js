export const token = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};
