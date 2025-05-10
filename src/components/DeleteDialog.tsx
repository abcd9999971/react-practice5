import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material'

import type { DeleteDialogProps }  from '@/type.ts';


export function DeleteDialog(props: DeleteDialogProps) {
  const { onClose, title, message } = props

  const ok = () => {
    onClose(true)
  }
  const cancel = () => {
    onClose(false)
  }

  return (
    <Dialog open onClose={() => onClose(true)}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
        <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={ok}>OK</Button>
        <Button onClick={cancel} autoFocus>
          Cancel
        </Button>
    </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog