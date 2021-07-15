import Swal from "sweetalert2";

const showAlert = {
  error(
    title,
    text,
    showCancelButton,
    confirmButtonText,
    cancelButtonText = "Cancel",
    allowOutsideClick = true
  ) {
    return Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton,
      confirmButtonText,
      cancelButtonText,
      allowOutsideClick,
    });
  },
  success(
    title,
    text,
    showCancelButton,
    confirmButtonText,
    cancelButtonText = "Cancel",
    allowOutsideClick = true
  ) {
    return Swal.fire({
      title,
      text,
      icon: "success",
      showCancelButton,
      confirmButtonText,
      cancelButtonText,
      allowOutsideClick,
    });
  },
};

export default showAlert;
