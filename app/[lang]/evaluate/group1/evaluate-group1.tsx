"use client";
import React from "react";
import { SetStateAction, useState } from 'react';
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from '@iconify/react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Rating } from "@/components/ui/rating";
import { faker } from "@faker-js/faker";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const BasicWizard = () => {
  const [rating_1_1_1, setRating_1_1_1] = useState<number>(0);
  const [rating_1_1_2, setRating_1_1_2] = useState<number>(0);
  const [rating_1_1_3, setRating_1_1_3] = useState<number>(0);
  const [rating_X, setRating_X] = useState<number>(0);    // For TEMP_DEMO ONLY

  const [inputValue, setInputValue] = useState('');
  // Function to handle the input change
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
    // Here you can call an API or use a lookup function to fetch employee data
    // based on the input value. For now, we'll mock the employee data.
    mockEmployeeData(event.target.value);
  };
  const clearInput = () => {
    setInputValue('');
  };
  const [employeeData, setEmployeeData] = useState({
    prefix: '',
    firstName: '',
    lastName: '',
    employeeId: '',
    position: '',
    departmentShort: '',
    departmentFull: '',
    workPhone: '',
    mobilePhone: '',
    email: '',
    lineId: '',
  });
  const shouldShowSummary = inputValue && employeeData.firstName !== '';

  // Mock function to simulate fetching employee data based on input value
  const mockEmployeeData = (input: React.SetStateAction<string>) => {
    if (input === '123') {
      setEmployeeData({
        prefix: 'Mr.',
        firstName: 'John',
        lastName: 'Doe',
        employeeId: '123',
        position: 'Engineer',
        departmentShort: 'ENG',
        departmentFull: 'Engineering Department',
        workPhone: '02-123-4567',
        mobilePhone: '089-123-4567',
        email: 'john.doe@company.com',
        lineId: 'john.doe.line',
      });
    } else if (input === '456') {
      setEmployeeData({
        prefix: 'Ms.',
        firstName: 'Jane',
        lastName: 'Smith',
        employeeId: '456',
        position: 'Manager',
        departmentShort: 'HR',
        departmentFull: 'Human Resources',
        workPhone: '02-765-4321',
        mobilePhone: '089-765-4321',
        email: 'jane.smith@company.com',
        lineId: 'jane.smith.line',
      });
    } else {
      setEmployeeData({
        prefix: '',
        firstName: '',
        lastName: '',
        employeeId: '',
        position: '',
        departmentShort: '',
        departmentFull: '',
        workPhone: '',
        mobilePhone: '',
        email: '',
        lineId: '',
      });
    }
  };

  const [selected, setSelected] = useState("cr_1");
  const handleValueChange = (value: React.SetStateAction<string>) => {
    setSelected(value)
  }

  const [activeStep, setActiveStep] = React.useState<number>(0);

  const steps = ["ส่วนที่ 1", "ส่วนที่ 2", "ส่วนที่ 3", "ยืนยันการสมัคร"];

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = () => {
    toast({
      title: "You submitted the following values:",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 top-0 right-0">
          <p className="text-primary-foreground">Done</p>
        </div>
      ),
    });
  };
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="mt-4">
      <Stepper current={activeStep} direction={isTablet ? "vertical" : "horizontal"}>
        {steps.map((label, index) => {
          const stepProps: any = {};
          const labelProps: any = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <StepLabel>Optional</StepLabel>
            );
          }
          return (
            <Step key={faker.string.uuid()} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <div className="mt-2 mb-2 font-semibold text-center">
            All steps completed - you&apos;re finished
          </div>
          <div className="flex pt-2">
            <div className=" flex-1" />
            <Button
              size="xs"
              variant="outline"
              color="destructive"
              className="cursor-pointer"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <form>
            <div className="grid grid-cols-12 gap-4 mb-4 mt-9">
              {activeStep === 0 && (
                <>
                  <div className="col-span-12">
                    <Accordion type="single" collapsible className="w-full space-y-3.5">
                      <AccordionItem value="item-1" className="dark:bg-slate-700">
                        <AccordionTrigger>
                          <div className="flex flex-col text-start text-xl">
                            <div>1. Strategic Vision วิสัยทัศน์และกลยุทธ์ระดับ Strategic Leadership (ภาวะผู้นำเชิงกลยุทธ์)</div>
                            <div className="text-xs mt-1 mb-2">
                              ความสามารถในการมองภาพรวมที่เชื่อมโยงกันของทั้งองค์กร และสามารถชี้นำ เสนอแนะวิธีการขับเคลื่อนเชิงกลยุทธ์ในทุกภาคส่วนขององค์กรตลอดจนปรับตัวให้เข้ากับสภาพแวดล้อมสามารถเปลี่ยนแปลงได้ตลอดเวลา เพื่อนำองค์กรให้บรรลุเป้าหมายภายใต้ข้อจำกัดต่างๆ ในการปฏิบัติงาน
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-12 gap-4">
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                1.1 การกำหนดเป้าหมายเชิงกลยุทธ์ เป้าหมายเชิงกลยุทธ์ต้องมองภาพรวมขององค์กร เชื่อมโยงทุกภาคส่วน สอดคล้องกับยุทธศาสตร์และวิสัยทัศน์ ระบุเป้าหมายระยะยาวที่ชัดเจน ตัดสินใจโดยคำนึงถึงผลลัพธ์ระยะยาว และวิเคราะห์แนวโน้มเพื่อเตรียมพร้อมรับการเปลี่ยนแปลง
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_1_1_1}
                                onChange={setRating_1_1_1}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                1.2 ความสามารถในการปรับตัวให้เข้ากับสภาพแวดล้อมที่เปลี่ยนแปลงปรับตัวโดยวิเคราะห์แนวโน้มและคาดการณ์อนาคตอย่างแม่นยำ ใช้ข้อมูลรอบด้าน พิจารณาข้อจำกัดทั้งด้านบริหารและเทคนิค เพื่อหาแนวทางที่เหมาะสม รวมถึงจัดลำดับความสำคัญและบริหารความเสี่ยงอย่างมีประสิทธิภาพ
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_1_1_2}
                                onChange={setRating_1_1_2}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                1.3 ความสามารถในการปรับตัวต่อข้อจำกัดในการปฏิบัติงาน จัดลำดับความสำคัญและตัดสินใจอย่างสมเหตุสมผล บริหารความเสี่ยงอย่างครอบคลุม เพื่อลดความล่าช้าและป้องกันความเสี่ยงเพิ่มเติม เพื่อให้บรรลุเป้าหมายขององค์กร
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_1_1_3}
                                onChange={setRating_1_1_3}
                              />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="dark:bg-slate-700">
                        <AccordionTrigger>
                          <div className="flex flex-col text-start text-xl">
                            <div>2. Communication การสื่อสาร</div>
                            <div className="text-xs mt-1 mb-2">
                              การใช้วิธีและเทคนิคในการสอนงานที่ทำให้เข้าใจง่ายและตรงประเด็น สามารถถ่ายทอดเรื่องที่ซับซ้อนได้อย่างเข้าใจง่าย พร้อมทั้งให้คำปรึกษา ข้อเสนอแนะที่ตรงประเด็น และสามารถนำไปใช้ในการแก้ไขปัญหาได้อย่างตรงจุด โดยมีแผนงานและเป้าหมายที่มีความชัดเจนและเป็นรูปธรรม เพื่อนำไปสู่แนวทางปฏิบัติ และ/หรือแก้ไขปัญหาเหตุการณ์ที่เกิดขึ้นจริงในการทำงาน
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 lg:col-span-12">
                              <p className="mt-1 text-lg text-default-700 font-bold">
                                2.1 ระดับ Communication Skill (ทักษะการสื่อสาร)</p>
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                2.1.1 ความชัดเจนและตรงประเด็นในการสื่อสารสามารถถ่ายทอดข้อมูลได้ชัดเจน เข้าใจง่าย เน้นสาระสำคัญและจุดเด่น พร้อมใช้เทคนิคที่ช่วยให้เรื่องซับซ้อนเข้าใจง่าย
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                2.1.2 การให้คำปรึกษาที่นำไปใช้แก้ปัญหาได้จริงให้คำปรึกษาตรงประเด็น พร้อมแนวทางที่ปฏิบัติได้จริงและแก้ปัญหาได้อย่างตรงจุด</p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                2.1.3 การวางแผนงานและเป้าหมายในการสื่อสารกำหนดแผนและเป้าหมายการสื่อสารที่ชัดเจน และดำเนินการตามแผนอย่างมีประสิทธิภาพ
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                2.1.4 ความสามารถในการถ่ายทอดความรู้และการนำไปปฏิบัติถ่ายทอดความรู้ที่เป็นประโยชน์ต่อการทำงาน และสนับสนุนให้ผู้รับสารนำไปปรับใช้ได้จริง
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="col-span-12 lg:col-span-12">
                              <p className="mt-1 text-lg text-default-700 font-bold">
                                2.2 ระดับ Advising Skill (ทักษะการให้คำแนะนำ)</p>
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                2.2.1 การให้คำแนะนำเชิงหลักการอธิบายแนวคิดและหลักการที่เกี่ยวข้องได้ชัดเจน พร้อมให้ข้อเสนอแนะที่ตรงประเด็นและสอดคล้องกับนโยบายขององค์กร
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                2.2.2 การแก้ปัญหาเชิงสถานการณ์
                                วิเคราะห์ปัญหาอย่างรอบคอบและเสนอวิธีแก้ไขที่เป็นไปได้จริง พร้อมมองเห็นทางเลือกหลากหลายในการแก้ไขปัญหา
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                2.2.3 การสื่อสาร การสร้างความเข้าใจ และการทำงานเป็นทีม
                                ใช้ภาษาที่เข้าใจง่ายและใช้ข้อมูลในการสนับสนุนการสื่อสารสร้างความเข้าใจและแลกเปลี่ยนความคิดเห็น สร้างบรรยากาศที่เปิดรับฟังความคิดเห็น และส่งเสริมความไว้วางใจในทีม
                                ร่วมกำหนดเป้าหมายและแนวทางการทำงานที่ชัดเจน เพื่อสร้างความเข้าใจที่ตรงกันและสนับสนุนการทำงานร่วมกัน
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                2.2.4 การติดตามผลและปรับปรุงคำแนะนำ
                                ติดตามผลคำแนะนำและรับผิดชอบต่อผลลัพธ์ที่เกิดขึ้น เปิดรับฟังข้อเสนอแนะจากผู้ขอคำแนะนำเพื่อนำมาปรับปรุงและพัฒนาการให้คำปรึกษา
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="dark:bg-slate-700">
                        <AccordionTrigger>
                          <div className="flex flex-col text-start text-xl">
                            <div>3. Planning and Organizing การวางแผนและการจัดการ</div>
                            <div className="text-xs mt-1 mb-2">
                              การใช้วิธีและเทคนิคในการสอนงานที่ทำให้เข้าใจง่ายและตรงประเด็น สามารถถ่ายทอดเรื่องที่ซับซ้อนได้อย่างเข้าใจง่าย พร้อมทั้งให้คำปรึกษา ข้อเสนอแนะที่ตรงประเด็น และสามารถนำไปใช้ในการแก้ไขปัญหาได้อย่างตรงจุด โดยมีแผนงานและเป้าหมายที่มีความชัดเจนและเป็นรูปธรรม เพื่อนำไปสู่แนวทางปฏิบัติ และ/หรือแก้ไขปัญหาเหตุการณ์ที่เกิดขึ้นจริงในการทำงาน
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 lg:col-span-12">
                              <p className="mt-1 text-lg text-default-700 font-bold">
                                2.1 ระดับ Communication Skill (ทักษะการสื่อสาร)</p>
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                2.1.1 ความชัดเจนและตรงประเด็นในการสื่อสารสามารถถ่ายทอดข้อมูลได้ชัดเจน เข้าใจง่าย เน้นสาระสำคัญและจุดเด่น พร้อมใช้เทคนิคที่ช่วยให้เรื่องซับซ้อนเข้าใจง่าย
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                2.1.2 การให้คำปรึกษาที่นำไปใช้แก้ปัญหาได้จริงให้คำปรึกษาตรงประเด็น พร้อมแนวทางที่ปฏิบัติได้จริงและแก้ปัญหาได้อย่างตรงจุด</p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                2.1.3 การวางแผนงานและเป้าหมายในการสื่อสารกำหนดแผนและเป้าหมายการสื่อสารที่ชัดเจน และดำเนินการตามแผนอย่างมีประสิทธิภาพ
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                2.1.4 ความสามารถในการถ่ายทอดความรู้และการนำไปปฏิบัติถ่ายทอดความรู้ที่เป็นประโยชน์ต่อการทำงาน และสนับสนุนให้ผู้รับสารนำไปปรับใช้ได้จริง
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="col-span-12 lg:col-span-12">
                              <p className="mt-1 text-lg text-default-700 font-bold">
                                2.2 ระดับ Advising Skill (ทักษะการให้คำแนะนำ)</p>
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                2.2.1 การให้คำแนะนำเชิงหลักการอธิบายแนวคิดและหลักการที่เกี่ยวข้องได้ชัดเจน พร้อมให้ข้อเสนอแนะที่ตรงประเด็นและสอดคล้องกับนโยบายขององค์กร
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                2.2.2 การแก้ปัญหาเชิงสถานการณ์
                                วิเคราะห์ปัญหาอย่างรอบคอบและเสนอวิธีแก้ไขที่เป็นไปได้จริง พร้อมมองเห็นทางเลือกหลากหลายในการแก้ไขปัญหา
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                2.2.3 การสื่อสาร การสร้างความเข้าใจ และการทำงานเป็นทีม
                                ใช้ภาษาที่เข้าใจง่ายและใช้ข้อมูลในการสนับสนุนการสื่อสารสร้างความเข้าใจและแลกเปลี่ยนความคิดเห็น สร้างบรรยากาศที่เปิดรับฟังความคิดเห็น และส่งเสริมความไว้วางใจในทีม
                                ร่วมกำหนดเป้าหมายและแนวทางการทำงานที่ชัดเจน เพื่อสร้างความเข้าใจที่ตรงกันและสนับสนุนการทำงานร่วมกัน
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                2.2.4 การติดตามผลและปรับปรุงคำแนะนำ
                                ติดตามผลคำแนะนำและรับผิดชอบต่อผลลัพธ์ที่เกิดขึ้น เปิดรับฟังข้อเสนอแนะจากผู้ขอคำแนะนำเพื่อนำมาปรับปรุงและพัฒนาการให้คำปรึกษา
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="flex flex-wrap gap-4 mb-7 items-center justify-between">
                      <div className="text-xl font-medium text-default-800"></div>
                    </div>

                  </div>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <div className="col-span-12 lg:col-span-6">
                    <Label className="mb-3" htmlFor="inputId">วันที่ได้รับการบรรจุ</Label>
                    <Input type="text" id="inputId" readOnly />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Label className="mb-3" htmlFor="inputId">อายุงาน (ปี) </Label>
                    <Input type="text" id="inputId" readOnly />
                  </div>
                  <div className="col-span-12 lg:col-span-12">
                    <p className="text-md text-white-600 dark:text-white-600 mt-3">
                      ประวัติทางวินัย
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-12">
                    <RadioGroup
                      defaultValue="cr_1"
                      onValueChange={handleValueChange}
                    >
                      <Label
                        className={cn("flex justify-between items-center w-full border border-default-400 p-4 rounded-md",
                          {
                            "border-primary": selected === "cr_1"
                          }
                        )} htmlFor="cr_1"
                      >
                        <div>
                          <h4 className="font-medium text-default-800 mb-1">ไม่เคยถูกลงโทษ ทั้งทางวินัยหรืออาญา (รับรอง)</h4>
                          <span className="text-sm text-default-600">(ยกเว้นพ้นระยะเวลาการถูกลงโทษมาแล้วเกิน 5 ปี นับถึงวันประกาศโครงการฯ)</span>
                        </div>
                        <RadioGroupItem value="cr_1" id="cr_1" color="primary"></RadioGroupItem>
                      </Label>
                      <Label
                        className={cn("flex  justify-between items-center w-full border border-default-400 p-4 rounded-md",
                          {
                            "border-destructive": selected === "cr_2"
                          }
                        )}
                        htmlFor="cr_2">
                        <div>
                          <h4 className="font-medium text-default-800 mb-1">เคยถูกลงโทษ ทั้งทางวินัยหรืออาญา (ไม่รับรอง)</h4>
                          <span className="text-sm text-default-600">(พ้นระยะเวลาถูกลงโทษไม่ถึง 5 ปี นับถึงวันประกาศโครงการฯ)</span>
                        </div>
                        <RadioGroupItem value="cr_2" id="cr_2" color="destructive"></RadioGroupItem>
                      </Label>
                    </RadioGroup>
                  </div>
                  <div className="col-span-12 lg:col-span-12">
                    <Label className="mb-3" htmlFor="inputId">อัปโหลดไฟล์ </Label>
                    <Input type="file" variant="flat" />
                  </div>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <div className="col-span-12 lg:col-span-12">
                    <p className="text-md text-white-600 dark:text-white-600 mt-3">
                      แนะนำบุคคลเป็นผู้ประเมิน
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-12 mb-2">
                    <div className="relative">
                      <span className="text-2xl text-default-400 absolute top-1/2 -translate-y-1/2 right-4 z-10" onClick={clearInput}><Icon icon="system-uicons:close" /></span>
                      <Input type="text" id="referal_1" size="lg" placeholder="รหัสหรือชื่อพนักงาน บุคคลที่ 1" />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-12 mb-2">
                    <div className="relative">
                      <span className="text-2xl text-default-400 absolute top-1/2 -translate-y-1/2 right-4 z-10" onClick={clearInput}><Icon icon="system-uicons:close" /></span>
                      <Input type="text" id="referal_2" size="lg" placeholder="รหัสหรือชื่อพนักงาน บุคคลที่ 2" />
                    </div>
                  </div>
                </>
              )}
              {activeStep === 3 && (
                <>
                  <div className="col-span-12 mt-3 mb-4">
                    <h1 className="text-lg font-medium text-default-900">
                      คำรับรอง
                    </h1>
                    <h2 className="text-md text-default-800 mt-1">
                      ข้าพเจ้าขอรับรองว่า ข้อมูลตามใบสมัครถูกต้องตามความเป็นจริงทุกประการ และยินยอมให้ กอล. หรือหน่วยงานที่เกี่ยวข้อง ดำเนินการจัดเก็บ รวบรวม เก็บรักษา ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล เพื่อใช้สำหรับโครงการคัดเลือกพนักงานและลูกจ้างดีเด่น       ประจำปี 2568 และให้เป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 เพื่อเป็นหลักฐานแสดงความยินยอมตามหนังสือ    ฉบับนี้ ข้าพเจ้าจึงได้ลงลายมือชื่อไว้เป็นสำคัญ
                    </h2>
                  </div>
                </>
              )}
            </div>
          </form>

          <div className="flex pt-2 ">
            <Button
              size="xs"
              variant="outline"
              color="secondary"
              className={cn("cursor-pointer", {
                hidden: activeStep === 0,
              })}
              onClick={handleBack}
            >
              ย้อนกลับ
            </Button>
            <div className="flex-1	gap-4 " />
            <div className="flex	gap-2 ">
              {activeStep === steps.length - 1 ? (
                <Button
                  size="xs"
                  variant="outline"
                  color="success"
                  className="cursor-pointer"
                  onClick={() => {
                    if (onSubmit) onSubmit();
                    handleNext();
                  }}
                >
                  ยืนยันการสมัคร
                </Button>
              ) : (
                <Button
                  size="xs"
                  variant="outline"
                  color="secondary"
                  className="cursor-pointer"
                  onClick={handleNext}
                >
                  ถัดไป
                </Button>
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default BasicWizard;
