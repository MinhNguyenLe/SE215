import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// eslint-disable-next-line react/prop-types
export default function DialogBlog({ open, handleClose }) {
  return (
    <div>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Thêm bài chia sẻ</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Chia sẻ kiến thức là một hoạt động thông qua đó kiến thức được trao đổi giữa con người,
            bạn bè, gia đình, cộng đồng hoặc các tổ chức. Các tổ chức đã nhận ra rằng kiến thức tạo
            thành một tài sản vô hình có giá trị để tạo ra và duy trì các lợi thế cạnh tranh.
          </DialogContentText>
          <TextField autoFocus margin="normal" id="name" label="Tiêu đề" fullWidth />
          <TextField autoFocus margin="normal" id="name" label="Thời gian đọc dự tính" fullWidth />
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Nội dung"
            fullWidth
            multiline
            rows={12}
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
