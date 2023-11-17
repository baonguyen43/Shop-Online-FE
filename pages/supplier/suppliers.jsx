import React, { useCallback, useState } from "react";
import {
  
  Form,
  message,
 
} from "antd";
import axiosClient from "../../libraries/axiosClient";
import SupplierForm from "../../components/Form/SupplierForm";

const MESSAGE_TYPE = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
};
export default function SupplierPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const onShowMessage = useCallback(
    (content, type = MESSAGE_TYPE.SUCCESS) => {
      messageApi.open({
        type: type,
        content: content,
      });
    },
    [messageApi]
  );
  const [createForm] = Form.useForm();
  const [refresh, setRefresh] = useState(0);
  const onFinish = useCallback(
    async (values) => {
      try {
        console.log("Nguyenne values Nguyenne", values);
        const res = await axiosClient.post("/suppliers", {
          ...values,
          isDeleted: false,
        });

        setRefresh((preState) => preState + 1);
        createForm.resetFields();

        onShowMessage(res.data.message);
      } catch (error) {
        if (error?.response?.data?.errors) {
          error.response.data.errors.map((e) =>
            onShowMessage(e, MESSAGE_TYPE.ERROR)
          );
        }
      }
    },
    [createForm, onShowMessage]
  );
  return (
    <>
      {contextHolder}
      <SupplierForm
        form={createForm}
        onFinish={onFinish}
        formName="add-suppliers-form"
        optionStyle={{
          maxWidth: 650,
          margin: "60px auto",
        }}
      />
    </>
  );
}
