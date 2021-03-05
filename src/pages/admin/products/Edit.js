import React from 'react';
import { Form, Card, Input, Button, InputNumber } from 'antd';

const formLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 8
  }
}

function Edit() {

  const onFinish = (values) => {
    console.log(values);
    
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <Card title="商品编辑">
      <Form
        layout="horizontal"   
        {...formLayout}
        name="commodity"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item 
          label="名称"
          name="name"
          rules={[
            { 
              required: true,
              message: "商品名不能为空!"
            },
          ]}
        >
          <Input placeholder="请输入商品名" />
        </Form.Item>

        <Form.Item 
          label="价格"
          name="price"
          rules={[
            { 
              required: true,
              message: "价格不能为空!"
            },
          ]}
        >
          <InputNumber
            placeholder="请输入价格"
            min={0} 
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Edit;