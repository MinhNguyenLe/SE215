import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// eslint-disable-next-line react/prop-types
export default function DetailVegetable({ open, handleClose }) {
  return (
    <div>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Chi tiết nông sản - Kiwi</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Qua sàn thương mại điện tử, người tiêu dùng có thể kết nối mua trực tiếp nông sản mà
            không phải qua trung gian, giúp tiết kiệm đáng kể chi phí.
          </DialogContentText>
          <br />
          <DialogContentText>
            <strong>Tên nông sản: </strong>Kiwi
          </DialogContentText>
          <DialogContentText>
            <strong>Loại nông sản: </strong>
            Cây ăn quả
          </DialogContentText>
          <DialogContentText>
            <strong>Xuất xứ: </strong>
            Hội An
          </DialogContentText>
          <DialogContentText>
            <strong>Số mùa vụ: </strong>3
          </DialogContentText>
          <DialogContentText>
            <strong>Giá trung bình mỗi mùa vụ: </strong>200,000 VND
          </DialogContentText>
          <DialogContentText>
            <strong>Ngày thu hoạch: </strong>11/11/2023
          </DialogContentText>
          <DialogContentText>
            <strong>Số lượng: </strong>2 tấn
          </DialogContentText>
          <br />
          <DialogContentText>
            <strong>Chi tiết: </strong>
            <br />
            Quả kiwi hay quả lý gai Trung Quốc là quả mọng ăn được của một số loài dây leo thân gỗ
            trong chi Actinidia. Nhóm cây kiwi trồng phổ biến nhất có hình bầu dục, có kích thước
            bằng quả trứng gà mái lớn: chiều dài 5–8 cm và đường kính 4,5–5,5 cm
            <br />
            Quả kiwi hay quả lý gai Trung Quốc là quả mọng ăn được của một số loài dây leo thân gỗ
            trong chi Actinidia. Nhóm cây kiwi trồng phổ biến nhất có hình bầu dục, có kích thước
            bằng quả trứng gà mái lớn: chiều dài 5–8 cm và đường kính 4,5–5,5 cm
            <br />
            Quả kiwi hay quả lý gai Trung Quốc là quả mọng ăn được của một số loài dây leo thân gỗ
            trong chi Actinidia. Nhóm cây kiwi trồng phổ biến nhất có hình bầu dục, có kích thước
            bằng quả trứng gà mái lớn: chiều dài 5–8 cm và đường kính 4,5–5,5 cm
            <br />
            Quả kiwi hay quả lý gai Trung Quốc là quả mọng ăn được của một số loài dây leo thân gỗ
            trong chi Actinidia. Nhóm cây kiwi trồng phổ biến nhất có hình bầu dục, có kích thước
            bằng quả trứng gà mái lớn: chiều dài 5–8 cm và đường kính 4,5–5,5 cm
          </DialogContentText>
          <br />
          <DialogContentText>
            <strong>Lợi thế cạnh tranh: </strong>
            <br />
            Doanh thu cao
            <br />
            Doanh thu cao
            <br />
            Doanh thu cao
          </DialogContentText>
          <br />
          <DialogContentText>
            <strong>Các thời điểm thu hoạch tốt: </strong>
            <br />
            Tháng 9
            <br />
            Tháng 10
            <br />
            Tháng 11
          </DialogContentText>
          <br />
          <DialogContentText>
            <strong>Thống kê lợi nhuận và nhận xét từ các nhà đầu tư trước: </strong>
            <br />
            tốt
            <br />
            Lợi nhuậ cao vao Tháng 10
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleClose}>Đầu tư</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
