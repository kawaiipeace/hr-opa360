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
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { faker } from "@faker-js/faker";
const BasicWizard = () => {
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

  const steps = ["ข้อมูลทั่วไป", "คุณสมบัติเบื้องต้น", "แนะนำผู้ประเมิน", "ยืนยันการสมัคร"];

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
                  {/* Enter the text and the overall result will show */}
                  <div className="col-span-12 mb-5">
                    <div className="relative">
                      <span
                        className="text-2xl text-default-400 absolute top-1/2 -translate-y-1/2 right-4 z-10"
                        onClick={clearInput}
                      >
                        <Icon icon="system-uicons:close" />
                      </span>
                      <Input
                        type="text"
                        id="candidate"
                        size="lg"
                        placeholder="รหัสหรือชื่อพนักงาน"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Hidden first and show after enter from above input */}
                  {shouldShowSummary && (
                    <div className="col-span-12">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-1">
                          <Label className="mb-3" htmlFor="prefix">คำนำหน้า</Label>
                          <Input type="text" id="prefix" value={employeeData.prefix} readOnly />
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                          <Label className="mb-3" htmlFor="firstName">ชื่อ </Label>
                          <Input type="text" id="firstName" value={employeeData.firstName} readOnly />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                          <Label className="mb-3" htmlFor="lastName">นามสกุล </Label>
                          <Input type="text" id="lastName" value={employeeData.lastName} readOnly />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                          <Label className="mb-3" htmlFor="employeeId">รหัสพนักงาน </Label>
                          <Input type="text" id="employeeId" value={employeeData.employeeId} readOnly />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                          <Label className="mb-3" htmlFor="position">ตำแหน่ง </Label>
                          <Input type="text" id="position" value={employeeData.position} readOnly />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                          <Label className="mb-3" htmlFor="departmentShort">สังกัดย่อ</Label>
                          <Input type="text" id="departmentShort" value={employeeData.departmentShort} readOnly />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                          <Label className="mb-3" htmlFor="departmentFull">สังกัดเต็ม </Label>
                          <Input type="text" id="departmentFull" value={employeeData.departmentFull} readOnly />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                          <Label className="mb-3" htmlFor="workPhone">โทรศัพท์ที่ทำงาน </Label>
                          <Input type="text" id="workPhone" value={employeeData.workPhone} />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                          <Label className="mb-3" htmlFor="mobilePhone">โทรศัพท์มือถือ </Label>
                          <Input type="text" id="mobilePhone" value={employeeData.mobilePhone} />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                          <Label className="mb-3" htmlFor="email">PEA E-mail </Label>
                          <Input type="text" id="email" value={employeeData.email} />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                          <Label className="mb-3" htmlFor="lineId">Line ID </Label>
                          <Input type="text" id="lineId" value={employeeData.lineId}/>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* end here */}
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
