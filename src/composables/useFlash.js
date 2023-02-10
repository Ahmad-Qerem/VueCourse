import swal from "sweetalert";
export function useFlash() {
    function flash(message) { 
        return swal("success", "Youer Message is :" + message, "success");
    }
    return { flash };
 }