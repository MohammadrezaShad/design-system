import {ToastContainer as ToastifyContainer} from 'react-toastify';
import styled from 'styled-components';

export const ToastContainer = styled(ToastifyContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
  autoClose: 5000,
  rtl: true,
})`
  /* .toast-container */

  /* .toast is passed to toastClassName */
  .toast {
    padding: 0;
  }

  button[aria-label='close'] {
    display: none;
  }

  /* .bodrtly is passed to bodyClassName */
  .body {
    padding: 0;
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;
