import { useState } from "react";

import DeleteDialog from "./DeleteDialog";


export const DeleteDialogContainer = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setOpen(false);
    };


    return (
    <DeleteDialog
        open={open}
        onClose={handleClose}
        onDelete={handleDelete}
    />
    );
};

export default DeleteDialogContainer;

