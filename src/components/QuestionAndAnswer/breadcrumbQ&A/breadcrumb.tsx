import React from "react";
import {  Breadcrumb } from 'antd';
import breadCrumbCss from './breadcrumb.module.css'

function BreadcrumbQA() {
    return (
      <>
        <div className={breadCrumbCss.title}>
          <Breadcrumb separator=">">
            <Breadcrumb.Item className={breadCrumbCss.tittle__breadcrumb__left}>
              Thông tin lớp học
            </Breadcrumb.Item>
            <Breadcrumb.Item className={breadCrumbCss.tittle__breadcrumb__left}>
              Toán đại số
            </Breadcrumb.Item>
            <Breadcrumb.Item className={breadCrumbCss.tittle__breadcrumb__right}>
              Hỏi đáp
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
    
      </>
    );
  }

export default BreadcrumbQA
