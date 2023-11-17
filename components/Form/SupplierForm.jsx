import React, { memo } from 'react';
import { Button, Form, Input, Select } from 'antd';


const { Option } = Select;

function SupplierForm(props) {
  const {
    isHiddenSubmit,
    formName,
    form,
    optionStyle,
    onFinish,
  } = props;

  return (
    <div style={{textAlign: "center", fontSize: 20, fontWeight:700, marginTop:60}}>
      <p> Thêm mới Nhà Cung Cấp </p>
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
        label="Tên nhà cung cấp"
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

      <Form.Item label="Địa chỉ" name="address" 
      rules={[
        {required: true,
        message:"vui lòng nhập"},
        {max: 500,
          message:"tối đa 3000 ký tự "},
          {min: 5,
            message:"tối thiểu 5 ký tự "}
      ]}>
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="email" 
      rules={[
        {required: true,
        message:"vui lòng nhập"},
      
          {type: 'email',
            message:"Sai định dạng "}
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Số điện thoại" name="phoneNumber" 
      rules={[
        {required: true,
        message:"vui lòng nhập sdt"},
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

export default memo(SupplierForm);
