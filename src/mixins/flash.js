import swal from "sweetalert";

export default {
  methods: {
    flash(message) {
      swal("Success !", "The Message is :" + message, "success");
    },
  },
};
