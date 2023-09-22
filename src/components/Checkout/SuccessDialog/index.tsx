import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

interface SuccessDialog {
  open: boolean;
  handleClose: () => void;
}
export const SuccessDialog = ({ open, handleClose }: SuccessDialog) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Compra Efetuada com Sucesso
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Compra Efetuada com sucesso. Todos os dados serão enviados para o seu
          email.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
