import { Alert, Snackbar } from '@mui/material';

export const notificationSuccess = ({ message = '', open = true, handleClose }) => (
  <>
    <Snackbar
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert severity="success" sx={{ width: '100%' }} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  </>
);

export const notificationError = ({ message = '', open = true }) => (
  <>
    <Snackbar open={open} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  </>
);

export const notificationWarning = ({ message = '', open = true }) => (
  <>
    <Snackbar open={open} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert severity="warning" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  </>
);

export const notificationInfo = ({ message = '', open = true }) => (
  <>
    <Snackbar open={open} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert severity="info" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  </>
);
