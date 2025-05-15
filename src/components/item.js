import React from "react";


function Item(props) {
    return (
      <div className="col-md-4 col-sm-6 mb-4">
        <div className="card h-100">
          <img
            src={props.avatar || "https://via.placeholder.com/150"}
            alt={props.name}
            className="card-img-top"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description || "Không có mô tả."}</p>
            <p className="card-text">Giá: {props.price || "?"} USD</p>
            <p className="card-text">Số lượng: {props.quantity || 0}</p>
            <p className="card-text">
              Ngày tạo:{" "}
              {props.createdAt
                ? new Date(props.createdAt).toLocaleDateString()
                : "Chưa rõ"}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  
export default Item;