"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import PostsList from "@/components/dashboard/PostsList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const page = () => {
  const { data: session, status } = useSession();
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    setShowList(true);
  }, []);
  return (
    <section className="w-full grow py-24  overflow-scroll p-4 ">
      <h2 className="font-bolder font-serif text-2xl pl-4 my-8 underline-offset-4 underline ">
        Profile Infos{" "}
      </h2>

      <Table className=" p-4 border border-neutral-200 rounded-md  ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User</TableHead>
            <TableHead>email</TableHead>
            <TableHead>Roll</TableHead>
            <TableHead className="text-right">articles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              {session?.user?.userName}
            </TableCell>
            <TableCell>{session?.user?.email}</TableCell>
            <TableCell>author </TableCell>
            <TableCell className="text-right">{}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  
    </section>
  );
};

export default page;
