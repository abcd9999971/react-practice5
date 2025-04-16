import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material'
import type { DeleteDialogProps }  from '@/type.ts';


export function DeleteDialog(props: DeleteDialogProps) {
  const { onClose, title, message } = props

  return (
    <Dialog open onClose={() => onClose('close')}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
        <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
         <Button onClick={() => onClose('ok')}>OK</Button>
         <Button onClick={() => onClose('cancel')} autoFocus>
          Cancel
        </Button>
    </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog