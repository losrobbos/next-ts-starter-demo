import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: "Blog post updated!", data });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  return NextResponse.json({ message: "Blog post deleted: " + id });
}
