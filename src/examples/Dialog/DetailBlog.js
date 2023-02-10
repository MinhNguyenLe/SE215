import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// eslint-disable-next-line react/prop-types
export default function DetailBlog({ open, handleClose }) {
  return (
    <div>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Chi tiết bài chia sẻ</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Qua sàn thương mại điện tử, người tiêu dùng có thể kết nối mua trực tiếp nông sản mà
            không phải qua trung gian, giúp tiết kiệm đáng kể chi phí.
          </DialogContentText>
          <br />
          <DialogContentText>
            <strong>Tên bài viết: </strong>10 Lưu Ý Khi Xuất Khẩu Hàng Hóa Nông Sản Sang Châu Âu
          </DialogContentText>
          <br />
          <DialogContentText>
            Châu Âu là một trong những thị trường rất tiềm năng cho xuất khẩu hàng hóa nông sản.
            Trước khi bạn quyết định xuất khẩu nông sản sang Châu Âu thì có một số điều cần được xem
            xét. Việc nhập khẩu nông sản sang châu Âu khá hạn chế do điều kiện nhiệt độ và khí hậu ở
            đó không thuận lợi cho nông sản.
            <br />
            Sản xuất nông nghiệp của Châu Âu bao gồm các sản phẩm như rau, ngũ cốc, trái cây và
            đường. Một phần chính của các sản phẩm nông nghiệp được xuất khẩu sang châu Âu, bao gồm
            các sản phẩm từ sữa, thịt gia cầm, trái cây, rau và ô liu.
            <br />
            Một số mặt hàng trái cây, nông sản của Việt Nam được xuất khẩu vận chuyển nhiều sang các
            nước Châu Âu là cafe, rau củ, vải, nhãn, chanh leo, dừa và mít cũng như các sản phẩm từ
            2 loại nông sản này… Trong số liệu do Eurostat công bố năm 2017, tổng giá trị xuất nhập
            khẩu các sản phẩm nông nghiệp giữa thế giới và châu Âu là 275 tỷ euro.
            <br />
            Điều đầu tiên bạn cần lưu ý khi xuất khẩu hàng hóa nông sản sang Châu Âu là chất lượng
            nông sản. Điều này là bởi ý thức của người dân Châu Âu về sức khỏe rất cao và thói quen
            ăn uống lành mạnh của họ. Trong năm 2017, rau là một phần chính của nông nghiệp nhập
            khẩu sang châu Âu, chiếm khoảng 48%. Nhập khẩu thực phẩm và nông sản động vật lần lượt
            là 32% và 20%. Luật thực phẩm của EU yêu cầu cơ quan có thẩm quyền của nước xuất khẩu
            đưa ra các đảm bảo về sự tuân thủ hoặc tương đương với các yêu cầu của EU đối với thực
            phẩm có nguồn gốc động vật.
            <br />
            Khi xuất khẩu sang Châu Âu, bạn nên chọn các nước tiêu thụ nhiều rau và nông sản hơn khi
            xuất khẩu sang châu Âu. Theo số liệu của FAO, nguồn cung rau ở Nam Âu khá cao so với Bắc
            Âu. Ở Bắc Âu, mức cung cấp trung bình là 195 g/người/ngày, tức là 71kg/người/năm. Tuy
            nhiên, ở Nam Âu, có nguồn cung cấp trung bình 756 g mỗi người mỗi ngày.
            <br />
            Bạn cần tìm hiểu và nghiên cứu sẽ xuất cho nước nào trước khi bắt đầu quá trình xuất
            khẩu hàng hóa nông sản sang Châu Âu vì WHO ước tính rằng ở hơn một nửa số quốc gia thuộc
            khu vực Châu Âu có mức tiêu thụ trái cây và rau quả thấp hơn 400 gam mỗi ngày. Ở một
            phần ba số các nước thuộc khu vực Châu Âu, mức tiêu thụ ít hơn 300 gram mỗi ngày.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
          <Button onClick={handleClose}>Yêu thích</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
