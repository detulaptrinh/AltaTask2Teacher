import React from "react";
import DashBoardCss from "./Dashboard.module.css";
import { Row, Col, Collapse } from "antd";
import DemoPie from "./ChartPie";
import Coll1 from "./Collapse/Coll1"

const { Panel } = Collapse;

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Row>
          <Col className="mr-20" span={8}>
            <div className={DashBoardCss.title}>
              <span className="font-bold">Tổng quan</span>
            </div>
            <div className="boxmain">
              <div className={"flex gap-8 mt-5"}>
                <div
                  className={`flex-col font-bold ${DashBoardCss.box} ${DashBoardCss.object}`}
                >
                  <div className={DashBoardCss.elipse1}></div>
                  <div className={DashBoardCss.elipse2}></div>
                  <div className={DashBoardCss.elipse3}></div>
                  <span className={DashBoardCss.number}>10</span>
                  <p className={DashBoardCss.box_title}>Khóa học của tôi</p>
                </div>
                <div
                  className={`flex-col font-bold ${DashBoardCss.box} ${DashBoardCss.class}`}
                >
                  <div className={DashBoardCss.elipse1}></div>
                  <div className={DashBoardCss.elipse2}></div>
                  <div className={DashBoardCss.elipse3}></div>
                  <span className={DashBoardCss.number}>2</span>
                  <p className={DashBoardCss.box_title}>Lớp học online</p>
                </div>
              </div>
              <div className={"flex gap-8 mt-10"}>
                <div
                  className={`flex-col font-bold ${DashBoardCss.box} ${DashBoardCss.test}`}
                >
                  <div className={DashBoardCss.elipse1}></div>
                  <div className={DashBoardCss.elipse2}></div>
                  <div className={DashBoardCss.elipse3}></div>
                  <span className={DashBoardCss.number}>8</span>
                  <p className={DashBoardCss.box_title}>Bài kiểm tra chưa chấm</p>
                </div>
                <div
                  className={`flex-col font-bold ${DashBoardCss.box} ${DashBoardCss.quiz}`}
                >
                  <div className={DashBoardCss.elipse1}></div>
                  <div className={DashBoardCss.elipse2}></div>
                  <div className={DashBoardCss.elipse3}></div>
                  <span className={DashBoardCss.number}>5</span>
                  <p className={DashBoardCss.box_title}>Hỏi đáp Q & A</p>
                </div>
              </div>
            </div>
            <div className={DashBoardCss.box_main_chart}>
              <div className={DashBoardCss.title_sub}>
                <span className="font-bold">Thống kê kết quả học tập của học viên</span>
              </div>
              <div className={`mt-5 flex justify-between items-center  ${DashBoardCss.box_chart}`}>
                <div className="w-1/2 mr-5">
                  <DemoPie />
                </div>
                <div className="w-1/2">
                  <div className="w-10/12">
                    <div className="flex justify-between">
                      <span className={`font-normal not-italic  ${DashBoardCss.sub}`}>Tổng số lớp:</span>
                      <p className={`font-bold ${DashBoardCss.number_sub} ${DashBoardCss.sub1}`}>10</p>
                    </div>
                    <div className="flex justify-between">
                      <span className={`font-normal not-italic  ${DashBoardCss.sub}`}>Tổng số học sinh giỏi:</span>
                      <p className={`font-bold ${DashBoardCss.number_sub} ${DashBoardCss.sub2}`}>300</p>
                    </div>
                    <div className="flex justify-between">
                      <span className={`font-normal not-italic  ${DashBoardCss.sub}`}>Tổng số học sinh khá:</span>
                      <p className={`font-bold ${DashBoardCss.number_sub} ${DashBoardCss.sub3}`}>125</p>
                    </div>
                    <div className="flex justify-between">
                      <span className={`font-normal not-italic  ${DashBoardCss.sub}`}>Tổng số học sinh trung bình:</span>
                      <p className={`font-bold ${DashBoardCss.number_sub} ${DashBoardCss.sub4}`}>75</p>
                    </div>
                    <div className="flex justify-between">
                      <span className={`font-normal not-italic  ${DashBoardCss.sub}`}>Tổng số học sinh yếu:</span>
                      <p className={`font-bold ${DashBoardCss.number_sub} ${DashBoardCss.sub5}`}>0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={15}>
            <div className={DashBoardCss.title}>
              <span className="font-bold">Tất cả khóa học</span>
            </div>
            <div className="box__collapse">
              <Collapse defaultActiveKey={['1']}>
                <Panel header="Học kỳ II - 2020" key={1}>
                  <Coll1 />
                </Panel>
                <Panel header="Học kỳ I - 2020" key={2} >
                  <Coll1 />
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
