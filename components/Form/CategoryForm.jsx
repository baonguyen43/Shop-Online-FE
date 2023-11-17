import React, { memo } from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';

import { convertOptionSelect } from '../utils';

const { Option } = Select;

function CategoryForm(props) {
  const {
    isHiddenSubmit,

    formName,

    form,
    optionStyle,
    suppliers,
    categories,

    onFinish,
  } = props;

  return (
    <div style={{textAlign: "center", fontSize: 20, fontWeight:700, marginTop:60}}> 
    <div> Thêm mới Danh mục</div>
    <Form
      form={form}
      className=""
      name={formName}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={optionStyle}
      onFinish={onFinish}
      initialValues={{
        isDeteleted: false
      }}
    >
      <Form.Item
        label="Tên danh mục"
        name="name"
        rules={[
          {
            required: true,
            message: 'Vui lòng điền tên',
          },
          {
            min: 10,
            message: 'Vui lòng nhập trên 10 ký tự',
          },
        ]}
      >
        <Input />
        
      </Form.Item>

      <Form.Item label="Mô tả" name="description" 
      rules={[
        {required: true,
        message:"vui lòng nhập"},
        {max: 3000,
          message:"tối đa 3000 ký tự "}
      ]}>
        <Input />
      </Form.Item>

      {!isHiddenSubmit && (
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      )}
    </Form>
    </div>
  );
}

export default memo(CategoryForm);
