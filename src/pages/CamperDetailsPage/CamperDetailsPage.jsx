import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getItemById } from "../../redux/catalog/thunks";
import { useParams } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CamperDetails";

function CamperDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getItemById(id));
  }, [dispatch, id]);
  return <CamperDetails />;
}

export default CamperDetailsPage;
