import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// eslint-disable-next-line react/prop-types
export default function DialogVegetable({ open, handleClose }) {
  return (
    <div>
      <Dialog maxWidth open={open} onClose={handleClose}>
        <DialogTitle>Thêm nông sản lên sàn</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Qua sàn thương mại điện tử, người tiêu dùng có thể kết nối mua trực tiếp nông sản mà
            không phải qua trung gian, giúp tiết kiệm đáng kể chi phí.
          </DialogContentText>
          <TextField autoFocus margin="normal" id="name" label="Tên nông sản" fullWidth />
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Loại nông sản"
            type="email"
            fullWidth
          />
          <TextField autoFocus margin="normal" id="name" label="Xuất xứ" type="email" fullWidth />
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Ngày thu hoạch"
            type="email"
            fullWidth
          />
          <TextField autoFocus margin="normal" id="name" label="Số mùa" type="email" fullWidth />
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Giá trung bình qua các mùa"
            type="email"
            fullWidth
          />
          <TextField autoFocus margin="normal" id="name" label="Số lượng" type="email" fullWidth />
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Mô tả chi tiết"
            type="email"
            fullWidth
            multiline
            rows={6}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleClose}>Tạo mới</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
