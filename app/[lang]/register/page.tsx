"use client"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import cg1 from "@/public/images/candidate_groups/cg_1.jpg";
import cg2 from "@/public/images/candidate_groups/cg_2.jpg";
import cg3 from "@/public/images/candidate_groups/cg_3.jpg";
import cg4 from "@/public/images/candidate_groups/cg_4.jpg";
import cg5 from "@/public/images/candidate_groups/cg_5.jpg";
import cg6 from "@/public/images/candidate_groups/cg_6.jpg";
import cg7 from "@/public/images/candidate_groups/cg_7.jpg";
import cg8 from "@/public/images/candidate_groups/cg_8.jpg";
import cg9 from "@/public/images/candidate_groups/cg_9.jpg";
const BlankPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="text-2xl font-medium text-default-800">
          สมัครเป็น Candidate พนักงานดีเด่น ประจำปี 2568
        </div>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
              <Image
                className="w-full h-full object-cover"
                src={cg1}
                alt="image"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-lg text-default-700  font-medium">
                กลุ่มที่ 1
              </p>
              <p className="text-muted-foreground text-sm">
                ผู้บริหารระดับกลาง (ชก., รก., อก. และ รฝ.) หรือ
                ผู้บริหารระดับกลางประจำการไฟฟ้า (ชจก., รจก., ผจก. กฟส. (9-11) และ ผจก. กฟจ.(11)
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <Link href="/register/group1">
                <Button>สม้ครเลย</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
              <Image
                className="w-full h-full object-cover"
                src={cg2}
                alt="image"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-lg text-default-700  font-medium">
                กลุ่มที่ 2
              </p>
              <p className="text-muted-foreground text-sm">
                ผู้บริหารระดับต้น (ชผ., หผ.), หส. Team-Based หรือ
                ผู้บริหารระดับต้นประจำสำนักงานการไฟฟ้า (ผจก.กฟส.(8))
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <Button>สม้ครเลย</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
              <Image
                className="w-full h-full object-cover"
                src={cg3}
                alt="image"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-lg text-default-700  font-medium">
                กลุ่มที่ 3
              </p>
              <p className="text-muted-foreground text-sm">
                ผู้เชี่ยวชาญ <br />(นักวิชาการระดับ 8-11 หรือ ผู้ชำนาญการระดับ 8-9)
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <Button>สม้ครเลย</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
              <Image
                className="w-full h-full object-cover"
                src={cg4}
                alt="image"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-lg text-default-700  font-medium">
                กลุ่มที่ 4
              </p>
              <p className="text-muted-foreground text-sm">
                นักวิชาการ (นักวิชาการ ระดับ 4 – 7 รวมตำแหน่งเลขานุการ)
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <Button>สม้ครเลย</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
              <Image
                className="w-full h-full object-cover"
                src={cg5}
                alt="image"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-lg text-default-700  font-medium">
                กลุ่มที่ 5
              </p>
              <p className="text-muted-foreground text-sm">
                พนักงานวิชาชีพ (พนักงานวิชาชีพระดับ 2 – 7)
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <Button>สม้ครเลย</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
              <Image
                className="w-full h-full object-cover"
                src={cg6}
                alt="image"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-lg text-default-700  font-medium">
                กลุ่มที่ 6
              </p>
              <p className="text-muted-foreground text-sm">
                ลูกจ้างช่าง (ผู้ช่วยช่าง)
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <Button>สม้ครเลย</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
              <Image
                className="w-full h-full object-cover"
                src={cg7}
                alt="image"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-lg text-default-700  font-medium">
                กลุ่มที่ 7
              </p>
              <p className="text-muted-foreground text-sm">
                ลูกจ้างอื่นๆ (ผู้ช่วยบัญชี, ผู้ช่วยพัสดุ, ผู้ช่วยบันทึกข้อมูลคอมพิวเตอร์,
                ลูกจ้างแม่บ้าน และ ลูกจ้างขับรถยนต์)
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <Button>สม้ครเลย</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
              <Image
                className="w-full h-full object-cover"
                src={cg8}
                alt="image"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-lg text-default-700  font-medium">
                กลุ่มที่ 8
              </p>
              <p className="text-muted-foreground text-sm">
                ลูกจ้าง (ประสบการณ์) ที่มีอายุตั้งแต่ 45 -55 ปี
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <Button>สม้ครเลย</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[191px] bg-muted-foreground overflow-hidden rounded-t-md">
              <Image
                className="w-full h-full object-cover"
                src={cg9}
                alt="image"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-lg text-default-700  font-medium">
                กลุ่มที่ 9
              </p>
              <p className="text-muted-foreground text-sm">
                ผู้ที่สร้างชื่อเสียงให้องค์กร
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <Button>สม้ครเลย</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlankPage;