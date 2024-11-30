"use client";
import { useSession } from "next-auth/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PostsList from "@/components/dashboard/PostsList";
const page = () => {
  const { data: session, status } = useSession();

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
      <div>
        <h2
        className="font-bold text-2xl my-8 block text-2xl font-serif px-2 "
        >Articles</h2>
        <PostsList />
      </div>
    </section>
  );
};

export default page;
