import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 5000,
});

function showSuccess(title, body = '') {
  Toast.fire(title, body, 'success');
}

function showError(title, body = '') {
  Toast.fire(title, body, 'error');
}

export default {
  showSuccess,
  showError,
}
