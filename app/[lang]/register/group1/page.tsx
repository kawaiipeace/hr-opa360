"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icon } from "@iconify/react";
import RegisterGroup1 from "./register-group1";
import Link from "next/link";

const BlankPage = () => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Link href="/register">
            สมัครเป็น Candidate
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem className="text-primary">กลุ่มที่ 1</BreadcrumbItem>
      </Breadcrumbs>

      <div>
        <Alert className="border-none mt-5" dismissible>
          <Icon icon="ix:user-manual" className="h-6 w-6" />
          <AlertDescription>รายละเอียดคุณสมบัติเบื้องต้นของผู้สมัครเพิ่มเติม&nbsp;
            <a href="#" className=" font-bold underline">
              ที่นี่
            </a>{" "}
          </AlertDescription>
        </Alert>
        <Card>
          <CardHeader className="border-none mt-5">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              สมัครเป็น Candidate กลุ่มที่ 1
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RegisterGroup1 />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlankPage;