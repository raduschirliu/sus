import { useParams } from "react-router-dom";
import api from "../../api/api";
import Link from "../../models/link";

const Redirect = () => {
  const params: any = useParams();
  
  if (params && params.id) {
    api.getLink(params.id)
      .then((res: any) => {
        window.location = res.link;
      })
      .catch(err => {
        console.error(err);
      });
  }

  return null;
}

export default Redirect;