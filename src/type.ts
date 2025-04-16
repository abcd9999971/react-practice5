export type TodoStyle  = {
    id: number;
    title: string;
    date: string;
};


export type DeleteDialogProps = {
    onClose: (value: string) => void
    title?: string
    message?: string
  }