import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getItemById } from "../../redux/catalog/thunks";
import { useParams } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import s from "./CamperDetailsPage.module.css";

function CamperDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getItemById(id));
  }, [dispatch, id]);

  return (
    <section className={s.camperDetailsPage}>
      <div className={s.container}>
        <CamperDetails />
      </div>
    </section>
  );
}

export default CamperDetailsPage;
