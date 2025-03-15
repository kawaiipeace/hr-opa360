"use client";
import React from "react";
import { SetStateAction, useState } from 'react';
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
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
import Editor from '@/components/editor';
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

  const steps = ["ส่วนที่ 1", "ส่วนที่ 2", "ส่วนที่ 3"];

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
                                3.1 ระดับ Delegation (การมอบหมายงาน)
                              </p>
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                3.1.1 การเลือกผู้รับมอบหมายที่เหมาะสมวิเคราะห์ความสามารถของสมาชิกในและนอกทีมได้แม่นยำ และเลือกผู้รับมอบหมายให้ตรงกับความเชี่ยวชาญและศักยภาพของบุคคล
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                3.1.2 การกระจายงาน และความชัดเจนในการมอบหมายงานกระจายงานอย่างสมดุลทั้งในด้านปริมาณและความยากง่าย กำหนดขอบเขตความรับผิดชอบและเวลาที่ต้องส่งมอบอย่างเหมาะสม พร้อมอธิบายรายละเอียดงาน วัตถุประสงค์ และเป้าหมายให้ชัดเจน
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="col-span-12 lg:col-span-12">
                              <p className="mt-1 text-lg text-default-700 font-bold">
                                3.2 การจัดลำดับความสำคัญ (Prioritization)
                              </p>
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                3.2.1 การวิเคราะห์และจัดลำดับความสำคัญของงานอย่างเหมาะสม
                                ระบุและวิเคราะห์งานที่สำคัญและเร่งด่วน เพื่อจัดลำดับความสำคัญได้เหมาะสม ประเมินและเลือกงานโดยพิจารณาความเชื่อมโยงระหว่างเป้าหมายระยะสั้นและระยะยาวขององค์กร
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                3.2.2 การวางแผนและจัดสรรทรัพยากรอย่างมีประสิทธิภาพ
                                จัดสรรเวลา บุคลากร และทรัพยากรอื่น ๆ อย่างเหมาะสมและคุ้มค่า ตามลำดับความสำคัญของงาน สร้างแผนงานที่ยืดหยุ่นและสามารถปรับเปลี่ยนได้ตามสถานการณ์
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                3.2.3 การสร้างความร่วมมือและเชื่อมโยงเครือข่ายในการทำงาน
                                สร้างความสัมพันธ์ที่ดีในการทำงานร่วมกัน สนับสนุนการสื่อสารและแลกเปลี่ยนข้อมูลทั้งภายในและภายนอกทีม เพื่อความสำเร็จของงาน
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                3.2.4 การติดตามผลและปรับปรุงแผนงาน
                                ติดตามความคืบหน้าของงานอย่างสม่ำเสมอ ระบุปัญหาหรือความเสี่ยงที่อาจเกิดขึ้น และปรับปรุงแผนงานให้เหมาะสมกับสถานการณ์ที่เปลี่ยนแปลง สื่อสารและประสานงานเพื่อการปรับแผนงานให้ตอบสนองต่อความเปลี่ยนแปลงในบริบทของงาน
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
                      <AccordionItem value="item-4" className="dark:bg-slate-700">
                        <AccordionTrigger>
                          <div className="flex flex-col text-start text-xl">
                            <div>4. พฤติกรรมสร้างนวัตกรรมในการทำงาน (Innovative Work Behavior)</div>
                            <div className="text-xs mt-1 mb-2">
                              ถ่ายทอดและผลักดันให้มีการนำความคิดใหม่ ๆ มาใช้ในหน่วยงานของตนเอง และ เสนอแนะแนวคิดให้กับหน่วยงานที่เกี่ยวข้องเพื่อให้สอดคล้องกับกลยุทธ์ขององค์กร
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-12 gap-4">
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                4.1 การถ่ายทอดและผลักดันแนวคิดใหม่
                                ถ่ายทอดแนวคิดใหม่ ๆ ให้ทีมงานหรือหน่วยงานอย่างชัดเจน และผลักดันให้แนวคิดนั้นถูกนำไปประยุกต์ใช้ในงานประจำ พร้อมเชื่อมโยงกับกลยุทธ์ขององค์กร
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                4.2 การวิเคราะห์และเชื่อมโยงเพื่อสร้างนวัตกรรม
                                ใช้ความรู้และข้อมูลในการวิเคราะห์เพื่อพัฒนากระบวนการใหม่ที่มีประโยชน์ เชื่อมโยงการดำเนินงานกับแนวคิดนวัตกรรมเพื่อเพิ่มประสิทธิภาพและผลลัพธ์
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                4.3 การสร้างบรรยากาศที่เอื้อต่อการแลกเปลี่ยนเรียนรู้
                                สนับสนุนบรรยากาศที่ส่งเสริมความร่วมมือและการแลกเปลี่ยนความคิดระหว่างบุคลากร และเปิดโอกาสให้ทุกคนมีส่วนร่วมในการนำเสนอและทดลองแนวคิดใหม่
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_X}
                                onChange={setRating_X}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                4.4 การกระตุ้นความคิดสร้างสรรค์และการกล้าทำ
                                กระตุ้นให้บุคลากรกล้าคิด กล้าทดลอง และสร้างสรรค์สิ่งใหม่ ๆ อย่างต่อเนื่อง พร้อมแสดงออกถึงการเป็นแบบอย่างในด้านการคิดเชิงนวัตกรรม
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
                  </div>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <div className="col-span-12">
                    <Accordion type="single" collapsible className="w-full space-y-3.5">
                      <AccordionItem value="item-5" className="dark:bg-slate-700">
                        <AccordionTrigger>
                          <div className="flex flex-col text-start text-xl">
                            <div>5. การสร้างสรรค์ผลงาน</div>
                            <div className="text-xs mt-1 mb-2">
                              แสดงถึงความสามารถในการสร้างสรรค์ผลงานที่มีคุณค่า โดยใช้ทักษะด้านการจัดการความรู้ (KM) หรือการนำนวัตกรรม (Innovation)    ที่เป็นกระบวนการ มาประยุกต์ใช้ในการทำงาน ผลงานดังกล่าวต้องมีความโดดเด่น มีที่มาที่ไปชัดเจน และสะท้อนถึงความสำคัญของงาน      ต่อองค์กร รวมถึงแสดงให้เห็นถึงการใช้ความคิดสร้างสรรค์ ทักษะเฉพาะตัว และการบริหารทีมงานอย่างมีประสิทธิภาพในการขับเคลื่อนงานให้สำเร็จตามความคาดหมายในระดับสายงานหรือองค์กร
                              นอกจากนี้ ผลงานจะต้องสามารถเชื่อมโยงไปสู่ผลลัพธ์ที่สอดคล้องกับยุทธศาสตร์ขององค์กร เป็นการดำเนินงานตามนโยบายของ   ผู้ว่าการ และส่งผลเชิงบวกต่อเป้าหมายขององค์กรในระยะยาวอย่างเป็นรูปธรรม
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-12 gap-4 dark:bg-green-700">
                            <div className="col-span-12 lg:col-span-12 dark:bg-slate-700">
                              <Editor />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-6" className="dark:bg-slate-700">
                        <AccordionTrigger>
                          <div className="flex flex-col text-start text-xl">
                            <div>6. ความทุ่มเทเสียสละการทำงานอย่างเต็มกำลัง (Engagement) ตามค่านิยม TRUSTED</div>
                            <div className="text-xs mt-1 mb-2">
                              การสร้างผลงานที่เป็นความคิดสร้างสรรค์สนับสนุนและส่งเสริมธุรกิจหลักและธุรกิจเกี่ยวเนื่องของ กฟภ. โดยมีคุณค่าเกิดจากกระบวนการทำงานที่สอดคล้องกับค่านิยม TRUSTED ได้แก่ Technology Savvy, Rush to Service, Under good Governance, Specialist, Teamwork, Engagement, และ Data Driven อย่างมีประสิทธิภาพและเกิดผลลัพธ์เชิงบวกที่ชัดเจน
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-12 gap-4 dark:bg-green-700">
                            <div className="col-span-12 lg:col-span-12 dark:bg-slate-700">
                              <Editor />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <div className="col-span-12">
                    <Accordion type="single" collapsible className="w-full space-y-3.5">
                      <AccordionItem value="item-7" className="dark:bg-slate-700">
                        <AccordionTrigger>
                          <div className="flex flex-col text-start text-xl">
                            <div>7. การส่งเสริมคนทำดี มีคุณธรรม</div>
                            <div className="text-xs mt-1 mb-2">
                              การส่งเสริมคนทำดี มีคุณธรรม
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-12 gap-4">
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                1. เป็นบุคคลที่ดำรงตนอย่างพอประมาณ ไม่โลภ ไม่เบียดเบียนผู้อื่น และ สังคม มีเหตุผล ใช้ความรู้อย่างรอบคอบและรอบด้าน
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_1_1_1}
                                onChange={setRating_1_1_1}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700 font-medium">
                                2. เป็นบุคคลที่ปฏิบัติตนตามกติกาจรรยาบรรณ วิชาชีพขององค์กรและสังคม เคารพกฎหมาย
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_1_1_2}
                                onChange={setRating_1_1_2}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                                3. เป็นบุคคลที่มีความซื่อสัตย์ ซื่อตรง ยึดมั่น ยืนหยัดในการรักษาความจริง ความถูกต้องและเป็นธรรม ไม่สนับสนุน ไม่ร่วมมือ ไม่ยินยอมพร้อมต่อต้านการทุจริตทุกรูปแบบ
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_1_1_3}
                                onChange={setRating_1_1_3}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                              4. เป็นบุคคลที่ให้และเสียสละประโยชน์ส่วนตนเพื่อประโยชน์ส่วนรวมเป็นสำคัญ มีจิตสาธารณะ
                              </p>
                              <Rating
                                className="gap-x-1.5 max-w-[225px]"
                                value={rating_1_1_3}
                                onChange={setRating_1_1_3}
                              />
                            </div>
                            <div className="mb-3 col-span-12 lg:col-span-12">
                              <p className="mb-1 text-base text-default-700  font-medium">
                              5. เป็นบุคคลที่สำนึกรู้คุณและแสดงออกถึงความจงรักภักดีต่อ ชาติ ศาสนา พระมหากษัตริย์ องค์กร และ กตัญญูต่อผู้มีพระคุณ
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
                    </Accordion>
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
                  ส่งแบบประเมิน
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
