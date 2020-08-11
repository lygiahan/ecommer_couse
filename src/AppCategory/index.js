import React, { Fragment } from "react";
import { Row, Col, Card, Typography } from "antd";

export default function AppCategory() {
  return (
    <Fragment>
      <Typography.Title level={3}>Danh mục tốt nhất</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col md={6}>
          <Card
            hoverable
            cover={
              <img alt="img" src="https://i.udemycdn.com/home/top-categories/lohp-category-design.jpg" />
            }
          >
            <Card.Meta title="Thiết kế" />
          </Card>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            cover={
              <img alt="img" src="https://i.udemycdn.com/home/top-categories/lohp-category-development.jpg" />
            }
          >
            <Card.Meta title="Phát triển" />
          </Card>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            cover={
              <img alt="img" src="https://i.udemycdn.com/home/top-categories/lohp-category-marketing.jpg" />
            }
          >
            <Card.Meta title="Tiếp thị" />
          </Card>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            cover={
              <img alt="img" src="https://i.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg" />
            }
          >
            <Card.Meta title="CNTT và Phần mềm" />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col md={6}>
          <Card
            hoverable
            cover={
              <img alt="img" src="https://i.udemycdn.com/home/top-categories/lohp-category-business.jpg" />
            }
          >
            <Card.Meta title="Phát triển cá nhân" />
          </Card>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            cover={
              <img alt="img" src="https://i.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg" />
            }
          >
            <Card.Meta title="Kinh doanh" />
          </Card>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            cover={
              <img alt="img" src="https://i.udemycdn.com/home/top-categories/lohp-category-photography.jpg" />
            }
          >
            <Card.Meta title="Nhiếp ảnh" />
          </Card>
        </Col>
        <Col md={6}>
          <Card
            hoverable
            cover={
              <img alt="img" src="https://i.udemycdn.com/home/top-categories/lohp-category-music.jpg" />
            }
          >
            <Card.Meta title="Âm nhạc" />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
