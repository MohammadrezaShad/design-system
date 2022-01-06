import React, {ReactText, useRef} from 'react';
import {
  Bounce,
  Flip,
  Slide,
  toast as toastify,
  ToastPosition,
  ToastTransition,
  Zoom,
} from 'react-toastify';

import Alert from '../components/Alert';

interface ToastProps {
  position?: ToastPosition;
  disableAutoClose?: boolean;
  autoClose?: boolean | number;
  pauseOnHover?: boolean;
  type?: string;
  draggable?: boolean;
  transition?: ToastTransition;
  closeOnClick?: boolean;
}

export const useToast = ({
  position = toastify.POSITION.BOTTOM_LEFT,
  transition = Flip,
  closeOnClick = false,
}: ToastProps = {}) => {
  const {current: options} = useRef({
    position,
    hideProgressBar: true,
    transition,
    closeButton: false,
    closeOnClick,
  });

  const toast = () =>
    toastify(
      ({closeToast}) => (
        <Alert
          action={
            <button type="button" onClick={closeToast}>
              x
            </button>
          }
          text="red"
        />
      ),
      options,
    );
  toast.info = () => toastify('info', options);
  toast.success = () => toastify('success', options);
  toast.error = () => toastify('error', options);
  toast.warning = () => toastify('warning', options);
  toast.dismiss = (toastId: ReactText) => {
    toast.dismiss(toastId);
  };
  toast.dismissAll = () => {
    toast.dismissAll();
  };
  toast.position = toastify.POSITION;
  toast.transition = {
    Flip,
    Bounce,
    Zoom,
    Slide,
  };

  return toast;
};
