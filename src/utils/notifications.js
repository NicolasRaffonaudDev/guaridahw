import { toast } from "react-toastify";
import { toastConfig } from "./toastConfig";
import Swal from "sweetalert2";

// Funciones para toast
export const showSuccessToast = (message) => {
  toast.success(message, toastConfig.success);
};

export const showInfoToast = (message) => {
  toast.info(message, toastConfig.info);
};

export const showErrorToast = (message) => {
  toast.error(message, toastConfig.error);
};

export const showSuccessAlert = (message) => {
  toast.success(message, toastConfig.successAlert);
};

// Funciones para Swal (SweetAlert2)
export const showConfirmationDialog = (title, text, confirmButtonText, cancelButtonText) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText,
    cancelButtonText,
  });
};

export const showSuccessSwal = (title, text) => {
  return Swal.fire({
    title,
    text,
    icon: "success",
    confirmButtonColor: "#3085d6",
  });
};

export const showErrorSwal = (title, text) => {
  return Swal.fire({
    title,
    text,
    icon: "error",
    confirmButtonColor: "#d33",
  });
};