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
import avatar1 from "@/public/images/avatar/avatar-7.jpg";
const BlankPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="text-2xl font-medium text-default-800">
          รายการประเมินพนักงานดีเด่น ประจำปี 2568
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
              <div className="w-14 h-14 rounded-full p-[2px] bg-background overflow-hidden -mt-10 relative z-20 mb-2">
                <Image
                  src={avatar1}
                  className="w-full h-full object-cover rounded-full"
                  alt="profile image"
                />
              </div>
              <p className="mb-1 text-base text-default-700  font-medium">
                นวภัทร์ ธรรมชอบ
              </p>
              <p className="mb-2 text-xs text-muted-foreground">กลุ่มที่ 1</p>
              <ul className="list-disc text-muted-foreground text-sm line-clamp-4">
                <li>📌 ลักษณะการประเมิน: ประเมินตนเอง</li>
              </ul>
            </div>
            <div className="p-4 flex justify-end">
              <Link href="/evaluate/group1">
                <Button>ประเมินผล</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlankPage;