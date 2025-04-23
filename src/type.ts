export type TodoStyle  = {
    id: number;
    title: string;
    date: string;
};


export type DeleteDialogProps = {
    onClose: (value: boolean) => void
    title?: string
    message?: string
  }