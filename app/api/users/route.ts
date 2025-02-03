import { NextRequest, NextResponse } from "next/server";
import { UserService } from "@/services/user.service";

export async function GET() {
  try {
    const users = await UserService.getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();
    const newUser = await UserService.createUser(userData);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}
