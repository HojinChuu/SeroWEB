import Swal from "sweetalert2";

const showAlert = {
  error(title, text, showCancelButton, confirmButtonText) {
    return Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton,
      confirmButtonText,
    });
  },
  success(title, text, showCancelButton, confirmButtonText) {
    return Swal.fire({
      title,
      text,
      icon: "success",
      showCancelButton,
      confirmButtonText,
    });
  },
};

export default showAlert;
