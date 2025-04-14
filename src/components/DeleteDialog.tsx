import { Dialog,  DialogContent, DialogTitle} from '@mui/material';

type DeleteDialogProps = {
    open: boolean;
    onClose: () => void;
    onDelete: () => void;
};

export const  DeleteDialog = ({ open , onClose , onDelete}:DeleteDialogProps ) => {
    return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>警告</DialogTitle>
        <DialogContent>
            <p>本当に削除しますか？</p>
            <button
                onClick={() => {
                    onClose();
                }
            }
            >キャンセル</button>
            <button
                onClick={() => {
                    onDelete();
                    onClose();
                }
            }
            >削除</button>
        </DialogContent>
    </Dialog>
    );
}

export default DeleteDialog;