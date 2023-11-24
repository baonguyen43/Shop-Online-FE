import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";
import axiosClient from "@/#@/libraries/axiosClient";

const LoginPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");

  const onLogin = async (values: any) => {
    try {
      const url = "/auth/login";

      const res = await axiosClient.post(url, values);

      const { token, refreshToken } = res.data;

      localStorage.setItem("TOKEN", token);
      localStorage.setItem("REFRESH_TOKEN", refreshToken);

      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;

      if (token) {
        setToken(token);
      }
    } catch (err) {
      console.error("««««« err »»»»»", err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("TOKEN");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [router, token]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
