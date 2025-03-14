"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import EvaluateGroup1 from "./evaluate-group1";
import Link from "next/link";

const BlankPage = () => {
  return (
    <div>
        <Alert className="border-none" dismissible>
          <AlertCircle className="h-6 w-6" />
          <AlertDescription>โปรดทราบว่าเมื่อประเมินเสร็จสิ้นแล้ว คุณจะไม่สามารถกลับมาแก้ไขการประเมินได้
          </AlertDescription>
        </Alert>
        <Card>
          <CardHeader className="border-none mt-5">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              การประเมินตนเองของ นายนวภัทร์ ธรรมชอบ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EvaluateGroup1 />
          </CardContent>
        </Card>
    </div>
  );
};

export default BlankPage;