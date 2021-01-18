import React, { Fragment } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const Tasks = () => {
  return (
    <Fragment>
      <div className="row p-4">
        <div className="row mr-auto toggle">
          <ToggleButtonGroup type="checkbox">
            <ToggleButton variant="light" value={1}>
              수신대기
            </ToggleButton>
            <ToggleButton variant="light" value={2}>
              제작중
            </ToggleButton>
            <ToggleButton variant="light" value={3}>
              배송중
            </ToggleButton>
            <ToggleButton variant="light" value={4}>
              배송완료
            </ToggleButton>
          </ToggleButtonGroup>
          <button className="btn btn-outline-primary rounded mr-2 ml-2">
            변경
          </button>
          <button className="btn btn-outline-danger rounded mr-2">삭제</button>
        </div>
        <form className="row ml-auto ml-3">
          <div>
            <input className="form-control" />
          </div>
          <button className="btn btn-sm btn-dark" type="submit">
            검색
          </button>
        </form>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-lg">
          <thead>
            <tr>
              <th>#</th>
              <th>번호</th>
              <th>유저</th>
              <th>주소</th>
              <th>우편번호</th>
              <th>전송날짜</th>
              <th>배송상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>sit</td>
              <td>sit</td>
              <td>sit</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>amet</td>
              <td>consectetur</td>
              <td>adipiscing</td>
              <td>sit</td>
              <td>sit</td>
              <td>elit</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Integer</td>
              <td>nec</td>
              <td>odio</td>
              <td>sit</td>
              <td>sit</td>
              <td>Praesent</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>libero</td>
              <td>Sed</td>
              <td>sit</td>
              <td>sit</td>
              <td>cursus</td>
              <td>ante</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>dapibus</td>
              <td>sit</td>
              <td>sit</td>
              <td>diam</td>
              <td>Sed</td>
              <td>nisi</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>Nulla</td>
              <td>sit</td>
              <td>sit</td>
              <td>quis</td>
              <td>sem</td>
              <td>at</td>
            </tr>
            <tr>
              <td>sit</td>
              <td>sit</td>
              <td>1,006</td>
              <td>nibh</td>
              <td>elementum</td>
              <td>imperdiet</td>
              <td>Duis</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>sagittis</td>
              <td>sit</td>
              <td>sit</td>
              <td>ipsum</td>
              <td>Praesent</td>
              <td>mauris</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>Fusce</td>
              <td>nec</td>
              <td>tellus</td>
              <td>sit</td>
              <td>sit</td>
              <td>sed</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>augue</td>
              <td>sit</td>
              <td>sit</td>
              <td>semper</td>
              <td>porta</td>
              <td>Mauris</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>massa</td>
              <td>Vestibulum</td>
              <td>sit</td>
              <td>sit</td>
              <td>lacinia</td>
              <td>arcu</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>eget</td>
              <td>nulla</td>
              <td>className</td>
              <td>sit</td>
              <td>sit</td>
              <td>aptent</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>taciti</td>
              <td>sit</td>
              <td>sit</td>
              <td>sit</td>
              <td>ad</td>
              <td>litora</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>torquent</td>
              <td>sit</td>
              <td>sit</td>
              <td>per</td>
              <td>conubia</td>
              <td>nostra</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Tasks;
