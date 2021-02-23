import React, { Fragment } from "react";

const QAitem = () => {
  return (
    <Fragment>
      <tr className="text-center">
        <td>1</td>
        <td>[배송문의]</td>
        <td>세로엽서가 안와요.</td>
        <td>추호진</td>
        <td>2021.03.01</td>
      </tr>
      <tr className="text-center">
        <td>2</td>
        <td>[배송문의]</td>
        <td>세로엽서가 안와요.</td>
        <td>추호진</td>
        <td>2021.03.01</td>
      </tr>
      <tr className="text-center">
        <td>3</td>
        <td>[배송문의]</td>
        <td>세로엽서가 안와요.</td>
        <td>추호진</td>
        <td>2021.03.01</td>
      </tr>
      <tr className="text-center">
        <td>4</td>
        <td>[배송문의]</td>
        <td>세로엽서가 안와요.</td>
        <td>추호진</td>
        <td>2021.03.01</td>
      </tr>
      <tr className="text-center">
        <td colSpan="5" id="deskEmpty">
          게시글이 없습니다.
        </td>
      </tr>
    </Fragment>
  );
};

export default QAitem;
