import "./Modal.css";

export default function Modal({ children, handleClose }) {
  return (
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: "#ff4500",
          textAlign: "center",
        }}
      >
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
