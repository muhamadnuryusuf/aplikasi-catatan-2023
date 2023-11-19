import { DeleteButton } from "./DeleteButton";

import PropTypes from "prop-types";

function TodoRow({ no, title, createdAt, children, id, index, onDelete }) {
  return (
    <div className="text-start fs-4 bg-light text-dark rounded">
      <div className="card-header p-2 d-flex justify-content-between">
        <div>Catatan {no}</div>
        <DeleteButton index={index} id={id} onDelete={onDelete} />
      </div>
      <div class="card p-2 mb-2 bg-white bg-success">
        <div className="card-header d-flex justify-content-between">
          <h5 class="card-title">{title}</h5>
          <div class="card-text fs-5">{createdAt}</div>
        </div>
        <p class="card-text mb-5 text-start">{children}</p>
      </div>
    </div>
  );
}

TodoRow.propTypes = {
  no: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { TodoRow };
