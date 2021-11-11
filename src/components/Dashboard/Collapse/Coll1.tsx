import React, { Fragment, useState } from "react";
import { Row, Col, Table, Input, Modal } from "antd";
import Collapse1 from "../../../data/Coll1.json";
import { IconInfo } from "../../../assets/svg/icon";
import DashBoardCss from "../Dashboard.module.css";
import "../Dashboard.css"

interface ICourse {
  objectname: string;
  class: string;
  time: string;
  date: string;
}

const data: ICourse[] = Collapse1;

const Coll1 = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);

  const columns = [
    {
      title: '',
      dataIndex: 'objectname',
      render: (text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <span className="font-bold">{text}</span>,

    },
    {
      title: '',
      dataIndex: 'class',

    },
    {
      title: '',
      dataIndex: 'time',
    },
    {
      title: '',
      dataIndex: 'date',
    },
    {
      title: '',
      dataIndex: 'status',
      render: (status: boolean) =>
        status ? (
          <span className={`italic ${DashBoardCss.statusdone}`}>Đã hoàn thành</span>
        ) : (
          <span className={`italic ${DashBoardCss.statusnotdone}`}>Chưa hoàn thành</span>
        ),
    },
    {
      title: "",
      render: () => (
        <>
          <button className={DashBoardCss.btn__img} onClick={showModalDel}>
            <img src={IconInfo} alt="IconEdit" />
          </button>
        </>


      ),
    },
  ];

  const showModalDel = (): void => {
    setIsModalDel(true);
  };

  const handleOkDel = (): void => {
    setIsModalDel(false);
  };

  const handleCancelDel = (): void => {
    setIsModalDel(false);
  };

  return (
    <Fragment>
      <>
        <Row>
          <Col span={24}>
            <Table
              className={`table__coll font-normal ${DashBoardCss.table__coll}`}
              columns={columns}
              dataSource={data}
              pagination={false}
              scroll={{ y: 600 }}
            />
          </Col>
        </Row>
      </>
    </Fragment>
  );
};

export default Coll1;
